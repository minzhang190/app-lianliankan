document.title = "Jiàoshì Yòngpǐn (3)";

props.range = 13;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (3) - Level 1',
    columns: 6,
    rows: 6,
    use: 6,
    matching: false
}), Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (3) - Level 2',
    columns: 10,
    rows: 8,
    use: 13,
    matching: false
}), Object.assign({}, props, {
    headline: 'Jiàoshì Yòngpǐn (3) - Level 3',
    columns: 6,
    rows: 6,
    use: 6,
    matching: true
})];

loadSound([
    "5e8dafd4fe028112aa073e70.mp3",
    "5e8daed2f027c1f33241f487.mp3",
    "5e9cc6fd83dd7905aa16c693.mp3",
    "5e9cc6fe83dd7905aa16c694.mp3",
    "5e9cc6ff83dd7905aa16c695.mp3",
    "5e9cc6ff83dd7905aa16c696.mp3",
    "5e9cc70083dd7905aa16c697.mp3",
    "5e9cc70183dd7905aa16c698.mp3",
    "5e8dac67201d843588616dc8.mp3",
    "5e8dac67201d843588616dc7.mp3",
    "5e9cc70383dd7905aa16c699.mp3",
    "5e9cc70483dd7905aa16c69a.mp3",
    "5e9cc70483dd7905aa16c69b.mp3"
]);
