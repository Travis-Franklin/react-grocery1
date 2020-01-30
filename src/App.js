import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddGroceryItem from './grocery';

function App() {
  return (
    <div>
     <AddGroceryItem what='apple'/>
     <AddGroceryItem what='potato'/>
     <AddGroceryItem what='leek'/>
    </div>
  );
}

export default App;
