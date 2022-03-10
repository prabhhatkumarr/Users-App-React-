import React from 'react';
import Header from './components/Header';
import TableHeader from './components/tableHeader';
import Content from './components/content';

function App() {
  return (
    <div id="body">
      <div id='content'>
        <div>
          <Header />
        </div>
        <div id='tableHeader'>
          <TableHeader />
        </div>
        <div id='items'>
          <Content />
        </div>
        <div className='bot_border'></div>
      </div>
    </div>
  );
}

export default App;
