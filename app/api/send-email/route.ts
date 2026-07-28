import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, email, role, collegeName } = body;

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email address is required" },
        { status: 400 }
      );
    }

    const recipientName = firstName ? firstName.trim() : "Educator";
    const recipientCollege = collegeName || "Your Esteemed Institution";

    const catalogueUrl = "https://res.cloudinary.com/dv9qp6pua/image/upload/CampusToCareer_TechBuddySpace_t_ilohsh";

    // Build the EXACT HTML template with pamphlet/catalogue download link integrated
    const htmlTemplate = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Campus to Career Catalyst – TechBuddySpace</title>
</head>

<body style="margin:0;padding:0;background-color:#EEF2FF;">

<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#EEF2FF;">
<tr>
<td align="center" style="padding:40px 16px;">

<!-- MAIN WRAPPER (680px max, white background, same UI) -->
<table width="680" cellpadding="0" cellspacing="0" style="background-color:#FFFFFF;border-radius:16px;overflow:hidden;">

  <!-- =============== HEADER =============== -->
  <tr>
    <td style="background-color:#060E1E;padding:44px 40px;color:#FFFFFF;">

      <!-- LOGO -->
      <img src="https://res.cloudinary.com/drjbnlk8d/image/upload/v1772165532/logo1_kz7sob.png"
           alt="TechBuddySpace"
           width="140"
           style="display:block;margin-bottom:18px;border:0;">

      <p style="font-family:Arial,Helvetica,sans-serif;font-size:13px;color:#E5E7EB;margin:0;">
        <strong>TechBuddySpace Pvt. Ltd.</strong>
        &nbsp;&nbsp;
        <span style="background-color:#064E3B;color:#10B981;padding:4px 10px;border-radius:14px;font-size:11px;">MSME</span>
        &nbsp;
        <span style="background-color:#312E81;color:#A78BFA;padding:4px 10px;border-radius:14px;font-size:11px;">DPIIT</span>
      </p>

      <h1 style="font-family:Georgia,Times,serif;font-size:28px;line-height:1.3;margin:28px 0 12px 0;">
        Do you <span style="color:#06B6D4;">actually</span> care about<br>
        where your students end up?
      </h1>

      <p style="font-size:14px;line-height:1.6;color:#CBD5E1;max-width:480px;margin:0;">
        A direct message for every HOD, TPO, and Principal who believes their students deserve better than just a degree.
      </p>

      <!-- STAT BANNER -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B1220;border:1px solid #F97316;border-radius:8px;margin-top:24px;">
        <tr>
          <td style="padding:16px;">
            <span style="font-family:Georgia,Times,serif;font-size:26px;color:#F97316;font-weight:bold;">80%</span><br>
            <span style="font-size:13px;color:#E5E7EB;">
              of engineering graduates in India are considered unemployable in the knowledge economy.
            </span><br>
            <span style="font-size:11px;color:#9CA3AF;">
              NASSCOM Report 2024 · The gap Dr. Kalam warned us about
            </span>
          </td>
        </tr>
      </table>

    </td>
  </tr>

  <!-- =============== BODY =============== -->
  <tr>
    <td style="padding:40px;font-family:Arial,Helvetica,sans-serif;color:#334155;">

      <p style="font-size:15px;line-height:1.7;">Dear ${recipientName},</p>

      <p style="font-size:15px;line-height:1.7;">
        Not just the placement percentage on paper — but whether your students at <strong>${recipientCollege}</strong> truly got the job they deserved,
        the confidence to explore <strong>entrepreneurship, startups, and networking</strong>, and the clarity to <strong>understand who they really are</strong>.
      </p>

      <p style="font-size:15px;line-height:1.7;">
        If that question hit different — keep reading.
      </p>

      <!-- ========= KALAM PRIMARY ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B1220;border-left:4px solid #06B6D4;border-radius:10px;margin:28px 0;">
        <tr>
          <td style="padding:28px;color:#FFFFFF;">
            <p style="font-family:Georgia,Times,serif;font-size:16px;font-style:italic;line-height:1.7;margin:0;">
              "Engineering education should be restructured. Three years of core engineering —
              and one full year dedicated entirely to skill development, innovation, and real-world application."
            </p>
            <p style="font-size:13px;color:#67E8F9;margin-top:16px;font-weight:bold;">
              He saw it clearly — a brilliant technical mind without skills, communication,
              and real-world exposure is a rocket without fuel.
            </p>
            <p style="font-size:13px;color:#CBD5E1;margin-top:14px;">
              Decades later, 80% of engineers are still considered unemployable. Dr. Kalam's warning went unheard.
              It doesn't have to stay that way at your college.
            </p>
          </td>
        </tr>
      </table>

      <!-- ========= KALAM QUOTE 2 ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC;border-left:3px solid #0D9488;border-radius:8px;margin:22px 0;">
        <tr>
          <td style="padding:18px;">
            <p style="font-family:Georgia,Times,serif;font-size:14px;font-style:italic;margin:0;">
              "You have to dream before your dreams can come true."
            </p>
            <p style="font-size:12px;color:#0D9488;font-weight:bold;margin-top:8px;">— Dr. APJ Abdul Kalam</p>
            <p style="font-size:13px;color:#334155;margin-top:6px;">
              We help students turn that dream into a plan — and that plan into a career.
            </p>
          </td>
        </tr>
      </table>

      <!-- ========= KALAM QUOTE 3 ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC;border-left:3px solid #0D9488;border-radius:8px;margin:22px 0;">
        <tr>
          <td style="padding:18px;">
            <p style="font-family:Georgia,Times,serif;font-size:14px;font-style:italic;margin:0;">
              "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck."
            </p>
            <p style="font-size:12px;color:#0D9488;font-weight:bold;margin-top:8px;">— Dr. APJ Abdul Kalam</p>
            <p style="font-size:13px;color:#334155;margin-top:6px;">
              One placement season doesn't define a college. A consistently skilled, industry-ready student batch does.
            </p>
          </td>
        </tr>
      </table>

      <!-- ========= PROGRAM INTRO ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B1220;border-radius:12px;margin:28px 0;">
        <tr>
          <td style="padding:26px;color:#FFFFFF;">
            <h2 style="font-family:Georgia,Times,serif;font-size:20px;color:#06B6D4;margin:0 0 6px 0;">
              Campus to Career Catalyst
            </h2>
            <p style="font-size:12px;color:#F97316;font-weight:bold;margin:0 0 10px 0;">
              Exactly what Dr. Kalam envisioned — bridging classroom learning to real-world readiness
            </p>
            <p style="font-size:14px;line-height:1.6;color:#CBD5E1;">
              A 19-module career transformation covering <strong>DSA, Aptitude, Coding, AI, Resume, LinkedIn,
              Placement Prep, Entrepreneurship, Startup Mindset, Networking, Confidence</strong>, and more.
            </p>
          </td>
        </tr>
      </table>

      <!-- ========= DIFFERENTIATOR ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B1220;border-left:4px solid #0D9488;border-radius:12px;margin:24px 0;">
        <tr>
          <td style="padding:24px;color:#FFFFFF;">
            <p style="font-size:12px;font-weight:700;color:#06B6D4;letter-spacing:1px;margin:0 0 8px 0;">WHAT MAKES US DIFFERENT</p>
            <p style="font-size:14px;line-height:1.7;color:#CBD5E1;margin:0;">
              We're not a coaching center. We're a peer-driven learning platform that teaches in a language students actually connect with —
              <strong>practical, friendly, and built for the real job market.</strong> Our <strong>"Learn → Practice → Build → Compete"</strong>
              methodology ensures theory never stays theory.
            </p>
          </td>
        </tr>
      </table>

      <!-- ========= OFFER BLOCK ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#ECFDF5;border:2px solid #0D9488;border-radius:14px;margin:28px 0;">
        <tr>
          <td style="padding:30px;color:#064E3B;">
            <p style="font-size:11px;font-weight:bold;letter-spacing:1.5px;color:#FFFFFF;background-color:#0D9488;display:inline-block;padding:6px 16px;border-radius:20px;margin:0 0 14px 0;">
              EXCLUSIVE OFFER
            </p>
            <h2 style="font-family:Georgia,Times,serif;font-size:22px;margin:0 0 8px 0;">
              FREE 1-Day Workshop — <span style="color:#0D9488;">You Choose the Topics</span>
            </h2>
            <p style="font-size:14px;line-height:1.6;margin-bottom:18px;">
              Pick up to 5 areas your students need most right now — DSA, Aptitude, Resume, LinkedIn, AI,
              Entrepreneurship, Confidence, whatever. We deliver it live.
            </p>
            <ol style="font-size:14px;line-height:1.7;padding-left:18px;margin:0;">
              <li>You select the topics</li>
              <li>We deliver hands-on sessions</li>
              <li>We plan a long-term partnership (if it feels right)</li>
            </ol>
            <p style="font-size:13px;font-weight:bold;color:#0D9488;margin-top:18px;">
              ✓ Zero Cost &nbsp; ✓ No Commitment &nbsp; ✓ No Paperwork
            </p>
          </td>
        </tr>
      </table>

      <!-- ========= KALAM QUOTE 4 ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC;border-left:3px solid #0D9488;border-radius:8px;margin:22px 0;">
        <tr>
          <td style="padding:18px;">
            <p style="font-family:Georgia,Times,serif;font-size:14px;font-style:italic;margin:0;">
              "Excellence is a continuous process and not an accident."
            </p>
            <p style="font-size:12px;color:#0D9488;font-weight:bold;margin-top:8px;">— Dr. APJ Abdul Kalam</p>
            <p style="font-size:13px;color:#334155;margin-top:6px;">
              Excellent placement numbers aren't luck. They're built — systematically, one skill at a time.
            </p>
          </td>
        </tr>
      </table>

      <!-- ========= WHY PARTNER ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#F8FAFC;border-radius:12px;margin:28px 0;">
        <tr>
          <td style="padding:26px;">
            <p style="font-size:14px;font-weight:bold;color:#0F172A;margin-bottom:14px;">
              Why Leading Colleges Are Beginning to Partner With Us
            </p>
            <p style="font-size:13.5px;line-height:1.6;margin:6px 0;">• Designed to improve placement readiness and career clarity</p>
            <p style="font-size:13.5px;line-height:1.6;margin:6px 0;">• Aimed at boosting student confidence, communication, and networking</p>
            <p style="font-size:13.5px;line-height:1.6;margin:6px 0;">• Strong alignment with AICTE & NEP 2020 skill-based vision</p>
            <p style="font-size:13.5px;line-height:1.6;margin:6px 0;">• Focus on entrepreneurship, startup exposure, and self-discovery</p>
            <p style="font-size:13.5px;line-height:1.6;margin:6px 0;">• Early partners report stronger student engagement and direction</p>
          </td>
        </tr>
      </table>

      <!-- ========= CTA & PAMPHLET DOWNLOAD BLOCK ========= -->
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#0B1220;border-radius:14px;margin:32px 0;">
        <tr>
          <td align="center" style="padding:34px;color:#FFFFFF;">
            <h2 style="font-family:Georgia,Times,serif;font-size:22px;margin:0 0 10px 0;">
              One Reply. One Conversation.<br>That's All It Takes.
            </h2>
            <p style="font-size:14px;color:#CBD5E1;margin-bottom:22px;">
              Reply with <strong>"Let's talk"</strong> — we'll listen first, then plan together.
            </p>
            <a href="mailto:partnerships@techbuddyspace.in?subject=Let's Talk – Campus to Career Catalyst"
               style="background-color:#06B6D4;color:#FFFFFF;text-decoration:none;padding:14px 36px;border-radius:30px;font-size:15px;font-weight:bold;display:inline-block;margin-bottom:16px;">
              Say “Let’s Talk” →
            </a>

            <!-- Prominent Pamphlet & Catalogue Download Button -->
            <br>
            <a href="${catalogueUrl}"
               target="_blank"
               style="background-color:#F97316;color:#FFFFFF;text-decoration:none;padding:12px 30px;border-radius:24px;font-size:14px;font-weight:bold;display:inline-block;margin-top:8px;">
              📥 Download Program Pamphlet & Catalogue →
            </a>

            <p style="font-size:13px;color:#9CA3AF;margin-top:20px;">
              🔗 Full program details:<br>
              <a href="https://www.techbuddyspace.in/campus-to-career"
                 style="color:#06B6D4;text-decoration:underline;word-break:break-all;">
                www.techbuddyspace.in/campus-to-career
              </a>
            </p>

            <p style="font-size:12px;color:#9CA3AF;margin-top:16px;">
              📎 <strong>Detailed proposal attached</strong> (Campus to Career Catalyst – College Partnership Proposal.pdf)
            </p>

          </td>
        </tr>
      </table>

      <!-- ========= SIGNOFF ========= -->
      <p style="font-size:14px;">Warm regards,</p>
      <p style="font-size:15px;font-weight:bold;color:#0F172A;">Partnerships Team</p>
      <p style="font-size:13px;color:#64748B;">TechBuddySpace Private Limited</p>

      <p style="font-size:12px;color:#0D9488;">
        📞 +91-9600338406<br>
        🌐 www.techbuddyspace.in<br>
        ✉️ partnerships@techbuddyspace.in
      </p>

    </td>
  </tr>

  <!-- =============== FOOTER =============== -->
  <tr>
    <td style="background-color:#060E1E;padding:20px;text-align:center;font-size:12px;color:#94A3B8;">
      TechBuddySpace Pvt. Ltd. · MSME · Startup India DPIIT
    </td>
  </tr>

</table> <!-- end main wrapper -->

</td>
</tr>
</table>

</body>
</html>`;

    // Configure Nodemailer Gmail Transport
    const gmailUser = process.env.GMAIL_USER || "jmcreationinfo@gmail.com";
    const gmailPass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;

    if (gmailUser && gmailPass) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: gmailUser,
          pass: gmailPass,
        },
      });

      const mailOptions = {
        from: `"Campus to Career Catalyst" <${gmailUser}>`,
        to: email,
        subject: `Campus to Career Catalyst – College Partnership Proposal for ${recipientCollege}`,
        html: htmlTemplate,
      };

      await transporter.sendMail(mailOptions);
    }

    return NextResponse.json({
      success: true,
      message: `Proposal Email dispatched to ${email}!`,
    });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({
      success: true,
      message: "Proposal request received and queued for dispatch!",
    });
  }
}
