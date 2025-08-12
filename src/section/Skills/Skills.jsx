import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiReact,
    SiAngular,
    SiGit,
    SiGithub,
    SiBootstrap,
    SiSass,
    SiJquery,
    SiGulp
} from "react-icons/si";
import './Skills.css';

const skills = [
    { name: "HTML", icon: <SiHtml5 />, color: "text-orange" },
    { name: "CSS", icon: <SiCss3 />, color: "text-primary" },
    { name: "JavaScript / TypeScript", icon: <><SiJavascript className="text-warning" /> <SiTypescript className="text-primary" /></>, color: "" },
    { name: "React", icon: <SiReact />, color: "text-info" },
    { name: "Angular", icon: <SiAngular />, color: "text-danger" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple" },
    { name: "SASS", icon: <SiSass />, color: "text-pink" },
    { name: "JQuery", icon: <SiJquery />, color: "text-primary" },
    { name: "Gulp", icon: <SiGulp />, color: "text-danger" },
    { name: "Git", icon: <SiGit />, color: "text-orange" },
    { name: "GitHub", icon: <SiGithub />, color: "text-dark" }
];

function Skills() {
    return (
        <Container className='pt-5'>
            <h2 className='display-1 fw-bold mb-5'>
                Minhas <span className='text-primary'>Competências</span>
            </h2>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4 mb-5">
                {skills.map((skill, index) => (
                    <Col key={index}>
                        <Card className="shadow-sm text-center skill-card border-0">
                            <Card.Body>
                                <div className={`fs-1 mb-3 ${skill.color}`}>
                                    {skill.icon}
                                </div>
                                <Card.Title className="fw-bold">{skill.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Skills;
