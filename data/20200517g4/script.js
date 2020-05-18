document.title = "Jīntiān tiānqì zěnme yàng?";

props.range = 11;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Jīntiān tiānqì zěnme yàng? - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Jīntiān tiānqì zěnme yàng? - Level 2',
    columns: 10,
    rows: 8,
    use: 11,
    matching: false
}), Object.assign({}, props, {
    headline: 'Jīntiān tiānqì zěnme yàng? - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e9cd75dfb76c53278b7ea5c.mp3",
    "5e9cd75dfb76c53278b7ea5d.mp3",
    "5e9cd75efb76c53278b7ea5e.mp3",
    "5e9cd75ffb76c53278b7ea5f.mp3",
    "5e9cd75ffb76c53278b7ea60.mp3",
    "5e9cd760fb76c53278b7ea61.mp3",
    "5e9cd58117c76e7d6c69f905.mp3",
    "5e9cd58217c76e7d6c69f907.mp3",
    "5e9cd58117c76e7d6c69f906.mp3",
    "5ea3b71497e2a3b784762d36.mp3",
    "5ea3b71497e2a3b784762d37.mp3"
]);
