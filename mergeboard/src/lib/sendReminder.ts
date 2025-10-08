import emailjs from "emailjs-com";
export interface ReminderEmailData {
  to_name: string;
  to_email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

export async function sendReminderEmail(data: ReminderEmailData) {
  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      data,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
    console.log("Email sent:", result.text);
    return result;
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error;
  }
}