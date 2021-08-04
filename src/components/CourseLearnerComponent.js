import { Row, Col, Collection, CollectionItem, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import CourseTakenComponent from './CourseTakenComponent';
import CourseFinishedComponent from './CourseFinishedComponent';
import CourseFreeComponent from './CourseFreeComponent';
import CoursePremiumComponent from './CoursePremiumComponent';

const CourseLearnerComponent = () => {
    const progress = window.location.pathname === '/courses' ? true : false;
    const taken = window.location.pathname === '/courses-taken' ? true : false;
    return(
        <>
            <Row>
                <Col
                    l={3}
                    m={3}
                    s={12}
                >
                    <Collection header="Pelatihan">
                        {
                            window.location.pathname === '/courses' 
                            ? <><Link to="/courses" className="white-text">
                                    <CollectionItem href="#" active={progress} >
                                    <a
                                        className="secondary-content"
                                        href="javascript:void(0)"
                                    >
                                    <Icon>assignment_turned_in</Icon>
                                    </a> 
                                    Progress Belajar
                                    </CollectionItem>
                                </Link></>
                            : <><Link to="/courses" className="teal-text">
                                    <CollectionItem href="#" active={progress} >
                                    <a
                                        className="secondary-content"
                                        href="javascript:void(0)"
                                    >
                                    <Icon>assignment_turned_in</Icon>
                                    </a> 
                                    Progress Belajar
                                    </CollectionItem>
                                </Link></>
                        }
                        {
                            window.location.pathname === '/courses-taken' 
                            ? <><Link to="/courses-taken" className="white-text">
                                    <CollectionItem href="#" active={taken} >
                                    <a
                                        className="secondary-content"
                                        href="javascript:void(0)"
                                    >
                                    <Icon>assignment</Icon>
                                    </a> 
                                    Ambil Pelatihan
                                    </CollectionItem>
                                </Link></>
                            : <><Link to="/courses-taken" className="teal-text">
                                    <CollectionItem href="#" active={taken} >
                                    <a
                                        className="secondary-content"
                                        href="javascript:void(0)"
                                    >
                                    <Icon>assignment</Icon>
                                    </a> 
                                    Ambil Pelatihan
                                    </CollectionItem>
                                </Link></>
                        }
                    </Collection>
                </Col>
                <Col
                    l={9}
                    m={9}
                    s={12}
                >
                    {
                        window.location.pathname === '/courses' 
                        ? <> <CourseTakenComponent /> <CourseFinishedComponent /> </>
                        : null
                    }
                    {
                        window.location.pathname === '/courses-taken' 
                        ? <> <CourseFreeComponent /> <CoursePremiumComponent /> </>
                        : null
                    }
                </Col>
            </Row>
        </>
    );
}

export default CourseLearnerComponent;