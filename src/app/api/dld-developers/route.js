// app/api/dld-developers/route.js
import { NextResponse } from "next/server";

const DLD_URL =
  "https://www.dubaipulse.gov.ae/data/dld-registration/dld_developers-open";
// 👆 if the portal gives you a direct CSV/JSON download URL, put it here instead

export async function GET() {
  try {
    const res = await fetch(DLD_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch DLD developers data" },
        { status: 500 }
      );
    }

    const text = await res.text(); // assuming CSV for now

    // --- SUPER SIMPLE CSV ➜ JSON PARSER (good enough just for testing) ---
    const rows = text.split("\n").filter(Boolean);
    const [headerLine, ...dataLines] = rows;

    const headers = headerLine
      .split(",")
      .map((h) => h.replace(/^"|"$/g, "").trim());

    const records = dataLines.map((line) => {
      const values = line.split(","); // ⚠️ naive: doesn't handle commas inside values
      const obj = {};
      headers.forEach((h, i) => {
        obj[h] = values[i]?.replace(/^"|"$/g, "").trim();
      });
      return obj;
    });

    return NextResponse.json(records);
  } catch (err) {
    console.error("DLD ROUTE ERROR:", err);
    return NextResponse.json(
      { error: "Unexpected error fetching DLD data" },
      { status: 500 }
    );
  }
}
