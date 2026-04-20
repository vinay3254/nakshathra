const nodemailer = require("nodemailer");

const buildBaseTemplate = ({
  preview,
  title,
  eyebrow,
  body,
  ctaLabel,
  ctaUrl,
  footer,
}) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
  </head>
  <body style="margin:0;padding:0;background-color:#000005;font-family:Arial,sans-serif;color:#d9f9ff;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preview}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#000005;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:linear-gradient(180deg,#060b1f 0%,#090611 100%);border:1px solid rgba(0,245,255,0.25);border-radius:24px;overflow:hidden;box-shadow:0 0 40px rgba(0,245,255,0.12);">
            <tr>
              <td style="padding:32px 32px 16px;">
                <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.35em;text-transform:uppercase;color:#00f5ff;">${eyebrow}</p>
                <h1 style="margin:0;font-size:34px;line-height:1.15;font-weight:900;color:#ffffff;font-family:'Orbitron',Arial,sans-serif;">
                  ${title}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 12px;color:#d8e9ff;font-size:16px;line-height:1.75;">
                ${body}
              </td>
            </tr>
            ${
              ctaLabel && ctaUrl
                ? `<tr>
              <td style="padding:12px 32px 24px;">
                <a href="${ctaUrl}" style="display:inline-block;padding:14px 22px;border-radius:999px;background:linear-gradient(90deg,#ff2d78 0%,#00f5ff 100%);color:#020311;text-decoration:none;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;">
                  ${ctaLabel}
                </a>
              </td>
            </tr>`
                : ""
            }
            <tr>
              <td style="padding:0 32px 32px;color:#95b8d1;font-size:13px;line-height:1.7;">
                ${footer}
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

const formatDate = (value) =>
  value
    ? new Date(value).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "To be announced";

const buildWelcomeEmailTemplate = ({ name }) =>
  buildBaseTemplate({
    preview: "Welcome to Nakshatra 2026.",
    eyebrow: "Nakshatra 2026",
    title: `Welcome, ${name}. The neon gates are open.`,
    body: `
      <p style="margin:0 0 16px;">Your Nakshatra 2026 account is live. You can now sign in, explore events, and lock in registrations before slots disappear.</p>
      <p style="margin:0;">Expect a festival packed with flagship tech battles, culture clashes, workshops, and cyber-lit campus energy.</p>
    `,
    ctaLabel: "Open Dashboard",
    ctaUrl: `${process.env.CLIENT_URL}/dashboard`,
    footer:
      "If this account was not created by you, please reply to this email immediately and we will secure it.",
  });

const buildResetPasswordEmailTemplate = ({ name, resetUrl }) =>
  buildBaseTemplate({
    preview: "Reset your Nakshatra 2026 password.",
    eyebrow: "Security Channel",
    title: `Reset link requested for ${name}`,
    body: `
      <p style="margin:0 0 16px;">A password reset request was received for your Nakshatra 2026 account.</p>
      <p style="margin:0 0 16px;">This link stays active for 15 minutes. If you did not request it, you can ignore this message and your password will remain unchanged.</p>
    `,
    ctaLabel: "Reset Password",
    ctaUrl: resetUrl,
    footer:
      "For safety, never share this link. The Nakshatra team will never ask for your password.",
  });

const buildRegistrationConfirmationTemplate = ({
  name,
  eventName,
  eventDate,
  eventTime,
  venue,
  teamName,
  teamMembers = [],
}) =>
  buildBaseTemplate({
    preview: `${eventName} registration confirmed.`,
    eyebrow: "Registration Confirmed",
    title: `${eventName} is locked in.`,
    body: `
      <p style="margin:0 0 16px;">Hi ${name}, your registration has been confirmed for <strong style="color:#00f5ff;">${eventName}</strong>.</p>
      <p style="margin:0 0 10px;"><strong>Date:</strong> ${formatDate(eventDate)}</p>
      <p style="margin:0 0 10px;"><strong>Time:</strong> ${eventTime || "To be announced"}</p>
      <p style="margin:0 0 10px;"><strong>Venue:</strong> ${venue || "To be announced"}</p>
      <p style="margin:0 0 10px;"><strong>Team:</strong> ${teamName || "Solo registration"}</p>
      <p style="margin:0;">${teamMembers.length ? `<strong>Members:</strong> ${teamMembers.map((member) => member.name).join(", ")}` : "No additional team members submitted."}</p>
    `,
    ctaLabel: "View Dashboard",
    ctaUrl: `${process.env.CLIENT_URL}/dashboard`,
    footer:
      "Keep this email handy for check-in. You can review all your registrations anytime from your dashboard.",
  });

const sendEmail = async ({ to, subject, html }) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: Number(process.env.EMAIL_PORT) === 465,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html,
  });
};

module.exports = {
  sendEmail,
  buildWelcomeEmailTemplate,
  buildResetPasswordEmailTemplate,
  buildRegistrationConfirmationTemplate,
};
