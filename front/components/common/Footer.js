import React from "react";
import "../../public/css/footer.scss";
import {Footer, Col, Row, Button} from "react-materialize";

const FooterPage = () => {
    return (
        <Row className="footer">

            <Col l={4}>
                <div className="" >
                    <h4 className="">About BootCruit</h4>
                    <p className="">BootCruit is a single-click staffing solution to connect recruiters and employers to current and recently graduated coding bootcamp students.</p>
                </div>
            </Col>

            <Col l={4}>
                <div className="">
                    <h2 className="">Single-Click Staffing Solutions</h2>
                    <Button>Sign up</Button>
                </div>
            </Col>


            <Col l={4}>
                <div className="">
                    <h4 className="">Useful Resources</h4>
                    <div className="">
                        <a href="/about" className="item">About</a>
                        <a href="https://github.com/accimeesterlin/Tab-Nabbers2" className="" target="_blank">BootCruit GitHub</a>
                        <a href="http://www.reactd3.org/" className="" target="_blank">React D3</a>
                        <a href="#" className="item">Contact</a>
                    </div>
                </div>
            </Col>

            <Col l={12}>
                <p className="">© 2017 Copyright: <a href="/"> BootCruit.com </a>
                </p>
            </Col>


        </Row>
    );
};
export default FooterPage;
