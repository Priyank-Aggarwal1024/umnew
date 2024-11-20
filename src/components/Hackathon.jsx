import '../styles/Hackathon.css'
import hackathon from '../assets/hackathon.svg'
function Hackathon() {
    return (
        <>
            <section className="section">
                <div className="hackathon">
                    <h2 className="text-center hackathon-heading">Hackathons and Competitions</h2>
                    <div className="hackathon-main">
                        <div className="hackathon-main-left">
                            <div className="hackathon-left-box">Join best Teams</div>
                            <div className="hackathon-left-line"></div>
                            <div className="hackathon-left-box">Build Projects</div>
                            <div className="hackathon-left-line"></div>
                            <div className="hackathon-left-box">Boost Resume </div>
                        </div>
                        <div className="hackathon-main-right">
                            <img src={hackathon} alt="Hackathon" />
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Hackathon;