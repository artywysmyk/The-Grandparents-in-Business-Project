const people = [
    {
      id: 1,
      title: "Stationery shop",
      city: "Kraków",
      img: "./images/person-1.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Shoemaker",
      city: "Kraków",
      img: "./images/person-2.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "Watchmaker",
      city: "Wroclaw",
      img: "./images/person-3.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "shoemaker",
      city: "Warszawa",
      img: "./images/person-4.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Flower shop",
      city: "Kraków",
      img: "./images/person-5.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "Bakery",
      city: "Opole",
      img: "./images/person-6.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Bookstore",
      city: "Wroclaw",
      img: "./images/person-7.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "Lingerie shop",
      city: "Warszawa",
      img: "./images/person-8.jpg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "Hairdresser",
      city: "Wroclaw",
      img: "./images/person-9.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "Seamstress",
      city: "Warszawa",
      img: "./images/person-10.jpg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const sectionCenter = document.querySelector('.section-center');
  const btnsContainer = document.querySelector('.btn-container');


  //when page loads

  window.addEventListener('DOMContentLoaded', function(){
        
        displayPeopleItems(people);
        displayBtns();
  });

  function displayBtns(){
    const categories = people.reduce((unique, item) =>{
      if(!unique.includes(item.city)){
        unique.push(item.city)
      }
      return unique;
   }, ['all']);
    
    // we go through that array with unique categories, that we named categories.
    //We add html for buttons, with each item from thta array as id and text
    //We get rid of comas
    const displayedBtn = categories.map(item=>{
      return `<button type="button" class="filter-btn" data-id="${item}">${item}</button>`
    }).join('');
    
    //we add buttons to buttonsContainer with innerHTML
    btnsContainer.innerHTML = displayedBtn;
    
    //we select buttons now as they have just been created and add eventListener
    const filterBtns = document.querySelectorAll('.filter-btn');
          for(let btn of filterBtns){
            btn.addEventListener('click', function(e){
              const city = e.currentTarget.dataset.id;
              const peopleCategory = people.filter(peopleItem =>{
                  if(peopleItem.city === city){
                      return peopleItem;
                  }
              });
              if(city === "all"){
                  displayPeopleItems(people);
              }
              else {
                  displayPeopleItems(peopleCategory);
              }
            })
          }
   }
   
   

function displayPeopleItems(array){
    let displayPeople = array.map(item => {
        return `<article class="people-item">
              <img src=${item.img} alt=${item.title} class="photo"/>
              <div class="item-info">
                <header>
                  <h4>${item.title}</h4>
                  <h4>${item.city}</h4>
                </header>
                <p class="item-text">
                  ${item.desc}
                </p>
              </div>
            </article>`;
      });
      displayPeople = displayPeople.join("");
      console.log(displayPeople);
    
      sectionCenter.innerHTML = displayPeople;
}
  

