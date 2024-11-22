import '../../styles/CourseCard.css'
import eye from '../../assets/eye.svg'
import eye2 from '../../assets/eye2.svg'
function CourseCard({ course, setCurriculum, setDivbg }) {
    return (
        <div className="course-card">
            <div className="course-card-left">
                <img className="course-cl-icon" src={course?.img} />
                <p className="f-18 card-cl-text">{course?.text}</p>
            </div>
            <div className="course-card-right" onClick={() => { setDivbg(true); setCurriculum(course?.curriculum) }}>
                <img src={eye} alt="Eye" className="course-cr-view-img" />
                <img src={eye2} alt="Eye" className="course-cr-view-img2" />
                <p className="course-cr-view">view</p>
            </div>
        </div>
    );
}

export default CourseCard;