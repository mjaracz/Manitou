// eslint-disable-next-line @typescript-eslint/no-var-requires
const MongoClient = require('mongodb').MongoClient;

export const connectDb = async () => {
  const client: typeof MongoClient = await MongoClient.connect(
    'mongodb://localhost:27017/stories',
    {
      useUnifiedTopology: true,
    },
  );
  return client.db();
};
