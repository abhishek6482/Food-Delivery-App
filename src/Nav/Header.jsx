import "../App.css";

import { NavLink} from 'react-router-dom';

export const Header = () => {
    return (
        <div className="header">
            <h1 className="h1nav">Explore</h1>
            <div className="nav-links">
                <NavLink to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/menu" activeClassName="active">Menu</NavLink>
                {/* <NavLink to="/TrackOrder" activeClassName="active">TrackOrder</NavLink> */}
            </div>
        </div>
    );
};