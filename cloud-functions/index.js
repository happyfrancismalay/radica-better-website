const functions = require('@google-cloud/functions-framework');
const nodemailer = require('nodemailer');

functions.http('submitForm', async (req, res) => {
  // CORS headers
  res.set('Access-Control-Allow-Origin', 'https://radicaai.com');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.set('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      company,
      jobTitle,
      country,
      platform,
      channel,
      message,
      phone,
      subject
    } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Determine email subject based on form type
    const emailSubject = subject
      ? `[Website ${subject}] ${company || 'Unknown'} - ${name}`
      : `[Website Lead] ${company || 'Unknown'} - ${name}`;

    // Build email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #801DD7 0%, #9b4deb 100%); padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="color: white; margin: 0;">New Lead from RADICA Website</h2>
        </div>
        <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Name:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${name}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Email:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                <a href="mailto:${email}" style="color: #801DD7;">${email}</a>
              </td>
            </tr>
            ${company ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Company:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${company}
              </td>
            </tr>
            ` : ''}
            ${jobTitle ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Job Title:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${jobTitle}
              </td>
            </tr>
            ` : ''}
            ${phone ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Phone:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${phone}
              </td>
            </tr>
            ` : ''}
            ${country ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Country:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${country}
              </td>
            </tr>
            ` : ''}
            ${platform ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Current Platform:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${platform}
              </td>
            </tr>
            ` : ''}
            ${channel ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                <strong style="color: #374151;">Channel Interest:</strong>
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb; color: #6b7280;">
                ${channel}
              </td>
            </tr>
            ` : ''}
            ${message ? `
            <tr>
              <td style="padding: 12px 0;" colspan="2">
                <strong style="color: #374151;">Message:</strong>
                <p style="color: #6b7280; margin: 8px 0 0 0; white-space: pre-wrap;">${message}</p>
              </td>
            </tr>
            ` : ''}
          </table>
        </div>
        <p style="color: #9ca3af; font-size: 12px; margin-top: 16px; text-align: center;">
          Submitted at ${new Date().toISOString()}
        </p>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'marketing@radicasys.com',
      replyTo: email,
      subject: emailSubject,
      html: emailContent
    });

    console.log(`Form submission received from ${email}`);
    res.json({ success: true, message: 'Form submitted successfully' });

  } catch (error) {
    console.error('Error processing form submission:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
