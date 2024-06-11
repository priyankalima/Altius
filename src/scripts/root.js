// create js file object
const file = [
    "/src/scripts/header.js",
    "/src/scripts/main-page.js",
    "/src/scripts/footer.js",
]
// render all the script file
file.forEach((link)=>{
    const script = document.createElement('script');
    script.src = link;
    document.body.appendChild(script);
    // console.log(script)
})

// menu toggle
function myFunction(x) {
    x.classList.toggle("change");
  }

function toggleBtn() {
    var toggle = document.getElementById("menu");
    if (toggle.style.display === "block") {
        toggle.style.display = "none";
    } else {
        toggle.style.display = "block";
    }
}

