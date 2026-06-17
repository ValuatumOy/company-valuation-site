import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-muted">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-semibold">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink-900 text-sm font-bold text-white">
                V
              </span>
              <span>Valuatum Reports</span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-ink-700/70">
              Analyst-grade AI valuation reports for private companies. Built by
              Valuatum — equity analysis tooling since 2000.
            </p>
          </div>

          <FooterCol
            title="Product"
            links={[
              { href: "/reports", label: "Browse reports" },
              { href: "/pricing", label: "Pricing" },
              { href: "/methodology", label: "Methodology" },
              { href: "/import", label: "Import statements" },
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "/about", label: "About" },
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

        <div className="mt-12 border-t border-line pt-6 text-xs text-ink-700/60">
          <p>
            © {new Date().getFullYear()} Valuatum Oy. Reports are generated for
            informational purposes only and do not constitute investment advice.
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
      <h4 className="text-sm font-semibold text-ink-900">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-sm text-ink-700/70 transition hover:text-brand-600"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
