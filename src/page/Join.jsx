import React, { useState } from 'react'
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {
    Wrap, JoinWrap, Jointext, LogoImage, TextWrap, StyledText, Aglog, Text, TextSpan, styleForm
    , StyledInput, StyledFieldset, StyledLabel, StyledWrapper, StyledIconButton
} from '../styles/Stylecomp'

import VisibilityOffOutlined  from '@mui/icons-material/VisibilityOffOutlined';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Password, VisibilityOutlined } from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';

const theme = createMuiTheme();

export default function Join() {
    const isEnglish = false;
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState('');

    // email
    const handleInputChange = (event) =>{
        const inputValue = event.target.value;
        const emailRegex = /^\S+@\S+\.\S+$/; // 이메일 유효성을 검사하는 정규식

        setEmail(inputValue);

        // 입력된 값이 이메일 형식에 맞지 않을 경우
        if (!emailRegex.test(inputValue)){
            setEmailError(true);
        }
        // 입력된 값이 이메일 형식에 맞을 경우 이메일 에러 상태를 false로 설정
        else{
            setEmailError(false);
        }
    };

    // password
    const handleInputPw = (event) =>{
        const inputValue = event.target.value;
        
        setPassword(inputValue);
    }
    const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

//   const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();
//   };
    return (
        <ThemeProvider theme={theme}>
        <Wrap>
            <JoinWrap />
            <Jointext>
                <TextWrap>
                    <LogoImage src="../assets/img/logo.svg" alt="" />
                    <Aglog>
                        <StyledText isEnglish={isEnglish}>회원가입</StyledText>
                        <Text>
                            이미 계정이 있으신가요?
                            <TextSpan>로그인</TextSpan>
                        </Text>
                    </Aglog>
                </TextWrap>
                <styleForm>
                    {/* 이메일 */}
                    <StyledFieldset>
                        <StyledLabel>이메일</StyledLabel>
                        <StyledWrapper>
                            <StyledInput
                                id='email'
                                aria-invalid='false'
                                autoComplete='username'
                                placeholder='이메일을 입력해주세요'
                                inputProps={{
                                    maxLength: 60,
                                    autoComplete: 'off',
                                    }}
                                error = {emailError}
                                variant="outlined"
                                helperText={emailError ? '유효한 이메일 주소를 입력해주세요' : ''}
                                value={email}
                                onChange={handleInputChange}
                                >
                            </StyledInput>
                        </StyledWrapper>
                    </StyledFieldset>

                    {/* 비밀번호 */}
                    <StyledFieldset>
                        <StyledLabel>비밀번호</StyledLabel>
                        <StyledWrapper>
                            <StyledInput
                                id='password'
                                type = 'password'
                                aria-invalid='false'
                                // 새로운 비밀번호를 입력할 때는 기존에 저장된 비밀번호를 자동 완성하지 않도록 설정합니다.
                                autoComplete='new-password'
                                placeholder='비밀번호를 입력해주세요'
                                inputProps={{
                                    maxLength: 60,
                                    autoComplete: 'off',
                                    }}
                                variant="outlined"
                                value={password}
                                onChange={handleInputPw}
                                endAdornment = {
                                    <InputAdornment position="end">
                                    <StyledIconButton
                                        aria-label='비밀번호 표시 여부 전환'
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={(event)=>event.preventDefault()}
                                        edge = "end"    
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </StyledIconButton>
                                    </InputAdornment>
                                    
                                }
                                >
                            </StyledInput>
                            <StyledIconButton
                                        aria-label='비밀번호 표시 여부 전환'
                                        onClick={handleClickShowPassword}
                                        // onMouseDown={(event)=>event.preventDefault()}
                                        edge = "end"    
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </StyledIconButton>
                        </StyledWrapper>
                    </StyledFieldset>

                    {/* 비밀번호 확인 */}
                    <StyledFieldset>
                        <StyledLabel>비밀번호 확인</StyledLabel>
                        <StyledWrapper>
                            <StyledInput
                                id='email'
                                aria-invalid='false'
                                autoComplete='username'
                                placeholder='비밀번호를 입력해주세요'
                                inputProps={{
                                    maxLength: 60,
                                    autoComplete: 'off',
                                    }}
                                error = {emailError}
                                variant="outlined"
                                helperText={emailError ? '유효한 이메일 주소를 입력해주세요' : ''}
                                value={email}
                                onChange={handleInputChange}
                                >
                            </StyledInput>
                        </StyledWrapper>
                    </StyledFieldset>

                    {/* 이름 */}
                    <StyledFieldset>
                        <StyledLabel>이름</StyledLabel>
                        <StyledWrapper>
                            <StyledInput
                                id='email'
                                aria-invalid='false'
                                autoComplete='username'
                                placeholder='비밀번호를 입력해주세요'
                                inputProps={{
                                    maxLength: 60,
                                    autoComplete: 'off',
                                    }}
                                error = {emailError}
                                variant="outlined"
                                helperText={emailError ? '유효한 이메일 주소를 입력해주세요' : ''}
                                value={email}
                                onChange={handleInputChange}
                                >
                            </StyledInput>
                        </StyledWrapper>
                    </StyledFieldset>
                </styleForm>
            </Jointext>
        </Wrap>
        </ThemeProvider>
    )
}
