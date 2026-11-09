import type { NextRequest } from "next/server";
import { laws } from "../../../data/laws";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const page = Number(searchParams.get("page")) || 1;
  const perPage = Number(searchParams.get("perPage")) || 10;

  const start = (page - 1) * perPage;
  const paged = laws.slice(start, start + perPage);

  return Response.json({
    total: laws.length,
    page,
    perPage,
    data: paged,
  });
}

