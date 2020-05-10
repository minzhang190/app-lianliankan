document.title = "Shuǐguǒ (2)";

props.range = 14;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Shuǐguǒ (2) - Level 1',
    columns: 6,
    rows: 6,
    use: 7,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shuǐguǒ (2) - Level 2',
    columns: 10,
    rows: 8,
    use: 14,
    matching: false
}), Object.assign({}, props, {
    headline: 'Shuǐguǒ (2) - Level 3',
    columns: 6,
    rows: 6,
    use: 7,
    matching: true
})];

loadSound([
    "5e8bf944f6082885ff046ab3.mp3",
    "5eb792e79d5b9f0e47f908b7.mp3",
    "5e8bf941f6082885ff046aaf.mp3",
    "5eb792e79d5b9f0e47f908b8.mp3",
    "5e8bf943f6082885ff046ab2.mp3",
    "5eb792e89d5b9f0e47f908b9.mp3",
    "5e8bf93ff6082885ff046aad.mp3",
    "5e8bf93ef6082885ff046aac.mp3",
    "5e8bf940f6082885ff046aae.mp3",
    "5e8bf942f6082885ff046ab1.mp3",
    "5e8bf93ef6082885ff046aab.mp3",
    "5eb792e99d5b9f0e47f908ba.mp3",
    "5eb792ea9d5b9f0e47f908bb.mp3",
    "5eb792ea9d5b9f0e47f908bc.mp3"
]);
