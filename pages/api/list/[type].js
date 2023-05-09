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

  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.header(
  //   "Access-Control-Allow-Headers",
  //   "Origin, X-Requested-With, Content-Type, Accept"
  // );

  res.json(records);
}