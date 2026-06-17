import { NextResponse } from "next/server";
import { searchCompanies } from "@/lib/companies";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? "";
  const limit = Number(searchParams.get("limit") ?? 8);

  if (q.trim().length < 2) {
    return NextResponse.json({ companies: [] });
  }

  try {
    const companies = await searchCompanies(q, limit);
    return NextResponse.json({ companies });
  } catch (err) {
    console.error("search failed", err);
    return NextResponse.json(
      { companies: [], error: "Search temporarily unavailable" },
      { status: 502 },
    );
  }
}
