import styled from 'styled-components';

export const ColleactionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;

    @media only screen and (max-width: 800px) {
        padding: 0 10px ;
    }
`;

export const CollectionTitle = styled.div`
    font-size: 38px;
    margin: 0 auto 30px;
`

export const CollectionItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    & > div {
        margin-bottom: 30px;
    }

    @media screen and (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 15px;
      }
`;