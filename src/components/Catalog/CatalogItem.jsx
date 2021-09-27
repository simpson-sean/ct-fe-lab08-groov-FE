import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../css/header-style.css'

const CatalogItem = ({ artist, album, rel_year, label }) => (
    <>
        <h2>{artist}</h2>
        <h3>{album}</h3>
        <p>{rel_year}</p>
        <p>{label}</p>
    </>
);

CatalogItem.propTypes = {
    artist: PropTypes.string.isRequired,
    album: PropTypes.string.isRequired,
    rel_year: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
};

export default CatalogItem;