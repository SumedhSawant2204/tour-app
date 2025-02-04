import React, {useState} from 'react'
import "../styles/login.css";
import { Container, Row, Col, Button, Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {

  const [credentials, setCredentials] = useState({
    email:undefined,
    password: undefined
  });
  
  const handleChange = e => {
    setCredentials(prev=>({...prev, [e.target.id]:e.target.value}));
  };

  const handleClick = e=>{
    e.preventDefault();
  };


  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className="m-auto">
            <div className="login__container d-flex justify-content-between">
              <div className="login__form">
                <h2>Login</h2>

                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                  </FormGroup>
                  <Button className="btn secondary__btn auth__btn" type="submit">Login</Button>
                </Form>
                <p>Don't have an account? <Link to='/register'>Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;
