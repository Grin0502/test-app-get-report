import React from "react";
import styled from "styled-components";

import CheckButton from "./CheckButton";

const PaymentDue = () => {
    return (
        <Wrapper>
            <Title>No Payment Due</Title>
            <Description>You've paid your September balance.</Description>
            <CheckButton />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    height: 100%;
    gap: 3px;
`;
const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
`;
const Description = styled.div`
    font-size: 14px;
    color: grey;
    line-height: 100%;
`;

export default PaymentDue;