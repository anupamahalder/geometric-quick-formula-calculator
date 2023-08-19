/*
    Data Validation:
    1. set the proper type of the input field(number,data,email)
    2. check type using typeof
    3. isNaN means: Not a number. isNaN is checking whether the input is not a number  
*/


function getInputElementById(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerText(elementId,areaValue){
    const areaSpan = document.getElementById(elementId);
    areaSpan.innerText = areaValue;
}


///For triangle
function triangleAreaCalculate(){
    //get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValue = getInputElementById('triangle-base');

    //get triangle base value
    const heightField = document.getElementById('triangle-height');
    const heightValue = getInputElementById('triangle-height');

    //Data validation check
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please enter a valid number!');
        baseField.value = '';
        heightField.value = '';    
        return;
    }
    //area calculate
    const area = 0.5 * baseValue * heightValue;

    //display area 
    setInnerText('triangle-area',area);

    //clear the input field
    baseField.value = '';
    heightField.value = '';
    // console.log(area);
}
///For rectangle
function rectangleAreaCalculate(){
    //get triangle base value
    const baseField = document.getElementById('rectangle-width');
    const baseValue = getInputElementById('rectangle-width');

    //get triangle base value
    const heightField = document.getElementById('rectangle-height');
    const heightValue = getInputElementById('rectangle-height');

    //Data validation check
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please enter a valid number!');
        baseField.value = '';
        heightField.value = '';    
        return;
    }

    //area calculate
    const area = baseValue * heightValue;

    //display area 
    setInnerText('rectangle-area',area);
    
    //clear the the input field
    baseField.value = '';
    heightField.value = '';
    // console.log(area);
}

///For parallelogram
function parallelogramAreaCalculate(){
    //get triangle base value
    const baseField = document.getElementById('parallelogram-base');
    const baseValue = getInputElementById('parallelogram-base');

    //get triangle base value
    const heightField = document.getElementById('parallelogram-height');
    const heightValue = getInputElementById('parallelogram-height');

    //Data validation check
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please enter a valid number!');
        baseField.value = '';
        heightField.value = '';    
        return;
    }

    //area calculate
    const area = baseValue * heightValue;

    //display area 
    // const recArea = document.getElementById('parallelogram-area');
    // recArea.innerText = area;
    setInnerText('parallelogram-area',area);

    //clear the the input field
    baseField.value = '';
    heightField.value = '';
}

///For ellipse
function ellipseAreaCalculate(){
    //get ellipse base value
    const baseField = document.getElementById('ellipse-radius1');
    const baseValue = getInputElementById('ellipse-radius1');

    //get triangle base value
    const heightField = document.getElementById('ellipse-radius2');
    const heightValue = getInputElementById('ellipse-radius2');

    //Data validation check
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('Please enter a valid number!');
        baseField.value = '';
        heightField.value = '';    
        return;
    }

    //area calculate
    const area = Math.PI *baseValue * heightValue;

    //display area 
    // const recArea = document.getElementById('parallelogram-area');
    // recArea.innerText = area;
    setInnerText('ellipse-area',area);

    //clear the the input field
    baseField.value = '';
    heightField.value = '';
}