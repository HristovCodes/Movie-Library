import {
  getDatabase,
  ref,
  update,
  remove,
  query,
  get,
} from "firebase/database";
import { firebase } from "./firebaseapp";

export const database = getDatabase(firebase);

export function updateData(path, data) {
  update(ref(database, `${path}/`), data).catch((e) =>
    console.log(`${e.code}\n${e.message}`)
  );
}

export function deleteData(path) {
  remove(ref(database, `${path}/`)).catch((e) =>
    console.log(`${e.code}\n${e.message}`)
  );
}

export async function getData(path) {
  const response = await get(query(ref(database, `${path}/`)));
  if (response.exists()) {
    const data = response.val();
    return data;
  }
  return [];
}
