import React from 'react';
import { Button } from 'reactstrap';
// import './post-add-form.css';
import styled from 'styled-components';

const Panel = styled.div`
  margin-top: 20px;
  display: flex;

  .new-post-label {
      width: auto;
      flex-grow: 1;
      margin-right: 3px;
    }
`

const PostAddForm = ({ onAdd }) => {
    return (
        <Panel>
            <input
                type="text"
                placeholder="What are you thinking about ? ;)"
                className="form-control new-post-label"
            />
            <Button
                type="submit"
                outline color="secondary"
                onClick={() => onAdd('Hello')}>
                Add
            </Button>
        </Panel>
    )
}

export default PostAddForm;