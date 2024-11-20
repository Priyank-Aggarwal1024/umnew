import '../styles/Network.css'
import network from '../assets/network.svg'
import networkSmall from '../assets/network-small.svg'
import { useState } from 'react';
import checkbox from '../assets/checkbox.png'
import checkboxfilled from '../assets/checkbox-filled.png'
function Network() {
    const plans = [
        {
            time: "Monthly",
            price: "699"
        }, {
            time: "Half year",
            price: "2,796"
        }, {
            time: "Annual",
            price: "6,999"
        }
    ];
    const [select, setSelect] = useState(0);
    const benefits = [
        "Virtual College Campus",
        "Resume Building",
        "Coding Challenges",
        "Practical Projects",
        "Live Mentorship",
        "Exclusive Hackathons",
        "100% Internship and Job Assistance ",
        "Practise mock interviews",
        "Access to Iconic Tech",
        "Personality developmet",
        " Startup clubs",
        "20+ Courses"
    ]
    return (
        <>
            <section className="section network">
                <h2 className="network-heading text-center">Network with
                    top 5% peers</h2>
                <img src={network} alt="Network" className="network-image network-large" />
                <img src={networkSmall} alt="Network" className="network-image network-small" />
            </section>
            <section className="section">
                <div className="payment">
                    <div className="payment-left">
                        <p className="payment-heading">
                            Upskillmafia Payment Plan
                        </p>
                        <div className="payment-plan">
                            <div className="payment-plan-popular">Most Popular</div>
                            <div className={`payment-plan-monthly ${select == 0 && "payment-plan-active"}`} onClick={() => setSelect(0)}>
                                {select == 0 ? <img src={checkboxfilled} alt="Checkbox Filled" /> : <img src={checkbox} alt="Checkbox" />}
                                <div className="payment-plan-para">
                                    <p className="">{plans[0].time}</p>
                                    <p className="payment-plan-span">(Rs {plans[0].price})</p>
                                </div>
                            </div>
                            <div className={`payment-plan-halfyearly ${select == 1 && "payment-plan-active"}`} onClick={() => setSelect(1)}>
                                {select == 1 ? <img src={checkboxfilled} alt="Checkbox Filled" /> : <img src={checkbox} alt="Checkbox" />}
                                <div className="payment-plan-para">
                                    <p className="">{plans[1].time}</p>
                                    <p className="payment-plan-span">(Rs {plans[1].price})</p>
                                </div>
                            </div>
                            <div className={`payment-plan-yearly ${select == 2 && "payment-plan-active"}`} onClick={() => setSelect(2)}>
                                {select == 2 ? <img src={checkboxfilled} alt="Checkbox Filled" /> : <img src={checkbox} alt="Checkbox" />}
                                <div className="payment-plan-para">
                                    <p className="">{plans[2].time}</p>
                                    <p className="payment-plan-span">(Rs {plans[2].price})</p>
                                </div>
                            </div>
                        </div>
                        <div className="payment-price">₹{plans[select].price} <span className="payment-price-span">per {plans[select].time}</span></div>
                        <div className="">
                            <div className="payment-join green-btn">Join Now</div>
                            <div className="payment-learnmore">
                                <span className="">Learn more  </span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                    <path d="M0.429688 5.82073H12.9108M12.9108 5.82073L8.75042 1.14032M12.9108 5.82073L8.75042 10.5011" stroke="white" strokeWidth="1.56014" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="payment-right">
                        <div className="payment-membership">One Membership</div>
                        <div className="payment-benefits-heading">UNLIMITED BENIFITS</div>
                        <div className="payment-benefits-outer">

                            <div className="payment-benefits">
                                {benefits.map((item) => (<div className="payment-benefit" key={item}>{item}</div>))}
                                <div className="payment-benefit-gray payment-benefit">and many more </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Network;