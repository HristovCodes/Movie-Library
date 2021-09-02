import {
  getDatabase,
  ref,
  update,
  remove,
  orderByChild,
  query,
  limitToFirst,
} from "firebase/database";
import { firebase } from "./firebaseapp";

export const database = getDatabase(firebase);

export function updateData(path, data) {
  update(ref(database, `${path}/`), data).catch((e) =>
    console.log(`${e.code}\n${e.message}`)
  );
}

export async function deleteData(path, id) {
  remove(ref(database, `${path}/${id}`)).catch((e) =>
    console.log(`${e.code}\n${e.message}`)
  );
}

export async function orderData(path, child, ammount = 10) {
  return query(
    ref(database, `${path}/`),
    orderByChild(child),
    limitToFirst(ammount)
  );
}

export async function getData(path, child) {
  return query(ref(database, `${path}/`), orderByChild(child));
}

export async function pullUserData(id) {
  return query(ref(database, `user/${id}/`));
}
