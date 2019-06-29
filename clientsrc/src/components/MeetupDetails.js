import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class MeetupDetails extends Component {

    constructor(props){
        super(props)
        this.state= {
            details: ''
        }
    }

    componentWillMount(){
        this.getMeetupSingular()
    }

    getMeetupSingular(){
        let meetupId = this.props.match.params.id
        axios.get(`http://localhost:3000/api/meetups/${meetupId}`)
        .then(response => {
            this.setState({ details: response.data }, () => {
                console.log('state data getMeetupSingular', this.state.details)
            })
            console.log('response getMeetupSingular', response)
        })
        .catch(error => {
            console.log('error in getMeetupSingular', error)
        })
    }

    render() {

        return (
            <div>
                <br/>
                <Link to='/' className='btn grey'> Back</Link>
                <h1>{this.state.details.name}</h1>
                <ul className='collection'>
                <li className='collection-item'>City: {this.state.details.city}</li>
                <li className='collection-item'>Address: {this.state.details.address}</li>
                </ul>
                <Link className='btn' to={`/meetups/edit/${this.state.details.id}`}>Edit</Link>
                <button onClick={this.onDelete.bind(this)} className='btn red right'>DELETE</button>
            </div>
        )
    }

    onDelete(){
        let meetupId = this.state.details.id
        axios.delete(`http://localhost:3000/api/meetups/${meetupId}`)
        .then(response => {
            this.props.history.push('/')
        })
        .catch(error => {
            console.log('onDelete onDelete', error)
        })
    }

}

export default MeetupDetails;