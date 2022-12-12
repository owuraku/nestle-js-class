#installing bcrypt package

-   install bcrypt in your project
-   npm i bcrypt
    -- if faced with issues check out https://github.com/kelektiv/node.bcrypt.js/

#hashing password

-   in your controller, require the package
-   since the logic for hashing and verifying passwords are specific to the user, it will make sense to put that code in the user model
