import {
    Col,
    Container,
    Row,
} from 'react-bootstrap';
import { IoStarOutline, IoBedOutline, IoBulbOutline, IoWalletOutline } from "react-icons/io5";


const Marketing = () => (
    <Container className="marketing__container" fluid>
        <h2>Your Confort Is Our #1 Priority</h2>
            <Row>
                <Col className="marketing__sellers--col" sm={12} md={3} xl={3}>
                    <div className="marketing__icon">
                        <IoBedOutline />
                    </div>
                    <div className="marketing__text">
                        <h3>Quality Products</h3>
                        <p>Our premium products got the finest quality cotton that create an exquisite lightweight textile</p>
                    </div>
                </Col>
                <Col className="marketing__sellers--col" sm={12} md={3} xl={3}>
                    <div className="marketing__icon">
                        <IoStarOutline/>
                    </div>
                    <div className="marketing__text">
                        <h3>Lifetime Warrent</h3>
                    <p>Our premium products got the finest quality cotton that create an exquisite lightweight textile</p>
                    </div>
                </Col>
                <Col className="marketing__sellers--col" sm={12} md={3} xl={3}>
                   
                    <div className="marketing__icon">
                       <IoBulbOutline />
                    </div>
                    <div className="marketing__text">
                        <h3>Stress Free Shopping</h3>
                     <p>Our premium products got the finest quality cotton that create an exquisite lightweight textile</p>
                    </div>
                   
                </Col>
                <Col className="marketing__sellers--col" sm={12} md={3} xl={3}>
                    <div className="marketing__icon">
                        <IoWalletOutline />
                    </div>
                    <div className="marketing__text">
                        <h3>Fair Prices</h3>
                     <p>Our premium products got the finest quality cotton that create an exquisite lightweight textile</p>
                    </div>
                </Col>
            </Row>
    </Container>
)


export default Marketing;