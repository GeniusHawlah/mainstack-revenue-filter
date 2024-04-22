export async function GET() {
  const res = await fetch("https://fe-task-api.mainstack.io/transactions", {
    next: { revalidate: 10000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const transactions = await res.json();
  console.log(transactions);

  return Response.json({ transactions });
}
