import React, {Component} from 'react';

import './visualiser.css';


class Square extends React.Component {
    // TODO state?
    render() {
        //console.log(this.props);
        const classes = this.props.isFinish
        ? 'end'
        : this.props.isStart
        ? 'start'
        : this.props.isWall
        ? 'wall'
        : '';
    return (
     <div className={`square ${classes}`}></div>   
    )
    }
}

class Grid extends React.Component {
    
    render() {
        const rows = this.props.rows
        const renderedRows = [];
        for (let i = 0; i < rows.length; i++){
            renderedRows.push(<div className="row" key={i}>{rows[i]}</div>);
        }
        return renderedRows;
    }
}

export default class Visualiser extends React.Component {
    constructor() {
        super();
        this.state = {
          viewWidth: 1920,
          viewHeight: 952,
          grid: [],
          mousePressed: false,
        };
      }

    componentDidMount() {
        const viewHeight = window.innerHeight;
        const viewWidth = window.innerWidth;
        const grid = this.getBlankGrid(viewWidth,viewHeight);

        this.setState({
            viewWidth,
            viewHeight,
            grid
        });
    }

    render() {
        return(
            <div className="visualiser">
                <div className="grid">
                    <Grid 
                    rows={this.state.grid}
                    />
                </div>
            </div>
        );
    }

    newSquare(row,col,start,finish) {
        return (
            <Square
                row={row}
                column={col}
                isStart={start}
                isFinish={finish}
                isWall={false}
                distance={null}
            />
        );
    }

    getBlankGrid(viewWidth, viewHeight) {
        const gridWidth = viewWidth * 0.9;
        const gridHeight = viewHeight * 0.9;
        const rowLength = Math.ceil(gridWidth / 27) + 1;
        const numberOfRows = Math.floor(gridHeight / 27);

        const startRow = Math.round(numberOfRows / 2);
        const startCol = Math.round(rowLength / 4);
        const endCol = Math.round(rowLength / 4 * 3);

        let rows = [];
        let count = 0;

        for (let i = 0; i < numberOfRows; i++) {
            let filledRows = [];
            for (let j = 0; j < rowLength; j++) {
                if (i === startRow && j === startCol) {
                    filledRows.push(this.newSquare(i,j,true,false));
                } else if (i === startRow && j === endCol) {
                    filledRows.push(this.newSquare(i,j,false,true));
                } else {
                    filledRows.push(this.newSquare(i,j,false,false));
                }

                count++;
            }
            rows.push(filledRows);
        }
        return rows;

    }
}