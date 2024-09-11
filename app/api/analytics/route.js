import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const VIEW_ID = process.env.GA_PROPERTY_ID; // Replace with your GA4 Property ID

async function getGA4Data() {
  const serviceAccountKey = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || '{}');

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: serviceAccountKey.client_email,
      private_key: serviceAccountKey.private_key,
    },
    scopes: 'https://www.googleapis.com/auth/analytics.readonly',
  });

  const analytics = google.analyticsdata({
    version: 'v1beta',
    auth,
  });

  try {
    const [totalVisitorsRes, uniqueVisitorsRes, realTimeVisitorsRes] = await Promise.all([
      // Total visitors
      analytics.properties.runReport({
        property: `properties/${VIEW_ID}`,
        requestBody: {
          metrics: [{ name: 'totalUsers' }],
          dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }], // or adjust as needed
        },
      }),
      // Unique visitors
      analytics.properties.runReport({
        property: `properties/${VIEW_ID}`,
        requestBody: {
          metrics: [{ name: 'activeUsers' }],
          dateRanges: [{ startDate: '30daysAgo', endDate: 'today' }],
        },
      }),
      // Real-time visitors
      analytics.properties.runRealtimeReport({
        property: `properties/${VIEW_ID}`,
        requestBody: {
          metrics: [{ name: 'activeUsers' }],
        },
      }),
    ]);

    return {
      totalVisitors: totalVisitorsRes.data.rows?.[0]?.metricValues?.[0]?.value || '0',
      uniqueVisitors: uniqueVisitorsRes.data.rows?.[0]?.metricValues?.[0]?.value || '0',
      realTimeVisitors: realTimeVisitorsRes.data.rows?.[0]?.metricValues?.[0]?.value || '0',
    };
  } catch (error) {
    console.error('Error fetching GA4 data:', error);
    return null;
  }
}

export async function GET() {
  const data = await getGA4Data();

  if (data) {
    return NextResponse.json(data);
  } else {
    return NextResponse.json({ error: 'Failed to fetch GA4 data' });
  }
}