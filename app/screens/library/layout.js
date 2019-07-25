import React from 'react';

import Book from './components/Book';

import img from './assets/img_book1.png';

function Library() {
  return (
    <Book
      title='A Little Bird Told Me'
      author='Timothy Cross'
      img={img}
    />
  );
}

export default Library;
