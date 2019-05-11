import React from 'react';
import { UncontrolledCarousel, Container, Row, Col, Jumbotron, Button} from 'reactstrap';
import Home from './HomeComp';
import Admission from './AdmissionComp';
import Footer from './FooterComp';
import Header from './HeaderComp';
import { Switch, Route, Redirect } from 'react-router-dom';



class Main extends React.Component {
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
        const Homepage = () => {
            return(
                <Home></Home>
            );
        }
        const AdmissionPage = () => {
            return(
                <Admission></Admission>
            )
        }
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Homepage}></Route>
                    <Route exact path="/admission" component={AdmissionPage}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;