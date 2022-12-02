import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//  method that accepts some content and adds it to the database
export const putDb = async (content) => 
{
  const jatetextDB = await openDB('jate', 1);
  const tx = jatetextDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.add({ id: 1, value: content });
  const result = await request;

  console.log('Text successfully saved to database',result);
}

// method that gets all the content from the database
export const getDb = async () =>{
  const jatetextDB = await openDB('jate', 1);
  const tx = jatetextDB.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
