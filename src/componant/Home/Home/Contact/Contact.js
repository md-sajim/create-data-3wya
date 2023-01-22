import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8wcogbg', 'template_e68es3l', form.current, 'FDXqS6lLq60qEN_1T')
            .then((result) => {
                toast.success('Your massage send success!!! Thanks for contact me');
                e.target.reset()
            }, (error) => {
                toast.error(error.text);
            });
    };
    return (
        <div className='mt-20'>
            <div className="hero-content ml-auto">
                <div className="card  w-full max-w-lg lg:ml-[300px]" style={{ backgroundColor: "#ffcb69" }}>
                    <div className="card-body">
                        <h3 className='text-lg font-bold spacal_tital'>Contact me</h3>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="form-control spacal_tital">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control spacal_tital">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control spacal_tital">
                                <label className="label">
                                    <span className="label-text">Your Massage</span>
                                </label>
                                <textarea name="message" className="textarea" placeholder="Massage"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary spacal_tital">Sent</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;