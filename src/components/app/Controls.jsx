import React from 'react';
//import PropTypes from 'prop-types';

const Controls = ({}) => {
    return( 
        <>
        <form>
            <input type="text" placeholder="Artist" aria-label="artist-input" name="artist" />
            <input type="text" placeholder="Album" aria-label="album-input" name="album" />
            <input type="text" placeholder="Release Year" aria-label="rel-year-input" name="release-year" />
            <input type="text" placeholder="Label" aria-label="label-input" name="label" />
        </form>
        <button>Add!</button>
    
        </>
    )
}

export default Controls;