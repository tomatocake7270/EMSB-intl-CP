import React from 'react';
import { UncontrolledCarousel, Container, Row, Col, Jumbotron, Button} from 'reactstrap';
import Announce from './AnnounceComp';
import Gallery from './HomeGalleryComp';
import Stories from './HomeStoriesComp';

const items = [
    {
        src: 'assets/images/carousel-1.jpeg',
        altText: '',
        caption: ''
    },
    {
        src: 'assets/images/carousel-2.jpeg',
        altText: '',
        caption: ''
    },
    {
        src: 'assets/images/carousel-3.jpeg',
        altText: '',
        caption: ''
    }
  ];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };    
    }

    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    render() {
        return(
            <div>
                <Container className="homeCarousel">
                    <Row>
                    <Col md="7">
                        <UncontrolledCarousel items={items} />
                    </Col>
                    <Col md="5">
                        <Jumbotron>
                        <h1 className="display-5">EMSB International</h1>
                        <p className="lead">Être Bilingue, C'est Gagnant!</p>
                        {/* <p className="lead">Best Bilingual Education in Québec!</p> */}
                        {/* <hr className="my-2" /> */}
                        {/* <p>smaller texts</p> */}
                        <p className="lead">
                        <Button color="primary">Apply Now</Button>
                        </p>
                        </Jumbotron>
                    </Col>
                    </Row>
                </Container>
                <Announce />
                <Stories />
                <Gallery />
            </div>
        );
    }
}

export default Home;