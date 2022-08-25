// DOM manipulation

const form = document.getElementsByTagName('form')

form.addEventListener('submit', getAllResults())


//change random quote text
function getAllResults(e) {
    
    fetch('http://localhost:3000/results')
      .then((response) => response.json())
      .then((data) => {
        text.innerHTML = `${data.title} </br> ${data.snippet}`});
  }

