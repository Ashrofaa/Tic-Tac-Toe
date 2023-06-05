import React from 'react';

export default function Grid() {

    let player = document.getElementById("player");
    let xArray = [];
    let oArray = [];
    const winArray = [
        [1, 2, 3],
        [1, 4, 7],
        [1, 5, 9],
        [3, 6, 9],
        [7, 8, 9],
        [3, 5, 7],
        [4, 5, 6]
    ];

    function winCase() {
        document.getElementById("gridContainer").classList.add("unclickable");
        document.querySelector("body").classList.remove("normalState");
        document.querySelector("body").classList.add("winState");
        let title = document.getElementById("gameTitle");
        if (player.textContent === 'X') {title.textContent = "player X wins";}
        else {title.textContent = "player O wins";}
    }

    function checkEquality(a, b) {
        let z=[];
        for (let c = 0; c < 7; c++) {
            for (let i = 0; i< 3; i++) {
                if (a.includes(b[c][i])) {z.push(true);}
            }
            if (z.length === 3 && (z.every((v, i, arr) => v === arr[0]))) {
                winCase();
                return true;
            } else {z = [];}
        };
    }

    function handleClick(event) {
        if (player.textContent === 'X') {
            document.getElementById(event.target.id).textContent = "X";
            document.getElementById(event.target.id).classList.add("unclickable");
            xArray.push(Number(event.target.id));
            checkEquality(xArray, winArray);
            player.textContent = "O";
        } else{
            document.getElementById(event.target.id).textContent = "O";
            document.getElementById(event.target.id).classList.add("unclickable");
            oArray.push(Number(event.target.id));
            checkEquality(oArray, winArray);
            player.textContent = "X";
        }

    }


  return (
    <div className='mainContainer'>
        <div id='gridContainer'>
            <div className='gridItem' id="1" onClick={handleClick}></div>
            <div className='gridItem' id="2" onClick={handleClick}></div>
            <div className='gridItem' id="3" onClick={handleClick}></div>
            <div className='gridItem' id="4" onClick={handleClick}></div>
            <div className='gridItem' id="5" onClick={handleClick}></div>
            <div className='gridItem' id="6" onClick={handleClick}></div>
            <div className='gridItem' id="7" onClick={handleClick}></div>
            <div className='gridItem' id="8" onClick={handleClick}></div>
            <div className='gridItem' id="9" onClick={handleClick}></div>
        </div>
        <button type='button' onClick={() => window.location.reload()}>Reset</button>
    </div>
  )
}
