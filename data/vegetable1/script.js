document.title = "Shūcài (1)";

props.range = 14;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Shūcài (1) - Level 1',
    columns: 6,
    rows: 6,
    use: 7,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shūcài (1) - Level 2',
    columns: 10,
    rows: 8,
    use: 14,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shūcài (1) - Level 3',
    columns: 6,
    rows: 6,
    use: 7,
    matching: true
})];

loadSound([
    "5e8dadcf3018c62731acd17a.mp3",
    "5e8dadcf3018c62731acd17c.mp3",
    "5eadf9d98deb5b71a395fe03.mp3",
    "5e8dadcf3018c62731acd17b.mp3",
    "5eadf9db8deb5b71a395fe04.mp3",
    "5e8dadcf3018c62731acd17f.mp3",
    "5eadf9dc8deb5b71a395fe05.mp3",
    "5eadf9dd8deb5b71a395fe06.mp3",
    "5eadf9de8deb5b71a395fe07.mp3",
    "5e8dadcf3018c62731acd17e.mp3",
    "5eadf9e08deb5b71a395fe08.mp3",
    "5eadf9e08deb5b71a395fe09.mp3",
    "5eadf9e18deb5b71a395fe0a.mp3",
    "5eadf9e28deb5b71a395fe0b.mp3"
]);
