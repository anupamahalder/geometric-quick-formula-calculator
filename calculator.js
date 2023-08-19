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