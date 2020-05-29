import React from "react";
import styled from "styled-components";
import { skipText } from "../../Mixins";

const Comment = ({ comment }) => {
    const Text = styled.div`
        padding: 5px 0;
        p {
            ${skipText}
        }
    `;

    return (
        <Text>
            <p>{comment}</p>
        </Text>
    );
};

export default Comment;
