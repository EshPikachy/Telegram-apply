var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },   grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
      
  
  });

  const dataloft = [
    {
        Text:'Slide 1',
        img: './images/01.jpg',
    },
    {
        Text:'Slide 2',
        img: './images/02.jpg',
    },
    {
        Text:'Slide 3',
        img: './images/03.jpg',
    },
    {
        Text:'Slide 4',
        img: './images/04.jpg',
    },
    {
        Text:'Slide 5',
        img: './images/05.jpg',
    },
    
];

const swiper_wrapper = document.querySelector('.swiper-wrapper')

dataloft.forEach(el =>{
    const swiper = document.createElement('div');

    swiper.classList.add('swiper-slide') ;
    swiper.style.backgroundImage = `url(${el.img})`;
    swiper.textContent = el.Text;

    swiper_wrapper.append(swiper)

    
});

const data = [
  {
    title: "first",
    text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
  },
  {
    title: "second",
    text: `Marvel counts among its characters such well-known superheroes as Spider-Man, Iron Man, Captain America, Thor, Doctor Strange, Hulk, Wolverine, and Captain Marvel, as well as popular superhero teams such as the Avengers, the X-Men, the Fantastic Four, and the Guardians of the Galaxy. Its stable of well-known supervillains includes the likes of Doctor Doom, Magneto, Ultron, Thanos, Green Goblin, Galactus, Loki, and Kingpin. Most of Marvel's fictional characters operate in a single reality known as the Marvel Universe, with most locations mirroring real-life places; many major characters are based in New York City.[4] Additionally, Marvel has published several licensed properties from other companies.
         This includes Star Wars comics twice from 1977 to 1986 and again since 2015.`,
  },
  {
    title: "third",
    text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
  },
  {
    title: "fourth",
    text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
  },
  {
    title: "fifth",
    text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
  },
  {
    title: "sixth",
    text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
  },
  {
    title: "seventh",
    text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
  },
  {
    title: "eight",
    text: `Marvel Comics is an American comic book publisher and the flagship property of Marvel Entertainment, a divsion of The Walt Disney Company since September 1, 2009. Evolving from Timely Comics in 1939, Magazine Management/Atlas Comics in 1951 and its predecessor, Marvel Mystery Comics, the Marvel Comics title/name/brand was first used in June 1961.
        Marvel was started in 1939 by Martin Goodman as Timely Comics,[3] and by 1951 had generally become known as Atlas Comics. The Marvel era began in June 1961 with the launch of The Fantastic Four and other superhero titles created by Stan Lee, Jack Kirby, Steve Ditko and many others. The Marvel brand, which had been used over the years and decades, was solidified as the company's primary brand.`,
  },
];

function razdelitel(arr) {
  const dlina = arr.length;
  const seredina = Math.ceil(dlina / 2);

  const polovina1 = arr.slice(0, seredina);
  const polovina2 = arr.slice(seredina);

  return [polovina1, polovina2];
}
const [first, second] = razdelitel(data);

const accordion = document.querySelector(".accordion");
const row = document.querySelector(".output");

const renderCol = (arr) => {
  const col1 = document.createElement("div");

  arr.forEach((el) => {
    const accordion__wrap = document.createElement("div");
    const accordion__name = document.createElement("div");
    const accordion__content = document.createElement("div");
    const title = document.createElement("p");
    const text = document.createElement("p");
    const img = document.createElement("img");

    accordion__wrap.className = "accordion__wrap";
    accordion__name.className = "accordion__name";
    accordion__content.className = "accordion__content";
    img.className = "plus";

    title.textContent = el.title;
    text.textContent = el.text;
    img.src = "./images/plus.png";

    accordion__content.append(text);
    accordion__name.append(title, img);
    accordion__wrap.append(accordion__name, accordion__content);
    col1.append(accordion__wrap);
  });

  col1.className = "col-6";

  row.append(col1);
};
renderCol(first);
renderCol(second);

// data.forEach((el) => {
//   const accordion__wrap = document.createElement("div");
//   const accordion__name = document.createElement("div");
//   const accordion__content = document.createElement("div");
//   const title = document.createElement("p");
//   const text = document.createElement("p");
//   const img = document.createElement("img");

//   accordion__wrap.className = "accordion__wrap";
//   accordion__name.className = "accordion__name";
//   accordion__content.className = "accordion__content";
//   text.className = "text";
//   img.className = "plus";

//   title.textContent = el.title;
//   text.textContent = el.text;
//   img.src = "./plus.png";

//   accordion__content.append(text);
//   accordion__name.append(title, img);
//   accordion__wrap.append(accordion__name, accordion__content);
//   row.append(renderCol);
// });
const accordion__wraps = document.querySelectorAll(".accordion__wrap");
const accordion__content = document.querySelectorAll(".accordion__content");

accordion__content.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.stopPropagation();
  });
});

// accordion__wraps.forEach(el=>{
//   el.addEventListener('click',()=>{
//     el.classList.toggle('accordion__active')
//   })
// })

const activeButton = () => {
  accordion__wraps.forEach((el, parentIndex) => {
    el.addEventListener("click", () => {
      accordion__wraps.forEach((item, childIndex) => {
        if (parentIndex === childIndex) {
          item.classList.toggle("accordion__active");
        } else if (parentIndex !== childIndex) {
          item.classList.remove("accordion__active");
        }
      });
    });
  });
};
activeButton();
