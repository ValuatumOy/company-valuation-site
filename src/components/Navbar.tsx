import Image from "next/image";
import Link from "next/link";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/reports", label: "Reports" },
  { href: "/sample-report", label: "Sample" },
  { href: "/valuation-calculator", label: "Calculator" },
  { href: "/market-multiples", label: "Multiples" },
  { href: "/case-studies", label: "Cases" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/95 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center gap-8 px-[var(--page-x)]">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="Valuatum reports">
          <Image
            src="/images/logo.svg"
            alt=""
            width={36}
            height={36}
            className="h-9 w-9 rounded-md"
            priority
          />
          <span className="flex flex-col leading-none">
            <span className="text-base font-semibold tracking-wide text-white">Valuatum</span>
            <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-white/50">
              AI Valuation Reports
            </span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-normal tracking-wide text-white/70 transition hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-brand-300 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <Link
            href="/reports"
            className="hidden min-h-11 items-center rounded-full border border-white/20 px-4 text-sm font-medium text-white/80 transition hover:border-white/50 hover:text-white sm:inline-flex"
          >
            Browse reports
          </Link>
          <div className="hidden sm:block">
            <Link href="/#search" className="primary-button px-4 py-2 text-sm">
              Get a report
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
