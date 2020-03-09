Instructions

Use React and the `chart`, `peeps`, and `books` data in `App.js` to display a list of people alongside the book they liked.

Example

The `peeps` object has the people detail like "Fazal Deen":

const peeps = {
  1: {
    id: 1,
    name: 'Fazal Deen',
    readerCategory: 'champ',
  },
  .
  .
  .
};

And the `chart` array has a combination of which peeps and the book ID the liked:


const chart = [
  {
    id: 1,
    peepsID: '1',
    bookLikedID: '1',
  },
  .
  .
  .
];

The `books` object has the book names like "Imran Series":

const books = {
  1: {
    id: 1,
    name: 'Imran Series',
  },

From this information, one of the list items might look like this:

* Fazal Deen's likes a Imran Series book.
