"use client";

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 bg-black text-white max-w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Contact Me
            </h2>

            <form className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column Inputs */}
                <input
                    type="text"
                    placeholder="Full Name"
                    className="p-3 rounded-md text-black bg-white focus:outline-none"
                />
                <input
                    type="email"
                    placeholder="Email Address"
                    className="p-3 rounded-md text-black bg-white focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Phone Number"
                    className="p-3 rounded-md text-black bg-white focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Service of Interest"
                    className="p-3 rounded-md text-black bg-white focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Timeline"
                    className="p-3 rounded-md text-black bg-white focus:outline-none md:col-span-2"
                />

                {/* Right Column Textarea */}
                <textarea
                    placeholder="Project Details"
                    rows={5}
                    className="p-3 rounded-md text-black bg-white focus:outline-none md:col-span-2"
                />

                {/* Send Button */}
                <div className="md:col-span-2 flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-10 py-3 rounded-md transition"
                    >
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
}
