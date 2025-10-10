

export interface ReminderEmailData {
  to_email: string;
  user_name: string;
  repo_name: string;
  pr_title: string;
  pr_url: string;
  subject?: string;
  message?: string;
  [key: string]: string | undefined;
}

export async function sendReminderEmail(data: ReminderEmailData) {
 const service_id = process.env.EMAILJS_SERVICE_ID!;
  const template_id = process.env.EMAILJS_TEMPLATE_ID!;
  const public_key = process.env.EMAILJS_PUBLIC_KEY!;
  
   if (!service_id || !template_id || !public_key) {
    throw new Error("Missing EmailJS environment variables");
  }
  const body = {
    service_id,
    template_id,
    user_id:public_key,
    template_params: data,
  };

  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

   const text = await res.text();

  if (!res.ok) {    
    throw new Error(`EmailJS error: ${res.status} - ${text}`);
  }

   return { status: "success", response: text };
}
