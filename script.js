let count = parseInt(localStorage.getItem("clickCount")) || -100000;
let multiplier = parseInt(localStorage.getItem("clickMultiplier")) || 1;
let upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || 100;


const clickButton = document.querySelector(".img-1");
const sound = document.querySelector(".audio");
const scoreDisplay = document.querySelector(".p-3");
const upgradeButton = document.getElementById("upgrade-btn");


scoreDisplay.textContent = count;
upgradeButton.textContent = `Улучшить клики (Цена: ${upgradeCost})`;


clickButton.addEventListener("click", () => {
  count += multiplier;
  scoreDisplay.textContent = count;
  localStorage.setItem("clickCount", count);


  sound.currentTime = 0;
  sound.play();
});



upgradeButton.addEventListener("click", () => {
  if (count >= upgradeCost) {
    count -= upgradeCost;
    multiplier += 1;
    upgradeCost *= 2;

    scoreDisplay.textContent = count;
    upgradeButton.textContent = `Улучшить клики (Цена: ${upgradeCost})`;

    localStorage.setItem("clickCount", count);
    localStorage.setItem("clickMultiplier", multiplier);
    localStorage.setItem("upgradeCost", upgradeCost);
  } else {
    alert("Не хватает очков!");
  }
});

document.body.style.zoom = "1";

















