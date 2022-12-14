import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

import { ReactComponent as Logo } from './../assets/logo.svg';
import { ReactComponent as Home } from './../assets/icon-nav-home.svg';
import { ReactComponent as Movies } from './../assets/icon-nav-movies.svg';
import { ReactComponent as TvSeries } from './../assets/icon-nav-tv-series.svg';
import { ReactComponent as Bookmark } from './../assets/icon-nav-bookmark.svg';
import avatar from './../assets/image-avatar.png';

const Header = () => {
    return (
        <header>
            <Wrapper>
                <h1>
                    <Link to='/'>
                        <Logo />
                    </Link>
                </h1>
                <div>
                    <ul>
                        <li>
                            <NavLinkStyled to='/'>
                                <Home />
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled to='/movies'>
                                <Movies />
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled to='/series'>
                                <TvSeries />
                            </NavLinkStyled>
                        </li>
                        <li>
                            <NavLinkStyled to='/bookmarked'>
                                <Bookmark />
                            </NavLinkStyled>
                        </li>
                    </ul>
                </div>
                <img src={avatar} alt='avatar' />
            </Wrapper>
        </header>
    );
};

export default Header;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: hsl(var(--semiDarkBlue));
    margin-inline: calc(-1 * var(--body-inline-padding));
    padding-block: 1rem;
    padding-inline: 16px;

    h1 {
        width: 25px;
        height: 20px;
    }

    div > ul {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5rem;
        list-style: none;
        padding-left: 0;
    }

    ul > li {
        width: 16px;
        height: 16px;
    }

    img {
        width: 24px;
        height: 24px;
    }
`;

const NavLinkStyled = styled(NavLink)`
    color: hsl(var(--greyishBlue));
    transition: color 0.2s ease-in-out;

    &.active {
        color: hsl(var(--pureWhite));
    }
`;
