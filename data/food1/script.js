document.title = "Shíwù (1)";

props.range = 10;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Shíwù (1) - Level 1',
    columns: 6,
    rows: 6,
    use: 5,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shíwù (1) - Level 2',
    columns: 10,
    rows: 8,
    use: 10,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shíwù (1) - Level 3',
    columns: 6,
    rows: 6,
    use: 5,
    matching: true
})];

loadSound([
    "5ec1d0605f5aaa74c0065962.mp3",
    "5ec1d0615f5aaa74c0065963.mp3",
    "5ec1d0615f5aaa74c0065964.mp3",
    "5ec1d0625f5aaa74c0065965.mp3",
    "5e8dad947aa6d6552ebb39b1.mp3",
    "5ec1d0635f5aaa74c0065966.mp3",
    "5ec1d0635f5aaa74c0065967.mp3",
    "5ec1d0645f5aaa74c0065968.mp3",
    "5e8dad947aa6d6552ebb39ad.mp3",
    "5ec1d06a5f5aaa74c0065969.mp3"
]);
