import React from 'react'

class Form extends React.Component {
    state = {
        firstName:'',
        email:'',
        message:'',
        select:'',
        subscription: false,
        gender: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleCheckboxChange = (event) =>{
        this.setState({[event.target.name]: event.target.checked})
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
        const {firstName, email, message, select, subscription, gender} = this.state;

        return <div>
            <input 
                type="text" 
                name="firstName"
                placeholder="firstname"
                value={firstName}
                onChange={this.handleChange}
                // onBlur={this.validateName}
            />
            <input 
                type="email" 
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
                // onBlur={this.ValidateEmail}
            />
            <br/>
            <textarea name="message" value={message} onChange={this.handleChange}/>
            <br />
            <select name="select" value={select} onChange={this.handleChange}>
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br/>
            <label>
            <input type="checkbox" 
                name="subscription" 
                checked={subscription}
                onChange={this.handleCheckboxChange}/>Subscription
            </label>
            <br />
            <input type="radio" 
                name="gender" 
                value="male" 
                onChange={this.handleChange}
                checked={gender==="male"}
                />Male
            <input type="radio" 
                name="gender"
                value="female" 
                onChange={this.handleChange} 
                checked={gender === "female" }
                />Female
        </div>
    }
}

export {Form}