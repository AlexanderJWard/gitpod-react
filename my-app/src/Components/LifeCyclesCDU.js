import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            greeting: 'Hello!'
        }
        console.log("Constructor called")
    }

    updateGreeting = () => {
        this.setState(prevState => {
            console.log("Update Greeting")
            return {
                greeting: prevState.greeting === "Hello!" ? "Goodbye!" : "Hello!"
            }
        })
    }

    componentDidUpdate() {
        console.log("Component updated")
    }
    
    render() {
        console.log("Render complete")
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
            </div>
        )
    }
}

export default LifeCyclesCDU