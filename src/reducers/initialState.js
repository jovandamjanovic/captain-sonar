export default {
    board: '000X0000000000000X00000000000000X0000X0000000000000000X00000000000X0000000000000000X000X000000000000'.split('').map(c => ({potentialMine: false, obstacle: c === 'X', containsSub: c !=='X', subPath: false}))
    // board: '0000X0000'.split('').map(c => ({potentialMine: false, obstacle: c === 'X', containsSub: c !=='X', subPath: false}))
}