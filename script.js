function createInputFields() {
    const numElements = document.getElementById('numElements').value;
    const arrayInputsDiv = document.getElementById('arrayInputs');
    arrayInputsDiv.innerHTML = '';   
    document.getElementById('result').textContent = '';
    document.getElementById('result').classList.remove('error');
  
    if (numElements > 0) {
      for (let i = 0; i < numElements; i++) {
        arrayInputsDiv.innerHTML += `
          <div class="input-container">
            <label for="element${i}">Element ${i + 1}:</label>
            <input type="number" id="element${i}" class="arrayElement">
          </div>`;
      }
    }
  }
  
  function performSearch() {
    const elements = document.getElementsByClassName('arrayElement');
    const searchElement = parseInt(document.getElementById('searchElement').value);
    const array = [];
  
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove('highlight');
      array.push(parseInt(elements[i].value));
    }
  
    const result = linearSearch(array, searchElement);
    const resultDiv = document.getElementById('result');
  
    if (result !== -1) {
      resultDiv.textContent = `Element found at index: ${result}`;

      resultDiv.classList.remove('error');
      elements[result].classList.add('highlight');
    } else {
      resultDiv.textContent = 'Element not found in the array.';
      resultDiv.classList.add('error');
    }
  }
  
  function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i;
      }
    }
    return -1;
  }