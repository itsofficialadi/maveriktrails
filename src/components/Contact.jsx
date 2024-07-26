// src/Contact.js
import React from 'react';

const Contact = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-teal-400 to-blue-500">
            <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105">
                <div className="w-2/5 bg-gray-900 bg-opacity-70 p-8 text-white flex flex-col justify-center items-center">
                    <h2 className="text-3xl font-bold">Contact Us</h2>
                    <div className="mt-6 space-y-4 text-center">
                        <p><i className="fa fa-map-marker-alt mr-2"></i> 23, Avenue de Paris, 75012 Paris</p>
                        <p><i className="fa fa-envelope mr-2"></i> hello@mikechemandin.com</p>
                        <p><i className="fa fa-skype mr-2"></i> mike.chemandin</p>
                        <p><i className="fa fa-phone mr-2"></i> +33 619 530 144</p>
                    </div>
                    <div className="flex mt-6 space-x-4 text-2xl">
                        <i className="fab fa-twitter cursor-pointer hover:text-teal-400 transition-colors"></i>
                        <i className="fab fa-instagram cursor-pointer hover:text-teal-400 transition-colors"></i>
                        <i className="fab fa-linkedin cursor-pointer hover:text-teal-400 transition-colors"></i>
                    </div>
                </div>
                <div className="w-3/5 p-8">
                    <h2 className="text-2xl font-bold text-gray-900">Get in Touch</h2>
                    <form action="https://formspree.io/f/xblrgraj" method="POST" className="mt-6">
                        <div className="flex flex-col space-y-4">
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your name" 
                                required 
                                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 transform hover:scale-105"
                            />
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your email" 
                                required 
                                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 transform hover:scale-105"
                            />
                            <textarea 
                                name="message" 
                                placeholder="Type your message here..." 
                                required 
                                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-300 transform hover:scale-105"
                            ></textarea>
                            <button 
                                type="submit" 
                                className="py-3 px-6 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors transform hover:scale-110"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
