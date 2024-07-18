document.getElementById('passengerCount').addEventListener('input', updateAgeFields);

function updateAgeFields() {
    const passengerCount = document.getElementById('passengerCount').value;
    const agesContainer = document.getElementById('agesContainer');

    agesContainer.innerHTML = '';

    if (passengerCount >= 30 && passengerCount <= 60) {
        for (let i = 0; i < passengerCount; i++) {
            const label = document.createElement('label');
            label.innerText = `Age of passenger ${i + 1}:`;
            const input = document.createElement('input');
            input.type = 'number';
            input.name = 'age';
            input.min = '10';
            input.max = '80';
            input.required = true;
            agesContainer.appendChild(label);
            agesContainer.appendChild(input);
        }
    }
}

document.getElementById('travelForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const region = document.getElementById('region').value;
    const destination = document.getElementById('destination').value;
    const nationality = document.getElementById('nationality').value;
    const passengerCount = document.getElementById('passengerCount').value;
    const ages = Array.from(document.querySelectorAll('input[name="age"]')).map(input => input.value);

    let valid = true;
    let errorMessage = '';

    if (!['North', 'South'].includes(region)) {
        valid = false;
        errorMessage += 'Invalid region. ';
    }

    if (!['Trujillo', 'Tacna'].includes(destination)) {
        valid = false;
        errorMessage += 'Invalid destination. ';
    }

    if (!['Peruvian', 'Mexican'].includes(nationality)) {
        valid = false;
        errorMessage += 'Invalid nationality. ';
    }

    if (passengerCount < 30 || passengerCount > 60) {
        valid = false;
        errorMessage += 'Number of passengers out of range. ';
    }

    for (let age of ages) {
        if (age < 10 || age > 80) {
            valid = false;
            errorMessage += 'Age out of range. ';
            break;
        }
    }

    if (valid) {
        document.getElementById('result').innerText = `Processed ${passengerCount} passengers successfully.`;
    } else {
        document.getElementById('result').innerText = `Error: ${errorMessage}`;
    }
});
