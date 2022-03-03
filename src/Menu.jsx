function Menu( props ) {
    const item = props.item;
    const onClick = props.onClick;


    function onMenu(e, target) {
        e.preventDefault();
        onClick(target);
    }

    return (
        <nav className = "professional-menu">
            <div className = "professional-menu__list">
                <button className = "professional-menu__item"
                        onClick = {(e) => onMenu(e,'Hotline')}
                >
                        Free Hotline
                </button>

                <button className = "professional-menu__item"
                        onClick = {(e) => onMenu(e,'Consulting')}
                >
                        Consulting
                </button>

            </div>

        </nav>
    );
}
export default Menu;