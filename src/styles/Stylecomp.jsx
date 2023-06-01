import styled from 'styled-components';


export const StyledText = styled.div`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'Noto Sans KR')};
    font-size: 1.7rem;
    font-weight: 500;
`;
export const Text = styled.div`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'Noto Sans KR')};
    font-size: 1rem;
    color: #4D555C;
`;
export const TextSpan = styled.span`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'Noto Sans KR')};
    font-size: 1rem;
    color: #509DE0;
    font-weight: 500;
    cursor: pointer;
    text-decoration: underline;
`;

export const Wrap = styled.div`
    display: flex;
`
export const JoinWrap = styled.div`
    flex: 1.3 1 auto;
    background-image: url('../assets/img/login.jpg');
    background-size: cover;
    padding: 181px 0px 0px 127px;
`
export const Jointext = styled.div`
    flex: 1;
    padding: 60px 0;
`
export const LogoImage = styled.img`
    width: 110px;
`
export const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
    text-align: initial;
`
export const Aglog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`