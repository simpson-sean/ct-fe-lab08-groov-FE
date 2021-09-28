import React from 'react';
import Header from '../components/app/Header.jsx';
//import Controls from '../components/app/Controls.jsx';
import AddToCatalog from '../components/Catalog/AddCatalogItem.jsx';
import CatalogList from '../components/Catalog/CatalogList.jsx';
import { useGetCatalogList } from '../hooks/CatalogHooks.js';


const GroovContainer = () => {
    
    const {loading, catalog} = useGetCatalogList();
    console.log('LOOK HERE', catalog);

    if(loading)return<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fgifimage.net%2Fwp-content%2Fuploads%2F2018%2F05%2Fspinning-record-gif.gif&f=1&nofb=1" 
                          alt="loading spinner" />
        
    return<>
        <Header />
        <AddToCatalog />
        <CatalogList records={catalog} />
        <h1>This is GroovContainer</h1>
    </>
    
};

export default GroovContainer;