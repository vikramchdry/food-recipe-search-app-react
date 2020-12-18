import React from 'react'
//import { FastfoodIcon } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import SearchIcon from '@material-ui/icons/Search';

function Header(props) {

    const { search, onInputChange, onSearchClick } = props;

    return (
        <div className="jumbtron py-5">

            <h1 className="display-1" >
                <span className="FastIcon">
                    <i className="material-icons" ><FastfoodIcon /></i>
                </span>
                Food Recipes🚀 </h1>
            <div className="input-group w-50 mx-auto">
                <input type="text" className="form-control" placeholder="Search Your Recipe......." value={search} onChange={onInputChange} />
                <button className="btn btn-dark" type="button"><SearchIcon onClick={onSearchClick} /></button>
            </div>



        </div>

    );
}

export default Header;
