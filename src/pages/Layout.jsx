import { useState } from 'react';
import Alumnus from '../components/Alumnus';
import Bridging from '../components/Bridging';
import Certificate from '../components/Certificate';
import Clubs from '../components/Clubs';
import Courses from '../components/Courses';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Hackathon from '../components/Hackathon';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Network from '../components/Network';
import Support from '../components/Support';
import Testimonials from '../components/Testimonials';
import content from '../content.json'
import '../styles/Layout.css'
import cross2 from '../assets/cross2.svg'
function Layout() {
    const [divbg, setDivbg] = useState(false);
    const [curriculum, setCurriculum] = useState("")

    return (
        <div className="layout">
            {divbg && <div className="layout-div-bg">
                {divbg &&
                    <div className="course-curriculum">
                        <div className="curriculum-close" onClick={() => setDivbg(false)} >
                            <img src={cross2} alt="Close" />
                        </div>
                        <div className="course-curriculum-heading">{content[curriculum]?.name}</div>
                        <div className="course-curriculum-main">
                            <h3 className="text-left">Curriculum</h3>
                            <div className="course-curriculum-list">
                                {
                                    content[curriculum]["topics1"].map((item, idx) => <div className="course-curriculum-item" key={idx}>{item?.section_name}</div>)
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
            }
            <div className="">
                <Navbar />
                <Hero />
                <Bridging />
                <Courses setDivbg={setDivbg} setCurriculum={setCurriculum} />
                <Clubs />
                <Hackathon />
                <Support />
                <Network />
                <Certificate />
                <Alumnus />
                <Testimonials />
                <Faq />
                <Footer />
            </div>
        </div>
    );
}

export default Layout;