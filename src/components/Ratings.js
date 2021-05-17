import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';
import RatingIcon from '../assets/images/rating.png';
import {Link} from 'react-router-dom';


const Rating = () => (
    <Container className="rating__container" fluid>
        <Row>
            <Col className="marketing__sellers--col" sm={12} md={12} xl={12}>
                <div className="rating__icon">
                    <img src={RatingIcon} />
                </div>
                <div className="rating__text">
                    <h4>"This is the best towl set i've ever had; it's color,
                        comfortable and aesthetically perfect"</h4>
                    <Link>Read Testimonials</Link>
                </div>
            </Col>
        </Row>
    </Container>
)


export default Rating;