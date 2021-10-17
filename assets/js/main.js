const menu = ['home', 'about', 'candy', 'new'];

/* SLIDER */

const sliders = [
  {
    image: 'assets/img/home1-img.png',
    heading: [
      {
        title: 'The Labu “Reiza”',
        subTitle: 'The Living Pumpkin',
      },
    ],
    detail: [
      {
        subTitle: '#1 Top Scariest Ghost',
        title: ['UOOOO ', 'TRICK OR ', 'TREAT!!'],
        description:
          "Hi, I'm Reiza, people call me 'El Labu'. I am currently trying to learn something new, building my own bike with parts made only in Malaysia.",
      },
    ],
  },
  {
    image: 'assets/img/home2-img.png',
    heading: [
      {
        title: 'Adino & Grahami',
        subTitle: 'No words can describe them',
      },
    ],
    detail: [
      {
        subTitle: '#2 top Best duo',
        title: ['BRING BACK', 'MY COTTON', 'CANDY'],
        description:
          'Adino steals cotton candy from his brother and eats them all in one bite, a hungry beast. Grahami can no longer contain his anger towards Adino.',
      },
    ],
  },
  {
    image: 'assets/img/home3-img.png',
    heading: [
      {
        title: 'Captain Sem',
        subTitle: 'Veteran Spooky Ghost',
      },
    ],
    detail: [
      {
        subTitle: '#3 Top Scariest Ghost',
        title: ['RESPAWN', 'THE SPOOKY', 'SKULL'],
        description:
          'In search for cute little puppy, Captain Sem has come back from his tragic death. With his hogwarts certified power he promise to be a hero for all of ghostkind.',
      },
    ],
  },
];

const categories = [
  {
    image: 'assets/img/category1-img.png',
    title: 'Ghosts',
    description: 'Choose the ghosts, the scariest there are.',
  },
  {
    image: 'assets/img/category2-img.png',
    title: 'Pumpkins',
    description: 'You look at the scariest pumpkins there is.',
  },
  {
    image: 'assets/img/category3-img.png',
    title: 'Witch Hat',
    description: 'Pick the most stylish witch hats out there.',
  },
];

const tricks = [
  {
    image: 'assets/img/trick-treat1-img.png',
    title: 'Toffee',
    subTitle: 'Candy',
    price: '$11.99',
  },
  {
    image: 'assets/img/trick-treat2-img.png',
    title: 'Bone',
    subTitle: 'Accessory',
    price: '$8.99',
  },
  {
    image: 'assets/img/trick-treat3-img.png',
    title: 'Scarecrow',
    subTitle: 'CaAccessoryndy',
    price: '$15.99',
  },
  {
    image: 'assets/img/trick-treat4-img.png',
    title: 'Candy Cane',
    subTitle: 'Candy',
    price: '$7.99',
  },
  {
    image: 'assets/img/trick-treat5-img.png',
    title: 'Pumpkin',
    subTitle: 'Candy',
    price: '$19.99',
  },
  {
    image: 'assets/img/trick-treat6-img.png',
    title: 'Ghost',
    subTitle: 'Accessory',
    price: '$17.99',
  },
];

const newArivals = [
  {
    image: 'assets/img/new1-img.png',
    title: 'Haunted House',
    subTitle: 'Accessory',
    price: '$14.99',
    discount: '$29.99',
  },
  {
    image: 'assets/img/new2-img.png',
    title: 'Haunted House',
    subTitle: 'Accessory',
    price: '$14.99',
    discount: '$29.99',
  },
  {
    image: 'assets/img/new3-img.png',
    title: 'Haunted House',
    subTitle: 'Accessory',
    price: '$14.99',
    discount: '$29.99',
  },
  {
    image: 'assets/img/new4-img.png',
    title: 'Haunted House',
    subTitle: 'Accessory',
    price: '$14.99',
    discount: '$29.99',
  },
];

const footer = [
  {
    title: 'About',
    item: ['About Us', 'Features', 'News'],
  },
  {
    title: 'Our Services',
    item: ['Pricing', 'Discounts', 'Shipping mode'],
  },

  {
    title: 'Our Company',
    item: ['Blog', 'Our story', 'Our mision'],
  },
];

/* SWIPER NEW ARRIVALS */
new Swiper('.new-swiper', {
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: 'true',
  spaceBetween: 16,
  pagination: {
    el: '.new-pagination',
    clickable: true,
  },
});
