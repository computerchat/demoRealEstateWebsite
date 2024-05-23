import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactInfo from '../components/ContactInfo';
import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <div className="container-fluid  ">
            <div className="row bg-primary text-white p-4 rounded">
                <div className="col-lg-5 mb-4 mb-lg-0">
                    <ContactInfo />
                </div>
                <div className="col-lg-7">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
