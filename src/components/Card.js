import React from 'react'

function Card(props) {

    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'block';
        }, 0)
    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div onDragStart={dragStart} onDragOver={dragOver}>
            {props.children}
        </div>
    )
}

export default Card