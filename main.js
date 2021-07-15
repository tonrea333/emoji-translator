
//Query for submit button
const submitButton = document.querySelector("#submit-button");


//=========================================================

//Add eventlistener to button
submitButton.addEventListener("click", onClick);

function onClick() {

    //Query input box
    const textInput = document.querySelector('input[type=text]');
    console.log(textInput.value)

    //grab its .value property containing the input's contents and store it in a variable.
    const inputContent = textInput.value;

    //set its .innerText to the result of passing the input to encode
    resultOutput.innerText = encode(inputContent);
}
