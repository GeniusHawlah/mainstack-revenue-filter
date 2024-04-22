export async function GET() {
  const res = await fetch(`${process.env.BASE_URL}transactions`, {
    next: { revalidate: 10000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const transactions = data.sort((a, b) => new Date(a.date) - new Date(b.date))
  // console.log(transactions); 

  return Response.json({ transactions });
}
  