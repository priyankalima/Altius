const about = () => {
    navbar.innerHTML = `
        <a href="#contact" id="demo" onclick="contact()"></a>
        <a href="#faq" onclick="faq()">faq</a>
    `
    console.log(document.getElementById('demo'))
    document.getElementById('demo').innerHTML = "contact"
}
about();


