import './subheader.css';
function SubHeader({title}) {
    return (
        <>
            <p>
                <span className="sub-header">
                    {title}
                </span>
            </p>
        </>
    )
}

export default SubHeader;