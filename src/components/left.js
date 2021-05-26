import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';

function Left(props) {

    const drop = e => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = "block";

        e.target.appendChild(card);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div className="leftSection">
            <div className="scrollbar" id="style-2">
                <div className="force-overflow" id={props.id} onDrop={drop} onDragOver={dragOver}>
                    <Row>
                        {props.children}
                    </Row>
                </div>
            </div>
        </div >
    )
}

export default Left;