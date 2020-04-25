document.title = "Yīfu (3)";

props.range = 12;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Yīfu (3) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Yīfu (3) - Level 2',
    columns: 10,
    rows: 8,
    use: 12,
    matching: false
}), Object.assign({}, props, {
    headline: 'Yīfu (3) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e8dacb854bd1fe2183032e0.mp3",
    "5e8dacb854bd1fe2183032dd.mp3",
    "5e92e8bf8ef7c7826650adaa.mp3",
    "5e8dacb854bd1fe2183032de.mp3",
    "5e92e8bf8ef7c7826650adab.mp3",
    "5e92e8c08ef7c7826650adac.mp3",
    "5e92e8c08ef7c7826650adad.mp3",
    "5e8dacb854bd1fe2183032db.mp3",
    "5e8dacb854bd1fe2183032d8.mp3",
    "5e92e8c18ef7c7826650adae.mp3",
    "5e8dacb854bd1fe2183032d9.mp3",
    "5e8dacb854bd1fe2183032da.mp3"
]);
