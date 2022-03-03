function FearListItem({ fear}) {

    return (
        <li className="fear">
            <span>
                {fear.task}
            </span>
        </li>
    );
};
export default FearListItem;
