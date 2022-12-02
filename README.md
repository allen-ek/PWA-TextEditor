# Authors

Allen Klein

- [Link to Github Repository](https://github.com/allen-ek/PWA-TextEditor)
- [Link to Heroku Site](https://murmuring-tundra-42989.herokuapp.com/)

## Why?
I wanted to refactor a text editor in order for it to become a PWA that would have data persitince even while offline.

## What I learned
I learned how to use Node.js, Express npm to serve client side data as well as how to incorparate a server to fetch and host the data using indexedDB
to retrive the data. I also learned how to bundle code for the application build.
## Technologies Used
Express
Node.js
Github
Webpack


## Code Snippet
```html
 export const putDb = async (content) => 
{
  const jateDB = await openDB('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;

  console.log('Text successfully saved to database',result);
}
```
The code snippet above was the code in order to store data into indexedDB for later access.