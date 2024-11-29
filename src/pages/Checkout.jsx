import '../styles/Checkout.css'
import logo from '../assets/logo.svg'
import ssl from '../assets/ssl.svg'
import secure from '../assets/secure.svg'
import razorpay from '../assets/razorpay.svg'
import { useState } from 'react';
function Checkout() {
    const plans = [
        {
            time: "1 Month",
            price: "99",
            text: "One-time purchase plan"
        }, {
            time: "3 Months",
            price: "299",
            text: "Standard price plan"
        }, {
            time: "6 Months",
            price: "589",
            text: "Standard price plan"
        }, {
            time: "12 Months",
            price: "299",
            text: "Standard price plan"
        }
    ];
    const [select, setSelect] = useState(2);
    const benefits = [
        "20+ Courses",
        "Resume Building",
        "Hackathons",
        "Practical Projects",
        "Live Mentorship",
        "& more"
    ]
    const [coupoun, setCoupoun] = useState("");
    const [apply, setApply] = useState(false)
    return (
        <>
            <div className="checkout-navbar">
                <img src={logo} alt="UM logo" className="checkout-logo" />
                <div className="checkout-navbar-vertical"></div>
                <div className="checkout-navbar-para">Order Summary</div>
            </div>
            <div className="checkout-main">
                <div className="checkout-main-middle">
                    <div className="checkout-main-middle-inner">
                        <div className="checkout-main-left">
                            <div className="cml-top">
                                <div className="">
                                    <p className="cml-top-onemembership">One Membership</p>
                                    <p className="cml-top-unlimited"> Learn, Build, Network & Earn</p>
                                </div>
                                <div className="checkout-benefits-outer">
                                    <div className="checkout-benefits">
                                        {benefits.map((item) => (<div className="checkout-benefit" key={item}>{item}</div>))}
                                    </div>
                                </div>
                            </div>
                            <div className="cml-bottom-plans">
                                {
                                    plans.map((item, idx) => <div className={`cml-bottom-plan ${idx == select && "cml-bottom-plan-active"}`} key={idx} onClick={() => setSelect(idx)}>
                                        <div className="cmlbp-left">
                                            <div className="cmlbp-left-inner"></div>
                                        </div>
                                        <div className="cml-bp-right">
                                            <div className="cml-bp-right-head">₹ {item.price} For {item.time}</div>
                                            <div className="cml-bp-right-text">{item.text}</div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="checkout-main-right-outer">
                            <div className="cml-bottom">
                                <div className="cml-bottom-para">Apply Coupon</div>
                                <div className="cml-bottom-coupoun">
                                    {
                                        apply ? <p>{coupoun}</p> : <input type='text' onChange={({ target }) => setCoupoun(target.value)} placeholder='Apply Coupoun' className="coupoun-input" />
                                    }
                                    {
                                        apply ? <div className="coupoun-remove" onClick={() => { setApply(false); setCoupoun("") }}>Remove <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M13.7334 12.3328L17.5047 8.55768C17.7495 8.27939 17.8792 7.91831 17.8674 7.54783C17.8555 7.17734 17.7031 6.82527 17.441 6.56317C17.1789 6.30106 16.8268 6.1486 16.4563 6.13677C16.0858 6.12494 15.7247 6.25464 15.4465 6.49949L11.6713 10.2707L7.88937 6.48782C7.75391 6.35236 7.5931 6.2449 7.41611 6.17159C7.23912 6.09828 7.04942 6.06055 6.85785 6.06055C6.66627 6.06055 6.47658 6.09828 6.29959 6.17159C6.1226 6.2449 5.96178 6.35236 5.82632 6.48782C5.69086 6.62328 5.5834 6.7841 5.51009 6.96109C5.43678 7.13808 5.39905 7.32777 5.39905 7.51935C5.39905 7.71092 5.43678 7.90062 5.51009 8.07761C5.5834 8.2546 5.69086 8.41541 5.82632 8.55087L9.60924 12.3328L5.83799 16.107C5.69008 16.2392 5.57071 16.4002 5.48717 16.5801C5.40363 16.7601 5.35768 16.9551 5.35213 17.1534C5.34658 17.3517 5.38155 17.5491 5.4549 17.7334C5.52824 17.9177 5.63842 18.0852 5.7787 18.2254C5.91897 18.3657 6.08639 18.4759 6.27072 18.5492C6.45504 18.6226 6.65239 18.6576 6.85069 18.652C7.049 18.6465 7.24408 18.6005 7.42401 18.517C7.60395 18.4334 7.76494 18.3141 7.89715 18.1662L11.6713 14.3949L15.4416 18.1662C15.7152 18.4397 16.0862 18.5934 16.4731 18.5934C16.86 18.5934 17.2311 18.4397 17.5047 18.1662C17.7782 17.8926 17.9319 17.5215 17.9319 17.1346C17.9319 16.7477 17.7782 16.3767 17.5047 16.1031L13.7334 12.3328Z" fill="#FF5A5A" />
                                        </svg></div> : <div className="coupoun-apply" onClick={() => setApply(true)}>Apply</div>
                                    }
                                </div>
                            </div>
                            <div className="checkout-main-right">
                                <div className="checkout-right-top">
                                    <div className="checkout-right-top-detail">DETAILS</div>
                                    <div className="checkout-plan-topay">
                                        <p>{plans[select].time}</p>
                                        <p>₹{plans[select].price}</p>
                                    </div>
                                    <button className="btn green-btn checkout-join-btn">Join Now at ₹{plans[select].price}</button>
                                </div>
                                <p className="hidden-charges">
                                    No other Hidden Charges
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="checkout-bottom">
                    <div className="checkout-bottom-company">
                        <img src={ssl} alt="SSL" className="ssl-img" />
                        <img src={razorpay} alt="razorpay" className="razorpay-img" />
                        <img src={secure} alt="Secure" className="secure-img" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;