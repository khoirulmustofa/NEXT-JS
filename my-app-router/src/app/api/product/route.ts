import { NextResponse, NextRequest } from "next/server";

const data = [
  {
    id: 1,
    name: "sepatu Mahal",
    harga: 9999999,
  },
  {
    id: 2,
    name: "Baju Bekas",
    harga: 555555,
  },
];
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailPoduct = data.find((item) => item.id === Number(id));
    if (detailPoduct) {
      return NextResponse.json({ status: 200, data: detailPoduct });
    }
    return NextResponse.json({ status: 404, data: {} });
  }

  return NextResponse.json({ status: 200, data: data });
}
