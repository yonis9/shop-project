import styled from 'styled-components';

export const FooterContainer = styled.div`
    background: #343A40;
    height: 300px;
    margin-top: 100px;
    color: #dae6ea;
    padding-top: 20px;
    font-family: 'Open Sans';
`;

export const NavigationContainer = styled.div`
    height: 230px;
    display: flex;
    justify-content: space-between;
    padding: 0 150px;
    @media only screen and (max-width: 800px) {
        padding: 0 20px;
    }

`;

export const LeftNavigation = styled.ul`
    list-style: none;
    
`;

export const RightNavigation = styled.ul`
    list-style: none;
    
`;


export const Navlink = styled.li`
    cursor: pointer;
    padding: 5px;

     &:hover {
        color: white;
        }
`;

Navlink.displayName = 'Navlink';


export const FooterEnd = styled.div`
    padding: 0 50px;
    height: 70px;
    background-color: #212529;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #868E96;

    @media only screen and (max-width: 800px) {
        padding: 0 10px;
    }
`;

export const P = styled.p`
    font-size: 11px;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const LinkContainer = styled.a`
    padding: 0 10px;
    transition: 0.2s ease-in;
    text-decoration: none;
    color: #868E96;

    &:hover {
        cursor: pointer;
        color: white;
        transition: 0.2s ease-in;
    }
`;