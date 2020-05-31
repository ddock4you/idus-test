import React from "react";
import styled from "styled-components";

const Check = styled.div`
    span {
        padding-right: 5px;
        font-size: 14px;
        color: red;
        &:last-child {
            padding-right: 0;
        }
        &.deleted {
            font-size: 12px;
            color: #ccc;
            text-decoration: line-through;
        }
    }
`;

const ContentCheck = ({ check }) => {
    return (
        <Check>
            {check.map((item, i) => (
                <span key={i} className={item.check ? "" : "deleted"}>
                    {item.name}
                </span>
            ))}
        </Check>
    );
};

export default ContentCheck;
