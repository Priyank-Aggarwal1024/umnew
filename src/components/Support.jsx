import '../styles/Support.css'
import umdash from '../assets/umdash2.svg'
import support1 from '../assets/support1.svg'
import support2 from '../assets/support2.svg'
import support3 from '../assets/support3.svg'
import support4 from '../assets/support4.svg'
function Support() {
    return (
        <>
            <section className="section">
                <div className="support">
                    <h2 className="support-heading">Kickstart your career with UpskillMafia’s support</h2>
                    <div className="support-main">
                        <div className="support-left">
                            <img src={umdash} alt="UM Dashboard" />
                        </div>
                        <div className="support-right">
                            <div className="support-right-div">
                                <img src={support1} alt="Earn with Freelance Projects" />
                                <p className="">Earn with Freelance Projects</p>
                            </div>
                            <div className="support-right-div">
                                <img src={support2} alt="Earn with Freelance Projects" />
                                <p className="">Career Guidance and Job Prep</p>
                            </div>
                            <div className="support-right-div">
                                <img src={support3} alt="Earn with Freelance Projects" />
                                <p className="">Resume Review + Mock Interview</p>
                            </div>
                            <div className="support-right-div">
                                <img src={support4} alt="Earn with Freelance Projects" />
                                <p className="">Build a Strong Professional Network</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Support;