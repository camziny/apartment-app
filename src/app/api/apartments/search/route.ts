import { NextResponse } from "next/server";
import { searchApartments } from "@/server/db/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json([], { status: 200 });
  }

  try {
    const apartments = await searchApartments(query);
    return NextResponse.json(apartments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch apartments" },
      { status: 500 }
    );
  }
}
