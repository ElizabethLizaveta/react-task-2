import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {

    const data = [
        2,
        'ddsdsdsds',
        {label: 'Going to learn React', important: true, id: 'erddc'},
        {label: 'Going to drink some coffee', important: false, id: 'fdees'},
        {label: 'Going to have a break ;)', important: false, id: 'fdfoo'}
    ]

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter />
            </div>
            <PostList posts={data} />
            <PostAddForm />
        </div>
    )
}

export default App;
