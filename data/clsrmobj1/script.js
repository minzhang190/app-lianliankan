document.title = "Jiàoshì Yòngpǐn (1)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (1) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (1) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (1) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e9cc6ec83dd7905aa16c67f.mp3",
    "5e9cc6ec83dd7905aa16c680.mp3",
    "5e8dafd4fe028112aa073e72.mp3",
    "5e8dafd4fe028112aa073e6e.mp3",
    "5e9cc6ee83dd7905aa16c681.mp3",
    "5e9cc6ee83dd7905aa16c682.mp3",
    "5e9cc6ee83dd7905aa16c683.mp3",
    "5e9cc6ef83dd7905aa16c684.mp3",
    "5e9cc6ef83dd7905aa16c685.mp3",
    "5e8dafd4fe028112aa073e6f.mp3",
    "5e9cc6f083dd7905aa16c686.mp3",
    "5e8dafd4fe028112aa073e73.mp3"
]);
