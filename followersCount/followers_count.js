let count = 0;
let booster = 0;

let notified10 = false;
let notified20 = false;

function increaseCount() {
    count = count + booster;
    displayCount();
    checkCountValue();
}

function upgrade() {
    booster++;
    displayFollowersPerC();
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML = count;
}

function displayFollowersPerC() {
    document.getElementById("countFollowersPerC").innerHTML = booster;
}

function checkCountValue() {
    if (!notified20 && count >= 20) {
        alert("Ваш аккаунт набрал 20 подписчиков!");
        notified20 = true;
    } else if (!notified10 && count >= 10) {
        alert("Ваш аккаунт набрал 10 подписчиков!");
        notified10 = true;
    }
}

function countReset() {
    count = 0;
    alert("Счётчик сброшен!");
    displayCount();
}

  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Form submitted!');
  });