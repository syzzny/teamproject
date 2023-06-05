import styled from 'styled-components';

export const HeaderStyle = styled.header`
    font-family: ${({ isEnglish }) => (isEnglish ? 'Montserrat' : 'SUITE-Regular')};
    position: fixed;
    display: flex;
    justify-content: center;
    padding: 22px 30px;
    left: 0;
    right: 0;
    top: 0;
`
export const InnerStyle = styled.div`
    width: 100%;
    max-width: 1780px;
    display: flex;
    border-radius: 5.2023121387vw;
    background-color: #f5f5f5;
    padding: 12px 30px;
`
export const LogoImage = styled.img`
    width: 110px;
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
`
export const MenuStyle = styled.div`
    flex: 1 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    margin-left: 70px;
`
export const MenuItems = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
export const MenuUtil = styled.div`
    display: flex;
    align-items: center;
`
export const MenuItems_item = styled.div`
    margin-left: 23px;
    padding: 0 8px;
`
export const MenuItems_item_slide = styled.div`
    margin-left: 23px;
    padding: 0 8px;
    & ::after{
        content: "";
        display: inline-flex;
        width: 24px;
        height: 24px;
        background: url(./assets/img/icon-arrow-down.png) no-repeat 100%;
        font-size: 18px
    }
`
export const ProfileImg = styled.img`
    width: 56px;
    height: 56px;
    background-color: #f2f2f2;
    border: 1px solid;
    border-radius: 50%;
    margin-left: 23px;
`