function isPangram(){
    let sentence = document.getElementById('pan-text').value;
    let sen = sentence.toLowerCase();
    if (sen.length === 0 || sen.length < 26){
        alert('Not enough characters.');
        return false;
    }
    for (let req of 'abcdefghijklmnopqrstuvwxyz'){
        if (sen.includes(req)){
            alert('VALID PANGRAM!');
            document.getElementById('pan-text').value = '';
            return true;
        }
        else {
            alert('Not a valid pangram.')
            return false;
        }
    }

}

// Examples:
// The quick brown fox jumps over a lazy dog
// The five boxing wizards jump quickly