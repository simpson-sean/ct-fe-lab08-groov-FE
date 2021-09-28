import React from "react";
import { Link } from "react-router-dom";
import { useEditCatalogItem } from "../../hooks/CatalogHooks";
import { updateCatalogItem } from "../../services/GroovCatalogAPI";


const EditCatalogItem = () => {

    const { id, artist, album, rel_year, label, loading, handleCatalogEdit } = useEditCatalogItem();

    const handleSubmit = (e) => {
        e.preventDefault();
        const editRecord = {artist, album, rel_year, label};
        updateCatalogItem(id, editRecord);
    }

    if(loading)return<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifimage.net%2Fwp-content%2Fuploads%2F2018%2F05%2Fspinning-record-gif.gif&f=1&nofb=1" 
                          alt="loading spinner" />

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div><input type="text" placeholder="Artist" aria-label="artist-input" name="artist" value={artist} onChange={ (e) => handleCatalogEdit(e.target.value, e.target.name) } /></div>
            <div><input type="text" placeholder="Album" aria-label="album-input" name="album" value={album} onChange={ (e) => handleCatalogEdit(e.target.value, e.target.name) } /></div>
            <div><input type="text" placeholder="Release Year" aria-label="rel-year-input" name="release-year" value={rel_year} onChange={ (e) => handleCatalogEdit(e.target.value, e.target.name) } /></div>
            <div><input type="text" placeholder="Label" aria-label="label-input" name="label" value={label} onChange={ (e) => handleCatalogEdit(e.target.value, e.target.name) } /></div>
            <button type="submit" onClick={() => location.replace(`/${id}`)}>Update Catalog</button>
        </form>
        </>
    )
}

export default EditCatalogItem;