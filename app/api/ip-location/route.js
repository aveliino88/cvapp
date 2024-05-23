import https from 'https';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const ip = searchParams.get('ip');

  if (!ip) {
    return new Response(JSON.stringify({ error: 'IP address is required' }), { status: 400 });
  }

  const apiKey = '6F500C35D5BC34119DD338EFC478351E'; // Your IP2Location API key
  const url = `https://api.ip2location.io/?key=${apiKey}&ip=${ip}&format=json`;

  return new Promise((resolve) => {
    https.get(url, (apiRes) => {
      let data = '';

      apiRes.on('data', (chunk) => {
        data += chunk;
      });

      apiRes.on('end', () => {
        try {
          const locationData = JSON.parse(data);
          resolve(new Response(JSON.stringify(locationData), { status: 200 }));
        } catch (error) {
          resolve(new Response(JSON.stringify({ error: 'Error parsing response from IP2Location API' }), { status: 500 }));
        }
      });
    }).on('error', () => {
      resolve(new Response(JSON.stringify({ error: 'Error fetching data from IP2Location API' }), { status: 500 }));
    });
  });
}
