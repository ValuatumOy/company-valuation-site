import { NextResponse } from "next/server";
import { getStripe, siteUrl } from "@/lib/stripe";
import { quote, eur, type ReportKind } from "@/lib/pricing";

interface CheckoutBody {
  kind: ReportKind;
  companyId?: string;
  companyName?: string;
  shareData?: boolean;
}

export async function POST(req: Request) {
  let body: CheckoutBody;
  try {
    body = (await req.json()) as CheckoutBody;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const kind: ReportKind = body.kind === "import" ? "import" : "existing";
  const shareData = Boolean(body.shareData);
  const companyName = body.companyName?.slice(0, 200) || "Selected company";
  const q = quote(kind, shareData);

  // Where the user lands after a successful payment.
  // - import  -> the import/upload step (gated behind payment)
  // - existing -> report generation/delivery
  const successPath =
    kind === "import"
      ? `/import/upload?session_id={CHECKOUT_SESSION_ID}`
      : `/checkout/success?session_id={CHECKOUT_SESSION_ID}`;

  const stripe = getStripe();

  // --- Demo mode: no Stripe key configured -----------------------------------
  if (!stripe) {
    const demoTarget =
      kind === "import" ? "/import/upload?demo=1" : "/checkout/success?demo=1";
    return NextResponse.json({ url: `${siteUrl()}${demoTarget}` });
  }

  // --- Real Stripe Checkout Session ------------------------------------------
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: q.total,
            product_data: {
              name:
                kind === "import"
                  ? `Import + AI valuation report — ${companyName}`
                  : `AI valuation report — ${companyName}`,
              description: shareData
                ? `Includes ${eur(q.discount)} data-sharing discount`
                : undefined,
            },
          },
        },
      ],
      metadata: {
        kind,
        companyId: body.companyId ?? "",
        companyName,
        shareData: String(shareData),
      },
      success_url: `${siteUrl()}${successPath}`,
      cancel_url: `${siteUrl()}/checkout/cancel`,
      automatic_tax: { enabled: false },
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("stripe checkout failed", err);
    return NextResponse.json(
      { error: "Could not start checkout. Please try again." },
      { status: 500 },
    );
  }
}
