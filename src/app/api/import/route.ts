import { NextResponse } from "next/server";

// Receives the uploaded financial statements after a successful payment.
//
// Production wiring: forward the files + Stripe session to the existing
// import pipeline at valuation.valuatum.com (which already parses Finnish
// tilinpäätös PDFs), then kick off report generation. For now we validate
// the upload and acknowledge so the flow is end-to-end testable.
export async function POST(req: Request) {
  const form = await req.formData();
  const sessionId = form.get("sessionId");
  const files = form.getAll("statements").filter((f): f is File => f instanceof File);

  if (files.length === 0) {
    return NextResponse.json({ error: "No PDF statements provided" }, { status: 400 });
  }

  const accepted = files.map((f) => ({ name: f.name, size: f.size, type: f.type }));

  // TODO: forward to Valuatum import + generation pipeline; persist against the
  // Stripe session so the finished report can be emailed to the receipt address.
  console.log("import received", { sessionId, files: accepted });

  return NextResponse.json({
    ok: true,
    received: accepted.length,
    message: "Statements received; report generation queued.",
  });
}
