import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  await resend.emails.send({
    from: "Atlantic Painting <onboarding@resend.dev>",
    to: ["atlanticpainting@email.com"],
    subject: "New Contact Form Message",
    replyTo: email,
    html: `
      <h2>New Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
