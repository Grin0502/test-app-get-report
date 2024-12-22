import React from "react";
import styled from "styled-components";

const DailyPoints = () => {
    return (
        <Wrapper>
            <Title>Daily Points</Title>
            <Price>456K</Price>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    height: 85px;
    gap: 3px;
`;
const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
`;
const Price = styled.div`
    font-size: 14px;
    color: grey;
    line-height: 100%;
`;

export default DailyPoints;