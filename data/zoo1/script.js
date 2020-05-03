document.title = "Dòngwùyuán (1)";

props.range = 9;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Dòngwùyuán (1) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Dòngwùyuán (1) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Dòngwùyuán (1) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5eadf93a8f2afc15aed00f38.mp3",
    "5e8dab8369c2516911ea4536.mp3",
    "5eadf93b8f2afc15aed00f39.mp3",
    "5e8dab8369c2516911ea453a.mp3",
    "5eadf93c8f2afc15aed00f3a.mp3",
    "5e8dab8369c2516911ea453c.mp3",
    "5e8dab8369c2516911ea4534.mp3",
    "5eadf93f8f2afc15aed00f3b.mp3",
    "5e8dab8369c2516911ea452e.mp3"
]);
