import React from 'react'
import { Wrap, JoinWrap, Jointext, LogoImage, TextWrap, StyledText, Aglog, Text, TextSpan
        } from '../styles/Stylecomp'

export default function Join() {
    const isEnglish = false;

    return (
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
                <form>
                    <div>
                        <label></label>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                </form>
            </Jointext>
        </Wrap>
    )
}
