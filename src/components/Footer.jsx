import { NavLink } from "react-router-dom";

export default function Footer() {
    const linkStyle = "text-white hover:text-sky-200 transition";

    return (
        <footer className="bg-sky-800 text-white">
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col gap-3">
                    <h1 className="text-lg font-semibold mb-2">Quick Links</h1>
                    <NavLink to="/" className={linkStyle}>Shop</NavLink>
                    <NavLink to="/beauty" className={linkStyle}>Beauty</NavLink>
                    <NavLink to="/fragnances" className={linkStyle}>Fragrances</NavLink>
                    <NavLink to="/electronics" className={linkStyle}>Electronices</NavLink>
                    <NavLink to="/furniture" className={linkStyle}>Furniture</NavLink>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-lg font-semibold mb-2">Customer Support</h1>
                    <NavLink to="/" className={linkStyle}>FAQ</NavLink>
                    <NavLink to="/" className={linkStyle}>Contact us</NavLink>
                    <NavLink to="/" className={linkStyle}>Help Center</NavLink>
                    <NavLink to="/" className={linkStyle}>About us</NavLink>
                    <NavLink to="/" className={linkStyle}>Careers</NavLink>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-lg font-semibold mb-2">Our Policies</h1>
                    <NavLink to="/" className={linkStyle}>Terms of Service</NavLink>
                    <NavLink to="/" className={linkStyle}>Return and Refund Policy</NavLink>
                    <NavLink to="/" className={linkStyle}>Privacy Policy</NavLink>
                    <NavLink to="/" className={linkStyle}>Shipping Policy</NavLink>
                    <NavLink to="/" className={linkStyle}>Payment Methods</NavLink>
                </div>
            </div>

            <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
                © 2026 All rights reserved.
            </div>
        </footer>
    );
}