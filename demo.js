function isPangram(){
    let sentence = document.getElementById('pan-text').value;
    let sen = sentence.toLowerCase();
    for (let req of 'abcdefghijklmnopqrstuvwxyz'){
        if (sen.includes(req)){
            alert('This sentence is not a pangram.');
            document.getElementById('pan-text').value = '';
            return false;
        }
    }
    if (sen === ''){
        alert('This sentence is not a pangram.');
        return false;
    }
    alert('This sentence is a pangram.');
    document.getElementById('pan-text').value = '';
    return true;
}

// The quick brown fox jumps over a lazy dog
// The five boxing wizards jump quickly