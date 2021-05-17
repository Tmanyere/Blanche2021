import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";



const Shop = () => (
    <Container>
        <Row>
            <Col className="bed__lines--container" sm={12} md={6} xl={6}>
                <Link to="">
                    <button className="button__shop">Shop Bed Linens</button>
                </Link>
            </Col>
            <Col className="bath__towels--container" sm={12} md={6} xl={6}>
                <Link to="">
                    <button className="button__shop">Shop Bath Towels</button>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col className="bath__robes--container" sm={12} md={6} xl={6}>
                <Link to="">
                    <button className="button__shop">Shop Bath Robes</button>
                </Link>
            </Col>
            <Col className="home__fragrances--container" sm={12} md={6} xl={6}>
                <Link to="">
                    <button className="button__shop">Shop Home Fragrances</button>
                </Link>
            </Col>
        </Row>
    </Container>
)


export default Shop;