import React, {useState} from 'react'
import { HeaderStyle, InnerStyle, LogoImage, MenuStyle, MenuItems, MenuUtil, MenuItems_item
    , MenuItems_item_slide, ProfileImg, SubItems, SubLink
} from '../styles/NavStylecomp'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';

export default function NavHeader() {

    const [isCommunityHovered, setCommunityHovered] = useState(false);

    const handleCommunityHover = () => {
        setCommunityHovered(true);
    };
    const handleCommunityLeave = () => {
        setCommunityHovered(false);
    }

    return (
        <HeaderStyle>
            <InnerStyle>
                <LogoImage src = "./assets/img/logo.svg"/>
                <MenuStyle>
                    <MenuItems>
                        <MenuItems_item>
                            <p>Shopping</p>
                        </MenuItems_item>
                        <MenuItems_item>
                            <p>Place</p>
                        </MenuItems_item>
                        <MenuItems_item_slide
                            onMouseEnter={handleCommunityHover}
                            onMouseLeave={handleCommunityLeave}
                            >
                            <p>Community</p>
                            {
                                isCommunityHovered ? (<ArrowDropUpSharpIcon/>)
                                : (<ArrowDropDownIcon/>)
                            }
                            <SubItems>
                                <SubLink>Mungstagram</SubLink>
                                <SubLink>Mung's News</SubLink>
                            </SubItems>
                        </MenuItems_item_slide>
                        <MenuItems_item>
                            <p>Notice</p>
                        </MenuItems_item>
                    </MenuItems>

                    <MenuUtil>
                        <MenuItems_item>
                            <p>My Like</p>
                        </MenuItems_item>
                        <MenuItems_item>
                            <p>Cart</p>
                        </MenuItems_item>
                        <ProfileImg>

                        </ProfileImg>
                    </MenuUtil>
                </MenuStyle>
            </InnerStyle>
        </HeaderStyle>
    )
}
