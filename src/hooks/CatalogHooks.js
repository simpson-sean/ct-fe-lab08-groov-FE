import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCatalog, fetchCatalogItemById } from '../services/GroovCatalogAPI';

export const useGetCatalogList = () => {
    const [loading, setLoading] = useState(true);
    const [catalog, setCatalog] = useState([])

    useEffect(() => {
        fetchCatalog().then((catalog) => {
            setCatalog(catalog);
            setLoading(false);
        })
    }, [] )

    return(
        {catalog, loading}
    )
}

export const useGetCatalogItemById = () => {
    const [loading, setLoading] = useState(true);
    const [catalog, setCatalog] = useState({});
    const {id} = useParams()

    useEffect(() => {
        fetchCatalogItemById(id).then((catalog) => {
            setCatalog(catalog);
            setLoading(false);

        })
    }, [] )

    return({ loading, catalog });
}