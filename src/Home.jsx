
function Home( props) {
    const onClick = props.onClick;

    function onNav(e, target) {
        e.preventDefault();
        onClick(target);
    }
    return (
        <div className = "home">
            <p>
                We all get worried and anxious sometimes. It’s a normal part of life, right?
            </p>
            <p>
                People always say "hey, calm down", but sometimes it's not easy to calm yourself down
            </p>
            <p>
                Try the following steps, I'm sure it will help!
            </p>
            <button onClick = {(e) => onNav(e,'Actionable')}
            >Get Started -></button>
        </div>
    );
}
export default Home;