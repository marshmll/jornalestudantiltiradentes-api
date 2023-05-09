import { buildClient } from '@datocms/cma-client-node';

const TOKEN = ""

export default async function news(req, res) {
  const client = buildClient({ apiToken: TOKEN });

  const records = await client.items.list({
    filter: {
      // you can also use models IDs instead of API keys!
      type: 'music',
    },
  });

  res.json(records);
}
