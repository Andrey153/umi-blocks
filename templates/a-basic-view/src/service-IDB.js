import Dexie from 'dexie';
import { nameIDB, namespace } from './config';

const db = new Dexie(nameIDB);

db.version(1).stores({
  [namespace]: 'id',
});

export async function getDefaultList({ page = 0, size = 10, sort = 'id,desc', searchString }) {
  const content = await db[namespace]
    .offset(page * size)
    .limit(size)
    .toArray();

  const overFullPage = content.length >= size ? 1 : 0;
  const totalElements = page * size + content.length + overFullPage;
  const totalPages = page + overFullPage;
  const number = page;

  return { content, size, totalElements, totalPages, number };
}

export async function getElement(id) {
  return db[namespace].where('id').equals(id).first();
}

export async function delElement(id) {
  return db[namespace].where('id').equals(id).delete();
}

export async function putElement(element) {
  return db[namespace].put(element);
}
