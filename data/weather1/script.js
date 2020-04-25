document.title = "Tiānqì (1)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Tiānqì (1) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Tiānqì (1) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Tiānqì (1) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e9cd3b0c9c8767483d7747a.mp3",
    "5e9cd3b1c9c8767483d7747c.mp3",
    "5e9cd3b3c9c8767483d7747e.mp3",
    "5e9cd3b3c9c8767483d7747f.mp3",
    "5e9cd3b5c9c8767483d77480.mp3",
    "5e9cd3b6c9c8767483d77481.mp3",
    "5e9cd3b7c9c8767483d77482.mp3",
    "5e9cd3b9c9c8767483d77483.mp3",
    "5e9cd3bac9c8767483d77484.mp3",
    "5e9cd3bbc9c8767483d77485.mp3",
    "5e9cd3bcc9c8767483d77486.mp3",
    "5e9cd3bcc9c8767483d77487.mp3"
]);
