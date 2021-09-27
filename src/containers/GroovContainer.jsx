import React from 'react';
import Header from '../components/app/Header.jsx';
import Controls from '../components/app/Controls.jsx';
import { fetchCatalog } from '../services/GroovCatalogAPI.js';


const GroovContainer = () => {

//  const [artist, setArtist] = useState('');
    console.log('LOOK HERE', fetchCatalog())
    return<>
        <Header />
        <Controls />
        <h1>This is GroovContainer</h1>
    </>
    
};

export default GroovContainer;