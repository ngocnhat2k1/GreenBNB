import styles from './CommonBanner.module.scss'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

function CommonBanner(prop) {
    return (
        <section id={styles.commonBanner}>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className={styles.commonBannerText}>
                            <h2>{prop.namePage}</h2>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default CommonBanner