import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import animationData from './envelope.json';

const Contact = () => {
    const lottieContainer = useRef(null);

    useEffect(() => {
        if (lottieContainer.current) {
            lottie.loadAnimation({
                container: lottieContainer.current,
                animationData: animationData,
                renderer: 'svg',
                loop: true,
                autoplay: true,
            });
        }
    }, []);

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 via-teal-300 to-blue-500 p-6 lg:p-12">
            <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:shadow-2xl hover:scale-105">
                {/* Lottie Animation Section */}
                <div className="lg:w-1/2 p-8 bg-gray-100 flex items-center justify-center relative">
                    <div ref={lottieContainer} className="w-full h-64 lg:h-full"></div>
                </div>
                {/* Contact Form Section */}
                <div className="lg:w-1/2 p-8 flex flex-col justify-center space-y-6">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-6">Get in Touch</h2>
                    <form action="https://formspree.io/f/xblrgraj" method="POST" className="space-y-6">
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
                            />
                            <textarea
                                name="message"
                                placeholder="Type your message here..."
                                required
                                className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-transform transform hover:scale-105"
                            ></textarea>
                            <button
                                type="submit"
                                className="py-3 px-6 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-colors transform hover:scale-110"
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
