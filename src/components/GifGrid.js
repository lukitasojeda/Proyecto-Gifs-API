import React from 'react';
import "animate.css";

import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    // console.log( loading );
 

    return (
        <div className="card-grid">
            <h3>{category}</h3>
            { loading && <p>Loading</p> }
                {
                    images.map( img => {
                        return <GifGridItem key={img.id} {...img} />
                    })
                }
        </div>
    );
}

export default GifGrid;