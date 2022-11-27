import './infoHeader.css';
function InfoHeader({title}) {
    return (
        <>
            <p>
                <span className="info-header">
                    {title}
                </span>
            </p>
        </>
    )
}

export default InfoHeader;