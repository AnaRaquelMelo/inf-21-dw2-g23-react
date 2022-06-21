import React from "react";


class AddAtores extends React.Component {
    state = {
        name: "",
        artistic_name: "",
        birth_date: "",        
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.artistic_name === "" || this.state.brith_date === "") {
            alert("All fields are mandatory!");
            return;
        }
        this.props.addAtoresHandler(this.state);
        this.props.history.push("/atores")
    }
    render() {
        return (
            <div className="ui main">
                <h2>Add Ator</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" id="nameInput" placeholder="Enter name" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>

                    <div className="field">
                        <label for="artisticNameInput">Artistic Name</label>
                        <input type="text" id="artisticNameInput" placeholder="artistic name" value={this.state.artistic_name} onChange={(e) => this.setState({ artistic_name: e.target.value })} />
                    </div>

                    <div className="field">
                        <label for="birthDateInput">Birth Date</label>
                        <input type="text" id="birthDateInput" placeholder="birth date" value={this.state.brith_date} onChange={(e) => this.setState({ birth_date: e.target.value })} />
                    </div>                    

                    <button type="submit" className="ui button blue">Add</button>

                </form>

            </div>

        );
    }
}

export default AddAtores;