import React,{useState} from 'react'
import {Form, Button} from 'react-bootstrap';
import {useDispatch} from 'react-redux'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')
    const [formGroup, setFormGroup] = useState(''); 

    const dispatch = useDispatch();

    const addContent = (event) => {
        event.preventDefault();
        if (!name && !phoneNumber) {
            alert('이름과 전화번호를 모두 입력해주세요.'); // 알림 표시
            return; // 추가 처리 중단
        } else if(!phoneNumber){
            alert('전화번호를 입력해주세요.'); // 알림 표시
        } else if(!name){
            alert('이름을 입력해주세요.'); // 알림 표시
        } else{
            dispatch({type:"ADD_CONTACT",payload:{name, phoneNumber, formGroup}})
            setName('');
            setPhoneNumber('');
            setFormGroup('');
        }
    }


  return (
    <div>
        <Form onSubmit={addContent}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름 <span className="redInfo">* 필수</span></Form.Label>
                <Form.Control type="text" placeholder="이름을 입력해주세요." value={name} onChange={(event) => setName(event.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>전화번호  <span className="redInfo">* 필수</span></Form.Label>
                <Form.Control type="number" placeholder="전화번호를 입력해주세요"  value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect">그룹</Form.Label>
                <Form.Select id="disabledSelect" value={formGroup} onChange={(event) => setFormGroup(event.target.value)}>
                    <option>그룹을 선택해주세요.</option>
                    <option value="가족">가족</option>
                    <option value="친구">친구</option>
                    <option value="직장">직장</option>
                </Form.Select>
            </Form.Group>
            <Button className="add_btn" variant="primary" type="submit">
                추가
            </Button>
        </Form>
    </div>
  )
}

export default ContactForm