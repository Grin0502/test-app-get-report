import styled from "styled-components";

const Col = styled.div<{gap?: string}>`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${props => props.gap};
`;

export default Col;