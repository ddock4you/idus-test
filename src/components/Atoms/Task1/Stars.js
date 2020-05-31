import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fillStar } from "@fortawesome/free-solid-svg-icons";

const Star = styled(FontAwesomeIcon)`
    margin-right: 3px;
    color: gold;
    &:last-child {
        margin-right: 0;
    }
`;

const Stars = ({ stars }) => {
    return (
        <div>
            {new Array(5).fill().map((star, i) => (
                <Star icon={i < stars ? fillStar : faStar} key={i} />
            ))}
        </div>
    );
};

export default Stars;
