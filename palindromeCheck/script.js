let inputTxt = document.getElementById('inputTxt')

inputTxt.addEventListener('keyup', handleKeyDown)

const words = ["level", "radar", "text", "river", "madam", "sales", "mom"];
let count = 0
words.map((word)=>{
    checkPalindrome(word) && count++;

})

function handleKeyDown(e) {
    inputTxt.style.borderColor = checkPalindrome(e.target.value) ? 'green' : 'red'
}

function checkPalindrome(text) {
    let lenOfWord = text.length
    for (let i = 0; i < lenOfWord / 2; i++) {
        if (text[i] !== text[lenOfWord - 1 - i]) {
            return false
        }
    }

    return true
}




console.log(count);