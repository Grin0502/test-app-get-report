import React from "react";
import styled from "styled-components";

import CardBalance from "../components/CardBalance";
import DailyPoints from "../components/DailyPoints";
import PaymentDue from "../components/PaymentDue";
import Row from "../components/Row";
import Col from "../components/Col";

const TransactionsList = () => {
    return (
        <Wrapper>
            <Row gap="5px">
                <Col gap="5px">
                    <CardBalance price={17.3} available={1482.7}/>
                    <DailyPoints />
                </Col>
                <Col>
                    <PaymentDue />
                </Col>
            </Row>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 5px 10px;
    width: 350px;
    height: 500px;
`;

export default TransactionsList;