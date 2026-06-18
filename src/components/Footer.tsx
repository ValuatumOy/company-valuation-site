import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-ink-950 px-[var(--page-x)] py-12 text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3" aria-label="Valuatum reports">
              <Image src="/images/logo.svg" alt="" width={36} height={36} className="h-9 w-9 rounded-md" />
              <span className="flex flex-col leading-none">
                <span className="text-base font-semibold tracking-wide">Valuatum</span>
                <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/40">
                  AI Valuation Reports
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-sm font-light leading-7 text-white/50">
              Analyst-grade AI valuation reports for private companies. Built on
              structured financial data, transparent methodology and Valuatum expertise
              since 2000.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { href: "/reports", label: "Browse reports" },
              { href: "/sample-report", label: "Sample report" },
              { href: "/valuation-calculator", label: "Valuation calculator" },
              { href: "/market-multiples", label: "Market multiples" },
              { href: "/case-studies", label: "Case studies" },
              { href: "/pricing", label: "Pricing" },
              { href: "/import", label: "Import statements" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About Valuatum" },
              { href: "/faq", label: "FAQ" },
              { href: "https://company-valuation.com", label: "company-valuation.com" },
              { href: "https://valuatum.com", label: "Valuatum.com" },
            ]}
          />
          <FooterCol
            title="Legal"
            links={[
              { href: "/legal/terms", label: "Terms" },
              { href: "/legal/privacy", label: "Privacy" },
              { href: "/legal/disclaimer", label: "Disclaimer" },
            ]}
          />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs leading-6 text-white/30">
          <p>&copy; {new Date().getFullYear()} Valuatum Oy - Helsinki, Finland - Est. 2000</p>
          <p className="max-w-xl md:text-right">
            Reports are generated for informational purposes only. Not investment
            advice. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
        {title}
      </h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-white/50 transition hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
