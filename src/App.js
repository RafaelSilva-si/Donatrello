//Arquivo responsavél por renderizar todos os componentes

import React from 'react'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'


import ColumnItems from './components/ColumnItems';
import Header from "./components/Header";
import GlobalStyle from "./styles/global";

function App() {
  
  return (
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <Header />
        <ColumnItems />
    </DndProvider>
  );
}

export default App;
