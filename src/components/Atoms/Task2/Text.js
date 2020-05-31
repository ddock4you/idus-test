import React from "react";
import styled, { css } from "styled-components";

const TextArea = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 10px 40px 10px 10px;
    border: 1px solid #ccc;
    resize: none;
    &::placeholder {
        color: red;
        font-weight: 600;
    }
    ${(props) =>
        props.readOnly === true &&
        css`
            background: lightblue;
        `}
`;

const Text = ({ textValue, handleChange, fullText, disable, readonly }) => {
    return (
        <TextArea
            placeholder="주문 요청사항을 입력해주세요."
            value={textValue}
            onChange={handleChange}
            maxLength={fullText}
            readOnly={readonly ? true : false}
            disabled={disable ? true : false}
        />
    );
};

export default Text;
