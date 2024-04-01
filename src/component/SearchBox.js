import React, { useState } from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux'

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  // eslint-disable-next-line
  let { contact } = useSelector((state) => state);
  const searchBtn = (event) => {
    event.preventDefault();
    dispatch({type:"ADD_SEARCH",payload:{keyword}});
    setKeyword("");
  }
  return (
    <div>
        <Form onSubmit={searchBtn} className="search-form">
        <Row>
            <Col lg={9}>
                <Form.Control className="mb-3" type="text" placeholder="이름을 입력해주세요." value={keyword} onChange={(event) => setKeyword(event.target.value)}/>
            </Col>
            <Col lg={3}>
                <Button className="search_btn" variant="dark" type="submit">검색</Button>
            </Col>
        </Row>
        </Form>
    </div>
  )
}

export default SearchBox