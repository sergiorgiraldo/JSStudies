//bun install @faker-js/faker --save-dev
// run with bun ./tests001.js
import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';


//faker.seed(123); //with a seed, results are always the same
for (let index = 0; index < 10; index++) {
    console.log(`\n**************${index + 1}**************\n`);
    console.log("name->" + faker.person.fullName());
    console.log("birthday->" + faker.date.birthdate());
    console.log("email->" + faker.internet.email());
    console.log("website->" + faker.internet.url());
    console.log("company->" + faker.company.name());
    console.log("title->" + faker.person.jobTitle());
    console.log("zodiac->" + faker.person.zodiacSign());
    console.log("lorem->" + faker.lorem.sentences(2));
    console.log("credit card->" + faker.finance.creditCardNumber());
    console.log("credit card issuer->" + faker.finance.creditCardIssuer());
    console.log("iban->" + faker.finance.iban());
    console.log("product->" + faker.commerce.productName());
    console.log("price->" + faker.commerce.price());
    console.log("isbn->" + faker.commerce.isbn());
    console.log("address->" + faker.location.streetAddress());
    console.log("city->" + faker.location.city());
    console.log("state->" + faker.location.state());
    console.log("country->" + faker.location.country());
    console.log("zipCode->" + faker.location.zipCode());
    console.log("image->" + faker.image.urlPlaceholder());
    console.log("integer->" + faker.number.int());
    console.log("float->" + faker.number.float());
}

