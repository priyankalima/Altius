// ceating navbar elements
const navbar = (props) => {

  // append inside navbar
  props.forEach((element) => {
    nav.appendChild(
      Object.assign(
        document.createElement('div'),
        {
          className: element.class,
          id: element.id
        }
      )
    )
  });

  // logo elements
  logo.append(
    Object.assign(
      document.createElement('img'),
      {
        className: props[0].logo.class,
        src: props[0].logo.src
        // id: element.id
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        id: props[0].logo.id,
        innerHTML:
          `
        <input type="checkbox" id="toggle"/>
        <label class="open" for="toggle"></label>
        <label class="close" for="toggle"></label>
        `
      }
    )
  )

  // Create a MediaQueryList object
  var media = window.matchMedia("(max-width: 600px)")
  // state change condition
  function mediaQuery(media) {
    if (media.matches) {
      toggleBtn.style.display = "block";
    }
    else {
      toggleBtn.style.display = "none"
    }
  }
  // Attach listener function on state changes
  media.addEventListener("change", function () {
    mediaQuery(media);
  });
  // Call listener function at run time
  mediaQuery(media);

  // menu elements
  const list = props[1].menu;
  list.forEach((list) => {
    menu.appendChild(
      Object.assign(
        document.createElement('li'),
      )
    ).appendChild(
      Object.assign(
        document.createElement('a'),
        {
          href: "demo.com",
          innerHTML: list
        }
      )
    )
  })
  // first list element
  const firstList = document.getElementsByTagName('li')[0];
  firstList.className = "dropdown";
  // frist link element
  const firstLink = document.getElementsByTagName('a')[0];
  firstLink.className = "dropbtn";
  // second list element
  const secondList = document.getElementsByTagName('li')[1];
  secondList.className = "dropdown";
  // second link element
  const secondLink = document.getElementsByTagName('a')[1];
  secondLink.className = "dropbtn"

  for (let i = 0; i < 2; i++) {
    // create dropdownl list
    const droplist = document.createElement('div');
    droplist.className = "dropList"
    // count droplists
    const droplists = document.getElementsByClassName('dropList').length;
    // if droplist is 0 show append the list into firstList else secondList
    if (droplists == 0) {
      firstList.appendChild(droplist);
      // add innerHTML to droplist
      droplist.innerHTML = `
          <li><a href="">Architectural Graphics</a></li>
          <li><a href="">Construction Graphics</a></li>
          <li><a href="">Exhibit & Trade Show Signal</a></li>
          <li><a href="">Corporate Branding & Business Graphics</a></li>
      `
    }
    else {
      secondList.appendChild(droplist);
      // add innerHTML to droplist
      droplist.innerHTML = `
          <li><a href="">Airport & City Transport</a></li>
          <li><a href="">Healthcare & Hospital</a></li>
          <li><a href="">Logistics & Distribution</a></li>
          <li><a href="">Utility & Services</a></li>
          <li><a href="">Oil & Gas</a></li>
          <li><a href="">Government & Educational Institute</a></li>
          <li><a href="">Food & Beverage Distribution</a></li>
      `
    }
  }

  // create button element
  menu.appendChild(
    Object.assign(
      document.createElement('button'),
      {
        innerHTML: "Get A Quotes"
      }
    )
  )
}


// creating banner elements
const heroSection = (props) => {
  console.log(props)
  banner.append(
    // div one
    Object.assign(
      document.createElement('div'),
      {
        className: "col-lft",
        id: "bannerContent",
      }
    ),
    // div two
    Object.assign(
      document.createElement('div'),
      {
        className: "col-rgt",
        id: "bannerImage",
      }
    )
  )
  // inside bannerContent elements
  bannerContent.append(
    Object.assign(
      document.createElement('span'),
      {
        className: "heading",
        innerHTML: "Signs of Good Times"
      }
    ),
    Object.assign(
      document.createElement('span'),
      {
        className: "para",
        innerHTML: "Houston’s One-Stop Shop for Visual Communications"
      }
    ),
    Object.assign(
      document.createElement('button'),
      {
        className: "banner-btn",
        innerHTML: "Get Started"
      }
    )
  )
  // inside bannerImage elements
  bannerImage.appendChild(
    Object.assign(
      document.createElement('img'),
      {
        src: "./assets/banner.svg"
      }
    )
  )
}
// creating service elements
const serviceSection = (props) => {
  // render service elements
  service.append(
    Object.assign(
      document.createElement('div'),
      {
        id: "serviceTitle",
        className: "service-title"
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        id: "serviceContent",
        className: "service-Contents"
      }
    )
  )
  // inside of service title create two texts
  serviceTitle.append(
    Object.assign(
      document.createElement('span'),
      {
        innerHTML: "Our Capability"
      }
    ),
    Object.assign(
      document.createElement('span'),
      {
        innerHTML: "Find Out Our Services"
      }
    )
  )
  // inside service content create 4 cards
  props[1].content.forEach((elmt) => {
    serviceContent.appendChild(
      Object.assign(
        document.createElement('div'),
        {
          className: "service-list"
        }
      )
    ).appendChild(
      Object.assign(
        document.createElement('img'),
        {
          src: elmt.img,
          innerHTML: "hello"
        }
      )
    )
  })
}
// creating about us elements
const aboutSection = (props) => {
  about.append(
    Object.assign(
      document.createElement('div'),
      {
        className: "about-left-content",
        id: "aboutLeftContent"
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: "about-right-img",
        id: "aboutRightImg"
      }
    )
  )
  // inside about left content
  aboutLeftContent.append(
    Object.assign(
      document.createElement('span'),
      {
        className: "about-title",
        innerHTML: "why choose us"
      }
    ),
    Object.assign(
      document.createElement('span'),
      {
        className: "about-heading",
        innerHTML: props[0].heading
      }
    ),
    Object.assign(
      document.createElement('span'),
      {
        className: "about-heading",
        innerHTML: props[0].para
      }
    )
  )
  // get all the list using foe each function
  props[0].lists.forEach((item) => {
    aboutLeftContent.appendChild(
      Object.assign(
        document.createElement('li'),
        {
          className: "list",
          innerHTML: `<img src=${item.icon}> <span>${item.list}</span>`
        }
      )
    )
  })
  // inside of about right image
  aboutRightImg.appendChild(
    Object.assign(
      document.createElement('img'),
      {
        className: "image",
        src: props[1].src
      }
    )
  )

}
// creating work service elments
const workSection = (props) => {
  work.append(
    Object.assign(
      document.createElement('div'),
      {
        className: "work-title",
        id: 'workTitle',
        innerHTML: `<span>our work</span>
                    <span>What We Do</span>
                    `
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: "work-content",
        id: 'workContent'
      }
    )
  )
  //  inside work title
  props[1].content.forEach((item) => {
    workTitle.append(
      Object.assign(
        document.createElement('div'),
        {
          className: "content-items",
          innerHTML: `
          <img src=${item.icon} >
          <span>${item.title}</span>
          <span>${item.para}</span>
          `
        }
      )
    )
  })
}
// creating process section elemnts
const processSection = (props) => {
  console.log(props.src)
  process.append(
    Object.assign(
      document.createElement('div'),
      {
        className: "process-title",
        id: "processTitle",
        innerHTML: `
        <span>our process</span>
        <span>How We Do It</span>
        `
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: "process-content",
        id: "processContent",
        innerHTML: `<img src=${props.src}>`
      }
    )
  )

}
// creating testimonila elements
const testiSection = (props) => {
  console.log(props);
  testimonial.append(
    Object.assign(
      document.createElement('div'),
      {
        className: 'testi-left-content',
        id: "testiLeftContent",
        innerHTML: `
        <span>testimonial</span>
        <span>What Our Happy Client Say</span>
        `
      }
    )
  )
  // render testimonial contents
  props[0].testi.forEach((item) => {
    testiLeftContent.append(
      Object.assign(
        document.createElement('div'),
        {
          innerHTML: `
          <span>${item.name}</span>
          <span>${item.location}</span>
          <span>${item.msg}</span>
          `
        }
      ))
  })
  // add two button to testimonial
  testiLeftContent.append(
    Object.assign(
      document.createElement('button'),
      {
        innerHTML: "left"
      }
    ),
    Object.assign(
      document.createElement('button'),
      {
        innerHTML: "right"
      }
    )
  )
}
// creating contact elemnts
const contactSection = (props) => {
  console.log(props)
  contact.appendChild(
    Object.assign(
      document.createElement('div'),
      {
        className: "contact-content",
        innerHTML: `
        <div class="left-content">
          <h1>${props.content}</h1>
          <button>Get a Quote</button>
        </div>
        <div>
          <img src=${props.img} >
        </div>
        `
      }
    )
  )
}
// creating blog elements
const blogSection = (props) => {
  console.log(props)
  blog.append(
    Object.assign(
      document.createElement('div'),
      {
        className: 'blog-title',
        innerHTML: `
        <span>Blog</span>
        <p>Find Out What’s New</p>
        `
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: 'blog-content',
        id: 'blogContent',
      }
    )
  )
  //  inside blog content
  props[1].content.forEach((item) => {
    blogContent.append(
      Object.assign(
        document.createElement('div'),
        {
          className: "blog-content-list",
          innerHTML: `
          <img src=${item.img} >
          <div>
            <h4>${item.title}</h4>
            <p>${item.para}</p>
            <a>view</a>
          </div>
          `
        }
      )
    )
  })
}
// creating faq elements
const faqSection = (props) => {
  console.log(props)
  faq.append(
    Object.assign(
      document.createElement('div'),
      {
        className: "faq-title",
        innerHTML: `
        <span>Faq</span>
        <h1>Frequently Asked Questions</h1>
        `
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: "faq-content",
        id: "faqContent"
      }
    )
  )
  //  render all the faq contents
  props[1].content.forEach((item) => {
    faqContent.appendChild(
      Object.assign(
        document.createElement('div'),
        {
          className: 'faq-content-list',
          innerHTML: `
          <p>${item}</p>
          `
        }
      )
    )
  })
}
// creating details elements
const detailSection = (props) => {
  detail.append(
    Object.assign(
      document.createElement('div'),
      {
        className: 'detail-lf-content',
        id: "detailLfContent",
        innerHTML: `
        <img src=${props.logo}>
        <span>${props.about}</span>
        <p>${props.address.map((item) => {
          return item
        })
          }
        </p>
        `
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: 'detail-md-content',
        id: "detailMdContent",
        innerHTML: `
        <p>${props.quicklink.map((item) => {
          return item
        })
          }
        </p>
        `
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: 'detail-rt-content',
        id: "detailLeRtContent",
        innerHTML: `
        <p>${props.links.map((item) => {
          return item
        })
          }
        </p>
        `
      }
    )
  )
}
// creating base elements
const baseSection = (props) => {
  base.append(
    Object.assign(
      document.createElement('div'),
      {
        className: 'base-lf-content',
        innerHTML: "Copyright 2020 ALTIUS Graphics"
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: 'base-rt-content',
        innerHTML: `
        ${props.icon.map((item) => {
          return `<span>${item}</span>`
        })
          }
        `
      }
    )
  )
}

// render all html elemnts with fetch data
fetch('./content.json')
  .then(data => data.json())
  .then((res) => {
    navbar(res.navbar),
      heroSection(res.banner),
      serviceSection(res.service),
      aboutSection(res.about),
      workSection(res.work),
      processSection(res.process),
      testiSection(res.testimonial),
      contactSection(res.contact),
      blogSection(res.blog),
      faqSection(res.faq),
      detailSection(res.details),
      baseSection(res.footer)
  })
  .catch(err => console.log(err))
