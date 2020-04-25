document.title = "Tiānqì (2)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Tiānqì (2) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Tiānqì (2) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Tiānqì (2) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e9cd3b0c9c8767483d7747b.mp3",
    "5e9cd3b2c9c8767483d7747d.mp3",
    "5e8db08a26af9d56f020f497.mp3",
    "5e8db08a26af9d56f020f494.mp3",
    "5e8db08a26af9d56f020f495.mp3",
    "5e8db08a26af9d56f020f496.mp3",
    "5e9cd3bdc9c8767483d77488.mp3",
    "5e9cd3bec9c8767483d77489.mp3",
    "5e9cd3bfc9c8767483d7748a.mp3",
    "5e9cd3c0c9c8767483d7748b.mp3",
    "5e9cd3c1c9c8767483d7748c.mp3",
    "5e9cd3c2c9c8767483d7748d.mp3"
]);
