import React from "react";
import { useState } from "react";

const FilmeDetail = (props) => {
    const filme = props.location.state.filme;
    const [title, setTitle] = useState(filme.title)
    const [releaseYear, setReleaseYear] = useState(filme.release_year)
    const [language, setLanguage] = useState(filme.language)
    const [length, setLength] = useState(filme.lenght)
    const [rating, setRating] = useState(filme.rating)

    const edit = (e) => {
        e.preventDefault();

        if (title === "" || releaseYear === "" || language === "" || length === "" || rating === "") {
            alert("All fields are mandatory!");
            return;
        }
        const editedFilme = {
            title: title,
            releaseYear: releaseYear,
            language: language,
            length: length,
            rating: rating
        }
        props.editFilmesHandler(filme.id, editedFilme);
        props.history.push("/filmes")
    }
    return (
        <div className="ui main fixed">
                <h2>Edit Filme</h2>
                <form className="ui form" onSubmit={edit}>
                    <div className="field">
                        <label for="titleInput">Title</label>
                        <input type="text" class="form-control" id="titleInput" placeholder="Enter title" value={title} onChange={e => setTitle(e.target.value)} />
                    </div>

                    <div className="field">
                        <label for="releaseYearInput">Release Year</label>
                        <input type="number" class="form-control" id="releaseYearInput" placeholder="release year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} />
                    </div>

                    <div className="field">
                        <label for="languageInput">Language</label>
                        <input type="text" class="form-control" id="languageInput" placeholder="language" value={language} onChange={(e) => setLanguage(e.target.value)} />
                    </div>
                    <div className="field">
                        <label for="lengthInput">Length</label>
                        <input type="text" class="form-control" id="lengthInput" placeholder="length" value={length} onChange={(e) => setLength(e.target.value)} />
                    </div>
                    <div className="field">
                        <label for="ratingInput">Rating</label>
                        <input type="number" className="form-control" id="ratingInput" placeholder="rating" step=".1" value={rating} onChange={(e) => setRating(e.target.value)} />
                    </div>

                    <button type="submit" className="ui button blue">Update</button>

                </form>
            
        </div>

    );

}

export default FilmeDetail;