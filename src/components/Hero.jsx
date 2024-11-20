import '../styles/Hero.css'
import VideoComp from './VideoComp';
import umdash from '../assets/umdash.svg'
function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-top">
                    <div className="hero-top-line"></div>
                    <p className="">Upskill & get industry ready</p>
                    <div className="hero-top-line"></div>
                </div>
                <h1 className="hero-heading">World&apos;s first virtual college, better than real</h1>
                <div className="hero-large-btn">
                    <button className="green-btn">Get Started</button>

                </div>
                <div className="hero-video">
                    <VideoComp asset={umdash} />
                </div>
                <div className="hero-small-btn">
                    <button className="green-btn">Get Started</button>
                </div>
            </div>
        </>
    );
}

export default Hero;