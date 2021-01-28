// my solution
function streetFighterSelection(fighters, position, moves) {
    let selectionLog = [];

    moves.forEach(move => {
        switch (move) {
            case 'up':
                if (position[0] !== 0) position[0] -= 1;
                break;
            case 'right':
                if (position[1] === fighters[0].length - 1) {
                    position[1] = 0;
                } else {
                    position[1] += 1;
                }
                break;
            case 'down':
                if (position[0] !== 1) position[0] += 1;
                break;
            case 'left':
                if (position[1] === 0) {
                    position[1] = fighters[0].length - 1;
                } else {
                    position[1] -= 1;
                }
                break;
        };
        selectionLog.push(fighters[position[0]][position[1]]);
    });
    return selectionLog;
}

// best practice
function streetFighterSelection(fighters, position, moves) {
    var result = [];

    moves.forEach(function (move) {
        if (move === "up") {
            position[0] = 0;
        } else if (move === "down") {
            position[0] = 1;
        } else if (move === "right") {
            position[1] = (position[1] === 5) ? 0 : position[1] + 1;
        } else if (move === "left") {
            position[1] = (position[1] === 0) ? 5 : position[1] - 1;
        }

        result.push(fighters[position[0]][position[1]]);
    });

    return result;
}