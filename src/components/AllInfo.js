import React, { Component } from 'react'

class AllInfo extends Component {
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {firstName, lastName, jobTitle, email, jobLocation } = this.props;
        return (
            <>
                <h2>Here is the information you entered:</h2>
                Full Name: <b>{lastName +" "+ firstName}<br /></b>
                Job: <b>{jobTitle}</b><br />
                Email: <b>{email}</b><br />
                Location: <b>{jobLocation}</b><br />
                <button className="Back" onClick={this.back}>
                « Back
                </button>
            </>
        )
    }
}

export default AllInfo