import { useState, useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import { fetchCatalog } from '../services/GroovCatalogAPI';

export const useGetCatalog = () => {
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