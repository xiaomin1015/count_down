function Nav( props ) {
    const page = props.page;
    const onClick = props.onClick;

    function makeClass(here) {
        if(page === here) {
            return 'main-nav__link main-nav__link--here';
        }
        return 'main-nav__link';
    }

    function onNav(e, target) {
        e.preventDefault();
        onClick(target);
    }

    return (
        <nav className = "main-nav">
            <ul className = "main-nav__list">
                <li className = "main-nav__item">
                    <a className = {makeClass('Home')}
                       href = "/home"
                       onClick = {(e) => onNav(e,'Home')}
                    >
                        Home
                    </a>
                </li>

                <li className = "main-nav__item">
                    <a className = {makeClass('Actionable')}
                       href = "/actionable"
                       onClick = {(e) => onNav(e,'Actionable')}
                    >
                        Actionable tips
                    </a>
                </li>

                <li className = "main-nav__item">
                    <a className = {makeClass('Write')}
                       href = "/write"
                       onClick = {(e) => onNav(e,'Write')}
                    >
                        Count Down
                    </a>
                </li>

                <li className = "main-nav__item">
                    <a className = {makeClass('Similar')}
                       href = "/similar"
                       onClick = {(e) => onNav(e,'Similar')}
                    >
                        Not alone
                    </a>
                </li>

                <li className = "main-nav__item">
                    <a className = {makeClass('Professional')}
                       href = "/professional"
                       onClick = {(e) => onNav(e,'Professional')}
                    >
                        Professional Help?
                    </a>
                </li>

                <li className = "main-nav__item">
                    <a className = {makeClass('Privacy')}
                       href = "/privacy"
                       onClick = {(e) => onNav(e,'Privacy')}
                    >

                    </a>
                </li>

            </ul>

        </nav>
    );
}
export default Nav;