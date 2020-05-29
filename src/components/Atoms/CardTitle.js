import React from "react";
import styled from "styled-components";

const CardTitle = ({ title }) => {
    const Title = styled.div`
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 30px;
        margin-bottom: 10px;
        text-overflow: ellipsis;
    `;

    return <Title>{title}</Title>;
};

export default CardTitle;
