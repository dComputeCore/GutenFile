import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FixedSizeList as List } from "react-window";
import { JsonToTable } from "react-json-to-table";
import Loader from './Loader'
import './App.css';
import { GutenbergBook } from './utils/gutenbergFil';
import { TextileStore } from './utils/textileStore';

const Main = styled.div`
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;

  @media screen and (min-width: 1280px) {
    justify-content: flex-start;
  }
`;

const App: React.FC<{}> = () => {
  const [ebooks, setBooks] = useState<Array<GutenbergBook>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      const textile = await TextileStore.getInstance();
      const books = await textile.getAllBooks();
      console.log(books.length);
      setBooks(books);
      setLoading(false);
    }
    init();
  }, []);

  const Row = ({ index, style}) => (
    <div>
    <div style={style} className="post">
      <JsonToTable json={ebooks[index]} />
    </div>
   </div>
  );

  return (
    <Main>
      {
        loading &&
        <Loader />
      }
      {
        //   <div className="GutenbergBooks">
        //   <h1>May the force be with you</h1>
        //   <h2>DCompute project details to be updated soon!</h2>
        //   <JsonToTable json={ebooks} />
        // </div>
        <List
          width="100%"
          height={Math.max(document.documentElement.clientHeight, window.innerHeight || 0)}
          itemCount={ebooks.length}
          itemSize={500}
        >
          {Row}
        </List>
      }
    </Main>
  )
}

export default App;
