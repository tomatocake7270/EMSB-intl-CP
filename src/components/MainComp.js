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
import { schoolsInfo } from '../shared/SchoolDetails';

import Students from './StudentsComp';
import Contacts from './ContactsComp';
import Footer from './FooterComp';
import Header from './HeaderComp';
import { Switch, Route, Redirect } from 'react-router-dom';

// const SchoolInQuestion = (schoolId) => {
//     return (
//         <CurrentSchool  philo1      = {schoolsInfo[schoolId].philo[0]}
//                         philo2      = {schoolsInfo[schoolId].philo[1]}
//                         philo3      = {schoolsInfo[schoolId].philo[2]}
//                         name        = {schoolsInfo[schoolId].name}
//                         imgUrl      = {schoolsInfo[schoolId].imgUrl}
//                         intro       = {schoolsInfo[schoolId].intro}
//                         address     = {schoolsInfo[schoolId].address}
//                         telephone   = {schoolsInfo[schoolId].telephone}
//                         email       = {schoolsInfo[schoolId].email}
//                         website     = {schoolsInfo[schoolId].website} />
//     )
// }

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
                    <Route exact path="/schools/jameslyng"  component={() => {
                        return (
                            <CurrentSchool  philo1      = {schoolsInfo[1].philo[0]}
                                            philo2      = {schoolsInfo[1].philo[1]}
                                            philo3      = {schoolsInfo[1].philo[2]}
                                            name        = {schoolsInfo[1].name}
                                            imgUrl      = {schoolsInfo[1].imgUrl}
                                            intro       = {schoolsInfo[1].intro}
                                            address     = {schoolsInfo[1].address}
                                            telephone   = {schoolsInfo[1].telephone}
                                            email       = {schoolsInfo[1].email}
                                            website     = {schoolsInfo[1].website} />
                        );             
                    }} />
                    {/* <Route exact path="/schools/johnfkennedy" component={{SchoolInQuestion(2)}} /> */}

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