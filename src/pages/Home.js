import React, { useEffect } from 'react';
import { Row, Col, Card, Icon, CardTitle, Pagination } from 'react-materialize';
import { useHistory } from 'react-router-dom';
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';

const Home = () => {
    const history = useHistory();
    useEffect(() => {
        const login = localStorage.getItem('tokenInLearning');
        if(!login){
            localStorage.removeItem('tokenInLearning');
            localStorage.removeItem('state');
            history.push('/');
        }
    }, []);

    return (
        <div>
            <HeaderComponent />        
            <br />
            <p>Hot List</p>
            <Row>
                <Col
                m={3}
                s={12}
                >
                <Card
                    actions={[
                    ""
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Audio</CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    Audio Technica - Mulai Dari <span style={{backgroundColor: 'orange'}}>Rp 910 rb</span>
                </Card>
                </Col>
                <Col
                m={3}
                s={12}
                >
                <Card
                    actions={[
                    ""
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone</CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    Handphone Samsung - Mulai Dari <span style={{backgroundColor: 'orange'}}>Rp 910 rb</span>
                </Card>
                </Col>
                <Col
                m={3}
                s={12}
                >
                <Card
                    actions={[
                    ""
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg"></CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    Squishy - Mulai Dari <span style={{backgroundColor: 'orange'}}>Rp 910 rb</span>
                </Card>
                </Col>
                <Col
                m={3}
                s={12}
                >
                <Card
                    actions={[
                    ""
                    ]}
                    closeIcon={<Icon>close</Icon>}
                    header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg"></CardTitle>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    Koleksi The Avanger - Mulai Dari <span style={{backgroundColor: 'orange'}}>Rp 910 rb</span>
                </Card>
                </Col>
            </Row>
            <Pagination items={10} activePage={2} maxButtons={8} />
            <FooterComponent />        
        </div>
    );  
}

export default Home;