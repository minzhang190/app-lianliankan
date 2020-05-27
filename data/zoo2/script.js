document.title = "Dòngwùyuán (2)";

props.range = 9;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Dòngwùyuán (2) - Level 1',
    columns: 6,
    rows: 6,
    use: 5,
    matching: false
}), Object.assign({}, props, {
    headline: 'Dòngwùyuán (2) - Level 2',
    columns: 10,
    rows: 8,
    use: 9,
    matching: false
}), Object.assign({}, props, {
    headline: 'Dòngwùyuán (2) - Level 3',
    columns: 6,
    rows: 6,
    use: 5,
    matching: true
})];

loadSound([
    "5eadf9408f2afc15aed00f3c.mp3",
    "5eadf9418f2afc15aed00f3d.mp3",
    "5eadf9428f2afc15aed00f3e.mp3",
    "5eadf9438f2afc15aed00f3f.mp3",
    "5eadf9448f2afc15aed00f40.mp3",
    "5e8dab8369c2516911ea4539.mp3",
    "5e8dab8369c2516911ea452f.mp3",
    "5eadf9468f2afc15aed00f41.mp3",
    "5e8dab8369c2516911ea453d.mp3"
]);
