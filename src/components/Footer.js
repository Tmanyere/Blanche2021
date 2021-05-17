import {
    Col,
    Container,
    InputGroup,
    FormControl,
    Row,
} from 'react-bootstrap';
import {
    Link
} from "react-router-dom";
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io5";
import Payments from '../assets/images/payments.png'



const Footer = () => (
    <footer>
        <Container className="footer__container" fluid>
            <Row>
                <Col className="footer__col" sm={12} md={3} xl={3}>
                    <h2>Our Story</h2>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci </p>
                    <div class="footer__social">
                        <a><IoLogoFacebook /></a>
                        <a> <IoLogoTwitter /></a>
                        <a><IoLogoInstagram /></a>
                    </div>
                </Col>
                <Col className="footer__col" sm={12} md={3} xl={3}>
                    <h2>More..</h2>
                    <ul>
                        <li><Link to="/story">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/track">Track My Order</Link></li>
                        <li><Link to="/faq">FAQ</Link></li>
                    </ul>
                </Col>
                <Col className="footer__col" sm={12} md={3} xl={3}>
                    <h2>Shop</h2>
                    <ul>
                        <li><Link>Bed Linen</Link></li>
                        <li><Link>Bath Towel</Link></li>
                        <li><Link>Bathrobes</Link></li>
                        <li><Link>Home Fragrances</Link></li>
                    </ul>
                </Col>
                <Col className="footer__col" sm={12} md={3} xl={3}>
                    <h2>Newsletter</h2>
                    <p>Subscribe and receive updates, access to exclusive deals, and more.</p>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Enter your email address"
                            aria-label="Enter your email address"
                            aria-describedby="email-address-addon"
                        />
                        <InputGroup.Append>
                            <InputGroup.Text id="email-address-addon">Subscribe</InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Row>
            <Row className="copyright">
                <Col sm={6} md={6}>
                    <p>© 2021, Blanche</p>
                </Col>
                <Col sm={6} md={6}>
                    <img src={Payments}/>
                </Col>
            </Row>
        </Container>
    </footer>
)


export default Footer;