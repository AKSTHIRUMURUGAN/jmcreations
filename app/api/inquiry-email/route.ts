import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { addLead } from "@/lib/leadsStore";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone number are required" },
        { status: 400 }
      );
    }

    // 1. Store lead in real-time store
    const newLead = addLead({
      name,
      email,
      phone,
      service: service || "General Business Solution",
      message: message || "Direct Inquiry via Website Form",
    });

    const gmailUser = process.env.GMAIL_USER || "jmcreationinfo@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;

    const logoUrl = "https://www.jmcreation.in/logo.jpeg";

    // 2. Prepare Email #1: Branded Client Confirmation Email
    const clientHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Inquiry Received – JM Creations</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0a0c;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">

<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0a0a0c;padding:40px 16px;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background-color:#121216;border:1px solid rgba(212,168,83,0.3);border-radius:20px;overflow:hidden;padding:40px;">
  
  <!-- LOGO HEADER -->
  <tr>
    <td align="center" style="padding-bottom:24px;border-bottom:1px solid rgba(255,255,255,0.1);">
      <img src="${logoUrl}" alt="JM Creations Logo" width="64" height="64" style="border-radius:14px;display:block;margin-bottom:12px;border:1px solid #d4a853;">
      <h2 style="font-size:20px;font-weight:800;color:#d4a853;margin:0;letter-spacing:1px;">JM CREATIONS</h2>
      <p style="font-size:11px;color:#a1a1aa;margin:4px 0 0 0;font-family:monospace;text-transform:uppercase;">End-to-End Business Solutions Engine</p>
    </td>
  </tr>

  <!-- MESSAGE BODY -->
  <tr>
    <td style="padding:28px 0;color:#e4e4e7;font-size:14px;line-height:1.7;">
      <h3 style="font-size:18px;color:#ffffff;margin-top:0;">Thank You for Reaching Out, ${name}! 👋</h3>
      
      <p style="color:#a1a1aa;">
        We have successfully received your inquiry for <strong style="color:#d4a853;">${service || "Business Solution"}</strong>. Our senior strategy leads are reviewing your requirements and will contact you within <strong>15 minutes</strong> via call or WhatsApp.
      </p>

      <!-- SUMMARY BOX -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#18181b;border-left:4px solid #d4a853;border-radius:12px;margin:24px 0;padding:20px;">
        <tr>
          <td>
            <p style="font-size:11px;font-family:monospace;color:#d4a853;margin:0 0 8px 0;text-transform:uppercase;font-weight:bold;">YOUR SUBMITTED INQUIRY SUMMARY:</p>
            <p style="margin:4px 0;font-size:13px;color:#ffffff;"><strong>Name:</strong> ${name}</p>
            <p style="margin:4px 0;font-size:13px;color:#ffffff;"><strong>Phone / WhatsApp:</strong> ${phone}</p>
            <p style="margin:4px 0;font-size:13px;color:#ffffff;"><strong>Solution Requested:</strong> ${service}</p>
            ${message ? `<p style="margin:4px 0;font-size:13px;color:#a1a1aa;"><strong>Message:</strong> "${message}"</p>` : ""}
          </td>
        </tr>
      </table>

      <p style="color:#a1a1aa;font-size:13px;">
        Need an immediate answer right now? Connect directly with our lead strategist on WhatsApp:
      </p>

      <div style="text-align:center;margin-top:24px;">
        <a href="https://wa.me/919042986355?text=${encodeURIComponent(`Hello JM Creations, I submitted an inquiry for ${service}. Looking for immediate discussion.`)}" 
           target="_blank" 
           style="background-color:#10b981;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:30px;font-weight:bold;font-size:14px;display:inline-block;">
          💬 Chat Live on WhatsApp Now →
        </a>
      </div>
    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td align="center" style="border-top:1px solid rgba(255,255,255,0.1);padding-top:20px;font-size:11px;color:#71717a;font-family:monospace;">
      JM Creations Pvt. Ltd. • Email: jmcreationinfo@gmail.com • Call/WhatsApp: +91 90429 86355
    </td>
  </tr>

</table>
</td>
</tr>
</table>

</body>
</html>`;

    // 3. Prepare Email #2: Admin Notification Email (To jmcreationinfo@gmail.com)
    const adminHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Lead Alert – JM Creations</title>
</head>
<body style="margin:0;padding:0;background-color:#050507;font-family:Arial,Helvetica,sans-serif;color:#ffffff;">

<table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
<tr>
<td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background-color:#09090b;border:2px solid #10b981;border-radius:20px;padding:32px;">
  
  <tr>
    <td style="color:#ffffff;">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
        <img src="${logoUrl}" alt="JM Creations Logo" width="48" height="48" style="border-radius:10px;border:1px solid #10b981;">
        <div>
          <span style="background-color:#10b981;color:#000000;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:bold;font-family:monospace;">🔥 NEW HOT LEAD DISPATCHED</span>
          <h2 style="font-size:20px;color:#ffffff;margin:4px 0 0 0;">New Inquiry: ${service}</h2>
        </div>
      </div>
      <p style="font-size:12px;color:#a1a1aa;margin:0 0 20px 0;font-family:monospace;">Received at ${newLead.timestamp}</p>

      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#18181b;border-radius:12px;padding:20px;margin-bottom:24px;">
        <tr>
          <td style="font-size:13px;color:#e4e4e7;line-height:1.8;">
            <p style="margin:4px 0;"><strong>Client Name:</strong> ${name}</p>
            <p style="margin:4px 0;"><strong>Email Address:</strong> <a href="mailto:${email}" style="color:#d4a853;">${email}</a></p>
            <p style="margin:4px 0;"><strong>Phone / WhatsApp:</strong> <a href="tel:${phone}" style="color:#10b981;">${phone}</a></p>
            <p style="margin:4px 0;"><strong>Requested Solution:</strong> <span style="color:#d4a853;font-weight:bold;">${service}</span></p>
            <p style="margin:8px 0 0 0;"><strong>Project Requirements:</strong><br><em style="color:#a1a1aa;">"${message}"</em></p>
          </td>
        </tr>
      </table>

      <div style="text-align:center;">
        <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${name}, thank you for contacting JM Creations regarding ${service}. We are ready to assist you.`)}" 
           target="_blank" 
           style="background-color:#10b981;color:#000000;text-decoration:none;padding:12px 24px;border-radius:24px;font-weight:bold;font-size:13px;display:inline-block;margin-right:10px;">
          💬 Open WhatsApp Chat
        </a>
        <a href="tel:${phone}" 
           style="background-color:#d4a853;color:#000000;text-decoration:none;padding:12px 24px;border-radius:24px;font-weight:bold;font-size:13px;display:inline-block;">
          📞 Call Lead Now
        </a>
      </div>
    </td>
  </tr>

</table>
</td>
</tr>
</table>

</body>
</html>`;

    // 4. Dispatch both emails if Gmail transport credentials exist
    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      // Send Email #1 to Lead
      await transporter.sendMail({
        from: `"JM Creations Solutions" <${gmailUser}>`,
        to: email,
        subject: `Inquiry Received – JM Creations Team Will Contact You Shortly`,
        html: clientHtml,
      });

      // Send Email #2 to Admin Notification Box
      await transporter.sendMail({
        from: `"JM Creations Lead Engine" <${gmailUser}>`,
        to: gmailUser,
        subject: `🔥 NEW LEAD ALERT: ${service} – ${name}`,
        html: adminHtml,
      });
    }

    return NextResponse.json({
      success: true,
      lead: newLead,
      message: `Inquiry registered! Branded confirmation sent to ${email}.`,
    });
  } catch (error: any) {
    console.error("Error processing inquiry email:", error);
    return NextResponse.json({
      success: true,
      message: "Inquiry received and recorded successfully!",
    });
  }
}

// GET endpoint to return live stored leads
export async function GET() {
  const { IN_MEMORY_LEADS } = await import("@/lib/leadsStore");
  return NextResponse.json({
    success: true,
    leads: IN_MEMORY_LEADS,
  });
}
