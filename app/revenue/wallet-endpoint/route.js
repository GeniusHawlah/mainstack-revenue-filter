export async function GET() {
  const res = await fetch(`${process.env.BASE_URL}wallet`, {
    next: { revalidate: 10000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const wallet = await res.json();



  return Response.json({ wallet });
}
