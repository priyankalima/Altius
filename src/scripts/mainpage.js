// creating main function
const Main = (props) => {

    // creating baner section
    const baner = document.createElement('section');
    baner.innerHTML = `
            <div class="d-flex">
                <div class="hero-lt-content">
                <div class="container banner-heading ">
                    <span class="title-one">Sign of </span> <br>
                    <span class="title-two">Good Times</span>
                    <p class="para">${props.banner[0].para}</p>
                    <button>Get Started <img src=${props.banner[0].icon}></button>
                </div>
                </div>
                <div class="hero-rt-image">
                    <img src=${props.banner[1].src}>
                </div>
            </div>
    `
    mainpage.appendChild(baner);

    // creating about section
    const about = document.createElement('section');
    about.innerHTML = `
        <div class="container d-flex">
            <div class="about-lt-content">
                <p class="title">why choose us</p>
                <span class="title-heading">${props.about[0].heading}</span>
                <span class="para" style="margin-top:10px">${props.about[0].para}</span><br>
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
    props.about[0].lists.forEach(item => {
        aboutList.appendChild(
            Object.assign(
                document.createElement('div'),
                {
                    className: "list-items",
                    innerHTML: `
                      <img src=${item.icon}> <span class="para-bold">${item.list}</span>
                    `
                }
            )
        )
    })

    // creating service section
    const service = document.createElement('section');
    service.innerHTML = `
            <div class="d-col">
                <div class="container">
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
                    className: "service-card",
                    innerHTML: `
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

    // creating work section
    const work = document.createElement('section');
    work.innerHTML = `
        <div class="container">
            <div>
                <p class="title">our Work</p>
                <span class="title-heading">Where We Do</span>
            </div>
            <div id="work-rt-content" class="work-rt-content"></div>
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
                     <div>
                        <span>${item.title}</span>
                        <span>${item.para}</span>
                     </div>
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
                <div class="slider">
                    <div class="controls">
                        <img src=${props.testimonial[0].leftBtn} alt="leftBtn"
                        onclick="prevBtn()">
                        <img src=${props.testimonial[0].rightBtn} alt="rightBtn"
                        onclick="nextBtn()">
                    </div>
                    <div class="testi-slider" id="testi-slider"></div>
                </div>
            </div>
            <div id="testi-rt-image" class="testi-rt-image">
                <img src=${props.testimonial[1].img}>
            </div>
        </div>
    `
    mainpage.appendChild(testimonial);
    // create a testimonial content and render
    const testiMonial = document.getElementById('testi-slider');
    props.testimonial[0].testi.forEach(item => {
        testiMonial.appendChild(
            Object.assign(
                document.createElement('div'),
                {
                    id: "testi-content",
                    innerHTML: `
                      <div class="testi-item">
                        <span>${item.name}</span>
                        <span>${item.location}</span>
                        <span>${item.msg}</span>
                      </div>
                    `
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
            <div id="blog-content" class="d-flex mt"></div>
            <div class="explore-btn">
               <button>Explore</button>
            </div>
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
                      <span>${item.title}</span>
                      <span>${item.para}</span>
                      <a>Read More</a>
                    `
                }
            )
        )
    })

    // creating faq section
    const faq = document.createElement('section');
    // console.log(props.faq[0].icon);
    faq.innerHTML = `
        <div class="container">
            <div>
                <p class="title">faq</p>
                <span class="title-heading">Any Quary?</span>
            </div>
           <div id="faq-content" class="faq-content">
           </div>
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
                    innerHTML: `<p>${item}</p>
                    <img src=${props.faq[0].icon}>
                    `
                }
            )
        )
    })


}

// calling function with content
fetch('./content.json')
    .then((res) => res.json())
    .then((data) => Main(data))