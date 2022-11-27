import './checkList.css';
function CheckList({ checks }) {
    return (
        <div className="check-list">
            <ul>
                {
                checks?.map(({ id, title }) =>
                    <li key={id}>
                            <span className="hero-steps">
                                {title}
                            </span>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default CheckList;