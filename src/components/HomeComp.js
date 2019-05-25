import React from 'react';
import { UncontrolledCarousel, Container, Row, Col, Jumbotron, Button} from 'reactstrap';
import Announce from './AnnounceComp';
import Gallery from './HomeGalleryComp';
import Stories from './HomeStoriesComp';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

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

  const applyBtnAlert = withReactContent(Swal)

    const chooseApplyPortal = () => {
        applyBtnAlert.fire({
            title: 'Apply as ...',
            html: '<a role="button" class="btn btn-primary" target="_blank" href="https://mytruenorth.ca/famportalindex.php?db=englishmontreal"><b>Parent</b> or Student</a>' +
                  '<span>&nbsp;&nbsp;&nbsp;</span>' + 
                  '<a role="button" class="btn btn-info" target="_blank" href="https://mytruenorth.ca/appagentindex.php?db=englishmontreal">Agent or Agency</a>',              
            showCloseButton: false,
            showCancelButton: false,
            focusConfirm: false,
            showConfirmButton: false,
            width: '40%',
        })
    }

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
                        <Button color="primary" onClick={chooseApplyPortal}>Apply Now</Button>
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