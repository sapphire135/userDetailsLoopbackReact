import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
class AddMeetup extends Component {

   

    render() {

        return (
            <div>
                <br/>
                <Link to='/' className='btn grey'> Back</Link>
                <h1>Add Meetup</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                <div className='input-field'>
                <input type='text' name='name' ref='name'/>
                <label htmlFor='name'>Name</label>
                </div>
                <div className='input-field'>
                <input type='text' name='city' ref='city'/>
                <label htmlFor='city'>City</label>
                </div>
                <div className='input-field'>
                <input type='text' name='address' ref='address'/>
                <label htmlFor='address'>Address</label>
                </div>
                <input type='submit' value='Save' className='btn'/>
                </form>
            </div>
        )
    }

    onSubmit(e){
        console.log('a', e, this.refs.name.value)
        const newMeetup = {
            name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value
        }
        this.addMeetup(newMeetup)
        e.preventDefault()
        // return 1
    }

    addMeetup(newMeetup){
        axios.request({
            method: 'post',
            url: 'http://localhost:3000/api/meetups',
            data: newMeetup
        })
        .then(response => {
            this.props.history.push('/')
        })
        .catch(error => {
            console.log('error addMeetup', error)
        })
    }

}

export default AddMeetup;