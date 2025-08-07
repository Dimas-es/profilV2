import { NextApiRequest, NextApiResponse } from 'next';

// This API route has been disabled because Upstash Redis is no longer used.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(410).json({ message: 'This endpoint is no longer available.' });
}
