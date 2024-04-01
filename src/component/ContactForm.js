import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch();

    const addContent = (event) => {
        event.preventDefault();
        dispatch({type:"ADD_CONTACT",payload:{name, phoneNumber}})
        setName('');
        setPhoneNumber('');
    }

  return (
    <div>
        <Form onSubmit={addContent}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름을 입력해주세요." value={name} onChange={(event) => setName(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호</Form.Label>
                <Form.Control type="number" placeholder="전화번호를 입력해주세요"  value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
            </Form.Group>
            <Button className="add_btn" variant="primary" type="submit">
                추가
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm