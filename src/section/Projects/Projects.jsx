import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Projects.css';

const projects = [
    { name: "Projeto Loja", url: "https://projeto-loja-entendo.vercel.app" },
    { name: "Projeto Pizzaria", url: "https://projeto-pizzaria-hector.vercel.app/" },
    { name: "Projeto EBAC Shoes", url: "https://hector-projeto-ebac-shoes.vercel.app/" },
    { name: "Projeto Costs", url: "https://hectorsalg.github.io/projeto-cost/" }
];

function Projects() {
    return (
        <Container className='pt-5'>
            <h2 className='display-1 fw-bold mb-5'>
                Meus <span className='text-primary'>Projetos</span>
            </h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-5">
                {projects.map((project, index) => (
                    <Col key={index}>
                        <Card className="shadow-sm text-center skill-card border-0">
                            <div className="iframe-container border-bottom">
                                <iframe
                                    src={project.url}
                                    title={project.name}
                                    className="project-iframe"
                                ></iframe>
                            </div>
                            <Card.Body>
                                <Card.Title className="fw-bold">{project.name}</Card.Title>
                                <Button
                                    variant="primary"
                                    href={project.url}
                                    target="_blank"
                                    className="mt-3 fw-bold"
                                >
                                    Ver Projeto
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Projects;
