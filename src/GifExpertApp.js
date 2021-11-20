import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Rick and Morty']);

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } categories={ categories } />
            <hr />

        <ol>
            {
                categories.map( category => 
                <GifGrid 
                    key={ category }
                    category={ category } 
                />
                )
            }
        </ol>
        </div>
    )
};

export default GifExpertApp;