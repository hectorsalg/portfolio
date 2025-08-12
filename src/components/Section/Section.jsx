import Container from 'react-bootstrap/Container';
import './Section.css';

function Section(props) {
  return (
    <section id={props.id}>
        {props.children}
    </section>
  );
}

export default Section;
