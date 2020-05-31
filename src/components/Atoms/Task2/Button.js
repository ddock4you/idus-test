import React from "react";
import styled from "styled-components";

const Btn = styled.button`
    display: none;
    width: 80px;
    height: 100px;
    background: #fff;
    border: 1px solid #ccc;
    color: green;
    cursor: pointer;
    &.active {
        display: inline-block;
    }
`;

const Button = ({ textValue }) => {
    return (
        <Btn type="submit" className={textValue === "" ? "" : "active"}>
            Save
        </Btn>
    );
};

export default Button;
