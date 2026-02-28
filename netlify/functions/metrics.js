import * as parsePrometheusTextFormat from 'parse-prometheus-text-format';

export async function handler() {
  try {
    const auth = Buffer.from(`service_role:${process.env.SUPABASE_SERVICE_ROLE_KEY}`).toString(
      'base64',
    );

    const url = `https://${process.env.PROJECT_REF}.supabase.co/customer/v1/privileged/metrics`;

    const res = await fetch(url, {
      headers: { Authorization: `Basic ${auth}` },
    });

    const text = await res.text();

    const parsed = parsePrometheusTextFormat.parsePrometheusTextFormat(text);

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parsed),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
