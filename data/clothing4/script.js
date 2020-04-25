document.title = "Yīfu (4)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Yīfu (4) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Yīfu (4) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Yīfu (4) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e92e8c28ef7c7826650adaf.mp3",
    "5e8dacb854bd1fe2183032d1.mp3",
    "5e92e8c38ef7c7826650adb0.mp3",
    "5e92e8c38ef7c7826650adb1.mp3",
    "5e92e8c38ef7c7826650adb2.mp3",
    "5e92e8c48ef7c7826650adb3.mp3",
    "5e92e8c48ef7c7826650adb4.mp3",
    "5e92e8c48ef7c7826650adb5.mp3",
    "5e92e8c58ef7c7826650adb6.mp3",
    "5e92e8c58ef7c7826650adb7.mp3",
    "5e8dacb854bd1fe2183032dc.mp3",
    "5e92e8c68ef7c7826650adb8.mp3"
]);
