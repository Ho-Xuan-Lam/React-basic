import React, { Component } from 'react'

class JobDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {handleChange, jobTitle, jobLocation, email} = this.props;
        return (
            <>
                <h2>Enter your job information</h2>
                <label>
                    <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={jobTitle}
                        onChange={handleChange('jobTitle')}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange('email')}
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="jobLocation"
                        placeholder="Location"
                        value={jobLocation}
                        onChange={handleChange('jobLocation')}
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </>
        )
    }
}

export default JobDetails