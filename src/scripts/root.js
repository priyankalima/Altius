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
    var x = document.getElementById("menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

