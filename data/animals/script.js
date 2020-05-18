document.title = "Dòngwu";

props.headline = "Dòngwu";
props.range = 16;
props.gameTimeLimit = 600;
props.maxCellSize = 480;

props = [Object.assign({}, props, {
    headline: 'Dòngwu - Level 1',
    columns: 6,
    rows: 6,
    use: 8,
    matching: false
}), Object.assign({}, props, {
    headline: 'Dòngwu - Level 2',
    columns: 10,
    rows: 8,
    use: 16,
    matching: false
}), Object.assign({}, props, {
    headline: 'Dòngwu - Level 3',
    columns: 6,
    rows: 6,
    use: 8,
    matching: true
})];

loadSound([
    "5e9cda08037c6b87b73250f1.mp3",
    "5e9cda09037c6b87b73250f2.mp3",
    "5e9cda09037c6b87b73250f3.mp3",
    "5e9cda09037c6b87b73250f4.mp3",
    "5e8dab8369c2516911ea4531.mp3",
    "5e8dab8369c2516911ea4530.mp3",
    "5e9cda0b037c6b87b73250f5.mp3",
    "5e9cda0b037c6b87b73250f6.mp3",
    "5e9cda0b037c6b87b73250f7.mp3",
    "5e9cda0c037c6b87b73250f8.mp3",
    "5e8dab8369c2516911ea4532.mp3",
    "5e9cda0d037c6b87b73250f9.mp3",
    "5e9cda0d037c6b87b73250fa.mp3",
    "5e9cda0d037c6b87b73250fb.mp3",
    "5e9cda0e037c6b87b73250fc.mp3",
    "5e9cda0e037c6b87b73250fd.mp3"
]);
