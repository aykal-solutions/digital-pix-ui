import './header.css';
function Header({title}) {
    return (
        <>
            <p>
                <span className="heading">
                    {title}
                </span>
            </p>
        </>
    )
}

export default Header;