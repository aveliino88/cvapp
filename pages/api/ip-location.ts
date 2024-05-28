// pages/api/ip-location.ts
// @ts-nocheck
import https from 'https';
import type { NextApiRequest, NextApiResponse } from 'next';

const apiKey = process.env.NEXT_PUBLIC_IP2LOCATION_API_KEY;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { ip } = req.query;

  if (!ip) {
    return res.status(400).json({ error: 'IP address is required' });
  }

  const url = `https://api.ip2location.io/?key=${apiKey}&ip=${ip}&format=json`;

  https.get(url, (apiRes) => {
    let data = '';

    apiRes.on('data', (chunk) => {
      data += chunk;
    });

    apiRes.on('end', () => {
      try {
        const locationData = JSON.parse(data);
        res.status(200).json(locationData);
      } catch (error) {
        res.status(500).json({ error: 'Error parsing response from IP2Location API' });
      }
    });
  }).on('error', () => {
    res.status(500).json({ error: 'Error fetching data from IP2Location API' });
  });
}
