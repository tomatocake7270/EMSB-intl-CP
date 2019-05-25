import React from 'react'
import { Container, Row, Col, Media, Button } from 'reactstrap'

const QcEdu = () => {
    
    return(
        <div className="text-center">
            <Container className="my-3 border-bottom border-primary pb-1">
                <h2 className="blue-font">Introduction to Quebec Education System</h2>
            </Container>
            <Container className="mb-5 text-left">
                <Row>
                    <Col lg="4" md="6" className="my-2">
                        <Button color="link" className="text-decoration-none" href="/assets/pdfs/qcEdu/english-qc-edu.pdf" target="_blank">
                            <Media>
                                <Media left>
                                    <Media object src="/assets/images/nationalFlags/qc-edu-english.png" alt="English version" className="img-fluid admission-qc-edu-nf"/>
                                </Media>
                                <Media body>
                                    <Media heading className="mt-2 ml-2">
                                    <p className="font-weight-normal admission-qc-edu-title">Education in Quebec</p>
                                    </Media>
                                </Media>
                            </Media>
                        </Button>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Button color="link" className="text-decoration-none" href="/assets/pdfs/qcEdu/french-qc-edu.pdf" target="_blank">
                            <Media>
                                <Media left>
                                    <Media object src="/assets/images/nationalFlags/qc-edu-french.png" alt="French version" className="img-fluid admission-qc-edu-nf"/>
                                </Media>
                                <Media body>
                                    <Media heading className="mt-2 ml-2">
                                    <p className="font-weight-normal admission-qc-edu-title">l'Éducation au Québec</p>
                                    </Media>
                                </Media>
                            </Media>
                        </Button>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Button color="link" className="text-decoration-none" href="/assets/pdfs/qcEdu/chinese-qc-edu.pdf" target="_blank">
                            <Media>
                                <Media left>
                                    <Media object src="/assets/images/nationalFlags/qc-edu-chinese.png" alt="Chinese version" className="img-fluid admission-qc-edu-nf"/>
                                </Media>
                                <Media body>
                                    <Media heading className="mt-2 ml-2">
                                    <p className="font-weight-normal admission-qc-edu-title">魁北克教育概况</p>
                                    </Media>
                                </Media>
                            </Media>
                        </Button>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Button color="link" className="text-decoration-none" href="/assets/pdfs/qcEdu/spanish-qc-edu.pdf" target="_blank">
                            <Media>
                                <Media left>
                                    <Media object src="/assets/images/nationalFlags/qc-edu-spanish.png" alt="Spanish version" className="img-fluid admission-qc-edu-nf"/>
                                </Media>
                                <Media body>
                                    <Media heading className="mt-2 ml-2">
                                    <p className="admission-qc-edu-title admission-qc-edu-title-spanish">La Educatión en Quebec</p>
                                    </Media>
                                </Media>
                            </Media>
                        </Button>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Button color="link" className="text-decoration-none" href="/assets/pdfs/qcEdu/portuguese-qc-edu.pdf" target="_blank">
                            <Media>
                                <Media left>
                                    <Media object src="/assets/images/nationalFlags/qc-edu-portuguese.png" alt="Portuguese version" className="img-fluid admission-qc-edu-nf"/>
                                </Media>
                                <Media body>
                                    <Media heading className="mt-2 ml-2">
                                    <p className="admission-qc-edu-title">A Educação no Quebec</p>
                                    </Media>
                                </Media>
                            </Media>
                        </Button>
                    </Col>
                    <Col lg="4" md="6" className="my-2">
                        <Button color="link" className="text-decoration-none" href="/assets/pdfs/qcEdu/german-qc-edu.pdf" target="_blank">
                            <Media>
                                <Media left>
                                    <Media object src="/assets/images/nationalFlags/qc-edu-german.png" alt="German version" className="img-fluid admission-qc-edu-nf"/>
                                </Media>
                                <Media body>
                                    <Media heading className="ml-2">
                                    <p className="admission-qc-edu-title admission-qc-edu-title-german">Bildung und Erziehung in Québec</p>
                                    </Media>
                                </Media>
                            </Media>
                        </Button>
                    </Col>
                </Row>
                
            </Container>
            
        </div>
        
    )
}

export default QcEdu;