import React from 'react';
import Navbar from 'components/Navbar';

function App(props) {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <h2 className='mb-5 p-2'>Web Gallery</h2>
    </div>
  );
}

export default App;
