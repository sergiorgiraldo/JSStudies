import './styles.css';

import { fakerEN, fakerDE, fakerNL, fakerPT_BR, fakerZH_CN } from '@faker-js/faker';

const appDiv: HTMLElement = document.querySelector('#app');
for (const faker of [fakerEN, fakerDE, fakerEN, fakerNL, fakerPT_BR, fakerZH_CN]) {
  const fullName = faker.person.fullName();
  appDiv.innerHTML += `
<div class="card">
  <div class="card__image">
    <img src="${faker.image.urlPicsumPhotos({ height: 275, width: 256 })}" alt="Background image for ${fullName}" />
  </div>
  <div class="card__profile">
    <img src="${faker.image.avatarGitHub()}" alt="Avatar image of ${fullName}"/>
  </div>
  <div class="card__body">
    <h2>${fullName}</h2>
    <p>${faker.phone.number()}</p>
    <p>${faker.location.streetAddress()}, ${faker.location.city()}, ${faker.location.state()}</p>
    <hr />
    <p>${faker.hacker.noun()}::${faker.hacker.phrase()}</p>
  </div>  
</div>
`;
}
