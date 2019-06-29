import React, { Component } from 'react'
import axios from 'axios'
import MeetupItem from './MeetupItem'

class Meetups extends Component {

    constructor() {
        super()
        this.state = {
            meetups: []
        }
    }

    componentWillMount(){
        this.getMeetups()
    }

    getMeetups() {
        axios.get('http://localhost:3000/api/meetups')
            .then(response => {
                this.setState({ meetups: response.data }, () => {
                    console.log('state data', this.state.meetups)
                })
                console.log('response', response)
            })
            .catch(error => {
                console.log('error in getmeetups', error)
            })
    }
    render() {
        const meetupItems = this.state.meetups.map((meetup, i) => {
            return (
                <MeetupItem item={meetup} key={meetup.id}/>
            )
        })
        return <div>
            <h1>Meetups</h1>
            <ul className='collection'>
                {meetupItems}
            </ul>
        </div>
    }
}

export default Meetups;