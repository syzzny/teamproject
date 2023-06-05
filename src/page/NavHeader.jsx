import React from 'react'
import { HeaderStyle, InnerStyle, LogoImage, MenuStyle, MenuItems, MenuUtil, MenuItems_item
    , MenuItems_item_slide, ProfileImg
} from '../styles/NavStylecomp'

export default function NavHeader() {
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
                        <MenuItems_item_slide>
                            <p>Community</p>
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
