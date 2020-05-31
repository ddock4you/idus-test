import React, { useState } from "react";
import styled from "styled-components";

const Textarea = styled.div`
    position: relative;
    &.active {
        display: inline-block;
        width: calc(100% - 90px);
        margin-right: 10px;
        vertical-align: top;
    }
`;

const Text = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 100px;
    padding: 10px 40px 10px 10px;
    resize: none;

    &::placeholder {
        color: red;
        font-weight: 600;
    }
`;

const Button = styled.button`
    display: none;
    width: 80px;
    height: 100px;
    &.active {
        display: inline-block;
    }
`;

const Remaining = styled.span`
    position: absolute;
    bottom: 10px;
    right: 10px;
    font-size: 12px;
`;

const Input = () => {
    const fullText = 10;
    const [textValue, setTextValue] = useState("");
    const [textLength, setTextLength] = useState(fullText);

    const handleChange = (e) => {
        setTextValue(e.target.value);
        setTextLength(fullText - e.target.value.length);

        if (textValue.length >= fullText) {
            setTextValue(textValue.substring(0, fullText));
        }
    };

    return (
        <form>
            <Textarea className={textValue === "" ? "" : "active"}>
                <Text
                    placeholder="주문 요청사항을 입력해주세요."
                    value={textValue}
                    onChange={handleChange}
                    maxlength="10"
                />
                <Remaining>{textLength}</Remaining>
            </Textarea>
            <Button type="submit" className={textValue === "" ? "" : "active"}>
                저장
            </Button>
        </form>
    );
};

export default Input;
