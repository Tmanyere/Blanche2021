import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";



const Images = () => (
    <Container fluid>
        <p style={{textAlign: 'center', color: 'black' }}>Follow us on <IoLogoInstagram/></p>
        <Row>
            <Col className="images__1" sm={12} md={3} xl={3}>
            </Col>
            <Col className="images__2" sm={12} md={3} xl={3}>
            </Col>
            <Col className="images__3" sm={12} md={3} xl={3}>
            </Col>
            <Col className="images__4" sm={12} md={3} xl={3}>
            </Col>
        </Row>
    </Container>
)


export default Images;