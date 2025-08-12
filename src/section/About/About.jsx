import Container from 'react-bootstrap/Container';
import './About.css';

function About() {
    return (
        <>
            <Container className='pt-5'>
                <h2 className='display-1 fw-bold mb-5'>Sobre <span className='text-primary'>Mim</span></h2>
                <p className='fw-bold fs-1 text-justify mb-2'>Me chamo <span className='text-primary'>Hector</span>, apaixonado por tecnologia desde criança. Na universidade aprendi os conceitos <span className='text-danger'>Back-end</span>, <span className='text-primary'>Front-end</span> e <span className='text-warning'>Full Stack</span>, mas com o passar do tempo me aprofundei nos conceitos de <span className='text-primary'>Front-end</span>. Tenho um perfil comunicativo, trabalho em equipe e gosto de aprender novas tecnologias e frameworks relacionados com a área.</p>
                <div className='d-flex flex-row justify-content-center gap-3 text-file'>
                        <i class="bi bi-database text-danger"></i>
                        <i class="bi bi-display text-primary"></i>
                        <i class="bi bi-pc-display text-warning"></i>
                </div>
            </Container>
        </>
    );
}

export default About;
