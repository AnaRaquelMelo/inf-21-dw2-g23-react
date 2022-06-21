import React from "react";
import { Link } from "react-router-dom";
import api from '../api/api';

const FilmeRow = (props) => {
    const { id, title, release_year, language, lenght, rating } = props.filme;
    const deleteFilme = async (id) => {
        await api.delete(`/filmes/${id}`);
    }

    return (
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{release_year}</td>
            <td>{language}</td>
            <td>{lenght}</td>
            <td>{rating}</td>
            <td>
                <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => deleteFilme(id)}></i>
                <Link to={{ pathname: `/filmes/${id}`, state: { filme: props.filme } }}>
                    <i className="edit alternate outline icon" style={{ color: "blue", marginTop: "7px" }}></i>
                </Link>
            </td>
        </tr>
    )
}

export default FilmeRow;