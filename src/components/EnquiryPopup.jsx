import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const EnquiryPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Floating Button */}
            <button
                onClick={togglePopup}
                className="fixed bottom-6 right-6 bg-blue-600 text-white px-5 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-50"
            >
                Enquire Now
            </button>

            {/* Modal Popup */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={togglePopup}
                                className="absolute top-3 right-3 text-gray-600 hover:text-red-500"
                                aria-label="Close Enquiry Popup"
                            >
                                <X size={20} />
                            </button>


                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Quick Enquiry
                            </h3>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                                >
                                    Send Enquiry
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default EnquiryPopup;
