import React, { Component } from 'react'
import CollectionsList from '../components/CollectionsList' 
import CollectionBooks from '../components/CollectionBooks'


export default class UserPage extends Component {

    state ={
        activeCollecton: "Reading now "
    }

    handleClick =(event) =>{
        this.setState({
            activeCollection: event.target.innerText
        })
    }

    componentDidMount() {
        this.props.setUser(localStorage.getItem("userId"))
    }

    render() {
        return(
            <div className="user-page-wrapper">
                <h3>Your Book Collection</h3>
                <section className="user-page">
                    <div className="collection-display">
                        <CollectionsList user={this.props.user} activeCollection={this.state.activeCollecton} handleClick={this.handleClick} />
                        <CollectionBooks activeCollection={this.state.activeCollecton} user={this.props.user} setUser={this.props.setUser} />
                    </div>
                </section>
            </div>
        )
    }
}