import React from "react";
import styled from "styled-components";

const AuthorText = styled.div`
    padding-left: 10px;
    font-size: 14px;
    color: #666;
`;

const Author = ({ author }) => {
    return <AuthorText>| {author}</AuthorText>;
};

export default Author;
