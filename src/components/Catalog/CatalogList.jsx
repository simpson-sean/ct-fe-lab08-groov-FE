import React from 'react';
import PropTypes from 'prop-types';
import CatalogItem from './CatalogItem';
import { Link } from 'react-router-dom';

const CatalogList = ({ records }) => (
    <ul>
        {records.map((record) => (
            <div key={record.id}>
                <li>
                    <Link to={`/${record.id}`}>
                    <CatalogItem 
                        artist={record.Artist}
                        album={record.Album}
                        rel_year={record.Released}
                        label={record.Label}
                    />
                    </Link>
                </li>
            </div>
        ))}
    </ul>
);

CatalogList.propTypes = {
    records: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            Artist: PropTypes.string.isRequired,
            Album: PropTypes.string.isRequired,
            Released: PropTypes.number.isRequired,
            Label: PropTypes.string.isRequired
        })
    ).isRequired
};

export default CatalogList;

