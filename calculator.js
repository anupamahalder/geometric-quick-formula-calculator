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
//Add to calculation entry
/*
    1. get the element where you want to add the dynamic HTML
    2. create an element you want to add
    3. if needed add some class
    4. set inner HTML. it could be dynamic Template string.
    5. append the created element as a child of the parent
*/
function addToCalculationEntry(areaType, area){
    console.log(areaType +' '+ area);
    const calculationEntry = document.getElementById('calculation-entry');

    //To know the child
    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    //using template string
    p.innerHTML = `${count+1}. ${areaType}: ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
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

    //Add to calculation 
    addToCalculationEntry('Triangle',area);

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
    
    //Add to calculation 
    addToCalculationEntry('Rectangle',area);

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

    //Add to calculation 
    addToCalculationEntry('Parallelogram',area);

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

    //Add to calculation 
    addToCalculationEntry('Ellipse',area);

    //clear the the input field
    baseField.value = '';
    heightField.value = '';
}

