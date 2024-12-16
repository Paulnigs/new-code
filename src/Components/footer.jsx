const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-lg font-bold">Amatip Digital Box</h2>
                    <p>Your all-in-one digital transformation toolbox to build, grow, and monetize your digital presence.</p>
                    <p className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </div>
                <nav className="flex space-x-4">
                    <a href="#" className="text-sm hover:underline">Videos</a>
                    <a href="#" className="text-sm hover:underline">Webinar</a>
                    <a href="#" className="text-sm hover:underline">Courses</a>
                </nav>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">Twitter</a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:underline">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
