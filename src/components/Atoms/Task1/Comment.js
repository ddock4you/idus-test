import React from "react";
import styled, { css } from "styled-components";
import { skipText } from "../../../Mixins";

const Text = styled.div`
    padding: 5px 0;
    ${skipText}

    ${(props) =>
        props.styles === "horizontal" &&
        css`
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            white-space: normal;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 60px;
            margin-bottom: 15px;
            line-height: 1.4;
        `}
`;

const Comment = ({ comment, styles }) => {
    return <Text styles={styles}>{comment}</Text>;
};

export default Comment;
