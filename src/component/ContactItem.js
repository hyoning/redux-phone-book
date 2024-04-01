import React from 'react'
import {Row, Col} from 'react-bootstrap';
import Person from '../assets/images/Unknown_person.jpg';

const ContactItem = ({item}) => {
  return (
    <div>
        <Row className="mb-3 item-box">
            <Col xs={2} className="item-img">
                <img src={Person} alt=""/>
            </Col>
            <Col xs={10}>
                <div className="name">{item.name}</div>
                <div className="phone">{item.phoneNumber}</div>
                {item.formGroup && item.formGroup !== "그룹을 선택해주세요." && (
                   <div className="group">{item.formGroup}</div>
                )}
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem