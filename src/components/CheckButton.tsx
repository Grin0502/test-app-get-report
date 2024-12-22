import React from "react";
import styled from "styled-components";

import { FaCheck } from "react-icons/fa";

const CheckButton = () => {
    return (
        <Wrapper>
            <FaCheck />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 50px;
    height: 50px;
    background-color: #ddd;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &: hover {
        background-color: #d6d6d6;
    }

    &: active {
        background-color: #ccc;
    }
`;

export default CheckButton;