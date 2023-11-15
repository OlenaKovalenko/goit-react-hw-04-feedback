import styled from 'styled-components';

export const StatisicsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.spacing(2)};
    align-items: start;
    width: 220px;
    margin-left: ${p => p.theme.spacing(58)};

`;

export const StatisicsText = styled.p`
    color: ${p => p.theme.colors.black};
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 400;
`;
