import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

//제목
//좌측에 이름과 폰번호를 입력하는창과 버튼
//버튼을 누르면 우측에 리스트에 추가된다
//우측 리스트에는 검색버튼과 리스트의 총 갯수와 리스트가 있다
//검색을 하면 검색을 할수있다
//리스트에는 사진 이름 번호가 뜬다
function App() {
  return (
    <div>
      <h1 className='title'>Phone Book</h1>
      <Container>
        <Row>
          <Col md={6}>
            <ContactForm/>
          </Col>
          <Col md={6}>
          <ContactList/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
