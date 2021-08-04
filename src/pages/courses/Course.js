import FooterComponent from "../../components/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent";
import CourseLearnerComponent from "../../components/CourseLearnerComponent";
import CourseTeacherComponent from "../../components/CourseTeacherComponent";

const Course = () => {
    const user = JSON.parse(localStorage.getItem('state'));
    return(
        <>
            <HeaderComponent />
            <br/>
            {
                user.role === 'Learner' ? <CourseLearnerComponent /> :  <CourseTeacherComponent />
            }
            <br/>
            <FooterComponent />
        </>
    );
}

export default Course;