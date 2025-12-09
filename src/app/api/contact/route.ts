import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('CONTACT_WEBHOOK_URL is not set');
      return NextResponse.json(
        { success: false, error: 'Contact form not configured' },
        { status: 500 }
      );
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
        source: 'website-contact-form',
        recipient: 'Support@teachatbot.com'
      })
    });

    if (response.status >= 200 && response.status < 300) {
      return NextResponse.json({ success: true });
    } else {
      console.error('Webhook returned:', response.status);
      return NextResponse.json(
        { success: false, error: 'Failed to send message' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Server error' },
      { status: 500 }
    );
  }
}
