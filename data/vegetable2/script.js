document.title = "Shūcài (2)";

props.range = 14;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Shūcài (2) - Level 1',
    columns: 6,
    rows: 6,
    use: 7,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shūcài (2) - Level 2',
    columns: 10,
    rows: 8,
    use: 14,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shūcài (2) - Level 3',
    columns: 6,
    rows: 6,
    use: 7,
    matching: true
})];

loadSound([
    "5e8dadcf3018c62731acd17d.mp3",
    "5eadf9e48deb5b71a395fe0c.mp3",
    "5eadf9e58deb5b71a395fe0d.mp3",
    "5eadf9e68deb5b71a395fe0e.mp3",
    "5eadf9e78deb5b71a395fe0f.mp3",
    "5e8bf946f6082885ff046ab6.mp3",
    "5eadfb3dde049f5b7ba2f2ac.mp3",
    "5eadfb3fde049f5b7ba2f2ad.mp3",
    "5eadfb3fde049f5b7ba2f2ae.mp3",
    "5eadfb40de049f5b7ba2f2af.mp3",
    "5eadfb41de049f5b7ba2f2b0.mp3",
    "5eadfb42de049f5b7ba2f2b1.mp3",
    "5eadfcd6f9ba221b944caa98.mp3",
    "5eadfcd6f9ba221b944caa99.mp3"
]);
