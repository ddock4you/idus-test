import React from "react";
import styled from "styled-components";

const CardLabel = () => {
    const Label = styled.div`
        padding-bottom: 10px;
        font-size: 13px;
        color: #bbb;
    `;

    return <Label>Card Label</Label>;
};

export default CardLabel;
