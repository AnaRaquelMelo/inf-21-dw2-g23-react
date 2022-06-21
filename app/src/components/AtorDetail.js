import React from "react";
import { useState } from "react";

const AtorDetail = (props) => {
    const ator = props.location.state.ator;
    const [name, setName] = useState(ator.name)
    const [artistic_name, setArtisticName] = useState(ator.artistic_name)
    const [birth_date, setBirthDate] = useState(ator.birth_date)    

    const edit = (e) => {
        e.preventDefault();

        if (name === "" || artistic_name === "" || birth_date === "") {
            alert("All fields are mandatory!");
            return;
        }
        const editedAtor = {
            name,
            artistic_name,
            birth_date            
        }
        props.editAtoresHandler(ator.id, editedAtor);
        props.history.push("/atores")
    }
    return (
        <div className="ui main fixed">
                <h2>Edit Ator</h2>
                <form className="ui form" onSubmit={edit}>
                    <div className="field">
                        <label for="nameInput">Name</label>
                        <input type="text" id="nameInput" placeholder="Enter name" value={name} onChange={e => setName(e.target.value)} />
                    </div>

                    <div className="field">
                        <label for="artisticNameInput">Artistic Name</label>
                        <input type="text" id="artisticNameInput" placeholder="release year" value={artistic_name} onChange={(e) => setArtisticName(e.target.value)} />
                    </div>

                    <div className="field">
                        <label for="birthDateInput">Birth Date</label>
                        <input type="text" id="birthDateInput" placeholder="language" value={birth_date} onChange={(e) => setBirthDate(e.target.value)} />
                    </div>                    

                    <button type="submit" className="ui button blue">Update</button>

                </form>
            
        </div>

    );

}

export default AtorDetail;