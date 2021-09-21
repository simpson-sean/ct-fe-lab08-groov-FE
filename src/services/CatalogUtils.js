export const formatCatalog = (json) => {
    return json.catalog.map((catalog) => {
     return   {
        Band: Something,
        Album: Something,
        Year: Something,
        }
    });
}

export const fetchCatalogBySearch = async (search) => {
    const res = await fetch(`https://someBackEndLinkHere`);
    const json = await res.json();

    return formatArticles(json);
}
