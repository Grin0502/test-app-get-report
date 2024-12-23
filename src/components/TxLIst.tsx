import React from "react";
import styled from "styled-components";
import TxListItem from "./TxListItem";

import AppleImage from "../assets/images/apple1.png";
import AppleImage2 from "../assets/images/apple2.png";
import IKEAimage from "../assets/images/inea1.png";

const txLists = [
    {
        image: AppleImage,
        title: "Apple",
        price: 14.06,
        description: "Card Number Used",
        rate: "3%",
        location: "Diana",
        date: "Yesterday"
    },
    {
        image: AppleImage2,
        title: "Payment",
        price: 174.00,
        description: "From JPMorgan Chase Bank Natio...",
        date: "Tuesday"
    },
    {
        image: AppleImage,
        title: "Apple",
        price: 3.24,
        description: "Card Number Used",
        rate: "3%",
        location: "Diana",
        date: "Tuesday"
    },
    {
        image: AppleImage2,
        title: "Payment",
        price: 99.71,
        description: "From JPMorgan Chase Bank Natio...",
        date: "Saturday"
    },
    {
        image: AppleImage2,
        title: "Payment",
        price: 73.58,
        description: "From JPMorgan Chase Bank Natio...",
        date: "Monday"
    },
    {
        image: IKEAimage,
        title: "IKEA",
        price: 21.61,
        description: "Round Rock, TX",
        rate: "2%",
        date: "10/01/2022"
    },
    {
        image: IKEAimage,
        title: "IKEA",
        price: 21.61,
        description: "Round Rock, TX",
        rate: "2%",
        date: "10/01/2022"
    },
    {
        image: IKEAimage,
        title: "IKEA",
        price: 21.61,
        description: "Round Rock, TX",
        rate: "2%",
        date: "10/01/2022"
    },
]
const TxList = () => {
    return (
        <Wrapper>
            {
                txLists.map(txItem => (
                    <TxListItem 
                        image={txItem.image}
                        title={txItem.title}
                        price={txItem.price}
                        description={txItem.description}
                        rate={txItem.rate}
                        location={txItem.location}
                        date={txItem.date}/>
                ))
            }
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px 10px 0px 10px;
`;


export default TxList;