import React from 'react';
import Home from './Page/Home';
import Hi from './Page/Hi';
import Photo_Album from './Page/Photo_album';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path="/" component={ Home } exact></Route>
      <Route path="/Hi" component={ Hi }></Route>
      <Route path="/Photo_album" component={ Photo_Album }></Route>
    </div>
  );
}

export default App;