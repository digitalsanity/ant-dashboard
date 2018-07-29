import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import CreatableSelect from 'react-select/lib/Creatable';
import { colourOptions } from './options';

const createOption = (label: string) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ''),
  });
class Creatable extends Component {
    state = {
        isLoading: false,
        options: colourOptions,
        value: undefined,
    };
    handleChange = (newValue: any, actionMeta: any) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
        this.setState({ value: newValue });
    };
    handleCreate = (inputValue: any) => {
        this.setState({ isLoading: true });
        console.group('Option created');
        console.log('Wait a moment...');
        setTimeout(() => {
            const { options } = this.state;
            const newOption = createOption(inputValue);
            console.log(newOption);
            console.groupEnd();
            this.setState({
                isLoading: false,
                options: [...options, newOption],
                value: newOption,
            });
        }, 1000);
    };
    render() {
        const { isLoading, options, value } = this.props;
        return (
            <CreatableSelect
                isClearable
                isDisabled={isLoading}
                isLoading={isLoading}
                onChange={this.handleChange}
                onCreateOption={this.handleCreate}
                options={colourOptions}
                value={value}
            />
        );
    }
}

const mapStateToProps = state => {
    return{
        colourOptions: state.selectReducer.colourOptions,       
        currentValue:  state.selectReducer.currentValue
    }
}
export default connect(mapStateToProps)(Creatable);