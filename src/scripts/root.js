// create js file object
const file = [
    "/src/scripts/header.js",
    "/src/scripts/mainpage.js",
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
// toggle button
function toggleBtn() {
    var toggle = document.getElementById("menu");
    if (toggle.style.display === "block") {
        toggle.style.display = "none";
    } else {
        toggle.style.display = "block";
    }
}

// add scroll left and right button


const nextBtn =()=>{
    const slider = document.getElementById('testi-slider');
    const width = slider.clientWidth;
    slider.scrollBy(width,0);
}

const prevBtn =()=>{
    const slider = document.getElementById('testi-slider');
    const width = slider.clientWidth ;
   slider.scrollBy(-width,0)
}

