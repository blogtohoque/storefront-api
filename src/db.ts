import config from 'config'
import * as redis from 'src/lib/redis'
import * as elastic from 'src/lib/elastic'
import { DbContext } from 'src/lib/module/types';

export const dbContext: DbContext = {
  getRedisClient: () => redis.getClient(config),
  getElasticClient: () => elastic.getClient(config)
}

export default function initializeDb (callback: (db: DbContext) => void) {
  // connect to a database if needed, then pass it to `callback`:
  callback(dbContext);
}
