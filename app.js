// Declaring main variables

const mainInput = document.getElementById('main-input');
const mainOutput = document.getElementById('main-output');

const createKeywordsBtn = document.getElementById('main-btn');
const copyBtn = document.getElementById('copy-btn');

const broadCheck = document.getElementById('broadCheck');
const modifiedCheck = document.getElementById('modifiedCheck');
const phraseCheck = document.getElementById('phraseCheck');
const exactCheck = document.getElementById('exactCheck');

let broadCheckedValue, modifiedCheckedValue, phraseCheckedValue, exactCheckedValue;

// Event Listeners

createKeywordsBtn.addEventListener('click', updateValue);
copyBtn.addEventListener('click', copyToClip);
broadCheck.addEventListener('change', broadCheckChange);
modifiedCheck.addEventListener('change', modifiedCheckChange);
phraseCheck.addEventListener('change', phraseCheckChange);
exactCheck.addEventListener('change', exactCheckChange);

// on Load functions
window.onload = broadCheckChange();
window.onload = modifiedCheckChange();
window.onload = phraseCheckChange();
window.onload = exactCheckChange();

// checkChange Functions
function broadCheckChange() {
        if (broadCheck.checked) {
                broadCheckedValue = 1
                console.log('broad is ' + broadCheckedValue);
        } else {
                broadCheckedValue = 2;
                console.log('broad is ' + broadCheckedValue);
        }
}

function modifiedCheckChange() {
        if (modifiedCheck.checked) {
                modifiedCheckedValue = 1;
                console.log('Mod is ' + modifiedCheckedValue);
        } else {
                modifiedCheckedValue = 2;
                console.log('Mod is ' + modifiedCheckedValue);
        }
}

function phraseCheckChange() {
        if (phraseCheck.checked) {
                phraseCheckedValue = 1;
                console.log('Phrase is ' + phraseCheckedValue);
        } else {
                phraseCheckedValue = 2;
                console.log('Phrase is ' + phraseCheckedValue);
        }
}

function exactCheckChange() {
        if (exactCheck.checked) {
                exactCheckedValue = 1;
                console.log('Exact is ' + exactCheckedValue);
        } else {
                exactCheckedValue = 2;
                console.log('Exact is ' + exactCheckedValue);
        }
}

// Copy to Clipboard function
function copyToClip() {
        document.getElementById('main-output').select();
        document.execCommand('copy');
}
// Main Update Value Function that is triggered by the main button

function updateValue() {
        const mainInput = document.getElementById('main-input');
        let mainOutput = document.getElementById('main-output');
        let finalKeywords = "";
        let keywordsArray = [];


        keywordsArray = mainInput.value.split('\n');

        // Remove blank keywords
	let lowerKeywordsArray = keywordsArray.filter(function (el) {
                return el != "";
              });

        lowerKeywordsArray.toLocaleString().toLowerCase().split(',');        
        lowerKeywordsArray.forEach(textUpdater);
        
        function textUpdater(item) {
             if (broadCheckedValue === 1)  {
                finalKeywords += item + "\n";

             } if (modifiedCheckedValue === 1) {
                finalKeywords += item.replace(/(^|\s+)/g, "$1+") + "\n";

             } if (phraseCheckedValue === 1) {
                finalKeywords += '"' + item + '"' + "\n";
                
             } if (exactCheckedValue === 1) {
                finalKeywords += '[' + item + ']' + "\n";
             }
             
             let outputWords = finalKeywords.toString().toLowerCase();
             mainOutput.value = outputWords;
             }
        };

// wrappedBroad += item + "\n";
// wrappedMod += item.replace(/(^|\s+)/g, "$1+") + "\n";
// wrappedPhrase += '[' + item + ']' + "\n";
// wrappedExact += '"' + item + '"' + "\n";  


// REGEX FOR BROAD MODIFIED - SAFE KEEPING
// console.log(mainInput.value.replace(/(^|\s+)/g, "$1+"))

// function textUpdater(item) {
//         if (broadCheck.checked, modifiedCheck.checked, phraseCheck.checked, exactCheck.checked) {
//         mainOutput.value += item + "\n";
//         mainOutput.value += item.replace(/(^|\s+)/g, "$1+") + "\n";
//         mainOutput.value += '[' + item + ']' + "\n";
//         mainOutput.value += '"' + item + '"' + "\n";
//         } else {     
//          console.log('No Worky')
//         };