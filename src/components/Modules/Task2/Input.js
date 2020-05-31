import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../Atoms/Task2/Text";
import Button from "../../Atoms/Task2/Button";
import Remaining from "../../Atoms/Task2/Remaining";

const Textarea = styled.div`
    position: relative;
    &.active {
        display: inline-block;
        width: calc(100% - 90px);
        margin-right: 10px;
        vertical-align: top;
    }
`;

const Input = ({ disable, readonly, word }) => {
    const fullText = 10;
    const [textValue, setTextValue] = useState(!word ? "" : word);
    const [textLength, setTextLength] = useState(fullText);

    const handleChange = (e) => {
        setTextValue(e.target.value);
        setTextLength(fullText - e.target.value.length);
    };

    return (
        <form>
            <Textarea className={textValue === "" || readonly ? "" : "active"}>
                <Text
                    textValue={textValue}
                    handleChange={handleChange}
                    fullText={fullText}
                    disable={disable}
                    readonly={readonly}
                />
                <Remaining textLength={textLength} />
            </Textarea>
            {!readonly && <Button textValue={textValue} />}
        </form>
    );
};

export default Input;
