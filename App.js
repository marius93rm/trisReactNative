import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

function Square({ value, onClick }) {
  return (
    <View style={styles.square}>
      <Button
        onPress={onClick}
        title={value ? value : " "}
      >
      </Button>

    </View>
  );

  
}

export default function App() {

  //xIsNext
  const [xIsNext, setXIsNext] = useState(true);
  //board
  const [board, setBoard] = useState(Array(9).fill(null));

  function renderSquare(i) {
    return <Square value={board[i]} onClick={() => handleClick(i)} />;
  }



  function handleClick(i) {
    const squares = board.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setBoard(squares);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(board) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style="styles.header">Tris</Text>
      <Text style="styles.subheader">A React Native Game</Text>
      <Text style="styles.giocatore">tocca al giocatore {xIsNext ? "Giocatore1" : "Giocatore2"} </Text>

      <View style="styles.board">
        <View style="styles.row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </View>
        <View style="styles.row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </View>
        <View style="styles.row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </View>
      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginTop: 150,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subheader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  giocatore: {
    fontSize: 18,
  },

  board: {
    flex: 3,
    flexDirection: 'column',
    
  },

  row: {
    flexDirection: 'row',

  },
  square: {
    backgroundColor: 'blue',
    margin: 10,
  }

});
