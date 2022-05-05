import React from 'react'

class Form extends React.Component {
    state = {
        firstName:'',
        email:'',
        message
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    validateName = () => {
        if(this.state.firstName.length < 5){
            alert('First name cannot be less than 5 characters!');
        }
    }

    ValidateEmail = (mail) => {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)){
            alert("You have entered an invalid email address!")
        }
    }

    render(){
        const {firstName, email} = this.state;

        return <div>
            <input 
                type="text" 
                name="firstName"
                placeholder="firstname"
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <input 
                type="email" 
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                onBlur={this.ValidateEmail}
            />
            <br/>
            <textarea />
        </div>
    }
}

export {Form}