document.title = "Yīfu (2)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Yīfu (2) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Yīfu (2) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Yīfu (2) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e8dacb854bd1fe2183032d3.mp3",
    "5e8dacb854bd1fe2183032d4.mp3",
    "5e92e8ba8ef7c7826650ada5.mp3",
    "5e92e8bb8ef7c7826650ada6.mp3",
    "5e8dacb854bd1fe2183032d2.mp3",
    "5e8dacb854bd1fe2183032e2.mp3",
    "5e92e8bc8ef7c7826650ada7.mp3",
    "5e8dacb854bd1fe2183032d5.mp3",
    "5e8dacb854bd1fe2183032df.mp3",
    "5e92e8bd8ef7c7826650ada8.mp3",
    "5e8dacb854bd1fe2183032e1.mp3",
    "5e92e8be8ef7c7826650ada9.mp3"
]);
