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

    return({ loading, catalog, id });
}

export const useAddToCatalog = () => {
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [rel_year, setRelyear] = useState('');
    const [label, setLabel] = useState('');
    
    const handleCatalogInput = (textValue, nameValue ) => {
        if(nameValue === 'artist') {
            setArtist(textValue)
        } else if (nameValue === 'album') {
            setAlbum(textValue)
        } else if (nameValue === 'release-year') {
            setRelyear(textValue)
        } else if (nameValue === 'label') {
            setLabel(textValue)
        }

    };
    
    return { artist, album, rel_year, label, handleCatalogInput }
}

export const useEditCatalogItem = () => {
    const [loading, setLoading] = useState(true);
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [rel_year, setRelyear] = useState('');
    const [label, setLabel] = useState('');
    const {id} = useParams();

    useEffect(() => {
        fetchCatalogItemById(id)
            .then((item) => {
                setArtist(item.Artist);
                setAlbum(item.Album);
                setRelyear(item.Released);
                setLabel(item.Label);
            })
            .finally(() => setLoading(false));
    }, [] );

    const handleCatalogEdit = (textValue, nameValue ) => {
        if(nameValue === 'artist') {
            setArtist(textValue)
        } else if (nameValue === 'album') {
            setAlbum(textValue)
        } else if (nameValue === 'release-year') {
            setRelyear(textValue)
        } else if (nameValue === 'label') {
            setLabel(textValue)
        }
    };   
    return { artist, album, rel_year, label, loading, id, handleCatalogEdit }
}

