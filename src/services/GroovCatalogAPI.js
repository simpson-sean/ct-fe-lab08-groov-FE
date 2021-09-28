//FETCHES FULL CATALOG
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
//FETCHED CATALOG ENTRIES BY ID
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
//POSTS A NEW CATALOG ENTRY
export const postCatalogItem = (newArtist) => {
    return fetch(`https://groov-be.herokuapp.com/api/v1/vinyl/`, {method: 'POST', body: JSON.stringify(newArtist), headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }} )   
        .then((res) => res.json());
}
//UPDATES A CATALOG ENTRY
export const updateCatalogItem = async (id, newArtist) => {
    return fetch(`https://groov-be.herokuapp.com/api/v1/vinyl/${id}`, {method: 'PUT', body: JSON.stringify(newArtist), headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }} )   
        .then((res) => res.json());
}

export const deleteCatalogEntryById = (id) => {
    return fetch(`https://groov-be.herokuapp.com/api/v1/vinyl/${id}`, { method: 'DELETE' })
      .then((res) => res.json());
  };

