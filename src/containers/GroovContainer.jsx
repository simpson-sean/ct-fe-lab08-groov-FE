import React from 'react';
import Header from '../components/app/Header.jsx';
import Controls from '../components/app/Controls.jsx';
import CatalogList from '../components/Catalog/CatalogList.jsx';
import { useGetCatalogList } from '../hooks/CatalogHooks.js';


const GroovContainer = () => {
    
    
    
    const {loading, catalog} = useGetCatalogList();
    console.log('LOOK HERE', catalog);

    if(loading)return<img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C?v=v2" 
                          alt="loading spinner" />
        
    return<>
        <Header />
        <Controls />
        <CatalogList records={catalog} />
        <h1>This is GroovContainer</h1>
    </>
    
};

export default GroovContainer;