# Tab Nabbers

- [App](https://bootcruitv2.herokuapp.com/) - Currently being built for the community by the community
- Goal -  to help make job hunt easier
- Instead of looking for a job, for the job to look for you
- Get involved into the community

> The best way to get involved into the community, is to be a part of it


## Benefits contributing

- Being to be a part of something great
- Joining a network of full stack developers with different skill set
- Newbies are assigned a mentor to help them contribute to the project.
- Meeting other developers and extend your network
- Giving back to the community




## Folders Structured

```
|-- front/
   |-- actions/
           └── actionTypes.js
           └── profile.js
   |-- components/
         └── bcsidebar
                └── sidebar-item
                    └──Sidebaritem.js
                └── BCSidebar.js
                └── signup.js
         └── _About.js
         └── Content.js
         └── Footer.js
         └── Navbar.js
         └── signin.js
         └── signup.js
         └── _Student.js
   |-- containers/
        └── Home.js
        └── _D3Map.js
        └── _Event.js
        └── Home.js
        └── _Profile.js
        └── _Recruiter.js
        └── _Student.js
   |-- public/
        └── css
            └── about.scss
            └── event.scss
            └── footer.scss
            └── header.scss
            └── home.scss
            └── login.scss
            └── mapstyle.css
            └── mdb.css
            └── profile.scss
            └── signup.scss
        └── font
        └── img
        └── js
        └── atlanta.json
        └── bundle.js
        └── california.json
        └── index.html
        └── test.json
        
   |-- reducers/
              └── credentials.js
              └── index.js
              └── overview.js
   |-- routes/
              └── Page.js
              └── routes.js           
   |-- test/
        └──api.test.js
   |-- utils
        └── api.js
        └── newApi.js
   |-- index.js
|-- back/
   |-- config/
        └── config.json
        └── secret.js
   |-- controllers/
        └── recruitercredentials.js
        └── securerecruiter.js
        └── securestudents.js
        └── studentcredentials.js
   |-- models/
        └── bootcamp.js
        └── cohort.js
        └── index.js
        └── recruiter.js
        └── user.js
   |-- test/
        └── test.js
|-- .babelrc
|-- .gitignore
|-- package.json
|-- Procfile
|-- Readme.md
|-- server.js
|-- webpack.config.js

```


## Getting Started

To get started on this project, follow the instructions below.

### Installations

Before you contribute

Make sure you install all the dependencies you need for the project
Once you have [Node.js](https://nodejs.org/en/) installed on your computer
Navigate to the working directory and do the following in your terminal

Before you proceed, make sure you fork the repo

> Note: If the below process doesn't work for you, no worries. Create an issue


### Front End Steps:
##### Step 1
> npm install
```
The above command will install all the dependencies you need!
```




##### Step 2
> npm run dev

By running the above command, the app will be starting, and you can view it by

clicking on this link [localhost](http://localhost:3000) or type http://localhost:3000 in your browser



You should see a new browser tabs open, and there you go, you are all set!!



Note:
For those of you working in the Back End

### Back End Steps:
Follow these steps

#### Step 1
> npm install

#### Step 2
in back/config , create a file named key.js and add the 
following into it

```
module.exports = {
    gooogle:{
        client_Id: '',
        client_secret:""
    },
    twitter:{
        consurmer_key:'',
        consumer_secret:''
    },

    linkedin:{
        client_id:'',
        client_secret:''
    },
    facebook:{
        client_id:'',
        client_secret:''
    }
};
```


#### Step 3

> npm start

You should see a new browser tabs open, and there you go, you are all set!!



### Technologies

 - Node.JS
 - Express
 - MongoDB
 - Mongoose
 - React.JS
 - Redux
 - Axios
 - JavaScript
 - Materialize
 - Nightmare
 - D3.js
 - Jest
 - Nightmare
 - Cloudinary
 - Passport


## Contributing


There are different ways to contribute
  - Front End (React.js, Redux, JavaScript, Axios, D3, Sass)
  - Back End (Node.js, express, building API, etc )
  - Designers
  - Genius Idea's
  - Unit Testers
  - Product Managers
  - etc.
  
  
## API
  - Meet up api : https://www.meetup.com/meetup_api/
  - Github api : https://developer.github.com/v3/search/#search-users
  
  


### Happy coding!