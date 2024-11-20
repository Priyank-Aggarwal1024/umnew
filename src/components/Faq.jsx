import { useState } from 'react';
import '../styles/Faq.css'
function Faq() {
    const [faq, setFaq] = useState([
        {
            ques: "How do I join Upskill Mafia?",
            open: true,
            ans: "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities.",

        }, {
            ques: "Are there any prerequisites for enrolling in courses?",
            ans: "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities.",
            open: false
        }, {
            ques: "Can I collaborate with other learners on projects?",
            ans: "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities.",
            open: false
        }, {
            ques: "How can I get help if I have questions or issues?",
            ans: "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities.",
            open: false
        }
    ])
    const handleClick = (idx) => {
        let newFaq = faq.map((item, id) => {
            if (idx == id) {
                item.open = !item.open;
            } else {
                item.open = false;
            }
            return item
        })
        setFaq(newFaq);
    }
    return (
        <>
            <section className="section faq">
                <div className="faq-inner">
                    <div className="faq-left">
                        <p className="faq-left-para">Questions & Answers</p>
                        <h2 className="text-left">Frequently asked questions</h2>
                    </div>
                    <div className="faq-right">
                        {faq.map((item, idx) => (<div className="faq-item" key={idx} onClick={() => handleClick(idx)} >
                            <div className={`faq-item-top ${item.open && "open"}`}>
                                <div className="faq-item-top-left">{item.ques}</div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.0578 13.5669C10.8015 13.811 10.386 13.811 10.1297 13.5669L3.56721 7.31694C3.31093 7.07286 3.31093 6.67714 3.56721 6.43306C3.82349 6.18898 4.23901 6.18898 4.49529 6.43306L10.5938 12.2411L16.6922 6.43306C16.9485 6.18898 17.364 6.18898 17.6203 6.43306C17.8766 6.67714 17.8766 7.07286 17.6203 7.31694L11.0578 13.5669Z" fill={`${item.open ? "#49D043" : "white"}`} />
                                </svg>
                            </div>
                            {item.open && <div className="faq-item-ans">{item.ans}</div>}
                        </div>))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faq;