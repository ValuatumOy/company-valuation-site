import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "AI Valuation Reports for Private Companies | Valuatum",
    template: "%s | Valuatum AI Valuation Reports",
  },
  description:
    "Instant, analyst-grade valuation reports for private companies. Search any Finnish company, import five years of financial statements, or let us fetch the data — and buy a full AI valuation report from EUR 100.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "AI Valuation Reports for Private Companies",
    description:
      "Search any company. Buy an analyst-grade AI valuation report in minutes from EUR 100.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
