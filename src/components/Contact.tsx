"use client";
import { useState } from "react";
import { motion } from "framer-motion";

// Modal Component for better reusability
function Modal({ message, onClose }: { message: string; onClose: () => void }) {
    return (
        <div className="fixed inset-1 z-50 flex items-center justify-center bg-opacity-20">
            <div className="bg-white p-6 rounded-md shadow-xl max-w-md w-full relative">
                <h2 className="text-xl text-black font-semibold mb-2">Thank You!</h2>
                <p className="text-gray-700 mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl leading-none"
                >
                    &times;
                </button>
                <button
                    onClick={onClose}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
}

export default function Contact() {
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: formData,
            });

            const resData = await res.json();
            if (!res.ok) {
                throw new Error(resData?.message || "Something went wrong");
            }
            setModalMessage("I will be in contact with you as soon as possible!");
            form.reset();
        } catch (err) {
            console.error("Error sending email:", err);
            setModalMessage("Failed to send your message. Please try again later.");
        }

        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000); // Close modal after 3 seconds
    };

    return (
        <motion.section
            initial={{ opacity: 1, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }} id="contact" className="py-20 px-8 lg:px-16 bg-black text-white sm:max-w-full md:max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Contact Me
            </h2>

            <form onSubmit={handleSubmit} className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column Inputs */}
                <input
                    name="name"
                    type="text"
                    placeholder="Full Name"
                    className="p-3 rounded-md text-black bg-white focus:outline-none" required
                />
                <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="p-3 rounded-md text-black bg-white focus:outline-none" required
                />
                <input
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
                    className="p-3 rounded-md text-black bg-white focus:outline-none" required
                />
                <input
                    name="service"
                    type="text"
                    placeholder="Service of Interest"
                    className="p-3 rounded-md text-black bg-white focus:outline-none" required
                />

                {/* Right Column Textarea */}
                <textarea
                    name="projectDetails"
                    placeholder="Project Details"
                    rows={5}
                    className="p-3 rounded-md text-black bg-white focus:outline-none md:col-span-2" required
                />

                {/* Send Button */}
                <div className="md:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-3 w-full rounded-md transition"
                    >
                        Send
                    </button>
                </div>
            </form>

            {/* Modal */}
            {showModal && <Modal message={modalMessage} onClose={() => setShowModal(false)} />}
        </motion.section>
    );
}
