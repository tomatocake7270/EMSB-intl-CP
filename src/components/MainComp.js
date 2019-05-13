import React from 'react';
import Home from './HomeComp';
import Admission from './AdmissionComp';
import AdmissionS2 from './AdmissionStep2Comp';
import AdmissionS3 from './AdmissionStep3Comp';
import Schools from './SchoolsComp';
import Students from './StudentsComp';
import Contacts from './ContactsComp';
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
        const HomePage = () => {
            return(
                <Home></Home>
            );
        }
        const AdmissionPage = () => {
            return(
                <Admission></Admission>
            );
        }
        const SchoolsPage = () => {
            return (
                <Schools></Schools>
            );
        }
        const StudentsPage = () => {
            return (
                <Students></Students>
            );
        }
        const ContactsPage = () => {
            return (
                <Contacts></Contacts>
            );
        }
        const AdmissionS2Page = () => {
            return (
                <AdmissionS2></AdmissionS2>
            )
        }
        const AdmissionS3Page = () => {
            return (
                <AdmissionS3></AdmissionS3>
            )
        }
        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home"             component={HomePage}></Route>
                    <Route exact path="/admission"  component={AdmissionPage}></Route>
                    <Route exact path="/schools"    component={SchoolsPage}></Route>
                    <Route exact path="/students"   component={StudentsPage}></Route>
                    <Route exact path="/contacts"   component={ContactsPage}></Route>
                    <Route exact path="/admission/step2"    component={AdmissionS2Page}></Route>
                    <Route exact path="/admission/step3"    component={AdmissionS3Page}></Route>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;