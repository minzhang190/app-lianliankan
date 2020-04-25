document.title = "Jiàoshì Yòngpǐn (2)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (2) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (2) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (2) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e9cc6f283dd7905aa16c687.mp3",
    "5e9cc6f383dd7905aa16c688.mp3",
    "5e9cc6f383dd7905aa16c689.mp3",
    "5e9cc6f483dd7905aa16c68a.mp3",
    "5e9cc6f583dd7905aa16c68b.mp3",
    "5e9cc6f683dd7905aa16c68c.mp3",
    "5e9cc6f683dd7905aa16c68d.mp3",
    "5e9cc6f783dd7905aa16c68e.mp3",
    "5e9cc6f883dd7905aa16c68f.mp3",
    "5e9cc6f983dd7905aa16c690.mp3",
    "5e9cc6fa83dd7905aa16c691.mp3",
    "5e9cc6fb83dd7905aa16c692.mp3"
]);
