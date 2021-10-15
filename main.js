// Take our Input... put into an array... perform the wrap... put the wrapped keywords into an array... display the array into an output

const mainInput = document.getElementById('main-input');
const mainOutput = document.getElementById('main-output');

const createKeywordsBtn = document.getElementById('main-btn');
const copyBtn = document.getElementById('copyBtn');
let keywordsArray = [];
let wrappedKeywords = [];

createKeywordsBtn.addEventListener('click', updateValue);

// Main Function
function updateValue() {
        const mainInput = document.getElementById('main-input');
        const mainOutput = document.getElementById('main-output');
        keywordsArray = mainInput.value.split('\n');

        keywordsArray.forEach(textUpdater);

        function textUpdater(item) {
                wrappedKeywords.value += item + "\n";
                wrappedKeywords.value += item.replace(/(^|\s+)/g, "$1+") + "\n";
                wrappedKeywords.value += '[' + item + ']' + "\n";
                wrappedKeywords.value += '"' + item + '"' + "\n";                    
        };

        function outputKeywords() {
                mainOutput.value = wrappedKeywords;
        }
}