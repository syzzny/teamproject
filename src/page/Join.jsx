import React, { useState } from 'react'
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import {
    Wrap, JoinWrap, Jointext, LogoImage, TextWrap, StyledText, Aglog, Text, TextSpan, styleForm
    , StyledInput, StyledFieldset, StyledLabel, StyledWrapper, StyledIconButton, StyledInputPw, PwButton,
    CheckStyle, FormControlStyle, SubmitBtn, ErrorMsg
} from '../styles/Stylecomp'

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const theme = createMuiTheme();

export default function Join() {
    const isEnglish = false;
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const [name, setName] = useState('');
    const [checked, setChecked] = React.useState([false, false, false]);
    const [allChecked, setAllChecked] = React.useState(false);
    const isAllChecked = checked[0] && checked[1] && checked[2];


    // email
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const emailRegex = /^\S+@\S+\.\S+$/; // 이메일 유효성을 검사하는 정규식

        setEmail(inputValue);

        // 입력된 값이 이메일 형식에 맞지 않을 경우
        if (!emailRegex.test(inputValue)) {
            setEmailError(true);
        }
        // 입력된 값이 이메일 형식에 맞을 경우 이메일 에러 상태를 false로 설정
        else {
            setEmailError(false);
        }
    };

    // password
    const handleInputPw = (event) => {
        const inputValue = event.target.value;

        setPassword(inputValue);
    }
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // confirm password
    const handleConfirmPasswordChange = (event) => {
        const inputValue = event.target.value;

        setConfirmPassword(inputValue);

        if (inputValue !== password) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    };

    const confirmPasswordErrorMessage = passwordError ? '비밀번호가 일치하지 않습니다.' : '';

    // name
    const handleInputChangeName = (event) => {
        const inputValue = event.target.value;
        setName(inputValue);
    }


    // 약관동의
    

    const handleChange1 = (event) => {
        const isChecked = event.target.checked;
        setChecked([isChecked, isChecked, isChecked]);
        setAllChecked(isChecked && isChecked && isChecked);
    };

    // 회원가입 버튼
    // 모든 입력값이 채워졌을 때 버튼을 활성화하는 상태
    const isButtonEnabled = email && password && confirmPassword && name && !emailError && !passwordError && isAllChecked;


    const handleChange2 = (event) => {
        const isChecked = event.target.checked;
        setChecked([isChecked, checked[1], checked[2]]);
        setAllChecked(isChecked && checked[1] && checked[2]);
    };

    const handleChange3 = (event) => {
        const isChecked = event.target.checked;
        setChecked([checked[0], isChecked, checked[2]]);
        setAllChecked(checked[0] && isChecked && checked[2]);
    };

    const handleChange4 = (event) => {
        const isChecked = event.target.checked;
        setChecked([checked[0], checked[1], isChecked]);
        setAllChecked(checked[0] && checked[1] && isChecked);
    };

    


    const children = (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 0 }}>
            <FormControlLabel
                label="[필수] 19세 이상이며, 서비스 이용약관에 동의합니다."
                control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
                label="[필수] 개인정보 수집 및 이용에 동의합니다."
                control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            />
            <FormControlLabel
                label="[선택] 00에 관한 최근 소식, 혜택 및 서비스 관련 정보를
                Email로 받아보겠습니다."
                control={<Checkbox checked={checked[2]} onChange={handleChange4} />}
            />
        </Box>
    );
    return (
        <ThemeProvider theme={theme}>
            <Wrap>
                <JoinWrap src="../assets/img/login.png" />
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
                                    error={emailError}
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
                                <FormControl>
                                    <StyledInputPw
                                        id="filled-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='비밀번호를 입력해주세요'
                                        value={password}
                                        onChange={handleInputPw}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <PwButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </PwButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </StyledWrapper>
                        </StyledFieldset>

                        {/* 비밀번호 확인 */}
                        <StyledFieldset>
                            <StyledLabel>비밀번호 확인</StyledLabel>
                            <StyledWrapper>
                                <FormControl>
                                    <StyledInputPw
                                        id="confirm-password"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="비밀번호를 한 번 더 입력해주세요"
                                        value={confirmPassword}
                                        onChange={handleConfirmPasswordChange}
                                        error={passwordError}
                                        helperText={confirmPasswordErrorMessage}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <PwButton
                                                    id='pwbutton2'
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </PwButton>
                                            </InputAdornment>
                                        }
                                    />
                                </FormControl>
                                {passwordError && (
                                    <ErrorMsg>비밀번호가 일치하지 않습니다.</ErrorMsg>
                                )}
                            </StyledWrapper>
                        </StyledFieldset>

                        {/* 이름 */}
                        <StyledFieldset>
                            <StyledLabel>이름</StyledLabel>
                            <StyledWrapper>
                                <StyledInput
                                    id='name'
                                    aria-invalid='false'
                                    autoComplete='username'
                                    placeholder='이름을 입력해주세요'
                                    inputProps={{
                                        maxLength: 60,
                                        autoComplete: 'off',
                                    }}
                                    variant="outlined"
                                    value={name}
                                    onChange={handleInputChangeName}
                                >
                                </StyledInput>
                            </StyledWrapper>
                        </StyledFieldset>

                        {/* 약관동의 */}
                        <StyledFieldset>
                            <StyledLabel>약관동의</StyledLabel>
                            <StyledWrapper>
                                <CheckStyle>
                                    <FormControlStyle
                                        label="전체동의"
                                        control={
                                            <Checkbox
                                                checked={isAllChecked}
                                                onChange={handleChange1}
                                            />
                                        }
                                    />
                                    {children}
                                </CheckStyle>
                            </StyledWrapper>
                        </StyledFieldset>

                        <SubmitBtn
                            enabled={isButtonEnabled}>
                            회원가입
                        </SubmitBtn>
                    </styleForm>
                </Jointext>
            </Wrap>
        </ThemeProvider>
    )
}
