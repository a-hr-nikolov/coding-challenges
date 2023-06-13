class ChessBoard {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const newBoard = [];
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        row.push([i, j]);
      }
      newBoard.push(row);
    }
    this.board = newBoard;

    return newBoard;
  }

  printBoard() {
    this.board.forEach(item => console.log(item));
  }
}

class Knight {
  constructor() {
    this.board = new ChessBoard().board.flat();
  }

  getMovesBetween(start, end) {
    let path = this.travail(start, end);
    if (!path) return 'Invalid moves';
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach(item => console.log(item));
  }

  travail(start, end) {
    //if (!this.board.includes(start) || !this.board.includes(end)) return null;

    const startingSquare = { position: start, path: [start] };
    const visitedSet = new Set();
    const queue = [startingSquare];

    while (queue.length > 0) {
      const currentSquare = queue.shift();
      const validMoves = this.generateValidMoves(currentSquare.position);
      for (let move of validMoves) {
        if (!visitedSet.has(JSON.stringify(move))) {
          visitedSet.add(JSON.stringify(move));
          const newSquare = {
            position: move,
            path: [...currentSquare.path, move],
          };
          if (JSON.stringify(newSquare.position) === JSON.stringify(end))
            return newSquare.path;
          queue.push(newSquare);
        }
      }
    }

    return null;
  }

  generateValidMoves(position) {
    const [x, y] = position;
    const validMoves = [];
    const moves = [
      [2, 1],
      [1, 2],
      [-1, 2],
      [-2, 1],
      [-2, -1],
      [-1, -2],
      [1, -2],
      [2, -1],
    ];

    for (const [dx, dy] of moves) {
      const newX = x + dx;
      const newY = y + dy;

      // Check if the new position is within the chessboard boundaries (8x8 board)
      if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
        validMoves.push([newX, newY]);
      }
    }
    return validMoves;
  }
}

const knight = new Knight();
knight.getMovesBetween([0, 0], [1, 1]);
