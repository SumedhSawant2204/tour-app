import React,{useRef, useState} from 'react'
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating';
import Booking from '../components/Booking/Booking';

const TourDetails = () => {

  const {id} = useParams()
  const reviewMsgRef = useRef('')
  const [tourRating, setTourRating]=useState(null)

  const tour = tourData.find(tour=> tour.id===id)

  const{photo, title, desc, price, address, reviews, city, distance, maxGroupSize} = tour;

  const {totalRating, avgRating} = calculateAvgRating(reviews);

  const options = { day:"numeric", month: "long",year: "numeric"};

  const submitHandler = e=>{
    e.preventDefault()
    const reviewText = reviewMsgRef.current.value;
    
  }

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <div className="tour__content">
                <img src={photo} alt="" />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                  <span className="tour_rating d-flex align-items-center gap-1">
                    <i class="ri-star-fill"></i> {avgRating===0 ? null : avgRating}
                    {totalRating===0 ? (
                        "not rated"
                    ) : (
                        <span>({reviews?.length})</span>
                    )} 
                  </span>
                  <span>
                    <i class="ri-map-pin-fill"></i> {address}
                  </span>
                  </div>
                  <div className="tour__extra-deatils">
                    <span><i class="ri-building-2-line"></i> {city}</span>                    
                    <span><i class="ri-money-rupee-circle-line"></i> {price}</span>                    
                    <span><i class="ri-pin-distance-fill"></i> {distance} KM</span>
                    <span><i class="ri-group-fill"></i> {maxGroupSize} </span>

                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={()=> setTourRating(1)}>1<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=> setTourRating(2)}>2<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=> setTourRating(3)}>3<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=> setTourRating(4)}>4<i class="ri-star-s-fill"></i></span>
                      <span onClick={()=> setTourRating(5)}>5<i class="ri-star-s-fill"></i></span>
                    </div>
                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder="share" required/>
                      <button className="btn primary__btn text-white" type="submit">Submit</button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {reviews?.map(review => (
                      <div className="review__item">
                        <div className="w-100">
                          <div className="d-flex align-items-center justify-content-between">
                            <div>
                              <h5>Sumedh</h5>
                              <p>{new Date('01-18-2024').toLocaleDateString("en-US", options)}</p>
                            </div>
                            <span className="d-flex align-items-center">
                              5<i class="ri-star-s-fill"></i>
                            </span>
                          </div>
                          <h6>Amazing Tour</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>

              </div>
            </Col>
            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default TourDetails;
