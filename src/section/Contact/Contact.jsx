import Container from 'react-bootstrap/Container';
import './Contact.css';

function Contact() {
    return (
        <>
            <Container className='pt-5'>
                <h2 className='display-1 fw-bold mb-5'>Entre em <span className='text-primary'>Contato</span></h2>
                <p className='fw-bold fs-1 text-justify mb-4'>
                    Estou sempre aberto para novas oportunidades, projetos e colaborações.
                    Se quiser trocar uma ideia, tirar dúvidas ou iniciar um projeto, é só me chamar!
                </p>
                <div className='d-flex flex-row justify-content-center gap-4 fs-1'>
                    <a href="mailto:hecsalgueiros@gmail.com" className="text-danger" title="Enviar e-mail">
                        <i className="bi bi-envelope-fill"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/hectorsalg/" target="_blank" rel="noopener noreferrer" className="text-primary" title="LinkedIn">
                        <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="https://github.com/hectorsalg" target="_blank" rel="noopener noreferrer" className="text-dark" title="GitHub">
                        <i className="bi bi-github"></i>
                    </a>
                    <a href="https://wa.me/5589999756861" target="_blank" rel="noopener noreferrer" className="text-success" title="WhatsApp">
                        <i className="bi bi-whatsapp"></i>
                    </a>
                </div>
            </Container>
        </>
    );
}

export default Contact;