import '../../styles/Card1.css'
function Card1({ item }) {
    return (
        <>
            <div className="card1">
                <div className="card1-image">
                    <img src={item?.photo} alt={item?.name} />
                </div>
                <div className="card1-bottom">
                    <div className="card1-name">{item?.name}</div>
                    <div className="card1-position">{item?.position}</div>
                    <div className="card1-company">{item?.company}</div>
                </div>
            </div>
        </>
    );
}

export default Card1;