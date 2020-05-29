import React from "react";
import styled from "styled-components";
import { centerContent } from "../../Mixins";

const CardImage = ({ image, title }) => {
    const Image = styled.p`
        position: relative;
        padding-bottom: 100%;
        img {
            ${centerContent}
            max-width: 100%;
            max-height: 100%;
        }
    `;

    return (
        <Image>
            <img src={image} alt={title} />
        </Image>
    );
};

export default CardImage;
