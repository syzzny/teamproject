import { TextField } from '@mui/material';
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

export const styleForm = styled.form`
    width: 360px;
`
export const Aglog = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`
export const StyledFieldset = styled.div`
    max-width: 360px;
    margin: 0 auto;
    margin-top: 32px;
    margin-bottom: 32px;
`
export const StyledLabel = styled.label`
    color: rgb(103,109,114);
    display: block;
    margin-bottom: 6px;
    text-align: initial;
    font-family: 'Noto Sans KR';
`
export const StyledWrapper = styled.div`
    width: 100%;
`
export const StyledInput = styled(TextField)`
    width: 360px;
    height: 45px;
    background-color: #F9FAFB;
    border-radius: 5px;
    
    & .MuiOutlinedInput-root {
    border: none;
    font-size: 14px;
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'Noto Sans KR')};
    font-weight: 500;
    height: 45px;
    }
    & .MuiOutlinedInput-notchedOutline {
    border: none;
    }
    &:hover{
        background-color: #f7f8fa;
    }
    &:focus-within {
        border: 1px solid #000000;
    }
`