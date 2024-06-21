import { Container,Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function SectionCarousel({props}) {
  return (
  <Container>
      <Carousel >
      {props.map((prop)=>(
        <Carousel.Item >
        <Image src={prop.img} rounded fluid />
        <Carousel.Caption>
          <h3>{prop.title}</h3>
          <p>{prop.content}</p>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  </Container>
  );
}
export {SectionCarousel}