function capitalizeWords(str) {
    if (typeof str !== 'string') return '';
    return str
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(function(word) {
            return word
                .split('-')
                .map(function(part) {
                    return part.length === 0
                        ? ''
                        : part.charAt(0).toUpperCase() + part.slice(1);
                })
                .join('-');
        })
        .join(' ');
}

var tests = [
    "hello world",
    "  multiple   spaces here",
    "mIxEd CaSe aNd PUNCTUATION!",
    "jack-o-lantern festival",
    "",
    null,
    "a",
    "already Capitalized",
];

tests.forEach(function(t){
    console.log(JSON.stringify(t), '->', JSON.stringify(capitalizeWords(t)));
});
