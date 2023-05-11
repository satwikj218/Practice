function getRandomNumbers(){
    fetch('http://127.0.0.1:5500/frontend/front.html')
    .then(response => response.json())
    .then(data => {
        document.getElementById('randomNumber').innerText = data.number;
    })
    .catch(error => console.log(error));
}