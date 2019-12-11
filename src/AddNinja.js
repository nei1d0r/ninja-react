import React, {Component} from 'react';

class AddNinja extends Component {
    
    state = {
        name : "",
        age : "", 
        belt : ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    clearForm = () => {
        this.setState({
            name : "",
            age : "",
            belt : ""
        });
        console.log("State Cleared!!")
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNinja(this.state);
        this.setState({
                [e.target.id] : null, // resets id to prevent conflict
            })
        this.clearForm(e);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} value={this.state.name}></input>
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} value={this.state.age}></input>
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} value={this.state.belt}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddNinja

