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
const heroSection = () => {
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
const serviceSection = () => {
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
        id: "serviceContents",
        className: "service-Contents"
      }
    )
  )
  // inside of service title create two texts
  serviceTitle.append(
    Object.assign(
      document.createElement('span'),
      {
        innerHTML : "Our Capability"
      }
    ),
    Object.assign(
      document.createElement('span'),
      {
        innerHTML : "Find Out Our Services"
      }
    )
  )
}
// creating about us elements
const aboutSection = () =>{

}
// creating work service elments
const workSection = () =>{

}
// creating process section elemnts
const processSection = () =>{

}
// creating testimonila elements
const testiSection = () =>{

}
// creating contact elemnts
const contactSection = () =>{

}
// creating blog elements
const blogSection = ()=>{

}
// creating faq elements
const faqSection = ()=>{

}
// creating details elements
const detailSection = ()=>{

}
// creating base elements
const baseSection = ()=>{

}


console.log(banner)
// render all html elemnts with fetch data
fetch('./content.json')
  .then(data => data.json())
  .then((res) => {
    navbar(res.navbar),
      heroSection(),
      serviceSection(),
      aboutSection(),
      workSection(),
      processSection(),
      testiSection(),
      contactSection(),
      blogSection(),
      faqSection(),
      detailSection(),
      baseSection()
  })
  .catch(err => console.log(err))
