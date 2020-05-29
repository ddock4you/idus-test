import React from "react";
import styled from "styled-components";

const ContentCheck = () => {
    const Check = styled.div`
        span {
            padding-right: 5px;
            font-size: 14px;
            color: red;
            &:last-child {
                padding-right: 0;
            }
        }
    `;

    return (
        <Check>
            <span>Hilight</span>
            <span>Cross Out</span>
        </Check>
    );
};

export default ContentCheck;
