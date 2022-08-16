import React, { useEffect }  from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { createToast } from '../../utility/toast';


const Verify = () => {

    const params = useParams();
    const navigate = useNavigate();

    useEffect( () => {

        axios.post('http://localhost:5050/api/user/verify', params)
        .then( res => {
            
            createToast("Account activated successfully");
            navigate('/login');

        })
        .catch( error => {

            createToast("Account activated failed");
            navigate('/login');

        });

    });

  return (
    <>
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={ 4 }>
                    <Card>
                        <Card.Header><h4>Verify Your Account</h4></Card.Header>
                        <Card.Body>
                            <form action="">
                                <div className="my-2">OTP Code</div>
                                <input type="text" name="code" className="form-control" />
                                <Button type='submit' variant='primary' className='my-3'>Verify</Button>
                            </form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
};

export default Verify;