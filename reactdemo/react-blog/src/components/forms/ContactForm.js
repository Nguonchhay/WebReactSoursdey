import React, { useState } from 'react';
import { useForm } from 'react-hook-form';


const ContactForm = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const [ success, setSuccess ] = useState(false);

    const onSubmitHandler = data => {
        setSuccess(true);
        console.log(data);
    }

    const onSubmitAnotherRequest = () => {
        setSuccess(false);
    }

    const renderFormContent = () => {
        if (success) {
            return (
                <div>
                    <h3>Thank you !!!</h3>
                    <p>We will contact you soon.</p>
                    <button className="btn btn-primary" onClick={onSubmitAnotherRequest}>Submit another request</button>
                </div>
            )
        } else {
            return (
                <form name="contactForm" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Name *" ref={register({required: true})}/>
                        {errors.name && <p className="help-block text-danger">This is required.</p>}
                        </div>
                    </div>

                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls">
                        <label>Email Address</label>
                        <input type="email" name="email" className="form-control" placeholder="Email Address *" ref={register({required: true})}/>
                        {errors.email && <p className="help-block text-danger">This is required.</p>}
                        </div>
                    </div>

                    <div className="control-group">
                        <div className="form-group col-xs-12 floating-label-form-group controls">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" className="form-control" placeholder="Phone Number *" ref={register({required: true})}/>
                        {errors.phone && <p className="help-block text-danger">This is required.</p>}
                        </div>
                    </div>

                    <div className="control-group">
                        <div className="form-group floating-label-form-group controls">
                        <label>Message</label>
                        <textarea rows="5" name="message" className="form-control" placeholder="Message *" ref={register({required: true})}></textarea>
                        {errors.message && <p className="help-block text-danger">This is required.</p>}
                        </div>
                    </div>

                    <br/>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            )
        }
    }

    return (
        <>
            {renderFormContent()}
        </>
    )
};

export default ContactForm;