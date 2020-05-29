import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fillStar } from "@fortawesome/free-solid-svg-icons";

const Stars = ({ stars }) => {
    const Star = styled(FontAwesomeIcon)`
        margin-right: 3px;
        color: yellow;
        &:last-child {
            margin-right: 0;
        }
    `;

    return (
        <div>
            {new Array(5).fill().map((star, i) => (
                <Star icon={fillStar} />
            ))}

            {/* <Star icon={fillStar} />
            <Star icon={fillStar} />
            <Star icon={faStar} /> */}
        </div>
    );
};

export default Stars;
