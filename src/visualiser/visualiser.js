import React, {Component} from 'react';

import './visualiser.css';

class Square extends React.Component {
    // TODO state?
    render() {
    return (
     <div className="square"></div>   
    )
    }
}

class Grid extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={i}
            />
        );
    }

    render() {
        // TODO grab these values from DOM to handle responsiveness
        const viewWidth = 1920.0;
        const viewHeight = 952.0;
        const gridWidth = viewWidth * 0.9;
        const gridHeight = viewHeight * 0.9;

        const numberrows = Math.ceil(gridHeight / 36);
        const rowlength = Math.ceil(gridWidth / 36);

        console.log("rowlength: " + rowlength);
        console.log("number: " + numberrows)

        let rows = [];
        let count = 0;

        for (let i = 0; i < numberrows; i++){
            let filledRows = [];
            for (let j = 0; j < rowlength; j++) {
                filledRows.push(this.renderSquare(count));
                count ++;
            }
            if (filledRows.length === rowlength){
                rows.push(<div className="row" key={i}>{filledRows}</div>);
            }
        }
        return(rows);
    }
}

export default class Visualiser extends React.Component {
    render() {
        return(
            <div className="visualiser">
                <div className="grid">
                    <Grid />
                </div>
            </div>
        );
    }
}