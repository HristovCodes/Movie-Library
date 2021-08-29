import React, { FormEventHandler } from 'react';
import './SearchForm.scss';

export default function SearchForm () {
    const handleSubmit:FormEventHandler = (e)=> {
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input className="search"  placeholder="Search by movie title..." type="search"></input>
            <button className="btnsubmit" type="submit">Search</button>
        </form>
    )
}