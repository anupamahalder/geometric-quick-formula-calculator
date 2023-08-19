function getInputElementById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}


function triangleAreaCalculate(){
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValue = getInputElementById('triangle-base');

    //get triangle base value
    const heightField = document.getElementById('traiangle-height');
    const heightValue = getInputElementById('triangle-height');

    //area calculate
    const area = 0.5 * baseValue * heightValue;

    //display area 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

    //clear the input field
    baseField.value = '';
    heightField.value = '';
    // console.log(area);
}
function rectangleAreaCalculate(){
    //get triangle base value
    const baseField = document.getElementById('rectangle-height');
    const baseValue = getInputElementById('rectangle-base');

    //get triangle base value
    const heightField = document.getElementById('rectangle-height');
    const heightValue = getInputElementById('rectangle-height');

    //area calculate
    const area = baseValue * heightValue;

    //display area 
    const recArea = document.getElementById('rectangle-area');
    recArea.innerText = area;
    
    //clear the the input field
    baseField.value = '';
    heightField.value = '';
    // console.log(area);
}