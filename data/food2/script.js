document.title = "Shíwù (2)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Shíwù (2) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shíwù (2) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shíwù (2) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5ec1d06b5f5aaa74c006596a.mp3",
    "5e8dad947aa6d6552ebb39b4.mp3",
    "5e8dad947aa6d6552ebb39b3.mp3",
    "5e8dad947aa6d6552ebb39ab.mp3",
    "5ec1d0725f5aaa74c006596b.mp3",
    "5ec1d0725f5aaa74c006596c.mp3",
    "5ec1d0725f5aaa74c006596d.mp3",
    "5ec1d0735f5aaa74c006596e.mp3",
    "5e8dad947aa6d6552ebb39ac.mp3",
    "5ec1d0745f5aaa74c006596f.mp3",
    "5ec1d0745f5aaa74c0065970.mp3",
    "5ec1d0755f5aaa74c0065971.mp3"
]);
