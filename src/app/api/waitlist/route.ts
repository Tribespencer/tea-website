import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;

    console.log('Webhook URL:', webhookUrl);
    console.log('Sending email:', body.email);

    if (!webhookUrl) {
      console.error('WAITLIST_WEBHOOK_URL is not set');
      return NextResponse.json({ success: false, error: 'Webhook not configured' }, { status: 500 });
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: body.email,
        timestamp: new Date().toISOString(),
        source: 'website'
      })
    });

    const responseText = await response.text();
    console.log('n8n response status:', response.status);
    console.log('n8n response body:', responseText);

    // n8n test webhooks return various responses, consider any 2xx as success
    if (response.status >= 200 && response.status < 300) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: `n8n returned ${response.status}` }, { status: 500 });
    }
  } catch (error) {
    console.error('Waitlist error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
