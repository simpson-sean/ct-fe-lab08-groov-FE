import React from "react";
import { Link } from "react-router-dom";
import { useGetCatalogItemById } from "../hooks/CatalogHooks";
import CatalogItem from "../components/Catalog/CatalogItem";
import { deleteCatalogEntryById } from "../services/GroovCatalogAPI";

const GroovDetailsContainer = () => {

    const {loading, catalog, id } = useGetCatalogItemById();

    if(loading)return<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifimage.net%2Fwp-content%2Fuploads%2F2018%2F05%2Fspinning-record-gif.gif&f=1&nofb=1" 
                          alt="loading spinner" />

    return (
        <>
        <div>
            <CatalogItem artist={catalog.Artist} album={catalog.Album} rel_year={catalog.Released} label={catalog.Label} />
            <Link to={'/'}>Back to Catalog</Link>
        </div>
        <div>
            <Link to={`/edit/${id}`}>
            <button>edit</button>
            </Link>
            <Link to={'/'}>
            <button onClick={() => {deleteCatalogEntryById(id);} }>delete</button>
            </Link>
        </div>
        </>
    )
}

export default GroovDetailsContainer;