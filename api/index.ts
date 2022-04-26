import type { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
  const { place } = request.query;
  response.status(200).send(`Place: ${place}`);
};
