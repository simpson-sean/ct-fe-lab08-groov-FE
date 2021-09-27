export const fetchCatalog = async () => {
    return fetch('https://groov-be.herokuapp.com/api/v1/vinyl/') 
            .then((res) => res.json())
            .then((json) => 
                json.map((catalog) => ({
                    id: catalog.id,
                    Artist: catalog.artist,
                    Album: catalog.album,
                    Released: catalog.rel_year,
                    Label: catalog.label,
                }))        
            )
}

export const fetchCatalogItemById = async (id) => {
    return fetch(`https://groov-be.herokuapp.com/api/v1/vinyl/${id}`)
            .then((res) => res.json())
            .then((catalog) => ({
                id: catalog.id,
                Artist: catalog.artist,
                Album: catalog.album,
                Released: catalog.rel_year,
                Label: catalog.label,
            }));
    
}
