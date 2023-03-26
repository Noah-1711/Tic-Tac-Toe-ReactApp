import React, { useState } from 'react'
import './Board.css'
import { Square } from './Square'


export const Board = () => {



    const [square, setSquare] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(true)
    const [scores, setScores] = useState({ xScores: 0, oScores: 0 })
    const [gameover, setGameover] = useState(false)
    const [playwinner, setPlaywinner] = useState("")

    const style = playwinner === "X" ? "x-score" : "o-score";



    const winner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],

    ]


    const checkwinner = (square) => {
        for (let logic of winner) {
            const [a, b, c] = logic;
            if (square[a] !== null && square[a] === square[b] && square[a] === square[c]) {
                setGameover(true)
                setPlaywinner(square[a])
                return square[a]
            }

        }

        return false

    }


    const handleClick = (index) => {
        const newSquare = [...square]
        newSquare[index] = turn ? "X" : "O";

        const iswinner = checkwinner(newSquare)
        if (iswinner) {
            if (iswinner === "O") {
                let { oScores } = scores
                oScores += 1
                setScores({ ...scores, oScores })

            }
            else {

                let { xScores } = scores
                xScores += 1
                setScores({ ...scores, xScores })


            }
        }

        console.log(scores)

        setSquare(newSquare)
        setTurn(!turn)
    }

    const reset =()=>{
        setGameover(false)
        setSquare(Array(9).fill(null))

    }


    return (
        <>
        <div className="scores">
            <h3 className='x-score'>Player 1 : {scores.xScores}</h3>
            <h3 className='o-score'>Player 2 : {scores.oScores}</h3>
            

        </div>
        
            {/* <h2> {turn ? "Player 1" : "Player 2"} turn</h2> */}
            <div className='board-container'>
                { gameover?
          <>
          <div className='player-won'>
            <h2><span className={style} style={{fontSize:"30px"}}>{ playwinner}</span> has won the game</h2>
          <button  className="reset-btn" onClick={()=>{
           reset()
          }}> Play Again</button>
          </div>
          </> 
          :<>
                <div className="board-row">
                    <Square value={square[0]} onClick={() => square[0] === null && handleClick(0)} />
                    <Square value={square[1]} onClick={() => square[1] === null && handleClick(1)} />
                    <Square value={square[2]} onClick={() => square[2] === null && handleClick(2)} />

                </div>
                <div className="board-row">
                    <Square value={square[3]} onClick={() => square[3] === null && handleClick(3)} />
                    <Square value={square[4]} onClick={() => square[4] === null && handleClick(4)} />
                    <Square value={square[5]} onClick={() => square[5] === null && handleClick(5)} />


                </div>
                <div className="board-row">
                    <Square value={square[6]} onClick={() => square[6] === null && handleClick(6)} />
                    <Square value={square[7]} onClick={() => square[7] === null && handleClick(7)} />
                    <Square value={square[8]} onClick={() => square[8] === null && handleClick(8)} />


                </div>
                </>}

            </div>
            {
                !gameover?(  <button  className="reset-btn"onClick={()=>{
                    reset()
                   }}> Reset</button>):null
            }
          
        </>
    )
}
