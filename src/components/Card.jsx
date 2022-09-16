import React from 'react'
import BootstrapCard from "react-bootstrap/Card"

const Card = ({ src, titulo, descripcion }) => {
    return (
        <div class="title">
             <BootstrapCard style={{ width: "18rem" }}>
                <BootstrapCard.Img variant="top" src={src}
                />
                <BootstrapCard.Body>
                    <BootstrapCard.Title>{titulo}</BootstrapCard.Title>
                    <BootstrapCard.Text>
                        {descripcion}
                    </BootstrapCard.Text>
                </BootstrapCard.Body>
            </BootstrapCard> 

        </div>

    )
};

export default Card;