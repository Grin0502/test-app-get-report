import styled from "styled-components";

const Row = styled.div<{gap?: string}>`
    display: flex;
    width: 100%;
    gap: ${props => props.gap};
`;

export default Row;