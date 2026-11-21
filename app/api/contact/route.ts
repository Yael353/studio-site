export async function POST(request: Request) {
  const form = await request.json();

  const endpoint = process.env.FORMSPREE_ENDPOINT;

  if (!endpoint) {
    return Response.json(
      { error: "Formuläret är inte konfigurerat." },
      { status: 500 },
    );
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!response.ok) {
    return Response.json(
      { error: "Kunde inte skicka meddelandet." },
      { status: 502 },
    );
  }

  return Response.json({ success: true });
}
