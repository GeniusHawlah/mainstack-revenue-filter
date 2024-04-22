export async function GET() {
  const res = await fetch(`${process.env.BASE_URL}user`, {
    next: { revalidate: 10000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const user = await res.json();



  return Response.json({ user });
}
