// AWS Lambda function for SkyHughes contact form
// Deploy this to AWS Lambda with Node.js 20.x runtime

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

const ses = new SESClient({ region: "us-east-1" });

// CHANGE THIS to your email address
const TO_EMAIL = "admin@skyhughes.net";
const FROM_EMAIL = "\"SkyHughes Contact\" <admin@skyhughes.net>"; // Must be SES-verified

export const handler = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };

  // Handle CORS preflight (supports both REST API and HTTP API formats)
  if (event.httpMethod === "OPTIONS" || event.requestContext?.http?.method === "OPTIONS") {
    return { statusCode: 200, headers, body: "" };
  }

  try {
    const body = JSON.parse(event.body);
    const { name, email, phone, service, location, date, message } = body;

    if (!name || !email || !service || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const emailBody = `
New Contact Form Submission - SkyHughes Aerial Media
=====================================================

Name:     ${name}
Email:    ${email}
Phone:    ${phone || "Not provided"}
Service:  ${service}
Location: ${location || "Not provided"}
Date:     ${date || "Not provided"}

Project Details:
${message}
    `.trim();

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f0f4f8;font-family:'Segoe UI',Roboto,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0f4f8;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#0f2027,#203a43,#2c5364);padding:36px 40px;text-align:center;">
            <div style="font-size:14px;letter-spacing:3px;color:#7ec8e3;text-transform:uppercase;margin-bottom:8px;">&#9992; SkyHughes Aerial Media</div>
            <div style="font-size:26px;font-weight:700;color:#ffffff;margin-bottom:6px;">New Customer Inquiry</div>
            <div style="font-size:14px;color:#a0c4d4;">${service}</div>
          </td>
        </tr>

        <!-- Customer Info -->
        <tr>
          <td style="padding:32px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafc;border-radius:10px;border-left:4px solid #2c5364;">
              <tr><td style="padding:24px 28px;">
                <div style="font-size:12px;letter-spacing:2px;color:#7c8a96;text-transform:uppercase;margin-bottom:16px;font-weight:600;">Customer Details</div>
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:6px 0;color:#7c8a96;font-size:14px;width:90px;vertical-align:top;">Name</td>
                    <td style="padding:6px 0;color:#1a202c;font-size:15px;font-weight:600;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#7c8a96;font-size:14px;vertical-align:top;">Email</td>
                    <td style="padding:6px 0;"><a href="mailto:${email}" style="color:#2c5364;font-size:15px;text-decoration:none;font-weight:500;">${email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:6px 0;color:#7c8a96;font-size:14px;vertical-align:top;">Phone</td>
                    <td style="padding:6px 0;color:#1a202c;font-size:15px;">${phone ? `<a href="tel:${phone}" style="color:#2c5364;text-decoration:none;font-weight:500;">${phone}</a>` : '<span style="color:#b0bec5;font-style:italic;">Not provided</span>'}</td>
                  </tr>
                </table>
              </td></tr>
            </table>
          </td>
        </tr>

        <!-- Service & Location -->
        <tr>
          <td style="padding:20px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="50%" style="padding-right:8px;vertical-align:top;">
                  <div style="background-color:#edf7ff;border-radius:10px;padding:18px 20px;text-align:center;">
                    <div style="font-size:11px;letter-spacing:1.5px;color:#7c8a96;text-transform:uppercase;margin-bottom:6px;">Service</div>
                    <div style="font-size:15px;color:#1a202c;font-weight:600;">${service}</div>
                  </div>
                </td>
                <td width="50%" style="padding-left:8px;vertical-align:top;">
                  <div style="background-color:#edf7ff;border-radius:10px;padding:18px 20px;text-align:center;">
                    <div style="font-size:11px;letter-spacing:1.5px;color:#7c8a96;text-transform:uppercase;margin-bottom:6px;">Location</div>
                    <div style="font-size:15px;color:#1a202c;font-weight:600;">${location || '<span style="color:#b0bec5;font-style:italic;">TBD</span>'}</div>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Date -->
        <tr>
          <td style="padding:12px 40px 0;">
            <div style="background-color:#edf7ff;border-radius:10px;padding:18px 20px;text-align:center;">
              <div style="font-size:11px;letter-spacing:1.5px;color:#7c8a96;text-transform:uppercase;margin-bottom:6px;">Preferred Date</div>
              <div style="font-size:15px;color:#1a202c;font-weight:600;">${date || '<span style="color:#b0bec5;font-style:italic;">Flexible</span>'}</div>
            </div>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:24px 40px 0;">
            <div style="font-size:12px;letter-spacing:2px;color:#7c8a96;text-transform:uppercase;margin-bottom:12px;font-weight:600;">Project Details</div>
            <div style="background-color:#fafcfe;border:1px solid #e2e8f0;border-radius:10px;padding:20px 24px;">
              <p style="margin:0;font-size:15px;line-height:1.7;color:#2d3748;white-space:pre-wrap;">${message}</p>
            </div>
          </td>
        </tr>

        <!-- Reply Button -->
        <tr>
          <td style="padding:28px 40px 0;text-align:center;">
            <a href="mailto:${email}?subject=Re: ${encodeURIComponent(service)} Inquiry - SkyHughes Aerial Media" style="display:inline-block;background:linear-gradient(135deg,#2c5364,#203a43);color:#ffffff;padding:14px 36px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;letter-spacing:0.5px;">Reply to ${name}</a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:32px 40px;text-align:center;">
            <div style="border-top:1px solid #e8edf2;padding-top:20px;">
              <div style="font-size:12px;color:#a0aec0;">This message was sent from the SkyHughes Aerial Media website contact form.</div>
            </div>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`.trim();

    console.log("Sending HTML email for:", name, service);

    const command = new SendEmailCommand({
      Source: FROM_EMAIL,
      Destination: { ToAddresses: [TO_EMAIL] },
      Message: {
        Subject: { Data: `New Inquiry: ${service} - ${name}`, Charset: "UTF-8" },
        Body: {
          Text: { Data: emailBody, Charset: "UTF-8" },
          Html: { Data: htmlBody, Charset: "UTF-8" },
        },
      },
      ReplyToAddresses: [email],
    });

    await ses.send(command);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: "Failed to send email" }),
    };
  }
};
