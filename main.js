 const inquirer = require("inquirer");


    inquirer
  .prompt([
   
    {
        type: "input",
        message: "What is your manager's name?",
        name: "name"

    },

    {
        type: "input",
        message: "What is your manager's id?",
        name: "id"

    },

    {
        type: "input",
        message: "What is your manager's email",
        name: "email"
    },

    {
        type: "input",
        message: "What is your manager's office number?",
        name: "number"
    }

  ]).then(function (response) {
      console.log(response)

      //return to this spot later on /////////////////////////////
    //   rolePrompt();

  });


  //Making a list of options for engineer, intern, or terminate
  //if engineer is chosen, we can call an inquirer prompt function and the same for intern if it is chosen then call the intern prompt 
  
  function rolePrompt() {

    inquirer
    .prompt([

        {
            type: "list",
            message: "What is your role?",
            choices: "Engineer, Intern, Terminate",
            name: "role"
    
        }


    ])

    .then((response) => {
        role = response.role;
        if (role === "Engineer"){

        }
           

    })


  }

  function engineerPrompt(){
     
    inquirer
  .prompt([
   
    {
        type: "input",
        message: `What is your ${role} name?`,
        name: "name"

    },

    {
        type: "input",
        message: `What is your ${role} id?`,
        name: "id"

    },

    {
        type: "input",
        message: `What is your ${role} email`,
        name: "email"
    },

    {
        type: "input",
        message: `What is your ${role} github username?`,
        name: "username"
    }

  ])
  }

  function internPrompt (){

    inquirer
  .prompt([
   
    {
        type: "input",
        message: `What is your ${role} name?`,
        name: "name"

    },

    {
        type: "input",
        message: `What is your ${role} id?`,
        name: "id"

    },

    {
        type: "input",
        message: `What is your ${role} email`,
        name: "email"
    },

    {
        type: "input",
        message: `Where did your ${role} go to school?`,
        name: "school"
    }

  ])

  }
  


  


  