import React from "react";
import { Link } from "react-router-dom";
import { useGetCatalogItemById } from "../hooks/CatalogHooks";
import CatalogItem from "../components/Catalog/CatalogItem";

const GroovDetailsContainer = () => {

    const {loading, catalog } = useGetCatalogItemById();

    if(loading)return<img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2" 
                          alt="loading spinner" />

    return (
        <div>
            <CatalogItem artist={catalog.Artist} album={catalog.Album} rel_year={catalog.Released} label={catalog.Label} />
            <Link to={'/'}>Back to Catalog</Link>
        </div>
    )
}

export default GroovDetailsContainer;