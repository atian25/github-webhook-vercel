import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function (req: VercelRequest, res: VercelResponse) {
  console.log(req.query);
  console.log(req.headers);
  console.log(req.body);
  res.send({
    query: req.query,
    headers: req.headers,
    body: req.body,
  });
}
