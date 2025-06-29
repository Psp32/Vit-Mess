// Open the popup when the page loads
window.onload = function() {
  document.getElementById("customPopup").style.display = "flex";
};

// Auto-handle selection without needing submit button
document.getElementById("optionSelector").addEventListener("change", function() {
  const selectedOption = this.value;
  
  if (selectedOption) {
    // Update block text (using querySelector for single element)
    const blockElement = document.querySelector(".block");
    if (blockElement) {
      blockElement.textContent = `Boys Hostel ${selectedOption.replace("b", "Block ")}`;
    }
    
    // Update bed type for specific blocks
    const bedElement = document.querySelector(".bed");
    if (bedElement) {
      if (["b2", "b3", "b5"].includes(selectedOption)) {
        bedElement.textContent = "4 Bedded Non AC Premium Bunk Bed";
      }
      if(["b1"].includes(selectedOption)){
        bedElement.textContent = "4 Bedded Non AC Normal Bunk Bed"
      }
      if(["b4","b6"].includes(selectedOption)){
        bedElement.textContent = "4 Bedded AC Premium Bunk Bed"
      }
    }
    
    // Close the popup
    document.getElementById("customPopup").style.display = "none";
  } else {
    alert("Please select a block!");
  }
});