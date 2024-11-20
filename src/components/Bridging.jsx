import '../styles/Bridging.css'
import logo from '../assets/logo.svg'
import cross from '../assets/cross.svg'
import right from '../assets/right.svg'
import { Fragment } from 'react'
function Bridging() {
    const gap = [
        {
            feature: "Peer Networking",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Alumni Support",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Advance Curriculum",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Peer Networking",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Motivational Community",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Best Placement Packages",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Internship/ Freelancing opportunities",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Hackathons and Competitions",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Personalized Mentorship",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Specialized Clubs",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Career Support",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Soft skills and Leadership development",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Entrepreneurial Focus",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Quality",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Certificates",
            college: false,
            iit: true,
            um: true
        },
        {
            feature: "Access anytime anywhere",
            college: false,
            iit: false,
            um: true
        },
        {
            feature: "Affordable",
            college: true,
            iit: false,
            um: true
        },
    ]
    return (
        <>
            <section className="section bridge">
                <h2>Bridging the gap</h2>

                <table className="bridge-table">
                    <thead className="bridge-table-header ">
                        <tr className="bridge-table-row">
                            <td className="td-tl td-light-gray">Features</td>
                            <td className="td-light-gray">Other college</td>
                            <td className="td-light-gray">IIT/ NIT</td>
                            <td className="td-tr td-dark-green">
                                <img src={logo} alt="Logo" className="td-logo" />
                            </td>
                        </tr>
                    </thead>
                    <tbody className="bridge-table-body">
                        {
                            gap.map((item, idx) => (<tr className="bridge-table-row" key={idx}>
                                <td className={`text-left td-l${idx} td-gray`}>{item.feature}</td>
                                <td className="td-gary">
                                    <img className="td-img" src={item.college ? right : cross} alt={item.college ? "YES" : "NO"} />
                                </td>
                                <td className="td-gary">
                                    <img className="td-img" src={item.iit ? right : cross} alt={item.iit ? "YES" : "NO"} />
                                </td>
                                <td className={`td-r${idx} td-light-green`}>
                                    <img className="td-img" src={item.um ? right : cross} alt={item.um ? "YES" : "NO"} />
                                </td>

                            </tr>))
                        }
                    </tbody>
                </table>
                <div className="bridge-bottom">
                    <h2 className="bridge-bottom-heading">Are you from a Tier 2-3 College?</h2>
                    <div className="bridge-tier3">
                        <div className="bridge-tier3-left">
                            <p className="">Your <br /> College </p>
                            <p className="">+</p>
                            <img src={logo} alt="UM Logo" className="tier3-logo" />
                        </div>
                        <div className="bridge-tier3-middle">&gt;&gt;</div>
                        <h3 className="bridge-tier3-right">IIT / NIT <br /> College</h3>
                    </div>
                    <button className="green-btn tier3-join">Join Now</button>
                </div>
            </section>
        </>
    );
}

export default Bridging;