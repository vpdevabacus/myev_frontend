import React from 'react';
import ImageIcons from '../common/ImageIcons';


const Markers = () => {
    return (
        <img
            src={ImageIcons.marker}
            style={{ width: '35px', height: '35px', cursor: 'pointer' }}

        />
    )
}

export default Markers;
