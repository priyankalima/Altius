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

