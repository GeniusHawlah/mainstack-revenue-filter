export async function GET() {
  const res = await fetch("https://fe-task-api.mainstack.io/wallet", {
    next: { revalidate: 10000 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const wallet = await res.json();



  return Response.json({ wallet });
}
