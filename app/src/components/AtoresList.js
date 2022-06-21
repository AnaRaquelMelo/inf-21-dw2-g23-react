import React from "react";
import AtorRow from "./AtorRow";
import { Link } from "react-router-dom";

const AtoresList = (props) => {
    const deleteAtor = (id) => {
        props.getAtorId(id);
    };
    const renderAtorList = props.atores.map((ator) => {
        return (
            <AtorRow ator={ator} clickHandler={deleteAtor} />
        );
    });
    return (
        <div className="ui main">
            <Link to="/atores/add">
                <button type="button" className="ui button blue">Add Ator</button>
            </Link>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Artistic Name</th>
                        <th scope="col">Birth Date</th>                        
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {renderAtorList}
                </tbody>
            </table>
        </div>
    );
}

export default AtoresList;