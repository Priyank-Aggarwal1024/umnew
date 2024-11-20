import '../styles/Checkout.css'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';
import ssl from '../assets/ssl.svg'
import secure from '../assets/secure.svg'
import razorpay from '../assets/razorpay.svg'
import checkbox from '../assets/checkbox.png'
import checkboxfilled from '../assets/checkbox-filled.png'
import clock from '../assets/clock.svg'
import { useState } from 'react';
function Checkout() {
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
                <div className="checkout-heading-div">
                    <Link to={"/"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M20.2504 10.9209H7.46335L10.0002 8.3841C10.2929 8.09155 10.4574 7.69472 10.4575 7.28089C10.4576 6.86707 10.2933 6.47016 10.0007 6.17748C9.70818 5.8848 9.31134 5.72031 8.89752 5.72021C8.4837 5.72012 8.08679 5.88441 7.79411 6.17696L4.06424 9.90683C3.38272 10.5902 3 11.516 3 12.4811C3 13.4463 3.38272 14.372 4.06424 15.0554L7.79411 18.7853C8.08679 19.0778 8.4837 19.2421 8.89752 19.242C9.31134 19.2419 9.70818 19.0775 10.0007 18.7848C10.2933 18.4921 10.4576 18.0952 10.4575 17.6814C10.4574 17.2675 10.2929 16.8707 10.0002 16.5782L7.46335 14.0413H20.2504C20.6642 14.0413 21.061 13.8769 21.3536 13.5843C21.6462 13.2918 21.8105 12.8949 21.8105 12.4811C21.8105 12.0673 21.6462 11.6705 21.3536 11.3779C21.061 11.0853 20.6642 10.9209 20.2504 10.9209Z" fill="#FFCF33" />
                        </svg>
                    </Link>
                    <p className="checkout-heading">Checkout</p>
                </div>
                <div className="checkout-main-middle">
                    <div className="checkout-main-middle-inner">
                        <div className="checkout-main-left">
                            <div className="cml-top">
                                <div className="">
                                    <p className="cml-top-onemembership">One Membership</p>
                                    <p className="cml-top-unlimited">UNLIMITED BENIFITS</p>
                                </div>
                                <div className="checkout-benefits-outer">
                                    <div className="checkout-benefits">
                                        {benefits.map((item) => (<div className="checkout-benefit" key={item}>{item}</div>))}
                                    </div>
                                </div>
                            </div>
                            <div className="cml-middle">
                                <img src={clock} alt="Clock" />
                                <p className="">Hurry! Limited Seats Available</p>
                            </div>
                            <div className="cml-bottom">
                                <div className="cml-bottom-para">Apply Coupon</div>
                                <div className="cml-bottom-coupoun">
                                    {
                                        apply ? <p>{coupoun}</p> : <input type='text' onChange={({ target }) => setCoupoun(target.value)} placeholder='Enter Coupon Code' className="coupoun-input" />
                                    }
                                    {
                                        apply ? <div className="coupoun-remove" onClick={() => { setApply(false); setCoupoun("") }}>Remove <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M13.7334 12.3328L17.5047 8.55768C17.7495 8.27939 17.8792 7.91831 17.8674 7.54783C17.8555 7.17734 17.7031 6.82527 17.441 6.56317C17.1789 6.30106 16.8268 6.1486 16.4563 6.13677C16.0858 6.12494 15.7247 6.25464 15.4465 6.49949L11.6713 10.2707L7.88937 6.48782C7.75391 6.35236 7.5931 6.2449 7.41611 6.17159C7.23912 6.09828 7.04942 6.06055 6.85785 6.06055C6.66627 6.06055 6.47658 6.09828 6.29959 6.17159C6.1226 6.2449 5.96178 6.35236 5.82632 6.48782C5.69086 6.62328 5.5834 6.7841 5.51009 6.96109C5.43678 7.13808 5.39905 7.32777 5.39905 7.51935C5.39905 7.71092 5.43678 7.90062 5.51009 8.07761C5.5834 8.2546 5.69086 8.41541 5.82632 8.55087L9.60924 12.3328L5.83799 16.107C5.69008 16.2392 5.57071 16.4002 5.48717 16.5801C5.40363 16.7601 5.35768 16.9551 5.35213 17.1534C5.34658 17.3517 5.38155 17.5491 5.4549 17.7334C5.52824 17.9177 5.63842 18.0852 5.7787 18.2254C5.91897 18.3657 6.08639 18.4759 6.27072 18.5492C6.45504 18.6226 6.65239 18.6576 6.85069 18.652C7.049 18.6465 7.24408 18.6005 7.42401 18.517C7.60395 18.4334 7.76494 18.3141 7.89715 18.1662L11.6713 14.3949L15.4416 18.1662C15.7152 18.4397 16.0862 18.5934 16.4731 18.5934C16.86 18.5934 17.2311 18.4397 17.5047 18.1662C17.7782 17.8926 17.9319 17.5215 17.9319 17.1346C17.9319 16.7477 17.7782 16.3767 17.5047 16.1031L13.7334 12.3328Z" fill="#FF5A5A" />
                                        </svg></div> : <div className="coupoun-apply" onClick={() => setApply(true)}>Apply</div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="checkout-main-right">
                            <div className="checkout-right-top">
                                <div className="payment-plan checkout-payment-plan">
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
                                <div className="checkout-plan-topay">
                                    <p>To Pay</p>
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