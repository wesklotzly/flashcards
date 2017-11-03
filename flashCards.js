
exports.BasicCard = function(front, back) {
    this.front = front;
    this.back = back;
}

exports.ClozeCard = function(text, cloze) {

    var textLow = text.toLowerCase();
    var clozeLow = cloze.toLowerCase();

    if (!textLow.includes(clozeLow)) {
        console.log('ERROR' + cloze);
        return;
    }

    this.full = text;
    this.cloze = cloze;
    this.partial = text.replace(cloze, '..');
}