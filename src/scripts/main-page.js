// creating main function
const Main = (props) => {

    // creating baner section
    const baner = document.createElement('section');
    baner.innerHTML = `
            <div class="d-flex">
                <div class="hero-lt-content">
                <svg   class="demo" viewBox="0 0 615 526" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M225 0.5L0.5 106.5V471L225 526L614.5 297L225 0.5Z" fill="url(#paint0_linear_276_12388)" />
                    <defs>
                        <linearGradient id="paint0_linear_276_12388" x1="305.75" y1="0.5" x2="305.75" y2="531" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FCF8F6" />
                        <stop offset="0.525706" stop-color="#FFE9E0" />
                        <stop offset="1" stop-color="#FCF8F6" />
                        </linearGradient>
                    </defs>
                </svg>
                <div class="container header-title">
                    <span
                    class="animate__animated animate__bounce">
                    Sign of <br> 
                    <span class="custome-heading-title">Good Times</span>
                    </span>
                    <p>${props.banner[0].para}</p>
                    <button>Get Started <i class="icon-getstarted"></i></button>
                </div>
                </div>
                <div class="hero-rt-image">
                    <img src=${props.banner[1].src}>
                </div>
            </div>
    `
    mainpage.appendChild(baner);

    // creating service section
    const service = document.createElement('section');
    service.innerHTML = `
            <div class="container d-col">
                <div>
                    <p class="title">our service</p>
                    <span class="title-heading">What we do</span>
                </div>
                <div 
                id="service-content" 
                class="service-rt-content d-row">
                </div>
            </div>
    `
    mainpage.appendChild(service);
    // create a service content list
    const serviceContent = document.getElementById('service-content');
    props.service[1].content.forEach(item => {
        serviceContent.appendChild(
            Object.assign(
                document.createElement('div'),
                {
                    className : "service-card",
                    innerHTML : `
                      <img src=${item.img}>
                      <div class="service-card-size">
                        <p>${item.title}</p>
                        <button>more</button>
                      <div>
                    `
                }
            )
        )
    }); 

    // creating about section
    const about = document.createElement('section');
    about.innerHTML = `
        <div class="container d-flex">
            <div class="about-lt-content">
                <p class="title">why choose us</p>
                <span class="title-heading">${props.about[0].heading}</span><br>
                <span>${props.about[0].para}</span><br>
                <div class="exp-card">
                    <span style="font-size:30px;">25+</span>
                    <span> Years Of Experience in Graphic Service</span>
                </div>
                <div id="about-short-list"></div>
            </div>
            <div class="about-rt-image">
                <img src=${props.about[1].src}>
            </div>
        </div> 
    `
    mainpage.appendChild(about);
    // create a about shtest lists
    const aboutList = document.getElementById('about-short-list');
    props.about[0].lists.forEach(item=>{
        aboutList.appendChild(
            Object.assign(
                document.createElement('div'),
                {
                    className : "list-items",
                    innerHTML : `
                      <img src=${item.icon}> <span>${item.list}</span>
                    `
                }
            )
        )
    })

    // creating work section
    const work = document.createElement('section');
    work.innerHTML = `
        <div class="container">
            <div>
                <p class="title">our Work</p>
                <span class="title-heading">Where We Do</span>
            </div>
            <div id="work-rt-content" class=" work-rt-content"></div>
        </div>
    `
    mainpage.appendChild(work);
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

    // creating testimonial section
    const testimonial = document.createElement('section');
    testimonial.innerHTML = `
        <div class="container d-flex">
            <div class="testi-lt-content">
                <p class="title">testimonial</p>
                <span class="title-heading">What Our Happy Client Say</span>
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
    `
    mainpage.appendChild(testimonial);
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

    // creating a blog section
    const blog = document.createElement('section');
    blog.innerHTML = `
        <div class="container">
            <div>
                <p class="title">blog</p>
                <span class="title-heading">Find Out What’s New</span>
            </div>
            <div id="blog-content" class="d-flex"></div>
        </div>
        `
    mainpage.appendChild(blog);
    // creating a blog item inside of blog content
    const blogContent = document.getElementById('blog-content')
    props.blog[1].content.forEach((item) => {
        blogContent.appendChild(
            Object.assign(
                document.createElement('div'),
                {
                    className: "blog-content-item",
                    innerHTML: `
                      <img src=${item.img}>
                      <h4>${item.title}</h4>
                      <p>${item.para}</p>
                      <a>Read More</a>
                    `
                }
            )
        )
    })

    // creating faq section
    const faq = document.createElement('section');
    faq.innerHTML = `
        <div class="container">
            <div>
                <p class="title">faq</p>
                <span class="title-heading">Any Quary?</span>
            </div>
           <div id="faq-content" class="faq-content"></div>
       <div>
    `
    mainpage.appendChild(faq)
    // creating faq inside faq items
    const faqContent = document.getElementById('faq-content');
    props.faq[1].content.forEach(item => {
        faqContent.appendChild(
            Object.assign(
                document.createElement('div'),
                {
                    className: "faq-content-item",
                    innerHTML: `<p>${item}</p>`
                }
            )
        )
    })


}

// calling function with content
fetch('./content.json')
    .then((res) => res.json())
    .then((data) => Main(data))