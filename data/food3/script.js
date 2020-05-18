document.title = "Shíwù (3)";

props.range = 11;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Shíwù (3) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shíwù (3) - Level 2',
    columns: 10,
    rows: 8,
    use: 11,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shíwù (3) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e8dad947aa6d6552ebb39b0.mp3",
    "5ec1d0765f5aaa74c0065972.mp3",
    "5ec1d0765f5aaa74c0065973.mp3",
    "5ec1d0775f5aaa74c0065974.mp3",
    "5ec1d0775f5aaa74c0065975.mp3",
    "5ec1d0775f5aaa74c0065976.mp3",
    "5ec1d0785f5aaa74c0065977.mp3",
    "5ec1d0785f5aaa74c0065978.mp3",
    "5ec1d0795f5aaa74c0065979.mp3",
    "5ec1d0795f5aaa74c006597a.mp3",
    "5ec1d07a5f5aaa74c006597b.mp3"
]);
