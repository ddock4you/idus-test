import React from "react";
import styled, { createGlobalStyle } from "styled-components";

import CardVertical from "../components/Modules/Task1/CardVertical";
import CardHorizontal from "../components/Modules/Task1/CardHorizontal";
import Input from "../components/Modules/Task2/Input";
import { clearFix } from "../Mixins";
import { FakeData } from "../Data/FakeData";

const GlobalStyles = createGlobalStyle`

    body {
    font-family: 'Noto Sans KR';
    }
`;

const Wrapper = styled.div`
    width: 1400px;
    margin: 50px auto 0;
    h1 {
        margin-bottom: 30px;
        font-size: 24px;
    }
    section {
        ${clearFix};
        margin-bottom: 30px;
        h2 {
            margin-bottom: 15px;
            font-size: 18px;
        }
        > div {
            float: left;
            margin-right: 30px;
        }
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <h1>프론트엔드 지원: 윤승현</h1>
                <section>
                    <h2>과제 1. 카드 UI</h2>
                    <CardVertical CardData={FakeData[0]} />
                    <CardVertical CardData={FakeData[1]} />
                    <CardVertical CardData={FakeData[2]} />
                    <CardHorizontal CardData={FakeData[3]} />
                </section>
                <section>
                    <h2>과제2. 입력 폼 UI</h2>
                    <Input />
                </section>
            </Wrapper>
        </>
    );
};

export default App;
