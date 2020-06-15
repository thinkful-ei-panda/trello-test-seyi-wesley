import React from 'react';

export default function card(props) {
    return (
        <div className='Card'>
            <button type="button">
                delete
            </button>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
}