import React from 'react'
import '../styles/home.css'

import { Container, Row, Col} from 'reactstrap'
import heroImg from '../assets/images/heroImg.jpg'
import heroImg1 from '../assets/images/heroImg1.jpg'
import heroImg2 from '../assets/images/heroImg2.jpg'
import Subtitle from './../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'

const Home = () => {
  return <>
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__Content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know before you go"} />
                <img src="" alt="" />
              </div>
              <h1>Traveling opens the door to creating memories</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque ex enim nulla labore alias veritatis illo libero quos eveniet corporis adipisci tempore autem, sequi vitae! Iure totam blanditiis autem.</p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box ">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
              <img src={heroImg1} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg2} alt="" />
            </div>
          </Col>
          <SearchBar />
        </Row>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col lg="3">
            <h5 className="services__subtitle">what we serve</h5>
            <h2 className="services__title">we offer our best service</h2>
          </Col>
          <ServiceList />
        </Row>
      </Container>
    </section>


    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb=5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured_tour-title">Tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
    </section>
    </>
}

export default Home;
