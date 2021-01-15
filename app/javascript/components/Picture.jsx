import axios from 'axios';
import React from 'react';

const Picture = (props) => {

    const { id, name, caption, url } = props

    const handleDelete = e => {
        axios.delete(`/api/v1/destroy/${id}`).catch(res => console.log(res))
    }

    return (
        <article class="tile is-child box">
            <p class="title">{name}</p>
            <p class="subtitle">{caption}</p>
            <img src={url} alt={name} />
            <br />
            <br />
            <div className="buttons is-centered">
                <button onClick={handleDelete} id={id} className="button is-danger">Delete Photo</button>
            </div>
        </article>
    )
};

export default Picture;