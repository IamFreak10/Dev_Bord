document.getElementById("theme-btn").addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    // Apply it as the background color
    document.body.style.backgroundColor = randomColor;
});
