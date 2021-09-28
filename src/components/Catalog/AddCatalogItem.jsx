import React from 'react';
import { useAddToCatalog } from '../../hooks/CatalogHooks';
import { postCatalogItem } from '../../services/GroovCatalogAPI';

const AddToCatalog = () => {
    const { artist, album, rel_year, label,  handleCatalogInput } = useAddToCatalog();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = {artist, album, rel_year, label};
        console.log("NEW RECORD", newRecord);
        postCatalogItem(newRecord);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div><input type="text" placeholder="Artist" aria-label="artist-input" name="artist" value={artist} onChange={ (e) => handleCatalogInput(e.target.value, e.target.name) } /></div>
            <div><input type="text" placeholder="Album" aria-label="album-input" name="album" value={album} onChange={ (e) => handleCatalogInput(e.target.value, e.target.name) } /></div>
            <div><input type="text" placeholder="Release Year" aria-label="rel-year-input" name="release-year" value={rel_year} onChange={ (e) => handleCatalogInput(e.target.value, e.target.name) } /></div>
            <div><input type="text" placeholder="Label" aria-label="label-input" name="label" value={label} onChange={ (e) => handleCatalogInput(e.target.value, e.target.name) } /></div>
            <button type="submit">Add to Catalog</button>
        </form>
        </>
    );
};

export default AddToCatalog;