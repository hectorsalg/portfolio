import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Home.css';

function Home() {
    return (
        <Container className="d-flex flex-column pt-8 h-container-home mb-5">
            <div className="flex-grow-1">
                <Row className="align-items-center">
                    <Col xs={12} lg={6}>
                        <p className='fw-bold mb-5 text-apresentation'>
                            Oi, <br />
                            Eu sou o <span className='text-primary'>Hector</span> <br />
                            Engenheiro Front-end.
                        </p>
                        <Button
                            variant="primary"
                            className='fw-bold px-5 py-2 mb-5 d-flex d-lg-inline-block justify-content-center'
                            href="mailto:hecsalgueiros@gmail.com"
                        >
                            Contato
                        </Button>
                    </Col>
                    <Col xs={12} lg={6} className="text-center">
                        <p className='fw-bold text-home'>&lt;<span className='text-primary'>/</span>&gt;</p>
                    </Col>
                </Row>
            </div>

            <div className='d-flex gap-4 container-icons justify-content-center justify-content-lg-start'>
                <Button
                    variant="outline-primary"
                    href='https://www.linkedin.com/in/hectorsalg/'
                    target="_blank"
                    className='fs-3 px-3 py-2'
                >
                    <i className="bi bi-linkedin"></i>
                </Button>
                <Button
                    variant="outline-dark"
                    href='https://github.com/hectorsalg'
                    target="_blank"
                    className='fs-3 px-3 py-2'
                >
                    <i className="bi bi-github"></i>
                </Button>
                <Button
                    variant="outline-success"
                    href='https://wa.me/5589999756861'
                    target="_blank"
                    className='fs-3 px-3 py-2'
                >
                    <i className="bi bi-whatsapp"></i>
                </Button>
            </div>
        </Container>
    );
}

export default Home;
