const Main =(props)=>{
   mainpage.innerHTML = 
   `
   <section>
      <div class=" d-flex">
          <div class="hero-lt-content">
              this is content
          </div>
          <div class="hero-rt-image">
              <img src=${props[1].src}>
          </div>
      </div>
   </section>
   `
}

// call function with content
fetch('./content.json')
.then((res)=> res.json())
.then((data)=>Main(data.banner))