import { business, creative, tech } from '../courses';
import '../styles/Courses.css'
import CourseCard from './reusable/CourseCard';
import { useState } from 'react';
function Courses({ setDivbg, setCurriculum }) {
    return (
        <>

            <section className="section">
                <div className="courses">
                    <h2 className="text-center courses-heading">Courses and curriculum</h2>
                    <div className="courses-main">
                        <div className="courses-main-cards">
                            <h3 className="">Technical Courses </h3>
                            <div className="courses-main-cards-inner">
                                {
                                    tech.map((course, idx) => <CourseCard key={idx} course={course} setDivbg={setDivbg} setCurriculum={setCurriculum} />)
                                }
                            </div>
                        </div>
                        <div className="courses-main-cards">
                            <h3 className="">Creative/Art Course </h3>
                            <div className="courses-main-cards-inner">
                                {
                                    creative.map((course, idx) => <CourseCard key={idx} course={course} setDivbg={setDivbg} setCurriculum={setCurriculum} />)
                                }
                            </div>
                        </div>
                        <div className="courses-main-cards">
                            <h3 className="">Business Course</h3>
                            <div className="courses-main-cards-inner">
                                {
                                    business.map((course, idx) => <CourseCard key={idx} course={course} setDivbg={setDivbg} setCurriculum={setCurriculum} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default Courses;