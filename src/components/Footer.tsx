import SocialLinks from "./SocialLinks";


export default function Footer() {
    return (
        <footer className="flex flex-col sm:text-sm items-center justify-center text-white gap-4 py-4">
            <SocialLinks />
            <div className="flex md:flex-row sm:flex-col gap-4">
                <a href="mailto:michaelagonsi.it@gmail.com" className="text-gray-400 hover:text-blue-500 transition duration-300">
                    Michaelagonsi.it@gmail.com
                </a>
                <a href="tel:+17097645352" className="text-gray-400 hover:text-blue-500 transition duration-300">
                    +1 (709) 764-5352
                </a>
            </div>

            <div className=" text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Michael Agonsi. All rights reserved.
            </div>
        </footer>
    );
}