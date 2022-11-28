import { connectDb } from '../migrations-utils/connect-db';

export const up = async () => {
  const db = connectDb();
  /*
   * Code your update script here!
   * */
};

export const down = async () => {
  const db = connectDb();
  /*
   * Code your downgrade script here!
   * */
};
