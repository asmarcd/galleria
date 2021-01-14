import React from 'react';

const Picture = (props) => {

    const { name, caption, url } = props

    return (
        <div>
            <img src = {url} alt = {name} /> 
        </div>
    )
};

export default Picture;