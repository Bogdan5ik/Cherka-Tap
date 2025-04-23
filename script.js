let count = parseInt(localStorage.getItem("clickCount")) || 0;
let multiplier = parseInt(localStorage.getItem("clickMultiplier")) || 1;
let upgradeCost = parseInt(localStorage.getItem("upgradeCost")) || 100;

let unlockedSkins = JSON.parse(localStorage.getItem("unlockedSkins")) || {
  skin1: false,
  skin2: false,
  skin3: false
};

const clickButton = document.querySelector(".img-1");
const sound = document.querySelector(".audio");
const scoreDisplay = document.querySelector(".p-3");
const upgradeButton = document.getElementById("upgrade-btn");

scoreDisplay.textContent = count;
upgradeButton.textContent = `Улучшить клики (Цена: ${upgradeCost})`;

function checkSkins() {
  if (count >= 10000 && !unlockedSkins.skin1) {
    unlockedSkins.skin1 = true;
    alert("Вы открыли новый скин!");
  }
  if (count >= 50000 && !unlockedSkins.skin2) {
    unlockedSkins.skin2 = true;
    alert("Вы открыли новый скин!");
  }
  if (count >= 100000 && !unlockedSkins.skin3) {
    unlockedSkins.skin3 = true;
    alert("Вы открыли новый скин!");
  }

  localStorage.setItem("unlockedSkins", JSON.stringify(unlockedSkins));
}

clickButton.addEventListener("click", () => {
  count += multiplier;
  scoreDisplay.textContent = count;
  localStorage.setItem("clickCount", count);
  checkSkins();
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


const activeSkin = localStorage.getItem("activeSkin") || "default";
const clickButton1 = document.querySelector(".img-1");

const skinMap = {
  "default": "img/pngwing.com.png",
  "EMG-5": "img/img1.png",
  "EMG-6": "img/img2.png",
  "EMG-7": "img/img3.png"
};

clickButton1.src = skinMap[activeSkin] || skinMap["default"];
