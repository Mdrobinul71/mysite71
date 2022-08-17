import React, { Component } from 'react';
import './Services.css'
import { FaGithub } from 'react-icons/fa';
import {FaJsSquare} from 'react-icons/fa';

export default class Services extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gap-2 mb-4 text-center">
                            <h1 className="m-4 text-success">Services</h1> 
                            
                           <div className="col-md-4 col-lg-4 col-sm-12 bg-white shadow-sm shadow-lg p-3">
                                <FaGithub className="fk" />
                                <div>
                                    <h1>Github</h1>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     It has survived not only five centuries, but also</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 bg-white shadow-sm shadow-lg p-3 ">
                                <FaGithub className="fk" />
                                <div>
                                    <h1>Github</h1>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     It has survived not only five centuries, but also</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-sm-12 bg-white shadow-sm shadow-lg p-3">
                                <FaJsSquare className="fk" />
                                <div>
                                    <h1>Github</h1>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     It has survived not only five centuries, but also</p>
                                </div>
                            </div>

                            <div className="col-md-4 col-lg-4 col-sm-12 bg-white shadow-sm shadow-lg p-3">
                                <FaGithub className="fk" />
                                <div>
                                    <h1>Github</h1>
                                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     It has survived not only five centuries, but also</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
