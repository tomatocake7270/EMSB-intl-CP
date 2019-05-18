import React from 'react';
import Home from './HomeComp';
import Admission from './AdmissionComp';
import AdmissionS2 from './AdmissionStep2Comp';
import AdmissionS3 from './AdmissionStep3Comp';

import StudentsStudy from './StudentsStudyComp';
import StudentsHealth from './StudentsHealthComp';

import Schools from './SchoolsComp';
import SchoolFACE from './SchoolFACEComp';
import CurrentSchool from './SchoolsRenderComp';

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
                <Home/>
            );
        }
        const AdmissionPage = () => {
            return(
                <Admission/>
            );
        }
        const SchoolsPage = () => {
            return (
                <Schools/>
            );
        }
        const StudentsPage = () => {
            return (
                <Students/>
            );
        }
        const ContactsPage = () => {
            return (
                <Contacts/>
            );
        }
        const AdmissionS2Page = () => {
            return (
                <AdmissionS2/>
            )
        }
        const AdmissionS3Page = () => {
            return (
                <AdmissionS3/>
            )
        }
        const StudentsStudyPage = () => {
            return (
                <StudentsStudy/>
            )
        }
        const StudentsHealthPage = () => {
            return (
                <StudentsHealth/>
            )
        }
        const SchoolFACEPage = () => {
            return (
                <SchoolFACE />
            )
        }

        const SchoolInQuestion = () => {
            return (
                <CurrentSchool />
            )
        }

        return(
            <div>
                <Header />
                <Switch>
                    <Route path="/home"                     component={HomePage}/>
                    <Route exact path="/admission"          component={AdmissionPage}/>
                    <Route exact path="/contacts"           component={ContactsPage}/>
                    
                    <Route exact path="/admission/step2"    component={AdmissionS2Page}/>
                    <Route exact path="/admission/step3"    component={AdmissionS3Page}/>
                    
                    <Route exact path="/schools"            component={SchoolsPage}/>
                    <Route exact path="/schools/face"       component={SchoolFACEPage} />
                    {/* <Route exact path="/schools/"  */}

                    <Route exact path="/students/study"     component={StudentsStudyPage}/>
                    <Route exact path="/students/health"    component={StudentsHealthPage}/>
                    <Route exact path="/students"           component={StudentsPage}/>
                    
                    <Redirect to="/home"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;