import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { calculateWinner } from './helper';

import Navbar from "./components/Navbar/Navbar"
import MovementHistory from "./components/MovementHistory/MovementHistory"
import Board from "./components/Board/Board"
import PlayersBoard from './components/PlayersBoard/PlayersBoard';
import './App.css';
import WinnerGame from './components/WinnerGame/WinnerGame';
import Footer from './components/Footer/Footer';

const App = () => {
    const [player1, setPlayer1] = useState("Player 1");
    const [player2, setPlayer2] = useState("Player 2");

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(history[stepNumber]);
    const x0 = xIsNext ? "X" : "O";

    const handleClick = (i) => {
        console.log('handleClick', i);

        const historyPoint = history.slice(0, stepNumber + 1);
        const current = historyPoint[stepNumber];
        const squares = [...current];
        // retornar si la casilla está ocupada
        if (winner || squares[i]) return;

        // seleccionar casilla
        squares[i] = x0;
        setHistory([...historyPoint, squares]);
        setStepNumber(historyPoint.length);
        setXIsNext(!xIsNext);
    };

    const jumpTo = (step) => {
        setHistory(history.splice(0, step + 1));
        setStepNumber(step);
        setXIsNext(step % 2 === 0);
    };

    return (
        <div className="app">
            <Navbar title="Tic Tac Toe" />
            <Container className="main-content">
                <Row>
                    <Col sm={8}>
                        <Board squares={history[stepNumber]} onClick={handleClick} />
                    </Col>
                    <Col sm={4}>
                        {
                            winner
                                ? <WinnerGame playerName={x0 === 'X' ? player2 : player1} />
                                : <PlayersBoard nextTurn={x0} player1Name={player1} player2Name={player2} />
                        }
                        <MovementHistory history={history} onClick={jumpTo} />
                    </Col>
                </Row>
            </Container>

            <Footer />
        </div>
    );
};

export default App;