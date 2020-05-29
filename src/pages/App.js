import React from "react";
import styled from "styled-components";

import CardVertical from "../components/Modules/CardVertical";

const CardData = [
    {
        image: "/images/idus1.png",
        label: "Card Label",
        title: "Card title",
        check: [
            { name: "hilight", check: true },
            { name: "Cross Out", check: false },
        ],
        stars: 4,
        comment: "Card Titlesadasdf dsfas df asdf asdf asdf asdf asdf asdf",
    },
];

const App = () => {
    const Wrapper = styled.div`
        width: 1400px;
        margin: 50px auto 0;
        > div {
            float: left;
        }
    `;

    return (
        <Wrapper>
            <CardVertical CardData={CardData[0]} />
            <CardVertical CardData={CardData[0]} />
            <CardVertical CardData={CardData[0]} />
        </Wrapper>
    );
};

export default App;
