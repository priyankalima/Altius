const Main = (props) => {
    mainpage.innerHTML =
        `
   <section>
      <div class="d-flex">
          <div class="hero-lt-content">
            <div class="container">
                <h1>${props.banner[0].heading}</h1>
                <p>${props.banner[0].para}</p>
                <button>Get Started</button>
            </div>
          </div>
          <div class="hero-rt-image">
              <img src=${props.banner[1].src}>
          </div>
      </div>
   </section>
   <section>
       <div class="container d-col">
           <div>
               <p>our service</p>
               <h3>What we do</h3>
           </div>
           <div 
              id="service-content" 
              class="service-rt-content d-row">
           </div>
       </div>
   </section>
   <section>
        <div class="container d-flex">
            <div class="about-lt-content">
                <p>why choose us</p>
                <h3>${props.about[0].heading}</h3>
                <span>${props.about[0].para}</span>
            </div>
            <div class="about-rt-image">
                <img src=${props.about[1].src}>
            </div>
        </div>
   </section>
   `

    // create a service content list
    const serviceContent = document.getElementById('service-content');
    props.service[1].content.forEach(item => {
         serviceContent.appendChild(
            Object.assign(
                document.createElement('img'),
                {
                    src : item.img
                }
            )
         )
    });
}

// call function with content
fetch('./content.json')
    .then((res) => res.json())
    .then((data) => Main(data))