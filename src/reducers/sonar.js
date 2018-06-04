import initialState from './initialState';
import fpswitch from '../lib/fpswitch';

export const sonar = (state = initialState, action) => {
    const boardLength = Math.sqrt(state.board.length);
    const calcPossibilities = board => board.reduce((acc, curr, ind) => {
        if (curr.containsSub) {
            
            acc.push(curr);
        }
        return acc;
    }, [])
    const cases = {
        "TORPEDO_LAUNCH": () => Object.assign({}, state),
        "MINE_DROP": () => Object.assign({}, state),
        "DRONE_SCAN": () => Object.assign({}, state),
        "SONAR_SCAN": () => Object.assign({}, state),
        "SILENT_RUNNING": () => Object.assign({}, state),
        "SURFACE": () => Object.assign({}, state),
        "MINE_TRIGGER": () => Object.assign({}, state),
        "MOVE_NORTH": () => {
            console.log(calcPossibilities(state.board))
            return Object.assign({}, state, {
                board: state.board
                    .map((c, ind) => Object.assign({}, c, {
                    containsSub: (ind + boardLength + 1) > state.board.length
                                || (state.board[ind + boardLength] 
                                    && (state.board[ind + boardLength].obstacle 
                                    || !state.board[ind + boardLength].containsSub)) 
                                ? false 
                                : c.containsSub
                }))
            })
        },
        "MOVE_EAST": () => Object.assign({}, state, {
            board: state.board
                .map((c, ind) => Object.assign({}, c, {
                containsSub: ind % boardLength === 0
                            || (state.board[ind - 1] 
                                && (state.board[ind - 1].obstacle 
                                || !state.board[ind - 1].containsSub)) 
                            ? false 
                            : c.containsSub
            }))
        }),
        "MOVE_SOUTH": () => Object.assign({}, state, {
            board: state.board
                .map((c, ind) => Object.assign({}, c, {
                containsSub: ind < boardLength 
                            || (state.board[ind - boardLength] 
                                && (state.board[ind - boardLength].obstacle 
                                    || !state.board[ind - boardLength].containsSub)) 
                            ? false 
                            : c.containsSub
            }))
        }),
        "MOVE_WEST": () => Object.assign({}, state, {
            board: state.board
                .map((c, ind) => Object.assign({}, c, {
                containsSub: (ind + 1) % boardLength === 0 
                            || (state.board[ind + 1] 
                                && (state.board[ind + 1].obstacle 
                                || !state.board[ind + 1].containsSub)) 
                            ? false 
                            : c.containsSub
            }))
        })
    }
    return fpswitch(cases)(action.type)(Object.assign({}, state));
};