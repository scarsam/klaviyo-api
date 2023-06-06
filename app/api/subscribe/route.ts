import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const emailRes = await request.json();

  await fetch(
    'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/',
    {
      method: 'POST',
      headers: {
        Authorization: process.env?.klaviyo || '',
        accept: 'application/json',
        revision: '2023-02-22',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          type: 'profile-subscription-bulk-create-job',
          attributes: {
            list_id: 'VhRvqf',
            custom_source: 'Marketing Event',
            subscriptions: [
              {
                channels: {
                  email: ['MARKETING'],
                },
                email: emailRes?.data?.email,
              },
            ],
          },
        },
      }),
    },
  );

  return NextResponse.json({ status: 'ok' });
}
