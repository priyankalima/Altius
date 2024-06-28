// creating footer section
const Footer = (props) => {
    console.log(props.icons)
    basebar.innerHTML = `
        <div class="container">
            <div class="contact-msg d-flex">
                 <div>
                    <h1>${props.contact.content}</h1>
                    <button>Get a Quote</button> 
                 </div>
                 <div>
                    <img src=${props.contact.img}>
                 </div>
            </div>
            <div class="footer-detail d-flex">
                  <div>
                      <img src=${props.details.logo}>
                      <p>${props.details.about}</p>
                      <div>
                          <p>${props.details.address[0]}</p>
                          <p>${props.details.address[1]}</p>
                          <p>${props.details.address[2]}</p>
                      </div>
                  </div>
                  <div>
                        <p>${props.details.quicklink[0]}</p>
                        <p>${props.details.quicklink[1]}</p>
                        <p>${props.details.quicklink[2]}</p>
                        <p>${props.details.quicklink[3]}</p>
                  </div>
                  <div>
                        <p>${props.details.links[0]}</p>
                        <p>${props.details.links[1]}</p>
                        <p>${props.details.links[2]}</p>
                        <p>${props.details.links[3]}</p>
                        <p>${props.details.links[4]}</p>
                  </div>
            </div>
            <div>
            <span class="icon-icons8idea"></span>
            <span class="icon-fluentarrow-growth-20-filled"></span>
            </div>
        </div>
    `
}
//  calling function with content
fetch('./content.json')
    .then(res => res.json())
    .then(data => Footer(data))