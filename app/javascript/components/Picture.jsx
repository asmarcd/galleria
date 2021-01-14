import React from 'react';

const Picture = (props) => {

    const {name, caption, url} = props

    return (
        <div>{name}, {caption}, {url}</div>
    )
};

export default Picture;