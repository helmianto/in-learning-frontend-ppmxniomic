import React, { useState } from 'react';
import { Row, Col, Card, Icon, TextInput, Button } from 'react-materialize';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
// API Function
import API from '../services';

const Login = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleFormChange = (event) => {
        let formNew = {...formData};
        // const date = new Date();
        // let timestamp = date.getTime();
        // if(!isUpdate) formPostNew['id'] = timestamp;
        formNew[event.target.name] = event.target.value;
        setFormData(formNew);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.email === '' || formData.password === ''){
            Swal.fire(
                'Login Gagal',
                'Form harus diisi',
                'error'
            )
        } else {
            API.postData('login', formData).then(res => {
                // console.log(res, "Data");
                if(res.status){
                    localStorage.setItem("tokenInLearning", res.token);
                    localStorage.setItem("state", JSON.stringify(res.data));
                    history.push('/home');
                } else {
                    Swal.fire(
                        'Eror',
                        res.message,
                        'error'
                    )
                }
            })
        }
    }
    return(
        <>
            <br />
            <br />
            <br />
            <Row>
                <Col
                    m={4}
                    s={12}
                ></Col>
                <Col
                    m={4}
                    s={12}
                >
                <Card
                    title="Login"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    <Row>   
                        <form>
                            <TextInput
                                id="email"
                                name="email"
                                label="Email"
                                email
                                s={12}
                                m={12}
                                l={12}
                                onChange={handleFormChange}
                            />                   
                            <TextInput
                                id="password"
                                name="password"
                                password
                                label="Password"
                                validate
                                s={12}
                                m={12}
                                l={12}
                                onChange={handleFormChange}
                            />     
                            <Button
                                node="button"
                                style={{
                                    marginRight: '5px'
                                }}
                                waves="light"
                                className="right indigo darken-3"
                                onClick={handleSubmit}
                            >
                                Login
                            </Button>  
                        </form>                  
                    </Row>
                </Card>
                </Col>
                <Col
                    m={4}
                    s={12}
                ></Col>
            </Row>
        </>
    );
}

export default Login;