const header = (props) => {

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
  // var media = window.matchMedia("(max-width: 600px)");


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
  // firsl list element
  const firstList = document.getElementsByTagName('li')[0];
  // frist link element
  const firstLink = document.getElementsByTagName('a')[0];
  // added class to both
  firstList.className = "dropdown";
  firstLink.className = "dropbtn";
  // create dropdownl list
  const droplist = document.createElement('div');
  droplist.className = "dropList"
  // add innerHTML to droplist
  droplist.innerHTML = `
      <li><a href="">Architectural Graphics</a></li>
      <li><a href="">Construction Graphics</a></li>
      <li><a href="">Exhibit & Trade Show Signal</a></li>
      <li><a href="">Corporate Branding & Business Graphics</a></li>
  `
  // add to first loist lement
  firstList.appendChild(droplist);

  console.log(firstList)


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


console.log(nav)
fetch('./content.json')
  .then(data => data.json())
  .then(res => header(res.navbar))
  .catch(err => console.log(err))
