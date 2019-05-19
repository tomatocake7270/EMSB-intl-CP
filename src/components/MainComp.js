import React from 'react';
import Home from './HomeComp';
import Admission from './AdmissionComp';
import AdmissionS2 from './AdmissionStep2Comp';
import AdmissionS3 from './AdmissionStep3Comp';

import Students from './StudentsComp';
import StudentZLTest from './StudentsFieldTripTestComp';
import CurrentFieldTrip from './StudentsFieldTripRenderComp';
import StudentsStudy from './StudentsStudyComp';
import StudentsHealth from './StudentsHealthComp';
import { fieldTripDetail } from '../shared/StudentsDetails';

import Schools from './SchoolsComp';
import { CurrentSchool } from './SchoolsRenderComp';
import { schoolsInfo } from '../shared/SchoolDetails';

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
        const HomePage              = () => { return ( <Home /> )}
        const AdmissionPage         = () => { return ( <Admission /> )}
        const SchoolsPage           = () => { return ( <Schools /> )}
        const StudentsPage          = () => { return ( <Students /> )}
        const ContactsPage          = () => { return ( <Contacts /> )}
        const AdmissionS2Page       = () => { return ( <AdmissionS2 /> )}
        const AdmissionS3Page       = () => { return ( <AdmissionS3 /> )}
        
        const StudentsStudyPage     = () => { return ( <StudentsStudy /> )}
        const StudentsHealthPage    = () => { return ( <StudentsHealth /> )}
        const StudentZipliningPage  = () => { 
            return (
                <CurrentFieldTrip   schedule0 = {fieldTripDetail.ziplining.schedule[0]}
                                    schedule1 = {fieldTripDetail.ziplining.schedule[1]}
                                    schedule2 = {fieldTripDetail.ziplining.schedule[2]}
                                    schedule3 = {fieldTripDetail.ziplining.schedule[3]}
                                    schedule4 = {fieldTripDetail.ziplining.schedule[4]}
                                    schedule5 = {fieldTripDetail.ziplining.schedule[5]}
                                    schedule6 = {fieldTripDetail.ziplining.schedule[6]}
                                    trip      = {fieldTripDetail.ziplining.tripName}
                                    imgs      = {fieldTripDetail.ziplining.imgUrl}
                                    location  = {fieldTripDetail.ziplining.location}
                                    intro     = {fieldTripDetail.ziplining.intro}
                                    introIcon = {fieldTripDetail.ziplining.introIcon}
                                    date      = {fieldTripDetail.ziplining.dateTime}
                                    meet      = {fieldTripDetail.ziplining.meetingPoint}
                                    back      = {fieldTripDetail.ziplining.backToMontreal}
                                    transport = {fieldTripDetail.ziplining.transportation}
                                    bring     = {fieldTripDetail.ziplining.whatToBring}
                                    wear      = {fieldTripDetail.ziplining.whatToWear} />
            )
        }
        const StudentSkiPage        = () => {
            return (
                <CurrentFieldTrip   schedule0 = {fieldTripDetail.skiBoarding.schedule[0]}
                                    schedule1 = {fieldTripDetail.skiBoarding.schedule[1]}
                                    schedule2 = {fieldTripDetail.skiBoarding.schedule[2]}
                                    schedule3 = {fieldTripDetail.skiBoarding.schedule[3]}
                                    schedule4 = {fieldTripDetail.skiBoarding.schedule[4]}
                                    schedule5 = {fieldTripDetail.skiBoarding.schedule[5]}
                                    schedule6 = {fieldTripDetail.skiBoarding.schedule[6]}
                                    trip      = {fieldTripDetail.skiBoarding.tripName}
                                    imgs      = {fieldTripDetail.skiBoarding.imgUrl}
                                    location  = {fieldTripDetail.skiBoarding.location}
                                    intro     = {fieldTripDetail.skiBoarding.intro}
                                    introIcon = {fieldTripDetail.skiBoarding.introIcon}
                                    date      = {fieldTripDetail.skiBoarding.dateTime}
                                    meet      = {fieldTripDetail.skiBoarding.meetingPoint}
                                    back      = {fieldTripDetail.skiBoarding.backToMontreal}
                                    transport = {fieldTripDetail.skiBoarding.transportation}
                                    bring     = {fieldTripDetail.skiBoarding.whatToBring}
                                    wear      = {fieldTripDetail.skiBoarding.whatToWear} />
            )
        }
        const StudentQcPage         = () => {
            return (
                <CurrentFieldTrip   schedule0 = {fieldTripDetail.qcCity.schedule[0]}
                                    schedule1 = {fieldTripDetail.qcCity.schedule[1]}
                                    schedule2 = {fieldTripDetail.qcCity.schedule[2]}
                                    schedule3 = {fieldTripDetail.qcCity.schedule[3]}
                                    schedule4 = {fieldTripDetail.qcCity.schedule[4]}
                                    schedule5 = {fieldTripDetail.qcCity.schedule[5]}
                                    schedule6 = {fieldTripDetail.qcCity.schedule[6]}
                                    trip      = {fieldTripDetail.qcCity.tripName}
                                    imgs      = {fieldTripDetail.qcCity.imgUrl}
                                    location  = {fieldTripDetail.qcCity.location}
                                    intro     = {fieldTripDetail.qcCity.intro}
                                    introIcon = {fieldTripDetail.qcCity.introIcon}
                                    date      = {fieldTripDetail.qcCity.dateTime}
                                    meet      = {fieldTripDetail.qcCity.meetingPoint}
                                    back      = {fieldTripDetail.qcCity.backToMontreal}
                                    transport = {fieldTripDetail.qcCity.transportation}
                                    bring     = {fieldTripDetail.qcCity.whatToBring}
                                    wear      = {fieldTripDetail.qcCity.whatToWear} />
            )
        }
        const StudentSugarPage      = () => {
            return (
                <CurrentFieldTrip   schedule0 = {fieldTripDetail.sugarShack.schedule[0]}
                                    schedule1 = {fieldTripDetail.sugarShack.schedule[1]}
                                    schedule2 = {fieldTripDetail.sugarShack.schedule[2]}
                                    schedule3 = {fieldTripDetail.sugarShack.schedule[3]}
                                    schedule4 = {fieldTripDetail.sugarShack.schedule[4]}
                                    schedule5 = {fieldTripDetail.sugarShack.schedule[5]}
                                    schedule6 = {fieldTripDetail.sugarShack.schedule[6]}
                                    trip      = {fieldTripDetail.sugarShack.tripName}
                                    imgs      = {fieldTripDetail.sugarShack.imgUrl}
                                    location  = {fieldTripDetail.sugarShack.location}
                                    intro     = {fieldTripDetail.sugarShack.intro}
                                    introIcon = {fieldTripDetail.sugarShack.introIcon}
                                    date      = {fieldTripDetail.sugarShack.dateTime}
                                    meet      = {fieldTripDetail.sugarShack.meetingPoint}
                                    back      = {fieldTripDetail.sugarShack.backToMontreal}
                                    transport = {fieldTripDetail.sugarShack.transportation}
                                    bring     = {fieldTripDetail.sugarShack.whatToBring}
                                    wear      = {fieldTripDetail.sugarShack.whatToWear} />
            )
        }

        const SchoolFACEPage        = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[0].philo[0]}
                                philo2      = {schoolsInfo[0].philo[1]}
                                philo3      = {schoolsInfo[0].philo[2]}
                                name        = {schoolsInfo[0].name}
                                imgUrl      = {schoolsInfo[0].imgUrl}
                                intro       = {schoolsInfo[0].intro}
                                address     = {schoolsInfo[0].address}
                                telephone   = {schoolsInfo[0].telephone}
                                email       = {schoolsInfo[0].email}
                                website     = {schoolsInfo[0].website} />
            )
        }
        const SchoolJLPage          = () => {
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
            )
        }
        const SchoolJFKPage         = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[2].philo[0]}
                                philo2      = {schoolsInfo[2].philo[1]}
                                philo3      = {schoolsInfo[2].philo[2]}
                                name        = {schoolsInfo[2].name}
                                imgUrl      = {schoolsInfo[2].imgUrl}
                                intro       = {schoolsInfo[2].intro}
                                address     = {schoolsInfo[2].address}
                                telephone   = {schoolsInfo[2].telephone}
                                email       = {schoolsInfo[2].email}
                                website     = {schoolsInfo[2].website} />
            )
        }
        const SchoolLBPPage         = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[3].philo[0]}
                                philo2      = {schoolsInfo[3].philo[1]}
                                philo3      = {schoolsInfo[3].philo[2]}
                                name        = {schoolsInfo[3].name}
                                imgUrl      = {schoolsInfo[3].imgUrl}
                                intro       = {schoolsInfo[3].intro}
                                address     = {schoolsInfo[3].address}
                                telephone   = {schoolsInfo[3].telephone}
                                email       = {schoolsInfo[3].email}
                                website     = {schoolsInfo[3].website} />
            )
        }
        const SchoolLHPage          = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[4].philo[0]}
                                philo2      = {schoolsInfo[4].philo[1]}
                                philo3      = {schoolsInfo[4].philo[2]}
                                name        = {schoolsInfo[4].name}
                                imgUrl      = {schoolsInfo[4].imgUrl}
                                intro       = {schoolsInfo[4].intro}
                                address     = {schoolsInfo[4].address}
                                telephone   = {schoolsInfo[4].telephone}
                                email       = {schoolsInfo[4].email}
                                website     = {schoolsInfo[4].website} />
            )
        }
        const SchoolJPIPage         = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[5].philo[0]}
                                philo2      = {schoolsInfo[5].philo[1]}
                                philo3      = {schoolsInfo[5].philo[2]}
                                name        = {schoolsInfo[5].name}
                                imgUrl      = {schoolsInfo[5].imgUrl}
                                intro       = {schoolsInfo[5].intro}
                                address     = {schoolsInfo[5].address}
                                telephone   = {schoolsInfo[5].telephone}
                                email       = {schoolsInfo[5].email}
                                website     = {schoolsInfo[5].website} />
            )
        }
        const SchoolLMACPage        = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[6].philo[0]}
                                philo2      = {schoolsInfo[6].philo[1]}
                                philo3      = {schoolsInfo[6].philo[2]}
                                name        = {schoolsInfo[6].name}
                                imgUrl      = {schoolsInfo[6].imgUrl}
                                intro       = {schoolsInfo[6].intro}
                                address     = {schoolsInfo[6].address}
                                telephone   = {schoolsInfo[6].telephone}
                                email       = {schoolsInfo[6].email}
                                website     = {schoolsInfo[6].website} />
            )
        }
        const SchoolMMAPage         = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[7].philo[0]}
                                philo2      = {schoolsInfo[7].philo[1]}
                                philo3      = {schoolsInfo[7].philo[2]}
                                name        = {schoolsInfo[7].name}
                                imgUrl      = {schoolsInfo[7].imgUrl}
                                intro       = {schoolsInfo[7].intro}
                                address     = {schoolsInfo[7].address}
                                telephone   = {schoolsInfo[7].telephone}
                                email       = {schoolsInfo[7].email}
                                website     = {schoolsInfo[7].website} />
            )
        }
        const SchoolRMHPage         = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[8].philo[0]}
                                philo2      = {schoolsInfo[8].philo[1]}
                                philo3      = {schoolsInfo[8].philo[2]}
                                name        = {schoolsInfo[8].name}
                                imgUrl      = {schoolsInfo[8].imgUrl}
                                intro       = {schoolsInfo[8].intro}
                                address     = {schoolsInfo[8].address}
                                telephone   = {schoolsInfo[8].telephone}
                                email       = {schoolsInfo[8].email}
                                website     = {schoolsInfo[8].website} />
            )
        }
        const SchoolRVPage          = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[9].philo[0]}
                                philo2      = {schoolsInfo[9].philo[1]}
                                philo3      = {schoolsInfo[9].philo[2]}
                                name        = {schoolsInfo[9].name}
                                imgUrl      = {schoolsInfo[9].imgUrl}
                                intro       = {schoolsInfo[9].intro}
                                address     = {schoolsInfo[9].address}
                                telephone   = {schoolsInfo[9].telephone}
                                email       = {schoolsInfo[9].email}
                                website     = {schoolsInfo[9].website} />
            )
        }
        const SchoolVMCPage         = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[10].philo[0]}
                                philo2      = {schoolsInfo[10].philo[1]}
                                philo3      = {schoolsInfo[10].philo[2]}
                                name        = {schoolsInfo[10].name}
                                imgUrl      = {schoolsInfo[10].imgUrl}
                                intro       = {schoolsInfo[10].intro}
                                address     = {schoolsInfo[10].address}
                                telephone   = {schoolsInfo[10].telephone}
                                email       = {schoolsInfo[10].email}
                                website     = {schoolsInfo[10].website} />
            )
        }
        const SchoolWMHPage         = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[11].philo[0]}
                                philo2      = {schoolsInfo[11].philo[1]}
                                philo3      = {schoolsInfo[11].philo[2]}
                                name        = {schoolsInfo[11].name}
                                imgUrl      = {schoolsInfo[11].imgUrl}
                                intro       = {schoolsInfo[11].intro}
                                address     = {schoolsInfo[11].address}
                                telephone   = {schoolsInfo[11].telephone}
                                email       = {schoolsInfo[11].email}
                                website     = {schoolsInfo[11].website} />
            )
        }
        const SchoolRWAPage         = () => {
            return (
                <CurrentSchool  philo1      = {schoolsInfo[12].philo[0]}
                                philo2      = {schoolsInfo[12].philo[1]}
                                philo3      = {schoolsInfo[12].philo[2]}
                                name        = {schoolsInfo[12].name}
                                imgUrl      = {schoolsInfo[12].imgUrl}
                                intro       = {schoolsInfo[12].intro}
                                address     = {schoolsInfo[12].address}
                                telephone   = {schoolsInfo[12].telephone}
                                email       = {schoolsInfo[12].email}
                                website     = {schoolsInfo[12].website} />
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
                    
                    <Route exact path="/schools"                    component={SchoolsPage}/>
                    <Route exact path="/schools/face"               component={SchoolFACEPage} />
                    <Route exact path="/schools/jameslyng"          component={SchoolJLPage} />
                    <Route exact path="/schools/johnfkennedy"       component={SchoolJFKPage} />
                    <Route exact path="/schools/lesterbpearson"     component={SchoolLBPPage} />
                    <Route exact path="/schools/laurenhill"         component={SchoolLHPage} />
                    <Route exact path="/schools/johnpauli"          component={SchoolJPIPage} />
                    <Route exact path="/schools/lauriermacdonald"   component={SchoolLMACPage} />
                    <Route exact path="/schools/marymount"          component={SchoolMMAPage} />
                    <Route exact path="/schools/rosemount"          component={SchoolRMHPage} />
                    <Route exact path="/schools/royalvale"          component={SchoolRVPage} />
                    <Route exact path="/schools/vincentmassey"      component={SchoolVMCPage} />
                    <Route exact path="/schools/westmount"          component={SchoolWMHPage} />
                    <Route exact path="/schools/royalwest"          component={SchoolRWAPage} />

                    <Route exact path="/students/study"             component={StudentsStudyPage} />
                    <Route exact path="/students/health"            component={StudentsHealthPage} />
                    <Route exact path="/students"                   component={StudentsPage} />
                    <Route exact path="/students/ziplining"         component={StudentZipliningPage} />
                    <Route exact path="/students/skisnowboarding"   component={StudentSkiPage} />
                    <Route exact path="/students/qccity"            component={StudentQcPage} />
                    <Route exact path="/students/sugarshack"        component={StudentSugarPage} />
                    
                    <Redirect to="/home"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;