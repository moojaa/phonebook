import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react'
import { useDispatch } from 'react-redux'


const SeacrhBox = () => {
    const [searchIndex, setSearchIndex] = useState('')
    const dispatch = useDispatch()
    const searchClick = (event) => {
        event.preventDefault()
        dispatch({ type: "SEARCH_ON", payload: {searchIndex} })
    }
    return (
        <div className='py-2'>
            <Form onSubmit={searchClick}>
                <Row>
                    <Col lg={10}>
                        <Form.Control type="text" placeholder="검색할 이름을 입력해주세요" onChange={(event) => setSearchIndex(event.target.value)} />
                    </Col>
                    <Col lg={2}>
                        <Button type='submit'>찾기</Button>
                    </Col>
                </Row>
            </Form>

        </div>
    )
}

export default SeacrhBox