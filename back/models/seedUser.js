const faker = require('faker');

function mockSkills(randomRange) {
  const languages = ['HTML', 'CSS', 'Javascript', 'Java', 'Python', 'Ruby'];
  const skillCategory = ['Library', 'Framework', 'Language'];
  let skillsArr = [];
  let arrayLength = Math.floor(Math.random() * randomRange);
  for (let i=0; i < arrayLength; i++) {
    let skills = {
      skillName: languages[Math.floor(Math.random() * languages.length)],
      category: skillCategory[Math.floor(Math.random() * skillCategory.length)],
      active: Boolean(Math.floor(Math.random() * 2))
    };
    skillsArr.push(skills);
  }
  console.log('Skills Array', skillsArr);
  return skillsArr;
}



module.exports.generateUsers = ((numberOfUsers, singleUser = false) => {
  let userArr = [];
  const genders = ['M', 'F'];
  const jobStatus = ['employed, unemployed'];
  
  if (singleUser) {
    return userArr.push({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      gender: genders[Math.floor(Math.random() * genders.length)],
      phoneNumber: faker.phone.phoneNumberFormat(),
      birthday: {
        month: faker.date.month(),
        day: Math.floor(Math.random() * 31),
        year: Math.floor(Math.random() * (97)+ 1920)
      },
      photo: faker.image.imageUrl(),
      photoUrl: faker.image.imageUrl(),
      profiles: {
        github: faker.internet.url(),
        linkedIn: faker.internet.url()
      },
      jobStatus: jobStatus[Math.floor(Math.random() * jobStatus.length)],
      jobTitle: faker.name.jobTitle(),
      loginData: {
        local: {
          email: faker.internet.email(),
          password: faker.internet.password()
        },
        facebook: {
          id: faker.id(),
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
        }
      },

      address: {
        street_address: faker.address.streetName(),
        apartment_number: Math.random().toString(26).substr(2, length),
        city: faker.address.city(),
        state: faker.address.stateAbbr(),
        zipcode: faker.address.zipCode(),
      },
      skills: mockSkills(5)
    });
  } else {
    for (let i = 1; i < numberOfUsers; i++) {
      let userObj = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        gender: genders[Math.floor(Math.random() * genders.length)],
        phoneNumber: faker.phone.phoneNumberFormat(),
        birthday: {
          month: faker.date.month(),
          day: Math.floor(Math.random() * 31),
          year: Math.floor(Math.random() * (97)+ 1920)
        },
        photo: faker.image.imageUrl(),
        photoUrl: faker.image.imageUrl(),
        profiles: {
          github: faker.internet.url(),
          linkedIn: faker.internet.url()
        },
        jobStatus: jobStatus[Math.floor(Math.random() * jobStatus.length)],
        jobTitle: faker.name.jobTitle(),
        loginData: {
          local: {
            email: faker.internet.email(),
            password: faker.internet.password()
          },
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
          }
        },

        address: {
          street_address: faker.address.streetName(),
          apartment_number: Math.floor(Math.random() * (100)+ 400),
          city: faker.address.city(),
          state: faker.address.stateAbbr(),
          zipcode: faker.address.zipCode(),
        },
        skills: mockSkills(5)
      };
      userArr.push(userObj);


    }

    return userArr;

  }

});