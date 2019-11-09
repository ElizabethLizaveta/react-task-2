import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import './post-add-form.css';
import styled from 'styled-components';

const Panel = styled.form`
  margin-top: 20px;
  display: flex;

  .new-post-label {
      width: auto;
      flex-grow: 1;
      margin-right: 3px;
    }
`

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValueChange(e) {

        this.setState({
            text: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        if(this.state.text !== '' && !this.state.text.match(/^\s+$/)) {
            this.props.onAdd(this.state.text)
        }
        this.setState({
            text: ''
        })
    }

    render() {
        return (
            <Panel
            onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="What are you thinking about ? ;)"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    type="submit"
                    outline color="secondary">
                    Add
            </Button>
            </Panel>
        )
    }
}
