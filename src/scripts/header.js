// create header function
const Header = (props) => {
    // console.log(props[0].logo.src)
    // add inside of navbar
    navbar.innerHTML = `
      <div class="container d-flex">
           <div class="logo">
              <img src=${props[0].logo.src}>
              <div id="toggle-btn">
                    <input type="checkbox" id="nav-checkbox" class="nav-checkbox" />
                    <label for="nav-checkbox" class="nav-toggle" >
                        <img src="https://img.icons8.com/material-outlined/30/000000/menu--v1.png" class="open" />
                        <img src="https://img.icons8.com/plumpy/30/000000/x.png" class="close" />
                    </label>
              </div>
           </div>
           <div class="menu">
              <div id="menu-list" class="d-flex"></div>
              <button>Get a Quote</button>
           </div>
      </div>
   `
    // if media query width id max 600px then toggle btn show else hide
    const toggleBtn = document.getElementById('toggle-btn');
    const media = window.matchMedia("(max-width:600px)")
    function mediaQuery(media) {
        if (media.matches) {
            toggleBtn.style.display = "block";
        }
        else {
            toggleBtn.style.display = "none";
        }
    }
    media.addEventListener("change", function () {
        mediaQuery(media)
    })
    mediaQuery(media);
    // create a menu list and render all the lists
    const menuList = document.getElementById('menu-list');
    props[1].menu.forEach(item => {
        menuList.appendChild(
            Object.assign(
                document.createElement('li'),
                {
                    className: 'list'
                }
            )
        ).appendChild(
            Object.assign(
                document.createElement('a'),
                {
                    innerHTML: item
                }
            )
        )
    });

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

    // for (let i = 0; i < 2; i++) {
    //     // create dropdownl list
    //     const droplist = document.createElement('div');
    //     droplist.className = "dropList"
    //     // count droplists
    //     const droplists = document.getElementsByClassName('dropList').length;
    //     // if droplist is 0 show append the list into firstList else secondList
    //     if (droplists == 0) {
    //         firstList.appendChild(droplist);
    //         // add innerHTML to droplist
    //         droplist.innerHTML = `
    //             <li><a href="">Architectural Graphics</a></li>
    //             <li><a href="">Construction Graphics</a></li>
    //             <li><a href="">Exhibit & Trade Show Signal</a></li>
    //             <li><a href="">Corporate Branding & Business Graphics</a></li>
    //         `
    //     }
    //     else {
    //         secondList.appendChild(droplist);
    //         // add innerHTML to droplist
    //         droplist.innerHTML = `
    //             <li><a href="">Airport & City Transport</a></li>
    //             <li><a href="">Healthcare & Hospital</a></li>
    //             <li><a href="">Logistics & Distribution</a></li>
    //             <li><a href="">Utility & Services</a></li>
    //             <li><a href="">Oil & Gas</a></li>
    //             <li><a href="">Government & Educational Institute</a></li>
    //             <li><a href="">Food & Beverage Distribution</a></li>
    //         `
    //     }
    // }

}
// caling function with content
fetch('./content.json')
    .then((res) => res.json())
    .then((data) => Header(data.navbar))

console.log(navbar)


