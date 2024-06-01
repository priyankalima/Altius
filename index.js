const header = () => {

  // navbar elements
  navbar
    .appendChild(
      Object.assign(
        document.createElement('div'),
        {
          className: 'container',
          id: "box"
        }
      )
    ).append(
      Object.assign(
        document.createElement('div'),
        {
          innerHTML: `<h1>hello world</h1>`,
          id: 'logo'
        }
      ),
      Object.assign(
        document.createElement('div'),
        {
          // innerHTML: 'button',
          id: 'menu'
        }
      )
    )
  // logo elements
  logo.append(
    Object.assign(
      document.createElement('img'),
      {
        className: 'img',
        src: "./assets/logo.svg"
        // id: "box"
      }
    ),
    Object.assign(
      document.createElement('div'),
      {
        className: 'img',
        // src :"demo.jpg"
        id: "toggleMenu"
      }
    )
  )

  const id = document.getElementById('box');
  console.log(id)
  console.log(navbar)

}
header();