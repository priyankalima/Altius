const header = () => {
    //container
    const container = document.createElement('div');
    container.className = "container";
    // logo
    const logo = document.createElement('div');
    logo.className = "logo";
    // menu
    const menu = document.createElement('div');
    menu.className = "menu";
    // img
    const img = document.createElement('img');
    img.src = "demo.jpg";
    // toggle menu
    const toggleMenu = document.createElement('div');
    toggleMenu.id = "toggleMenu";
    // toggle menu elements
    toggleMenu.innerHTML = `
      <input type="checkbox"/>
      <label class="open"></label>
      <label class="close"></label>
    `
    // append elements of navbar
    navbar.append(container);
    container.append(logo, menu)
    logo.append(img, toggleMenu);
    // menu.appendChild(list);

    const lists = ["home", "about", "contact"]
    console.log(lists.length)
    // menu lists render
    lists.forEach(item => {
        // list
        const list = document.createElement('li');
        menu.appendChild(list);
        list.textContent = item;
    })
    console.log(navbar)

}
header();