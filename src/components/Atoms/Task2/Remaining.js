import React from "react";
import styled from "styled-components";

const Re = styled.span`
    position: absolute;
    bottom: 10px;
    right: 25px;
    font-size: 12px;
`;

const Remaining = ({ textLength }) => {
    return <Re>{textLength}</Re>;
};

export default Remaining;
