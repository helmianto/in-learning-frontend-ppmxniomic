import React, { useState } from 'react';
import { Row, Col, Card, Icon, TextInput, Button } from 'react-materialize';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';
// API Function
import API from '../services';

const Register = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    const handleFormChange = (event) => {
        let formNew = {...formData};
        // const date = new Date();
        // let timestamp = date.getTime();
        // if(!isUpdate) formPostNew['id'] = timestamp;
        formNew[event.target.name] = event.target.value;
        setFormData(formNew);
    }

    const handleSubmit = () => {
        if (formData.email === '' || formData.password === ''){
            Swal.fire(
                'Register Gagal',
                'Form harus diisi',
                'error'
            )
        } else {
            API.postData('register', formData).then(res => {
                // console.log(res, "data");
                if(res.status){
                    history.push('/');
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
                    title="Register"
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                >
                    <Row>
                        <TextInput
                            id="name"
                            label="Nama"
                            name="name"
                            s={12}
                            m={12}
                            l={12}
                            onChange={handleFormChange}
                        />                       
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
                        <TextInput
                            id="password_confirmation"
                            name="password_confirmation"
                            password
                            label="Konfirmasi Password"
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
                            Register
                        </Button>  
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

export default Register;