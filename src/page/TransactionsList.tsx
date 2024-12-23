import React from "react";
import styled from "styled-components";

import CardBalance from "../components/CardBalance";
import DailyPoints from "../components/DailyPoints";
import PaymentDue from "../components/PaymentDue";
import Row from "../components/Row";
import Col from "../components/Col";
import TxList from "../components/TxLIst";

const TransactionsList = () => {
    return (
        <Wrapper>
                <Col gap="15px">
                    <Row gap="5px">
                        <Col gap="5px">
                            <CardBalance price={17.3} available={1482.7}/>
                            <DailyPoints />
                        </Col>
                        <Col>
                            <PaymentDue />
                        </Col>
                    </Row>
                    <Col gap="5px">
                        <Title>Latest Transactions</Title>
                        <TxList />
                    </Col>
                </Col>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    padding: 5px 10px;
    width: 380px;
    height: 700px;
    overflow: auto;
`;
const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

export default TransactionsList;