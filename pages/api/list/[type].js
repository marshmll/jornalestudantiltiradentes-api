import { buildClient } from '@datocms/cma-client-node';

export default async function news(req, res) {
  const DATOCMS_TOKEN = process.env.DATOCMS_TOKEN;
  const client = buildClient({ apiToken: DATOCMS_TOKEN });

  const type = req.query.type;

  const records = await client.items.list({
    filter: {
      type: type,
    },
  });

  res.json(records);
}