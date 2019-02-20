import React, { Component } from 'react';
import Tab from "./components/Tab";
import BoxContainer from "./components/BoxContainer";
import axios from "axios";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      jobs: [],
      invited: [],
      accepted: [],
      selected: 'invited',
      error: '',
    }
  }

  selectTab = (tab) => {
    this.setState({
      selected: tab
    })
  }

  filterInvited = () => {
    let jobs = this.state.jobs
    let invitedJobs = jobs.filter( job => { return job.status === 'new' })
    this.setState({ invited: invitedJobs })
  }

  filterAccepted = () => {
    let jobs = this.state.jobs
    let acceptedJobs = jobs.filter( job => { return job.status === 'accepted' })
    this.setState({ accepted: acceptedJobs })
  }

  updateJob = (id, status) => {
    // if(this.state.acceptedTradie < 3) {
    // axios.put('http://localhost:8080/api/jobs/'+id, {
    //   status: status
    // })
    // .then( res => {
    //   let jobs = this.state.jobs;
    //   let newJobs = jobs.map( job => {
    //     if( job.id === id ) {
    //       job.status = status
    //     }
    //     return job
    //   })
    //   this.setState({ jobs: newJobs }, () => {
    //     this.filterAccepted()
    //     this.filterInvited()
    //   })
    // })
    // .catch( error => {
    //   this.setState({ error })
    // })

    axios.post('http://localhost:8080/api/accept/', {
      job_id: id,
      tradie_id: 2,
      status: 'accepted'
    })
    .then( res => {
      console.log(res)
    })
    .catch( err => {
      console.log(err)
    })
  }

  componentDidMount() {
    axios.get('http://localhost:8080/api/jobs')
      .then( (res) => {
        this.setState({ jobs: res.data }, () => {
          this.filterInvited()
          this.filterAccepted()
        })
      })
      .catch( error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="main-container">
        <Tab selected={this.state.selected} onTabClick={this.selectTab}/>
        <BoxContainer invited={this.state.invited} accepted={this.state.accepted} selected={this.state.selected} updateJob={this.updateJob}/>
      </div>
    );
  }
}

export default App;
 