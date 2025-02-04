import React from 'react'
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";

const quick__links=[
    {
        path:'/home',
        display:'Home',
    },
    {
        path:'/about',
        display:'About',
    },
    {
        path:'/tours',
        display:'Tours',
    },
];

const quick__links2=[
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    },
];

const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg="3">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <p>Lorem ipsum</p>
                    </div>
                    <div className="social__links d-flex align-item-center gap-4">
                        <span>
                            <Link to='#'><i class="ri-youtube-line"></i></Link>
                        </span>
                        <span>
                            <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                        </span>
                        <span>
                            <Link to='#'><i class="ri-instagram-line"></i></Link>
                        </span>
                    </div>
                </Col>
                <Col lg='3'>
                    <h5 className="footer__link-title">Discover</h5>
                    <ListGroup className="footer__quick-links">
                        {
                            quick__links.map((item, index)=>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                    <h5 className="footer__link-title">Quick links</h5>
                    <ListGroup className="footer__quick-links2">
                        {
                            quick__links2.map((item, index)=>(
                                <ListGroupItem key={index} className="ps-0 border-0">
                                    <Link to={item.path}>{item.display}</Link>
                                </ListGroupItem>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                    <h5 className="footer__link-title">Contact</h5>
                    <ListGroup className="footer__quick-links2">
                        {
                            
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                    <h6>
                                        
                                    </h6>
                                    
                                </ListGroupItem>
                            
                        }
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
