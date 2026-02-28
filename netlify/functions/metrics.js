import fetch from 'node-fetch';
import parsePrometheusTextFormat from 'parse-prometheus-text-format';

export async function handler() {
  try {
    const auth = Buffer.from(`service_role:${process.env.SUPABASE_SERVICE_ROLE_KEY}`).toString(
      'base64',
    );

    const res = await fetch(
      `https://${process.env.PROJECT_REF}.supabase.co/customer/v1/privileged/metrics`,
      {
        headers: {
          Authorization: `Basic ${auth}`,
        },
      },
    );

    const text = await res.text();
    const parsed = parsePrometheusTextFormat(text);

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(parsed),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
