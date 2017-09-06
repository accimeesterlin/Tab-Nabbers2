import React from "react";
import "../../public/css/footer.scss";
import { Grid, Segment, Header, Image, Rail, Sticky, Divider, Icon } from 'semantic-ui-react'
const FooterPage = () => {
      return (
          <div>

                      <footer>
                      <Grid columns={3} divided>
                      <Grid.Row stretched>
                        <Grid.Column>

                          <p className="p">About BootCruit</p>
                          <ul>
                          <li><strong>BootCruit</strong> is a single-click staffing solution
                          to connect recruiters and employers to current and
                          recently graduated coding bootcamp students.</li>
                          </ul>

                        </Grid.Column>
                        <Grid.Column>

                          <p className="p">Get Involve</p>
                          <ul>
                            <li>Join a Group</li>
                            <li>Contribute to BootCruit</li>
                            <li>Submit a Bug</li>
                            <li>Report a Security issue</li>
                          </ul>

                        </Grid.Column>
                        <Grid.Column>

                          <p className="p">Follow Us</p>
                          <ul>
                            <li><a href="/"><Icon name='github alternate' size='large' /></a></li>
                            <li><a href="/"><Icon name='linkedin' size='large' /></a></li>
                            <li><a href="/"><Icon name='reddit' size='large' /></a></li>
                            <li><a href="/"><Icon name='mail outline' size='large' /></a></li>
                          </ul>

                        </Grid.Column>
                      </Grid.Row>
                      <Divider /> <br />
                      <Grid.Row stretched>
                        <p className="copyRight">&#169;2017 <a href="/"> BootCruit.com </a></p>
                      </Grid.Row>
                    </Grid>
                    </footer>
          </div>
    );
};
export default FooterPage;

// <Row className="footer">
//
//     <Col l={4}>
//         <div className="" >
//             <h4 className="">About BootCruit</h4>
//             <p className="">BootCruit is a single-click staffing solution to connect recruiters and employers to current and recently graduated coding bootcamp students.</p>
//         </div>
//     </Col>
//
//     <Col l={4}>
//         <div className="">
//             <h2 className="">Single-Click Staffing Solutions</h2>
//             <Button>Sign up</Button>
//         </div>
//     </Col>
//
//
//     <Col l={4}>
//         <div className="">
//             <h4 className="">Useful Resources</h4>
//             <div className="">
//                 <a href="/about" className="item">About</a>
//                 <a href="https://github.com/accimeesterlin/Tab-Nabbers2" className="" target="_blank">BootCruit GitHub</a>
//                 <a href="http://www.reactd3.org/" className="" target="_blank">React D3</a>
//                 <a href="#" className="item">Contact</a>
//             </div>
//         </div>
//     </Col>
//
//     <Col l={12}>
//         <p className="">© 2017 Copyright: <a href="/"> BootCruit.com </a>
//         </p>
//     </Col>
//
//
// </Row>
