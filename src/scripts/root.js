// create js file object
const file = [
    "/src/scripts/demo.js",
    "/src/scripts/contact.js",
    "/src/scripts/faq.js",
    "/src/scripts/header.js"
]
// render all the script file
file.forEach((link)=>{
    const script = document.createElement('script');
    script.src = link;
    document.body.appendChild(script);
    // console.log(script)
})


