const faker = require("faker");
// const {mockSkills} = require('./seedUser');

const genders = ["M", "F"];

/**
 * Single User Dummy
 */
exports.user = {
  name: faker.name.firstName(),
  gender: genders[Math.floor(Math.random() * genders.length)],
  phoneNumber: faker.phone.phoneNumberFormat(),
  birthday: {
    month: faker.date.month(),
    day: Math.floor(Math.random() * 31),
    year: Math.floor(Math.random() * 97 + 1920)
  },
  photo: faker.image.imageUrl(),
  photoUrl: faker.image.imageUrl(),
  profiles: {
    github: faker.internet.url(),
    linkedIn: faker.internet.url()
  },
  looking_job: faker.random.boolean(),
  position: faker.name.jobTitle(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  facebook: {
    id: faker.random.uuid(),
    token: faker.random.uuid(),
    email: faker.internet.email(),
    name: faker.internet.userName()
  },
  twitter: {
    id: faker.random.uuid(),
    token: faker.random.uuid(),
    displayName: `${faker.name.firstName()}${faker.name.lastName()}`,
    username: faker.internet.userName()
  },
  google: {
    id: faker.random.uuid(),
    token: faker.random.uuid(),
    email: faker.internet.email()
  },
  linkedin: {
    id: faker.random.uuid(),
    token: faker.random.uuid(),
    email: faker.internet.email(),
    name: faker.internet.userName()
  },

  address: {
    street_address: faker.address.streetName(),
    apartment_number: Math.random()
      .toString(26)
      .substr(2, 100 + 400),
    city: faker.address.city(),
    state: faker.address.stateAbbr(),
    zipcode: faker.address.zipCode()
  }
  // skills: mockSkills(5)
};

/**
 * Multiple users
 */
exports.users = () => {
  return {
    name: faker.name.firstName(),
    gender: genders[Math.floor(Math.random() * genders.length)],
    phoneNumber: faker.phone.phoneNumberFormat(),
    birthday: {
      month: faker.date.month(),
      day: Math.floor(Math.random() * 31),
      year: Math.floor(Math.random() * 97 + 1920)
    },
    photo: faker.image.imageUrl(),
    photoUrl: faker.image.imageUrl(),
    profiles: {
      github: faker.internet.url(),
      linkedIn: faker.internet.url()
    },
    position: faker.name.jobTitle(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    facebook: {
      id: faker.random.uuid(),
      token: faker.random.uuid(),
      email: faker.internet.email(),
      name: faker.internet.userName()
    },
    twitter: {
      id: faker.random.uuid(),
      token: faker.random.uuid(),
      displayName: `${faker.name.firstName()}${faker.name.lastName()}`,
      username: faker.internet.userName()
    },
    google: {
      id: faker.random.uuid(),
      token: faker.random.uuid(),
      email: faker.internet.email()
    },
    linkedin: {
      id: faker.random.uuid(),
      token: faker.random.uuid(),
      email: faker.internet.email(),
      name: faker.internet.userName()
    },

    address: {
      street_address: faker.address.streetName(),
      apartment_number: Math.floor(Math.random() * 100 + 400),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode()
    }
  };
  // skills: mockSkills(5)
};
