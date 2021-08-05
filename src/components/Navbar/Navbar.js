import './Navbar.css';

const Navbar = ({ title }) => {
    return (
        <div className="navbar">
            <h2>{title}</h2>
        </div>
    );
};

export default Navbar;