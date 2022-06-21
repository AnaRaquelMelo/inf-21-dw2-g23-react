import React from "react";
import { Link } from "react-router-dom";
import api from '../api/api';

const AtorRow = (props) => {
    console.log(props.ator);
    const { id, name, artistic_name, birth_date } = props.ator;
    const deleteAtor = async (id) => {
        await api.delete(`/atores/${id}`);
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{artistic_name}</td>
            <td>{birth_date}</td>            
            <td>
                <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => deleteAtor(id)}></i>
                <Link to={{ pathname: `/atores/${id}`, state: { ator: props.ator } }}>
                    <i className="edit alternate outline icon" style={{ color: "blue", marginTop: "7px" }}></i>
                </Link>                
            </td>
        </tr>
    )
}

export default AtorRow;