import React, { useEffect, useState } from "react";
import FilmeRow from "./FilmeRow";
import { Link } from "react-router-dom";

const FilmesList = (props) => {
    const deleteFilme = (id) => {
        props.getFilmeId(id);
    };
    const renderFilmeList = props.filmes.map((filme) => {
        return (
            <FilmeRow filme={filme} clickHandler={deleteFilme} />
        );
    });
    return (
        <div className="ui main">
            <Link to="/filmes/add">
                <button type="button" className="ui button blue">Add Filme</button>
            </Link>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Release Year</th>
                        <th scope="col">Language</th>
                        <th scope="col">Length</th>
                        <th scope="col">Rating</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {renderFilmeList}
                </tbody>
            </table>
        </div>
    );
}

export default FilmesList;