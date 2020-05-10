document.title = "Shuǐguǒ (1)";

props.range = 14;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Shuǐguǒ (1) - Level 1',
    columns: 6,
    rows: 6,
    use: 7,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shuǐguǒ (1) - Level 2',
    columns: 10,
    rows: 8,
    use: 14,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shuǐguǒ (1) - Level 3',
    columns: 6,
    rows: 6,
    use: 7,
    matching: true
})];

loadSound([
    "5e8bf93cf6082885ff046aa8.mp3",
    "5e8bf93af6082885ff046aa6.mp3",
    "5e8bf93bf6082885ff046aa7.mp3",
    "5e8bf93cf6082885ff046aa9.mp3",
    "5e8bf947f6082885ff046ab8.mp3",
    "5e8bf946f6082885ff046ab7.mp3",
    "5e8bf944f6082885ff046ab4.mp3",
    "5e8bf945f6082885ff046ab5.mp3",
    "5e8bf93df6082885ff046aaa.mp3",
    "5e8bf948f6082885ff046ab9.mp3",
    "5eb792e69d5b9f0e47f908b4.mp3",
    "5eb792e69d5b9f0e47f908b5.mp3",
    "5e8bf942f6082885ff046ab0.mp3",
    "5eb792e69d5b9f0e47f908b6.mp3"
]);
