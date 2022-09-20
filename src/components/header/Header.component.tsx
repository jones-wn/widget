import { memo } from "react";
import CustomLink from '../shared/CustomLinkComponent/CustomLink.component';


const Header = () => {
    return(
        <div className="app-header">
            <ul className="app-header__list">
                <li>
                    <CustomLink to="/">Home</CustomLink>
                </li>
                <li>
                    <CustomLink to="/rangewidget" >Range</CustomLink>
                </li>
            </ul>
        </div>
    )
}

export default memo(Header);