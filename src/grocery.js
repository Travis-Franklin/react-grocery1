import React from 'react';

function AddGroceryItem ({what}) {
    let groceryItem = `Item: ${what}`;
    return (
        <h1>{groceryItem}</h1>)
    
};

export default AddGroceryItem;