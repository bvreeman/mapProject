import React from 'react';
// import { Col, Container, Row, Footer } from 'mdbreact';
import { Footer } from 'mdbreact';

import './Footer.css';

const PageFooter = () =>
            <div className="container-fluid footer">
                <Footer color="blue-grey" className="page-footer">
                    <sub>&copy; Copyright 2018</sub>
                </Footer>
            </div>

export default PageFooter;