document.title = "Shíwù (4)";

props.range = 10;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Shíwù (4) - Level 1',
    columns: 6,
    rows: 6,
    use: 5,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shíwù (4) - Level 2',
    columns: 10,
    rows: 8,
    use: 10,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shíwù (4) - Level 3',
    columns: 6,
    rows: 6,
    use: 5,
    matching: true
})];

loadSound([
    "5ec1d07a5f5aaa74c006597c.mp3",
    "5ec1d07b5f5aaa74c006597d.mp3",
    "5ec1d07b5f5aaa74c006597e.mp3",
    "5ec1d07c5f5aaa74c006597f.mp3",
    "5ec1d07c5f5aaa74c0065980.mp3",
    "5ec1d07d5f5aaa74c0065981.mp3",
    "5ec1d07d5f5aaa74c0065982.mp3",
    "5ec1d07e5f5aaa74c0065983.mp3",
    "5ec1d07e5f5aaa74c0065984.mp3",
    "5ec1d07f5f5aaa74c0065985.mp3"
]);
