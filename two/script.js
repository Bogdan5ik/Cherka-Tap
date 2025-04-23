function goback() {
    window.history.back()
}

window.onload = function () {
    const skins = JSON.parse(localStorage.getItem("unlockedSkins")) || {};
  
    if (skins.skin1) {
      document.querySelector(".img-5").style.display = "flex";
      document.querySelector(".img-2").style.display = "none";
    }
  
    if (skins.skin2) {
      document.querySelector(".img-6").style.display = "flex";
      document.querySelector(".img-3").style.display = "none";
    }
  
    if (skins.skin3) {
      document.querySelector(".img-7").style.display = "flex";
      document.querySelector(".img-4").style.display = "none";
    }
  };
  


  function selectSkin(skinName) {
    localStorage.setItem("activeSkin", skinName);
    alert("Вы надели скин!");
  }
  
  document.querySelector(".img-1").addEventListener("click", () => selectSkin("default"));
  document.querySelector(".img-5").addEventListener("click", () => selectSkin("EMG-5"));
  document.querySelector(".img-6").addEventListener("click", () => selectSkin("EMG-6"));
  document.querySelector(".img-7").addEventListener("click", () => selectSkin("EMG-7"));
  