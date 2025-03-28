const Footer = () => {
    return (
        <footer className="text-purple-950 p-10 mt-12">
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-bold">Gadget Heaven</h2>
                <p>Leading the way in cutting-edge technology and innovation</p>
            </div>

            <div className="border-b my-10"></div>

            <div className="md:flex justify-center gap-64 my-12">
                <nav className="grid grid-cols-1">
                    <h6 className="text-xl font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="grid grid-cols-1">
                    <h6 className="text-xl font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Publish</a>
                </nav>
                <nav className="grid grid-cols-1">
                    <h6 className="text-xl font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;