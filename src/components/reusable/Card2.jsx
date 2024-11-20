import '../../styles/Card2.css'
import google from '../../assets/google.svg'
import star from '../../assets/star.svg'
function Card2({ review }) {
    return (
        <>
            <div className="card2">
                <div className="card2-top">
                    <div className="card2-top-left">
                        <div className="card2-tl-icon">{review.name[0]}</div>
                        <div className="card2-tl-name">{review.name}</div>
                    </div>
                    <div className="card2-top-right">
                        <img src={google} alt="Google" />
                    </div>
                </div>
                <div className="card2-middle-star">
                    <div className="card2-ms-stars">
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                        <img src={star} alt="Star" />
                    </div>
                    <div className="card2-ms-time">{review.time}</div>
                </div>
                <div className="card2-review">{review.review}</div>
            </div>
        </>
    );
}

export default Card2;