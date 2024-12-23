import React from "react";
import styled from "styled-components";

import { getPrices } from "../assets/utils";

interface CardBalanceProps {
    price: number | any;
    available: number | any;
}
const CardBalance = ({price, available} : CardBalanceProps) => {
    return (
        <Wrapper>
            <Title>Card Balance</Title>
            <Price>{getPrices(price)}</Price>
            <AvailablePrice>{getPrices(available)} Available</AvailablePrice>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    gap: 5px;
`;
const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;
`;
const Price = styled.div`
    font-size: 25px;
    font-weight: bold;
    line-height: 100%;
`;
const AvailablePrice = styled.div`
    font-size: 14px;
    color: grey;
    line-height: 100%;
`

export default CardBalance;