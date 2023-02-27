import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    
    constructor(props) {
      super(props)
      this.inputName = React.createRef();
      this.inputCategory = React.createRef();
      this.inputComment = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log("Your Name:", this.inputName.current.value);
        console.log("Query Category:", this.inputCategory.current.value);
        console.log("Comments:", this.inputComment.current.value);
    }
  
    render() {
    return (
      <div>
        <h2>Please fill out the form below:</h2>
        <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="id-name">Your Name:</label>
            <input 
                id="id-name"
                name="name"
                type="text"
                defaultValue="Your name here..."
                ref={this.inputName}
            />
            </div>
            <div>
            <label htmlFor="id-category">Query Category:</label>
            <select 
                id="id-category" 
                name="category"
                ref={this.inputCategory}
            >
                <option value="website">Website Issue</option>
                <option value="order">Order Issue</option>
                <option value="general">General Inquiry</option>
            </select>
            </div>
            <div>
            <label htmlFor="id-comments">Comments:</label>
            <textarea 
                id="id-comments"
                name="comments"
                ref={this.inputComment}
            />
            </div>
            <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}

export default UncontrolledForm