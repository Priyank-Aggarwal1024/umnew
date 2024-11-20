import '../styles/Certificate.css'
import certificate from '../assets/certificate.svg'
function Certificate() {
    return (
        <>
            <section className="section certificate">
                <h2 className="text-center">Certifications</h2>
                <p className="certificate-para">Complete all lectures and assignments to receive your certification! With respect to the Course you choose to complete</p>
                <img src={certificate} alt="Certificate" className="certificate-img" />
            </section>
        </>
    );
}

export default Certificate;