function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
  
    let convertedTemperature;
  
    if (fromUnit === 'celsius' && toUnit === 'fahrenheit') {
      convertedTemperature = (temperature * 9/5) + 32;
    } else if (fromUnit === 'celsius' && toUnit === 'kelvin') {
      convertedTemperature = temperature + 273.15;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'celsius') {
      convertedTemperature = (temperature - 32) * 5/9;
    } else if (fromUnit === 'fahrenheit' && toUnit === 'kelvin') {
      convertedTemperature = (temperature - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'celsius') {
      convertedTemperature = temperature - 273.15;
    } else if (fromUnit === 'kelvin' && toUnit === 'fahrenheit') {
      convertedTemperature = (temperature - 273.15) * 9/5 + 32;
    }
  
    document.getElementById('converted-temperature').textContent = convertedTemperature.toFixed(2);
}

  