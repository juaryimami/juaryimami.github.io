const StaffSection = document.querySelector('#staff .flex-container');

const staff = [{
  name: 'Zola',
  title: 'Founder & CEO',
  description: 'Zola is a passionate outdoor enthusiast with over 10 years of experience as a world traveller. Her first overseas trip was a 5 year stint where he worked his way around the world.',
  image: '../image/guides/zoma.jpeg',
  class: 'staff1',
},
{
  name: 'MarKon',
  title: 'Manager, North Operations',
  description: 'Markon has been living and guiding in Ethiopia for the past 6 years. He was born in Canada in the town of Manitouba, but decided to swap the Horn of Africa for  10 years ago.',
  image: '../image/guides/zola1.jpeg',
  class: 'staff2',
},
{
  name: 'Mohammed',
  title: 'Manager, Middle East Opration',
  description: 'Mohammed lives for the outdoors and adventure. Also a recognized conservationist, Mohammed provides our travellers with an unmatched level of connectivity to the real Dalol.',
  image: '../image/guides/rolando.jpg',
  class: 'staff3',
},
{
  name: 'Mahider',
  title: 'Operations Director',
  description: 'Mahder has been working at Tour Travler as the Director of Operations for the past 10 years. Her passion for travel was passed on to her by her parents.',
  image: '../image/guides/Mahider.webp',
  class: 'staff4',
},
{
  name: 'Shuhad',
  title: 'Johansburg, South Africa',
  description: 'Shuhad was born in the beautiful city of Cairo where he learned to speak Quechua at the age of three. He now also speaks English and Amharic fluently.',
  image: '../image/guides/miguel.jpg',
  class: 'staff5',
},
{
  name: 'Seid',
  title: 'Manager, East Operations',
  description: 'Seid comes from the village of Konso, in the Southern Nation Nationalities of Ethiopia. He  has established a niche as a mountain biking and road cycling guide and has a superb knowledge of the back roads of Sudan. ',
  image: '../image/guides/Seid.avif',
  class: 'staff6',
},
];

function createStaffMember(profile) {
  StaffSection.innerHTML += `
  <article class="${profile.class} staff">
  <div class="staff__img">
      <img src="${profile.image}" alt="">
  </div>
  <div class="staff__description">
      <h3>${profile.name}</h3>
      <h4>${profile.title}</h4>
      <hr>
      <p>${profile.description}</p>
  </div>
</article>`;
}

function createStaffSection() {
  for (let i = 0; i < staff.length; i += 1) {
    createStaffMember(staff[i]);
    if (i > 1) {
      document.querySelector(`.staff${i + 1}`).classList.add('toggle');
    }
  }
  StaffSection.innerHTML += '<div id="more">More <a href="#Staff"><i class="fas fa-chevron-down"></i></a></div>';
}

createStaffSection();

const more = document.querySelector('#more a');
const speaker = document.querySelectorAll('.staff');

more.addEventListener('click', () => {
  for (let i = 2; i < speaker.length; i += 1) {
    speaker[i].classList.toggle('toggle');
  }
  if (speaker[2].classList.contains('toggle')) {
    more.innerHTML = "<i class='fas fa-chevron-down'></i>";
  } else {
    more.innerHTML = "<i class='fas fa-chevron-up'></i>";
  }
});

const openMenu = document.querySelector('.navbar-main__toggler');
const closeMenu = document.querySelector('.navbar-button__close');
const menu = document.querySelector('.navbar-main__nav');
const menuLinks = document.querySelectorAll('.navbar-main__list li');

closeMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

openMenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
});

menuLinks.forEach((li) => {
  li.addEventListener('click', () => {
    menu.classList.toggle('collapse');
  });
});
