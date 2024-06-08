const Main = (props) => {
    mainpage.innerHTML = `
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
   <section>
        <div class="container">
            <div>
                <p>our Work</p>
                <h3>Where We Do</h3>
            </div>
            <div 
               id="work-rt-content">
            </div>
        </div>
   </section>
   <section>
        <div class="container d-col">
            <div>
                <p>our process</p>
                <h3>What We Do</h3>
            </div>
            <div id="work-rt-content">
                <img src=${props.process.src}>
            </div>
        </div>
   </section>
   <section>
        <div class="container d-flex">
            <div class="testi-lt-content">
                <p>testimonial</p>
                <h3>What Our Happy Client Say</h3>
                <div class="testi-slider">
                     <div id="testi-content" class="d-row"></div>
                     <button>prev</button>
                     <button>next</button>
                </div>
            </div>
            <div id="testi-rt-image" class="testi-rt-image">
                <img src=${props.testimonial[1].img}>
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
                     src: item.img
                 }
             )
         )
     });
     // create work right content and render here
     const workContent = document.getElementById('work-rt-content');
     props.work[1].content.forEach((item) => {
         workContent.appendChild(
             Object.assign(
                 document.createElement('div'),
                 {
                     className: "work-card",
                     innerHTML: `
                     <img src=${item.icon}>
                     <h4>${item.title}</h4>
                     <span>${item.para}</span>
                     `
                 }
             )
         )
     })
     // create a testimonial content and render
     const testiMonial = document.getElementById('testi-content');
     props.testimonial[0].testi.forEach(item => {
         const testItem = document.createElement('div');
         testItem.className = "testi-item"
         testiMonial.appendChild(testItem)
         testItem.append(
             Object.assign(
                 document.createElement('h4'),
                 {
                     innerHTML: item.name
                 }
             ),
             Object.assign(
                 document.createElement('p'),
                 {
                     innerHTML: item.location
                 }
             ),
             Object.assign(
                 document.createElement('span'),
                 {
                     innerHTML: item.msg
                 }
             )
         )
     })

    // creating a contact section
    const blog = document.createElement('section');
    blog.innerHTML = `
        <div class="container">
            <div>
                <p>blog</p>
                <h3>Find Out What’s New</h3>
            </div>
            <div id="blog-content" class="d-flex"></div>
        </div>
        `
    mainpage.appendChild(blog)
    const blogContent = document.getElementById('blog-content')
    // creating a blog item inside of blog content
    props.blog[1].content.forEach((item)=>{
        blogContent.appendChild(
            Object.assign(
                document.createElement('div'),
                {
                    className : "blog-content-item",
                    innerHTML : `
                      <img src=${item.img}>
                      <h4>${item.title}</h4>
                      <p>${item.para}</p>
                      <a>Read More</a>
                    `
                }
            )
        )
    })
   
  

}

// call function with content
fetch('./content.json')
    .then((res) => res.json())
    .then((data) => Main(data))