import React from "react";


class AddFilmes extends React.Component {
    state = {
        title: "",
        releaseYear: "",
        language: "",
        length: "",
        rating: ""
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.title === "" || this.state.releaseYear === "" || this.state.language === "" || this.state.length === "" || this.state.rating === "") {
            alert("All fields are mandatory!");
            return;
        }
        this.props.addFilmesHandler(this.state);
        this.props.history.push("/filmes")
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Filme</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Title</label>
                        <input type="text" id="titleInput" placeholder="Enter title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
                    </div>

                    <div className="field">
                        <label for="releaseYearInput">Release Year</label>
                        <input type="number" id="releaseYearInput" placeholder="release year" value={this.state.releaseYear} onChange={(e) => this.setState({ releaseYear: e.target.value })} />
                    </div>

                    <div className="field">
                        <label for="languageInput">Language</label>
                        <input type="text" id="languageInput" placeholder="language" value={this.state.language} onChange={(e) => this.setState({ language: e.target.value })} />
                    </div>
                    <div className="field">
                        <label for="lengthInput">Length</label>
                        <input type="text" id="lengthInput" placeholder="length" value={this.state.length} onChange={(e) => this.setState({ length: e.target.value })} />
                    </div>
                    <div className="field">
                        <label for="ratingInput">Rating</label>
                        <input type="number" id="ratingInput" placeholder="rating" step=".1" value={this.state.rating} onChange={(e) => this.setState({ rating: e.target.value })} />
                    </div>

                    <button type="submit" className="ui button blue">Add</button>

                </form>

            </div>

        );
    }
}

export default AddFilmes;