import React, { Component } from 'react';
import Select from 'react-select';
const data = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]
class ProfileSettings extends Component {
    state = {
        selectedOption: 'chocolate',
    }
    handleChange = (selectedOption) => {
        console.log(selectedOption)
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        return (
            <div>
                <h3>ProfileSettings Component</h3>
                <Select
                    options={data}
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default ProfileSettings;