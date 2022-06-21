import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="ui menu">
            <Link to="/filmes"><h3 className="item"> Filmes </h3></Link>
            <Link to="/atores"><h3 className="item"> Atores </h3></Link>
        </div>
    );
}

export default Header;