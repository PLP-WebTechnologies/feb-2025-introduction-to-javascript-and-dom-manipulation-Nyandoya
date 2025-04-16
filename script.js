// Change introduction text and style
document.getElementById("changeTextBtn").addEventListener("click", () => {
    const introText = document.getElementById("intro-text");
    introText.textContent = "Edge integrates tightly with Windows and provides tools like vertical tabs, smart copy, and more!";
    introText.style.color = "#0a66c2"; // Microsoft blue
    introText.style.fontWeight = "600";
  });
  
  // Toggle extra tips visibility
  document.getElementById("toggleTipsBtn").addEventListener("click", () => {
    const extraTips = document.getElementById("extra-tips");
    if (extraTips.style.display === "none") {
      extraTips.style.display = "block";
    } else {
      extraTips.style.display = "none";
    }
  });
  