const header = (props) => {

  // append inside navbar
  props.forEach((element) => {
    navbar.appendChild(
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
  var media = window.matchMedia("(max-width: 600px)");
  if (media.matches) {
    toggleBtn.style.display = "block";
  }
  else {
    toggleBtn.style.display = "none"
  }

  // menu elements
  const list = props[1].menu;
  list.forEach((list) => {
    menu.appendChild(
      Object.assign(
        document.createElement('li'),
        {
          innerHTML: list
        }
      )
    )
  })
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


console.log(navbar)
fetch('./content.json')
  .then(data => data.json())
  .then(res => header(res.navbar))
  .catch(err => console.log(err))
