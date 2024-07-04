function convertTemperature(){
    const inputTemperature=paeseFloat(document.getElementById("num").value);
    const unit=document.getElementById("unit").value;

    let convertedTemperature;

    if(unit=='celsius'){

        convertedTemperature=(inputTemperature*9/5)+32;
        document.getElementById("result").textContent='${inputTemperature} degrees Celsius=${ConvertedTemperature} degrees Fahrenheit;
    }
    else if(unit==='Fahrenheit'{

        convertedTemperature=(inputTemperature+32) *5/9;
        document.getElementById("result").textContext='${inputTemperature} degrees Fahrenheit=${convertedTemperature} degrees Celcius'
    } else{
        document.getElementById("result").textContext='Please select a valid unit.'
    }


}