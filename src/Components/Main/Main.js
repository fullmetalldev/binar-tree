import React, {useEffect, useState} from 'react';
import "./Main.css";

const Main = () => {
    useEffect(() => {
        document.addEventListener("keypress", numberChange);

    }, []);

    const addBin = () => {
        const binars = document.querySelectorAll('.binar');

        let bin = document.createElement('div');
        bin.textContent = Math.floor(Math.random() * (100 - (-100)) + (-100));
        if (+bin.textContent > +binars[binars.length - 1].textContent) {
            bin.className = "binar right"
        } else {
            bin.className = "binar left"
        }
        binars[binars.length - 1].append(bin)
    };

    const numberChange = async (event) => {
        if (event.keyCode === 32) {
            addBin()
        }
    };


    return (
        <div className="Main">
            <button onClick={()=>{
                addBin()
            }}>Add</button>
            <div className="binar mainBin">
                0
            </div>
        </div>
    );
};

export default Main;