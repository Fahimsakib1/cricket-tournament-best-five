//getting the input-fields by id
function getInputFieldById (inputId){

    const inputFieldById = document.getElementById(inputId);
    const inputFieldValueString = inputFieldById.value;
    const inputFieldValueNumber = parseFloat(inputFieldValueString);
    inputFieldById.value = '';
    return inputFieldValueNumber;

}


//code for all the common functions which will be accessible only by element id
function getElementById(elementId){

    const elementById = document.getElementById(elementId);
    const elementIdValueString = elementById.innerText;
    const elementIdValueNumber = parseFloat(elementIdValueString);
    return elementIdValueNumber;

}


//code for showing the answer value on the element id area
function setElementValueById(elementId, newValue){
    const getElementById = document.getElementById(elementId);
    const getElementValue = getElementById.innerText;
    getElementById.innerText = newValue;
}
