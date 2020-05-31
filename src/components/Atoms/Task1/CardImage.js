import React from "react";
import styled, { css } from "styled-components";
import { centerContent } from "../../../Mixins";

const Image = styled.p`
    position: relative;
    padding-bottom: 100%;
    border-bottom: 1px solid #ccc;
    img {
        ${centerContent}
        max-width: 100%;
        max-height: 100%;
    }
    ${(props) =>
        props.st === "horizontal" &&
        css`
            border-bottom: none;
            border-right: 1px solid #ccc;
        `}
`;

const CardImage = ({ image, title, styles }) => {
    return (
        <Image st={styles}>
            <img src={image} alt={`${title} 이미지`} draggable="false" />
        </Image>
    );
};

export default CardImage;
