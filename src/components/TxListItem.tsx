import React from "react";
import styled from "styled-components";
import { SlArrowRight } from "react-icons/sl";

import { getPrices } from "../assets/utils";

interface TxListItemProps {
    image: string,
    title: string,
    price: number,
    description: string,
    rate: string | undefined,
    location: string | undefined,
    date: string
}
const TxListItem = ({image, title, price, description, rate, location, date}: TxListItemProps) => {
    return (
        <Wrapper>
            <LogoIcon src={image}/>
            <ContentWrapper>
                <TitleWrapper>
                    <Title>{title}</Title>
                    <Price>{getPrices(price)}</Price>
                </TitleWrapper>
                <DescriptionWrapper>
                    <Description>{description}</Description>
                    {rate && <Rate>{rate}</Rate>}
                </DescriptionWrapper>
                <LocationWrapper>
                    {location && <Location>{location}&nbsp;-&nbsp;</Location>}
                    <Date>{date}</Date>
                </LocationWrapper>
            </ContentWrapper>
            <ArrowWrapper>
                <SlArrowRight />
            </ArrowWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    gap: 15px;
    border-bottom: 1px #ddd solid;
    width: 100%;
`;
const LogoIcon = styled.img`
    width: 40px;
    height: 40px;
    margin-top: 10px;
`;
const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px 0px;
`;
const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Title = styled.div`
    font-size: 16px;
    font-weight: bold;
    line-height: 100%;
`;
const Price = styled.div`
    font-size: 15px;
    font-weight: bold;
    line-height: 100%;
`;
const DescriptionWrapper = styled.div`
    font-size: 14px;
    display: flex;
    justify-content: space-between;
`;
const Rate = styled.div`
    background-color: #eee;
    color: #888;
    font-size: 12px;
    line-height: 100%;
    padding: 2px 3px;
`;
const Description = styled.div`
    color: #aaa;
    line-height: 100%;
    width: 100%;
`;
const LocationWrapper = styled.div`
    display: flex;
`;
const Location = styled.div`
    color: #aaa;
    font-size: 14px;
    line-height: 100%;
`;
const Date = styled.div`
    color: #aaa;
    font-size: 14px;
    line-height: 100%;
`;
const ArrowWrapper = styled.div`
    padding: 5px 0px;
    font-size: 14px;
    color: #aaa;
`;

export default TxListItem;