import React from 'react';
//import PropTypes from 'prop-types';

const Controls = ({}) => {
    return( 
        <>
        <form>
            <div><input type="text" placeholder="Artist" aria-label="artist-input" name="artist" /></div>
            <div><input type="text" placeholder="Album" aria-label="album-input" name="album" /></div>
            <div><input type="text" placeholder="Release Year" aria-label="rel-year-input" name="release-year" /></div>
            <div><input type="text" placeholder="Label" aria-label="label-input" name="label" /></div>
        </form>
        <button>Add!</button>
    
        </>
    )
}

export default Controls;