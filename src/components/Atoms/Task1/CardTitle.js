import React from "react";
import styled, { css } from "styled-components";

const Title = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 30px;
    margin-bottom: 10px;
    text-overflow: ellipsis;

    ${(props) =>
        props.styles === "horizontal" &&
        css`
            font-weight: 700;
        `}
`;

const CardTitle = ({ title, styles }) => {
    return <Title>{title}</Title>;
};

export default CardTitle;
