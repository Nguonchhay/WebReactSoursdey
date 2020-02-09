import React from 'react';
import DefaultLayout from './../components/layouts/DefaultLayout';
import ContactForm from './../components/forms/ContactForm';

const ContactPage = (props) => {
  return (
    <DefaultLayout pageTitle="Contact">
      <div className="col-lg-8 col-md-10 mx-auto">
        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
        <ContactForm/>
      </div>
    </DefaultLayout>
  );
}

export default ContactPage;
