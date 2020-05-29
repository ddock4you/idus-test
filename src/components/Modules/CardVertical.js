import React from "react";
import styled from "styled-components";

import CardImage from "../Atoms/CardImage";
import CardLabel from "../Atoms/CardLabel";
import CardTitle from "../Atoms/CardTitle";
import ContentCheck from "../Atoms/ContentCheck";
import Stars from "../Atoms/Stars";
import Comment from "../Atoms/Comment";

const CardVertical = ({ CardData }) => {
    const CardVerticalStyle = styled.div`
        box-sizing: border-box;
        overflow: hidden;
        width: 250px;
        background-color: #ededed;
        border: 1px solid #bbb;
        border-radius: 5px;
    `;

    const ImageArea = styled.div``;

    const CardContentArea = styled.div`
        padding: 10px;
    `;

    const CardCommentArea = styled.div`
        display: table;
        box-sizing: border-box;
        width: 100%;
        height: 70px;
        padding: 10px;
        border-top: 1px solid #ccc;
    `;

    const StarArea = styled.div`
        display: table-row;
        width: 100%;
        vertical-align: middle;
        white-space: nowrap;
        > div {
            display: table-cell;
            padding: 5px 0;
            vertical-align: middle;
        }
    `;

    return (
        <CardVerticalStyle>
            <ImageArea>
                <CardImage image={CardData.image} title={CardData.title} />
            </ImageArea>
            <CardContentArea>
                <CardLabel label={CardData.label} />
                <CardTitle title={CardData.title} />
                <ContentCheck check={CardData.check} />
            </CardContentArea>
            <CardCommentArea>
                <StarArea>
                    <Stars stars={CardData.stars} />
                </StarArea>
                <Comment comment={CardData.comment} />
            </CardCommentArea>
        </CardVerticalStyle>
    );
};

export default CardVertical;
