
//Query for submit button
const submitButton = document.querySelector("#submit-button");

//Query for encode
const encodeRadio = document.querySelector("#encode");
//Query for translate
const translateRadio = document.querySelector("#translate");
//Query for mablib
const madlibRadio = document.querySelector("#madlib");
//Query for search
const searchRadio = document.querySelector("#search");
//Query for random
const randomRadio = document.querySelector("#random");
//h1 query
const resultOutput = document.querySelector("#results");


//=========================================================

//Add eventlistener to button
submitButton.addEventListener("click", onClick);

//function to process submitted text

function onClick() {

    //Query input box
    const textInput = document.querySelector('input[type=text]');
    //grab its .value property containing the input's contents and store it in a variable.
    const inputContent = textInput.value;
    console.log(textInput.value);



    //set its .innerText to the result of passing the input to encode, translate, madlib, search, or random
    if (encodeRadio.checked) {
        resultOutput.innerText = encode(inputContent);
        //console.log(encode(inputContent, "encode"));

    } else if (translateRadio.checked) {
        resultOutput.innerText = translate(inputContent);
        //console.log(translate(inputContent, "translate"))
    } else if (madlibRadio.checked) {
        resultOutput.innerText = madlib(inputContent);
    } else if (searchRadio.checked) {
        //Clear the current content of our <h1 id="results"> output (hint: use .innerHTML)
        function clearText() {
            resultOutput.innerText = null
            //Loop through each object in the array returned by the search() function. For each emoji object in the array:
            for (let i = 0; i < emojis.length; ++i) {
                const selectedEmoji = emojis[i];

                const symbolEmoji = selectedEmoji.symbol;

                
                //if(textInput.value === selectedEmoji){
                //  resultOutput.innerText = search(emojiSymbol);
                //}
            }

        }
        clearText()
        //resultOutput.innerHTML( inputContent);
        console.log(search(inputContent))
    }




}
