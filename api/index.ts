import type { VercelRequest, VercelResponse } from '@vercel/node';

export default (request: VercelRequest, response: VercelResponse) => {
  const { place } = request.query;

  if (place === undefined) {
    response.status(400).send('Place parameter required. E.g. /api?place=London,UK');
  }
  
  response.status(200).send(`Place: ${place}`);
};
