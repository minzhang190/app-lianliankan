document.title = "Yīfu (1)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Yīfu (1) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Yīfu (1) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Yīfu (1) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e92e8b48ef7c7826650ad9c.mp3",
    "5e92e8b58ef7c7826650ad9d.mp3",
    "5e92e8b58ef7c7826650ad9e.mp3",
    "5e92e8b58ef7c7826650ad9f.mp3",
    "5e92e8b68ef7c7826650ada0.mp3",
    "5e92e8b68ef7c7826650ada1.mp3",
    "5e92e8b78ef7c7826650ada2.mp3",
    "5e8dacb854bd1fe2183032d7.mp3",
    "5e8dacb854bd1fe2183032d6.mp3",
    "5e8dacb854bd1fe2183032e3.mp3",
    "5e92e8b98ef7c7826650ada3.mp3",
    "5e92e8b98ef7c7826650ada4.mp3"
]);
