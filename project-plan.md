**Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.**

Yes, it will have an interface. The user will be able to add multiple projects, add a list of todos under those projects. Edit/Delete the projects or todos. Toggle finished or not status on the todos and project. Each of the todo items will have a title, description, dueDate and priority.

**What inputs will your program have?**

There will be a new project button that creates new projects with their titles. There will be a todo creation form that can create the todos with title, description, dueDate and priority.

**Will the user enter data or will you get input from somewhere else?**

Yes, the user will input data for almost all the details for the projects and todos.

**What’s the desired output?**

A fully functioning todo-list web-app that can add new projects and new todos under those projects, edit their details when needed. It has do this for each of the dates in a calender.

**Given your inputs, what are the steps necessary to return the desired output?**

0.5. HTML:

- Create a dashboard with buttons to Add task, add task will open the task form, inside which you can assign the task to the project you want.
- Then in dashboard, you can see today’s task, see upcoming tasks, which after it gets clicked, will display a calendar in the main content area and you can click any date to add todos to it or view the existing todos.
- Using dashboard, You also display all the projects created. Projects persist for all days on the calender, not just for a single day. Changing the dates should only reset/change the todos, not remove the projects.

1.  Create a todos module, inside create a todo creator class that can take in arguments needed for a todo and create that object. Give arguments such as title, due date, priority and description. Declare a completed status variable that is set to false by default. It can be toggled to true later using an in-class function.

    1.1. Export the todo class to entry point class so we can create todo as and when needed.

    1.2. Create a pop-up form in index.html file. That will be hidden by default but pop up when the user clicks the button to add a todo under a project. This form should contain all the same items you're passing into the todo constructor.

2.  Create a projects module, inside create a project creator class that creates a project. This project will use the details from the todo creation form and feed it to todo class’s constructor to create todos. Add the todos to an array declared inside the project object.

3.  I have to find a way to ensure the todos created are appended correctly to their respective projects. You can send over the projects that are created as options to the drop-down that displays when add task button is clicked. Then you can just add the todos to their respective projects based on the drop-down option.

    3.1. The newly created projects will be stored in the global projects array. Iterate through that array and get its values and make it the options for the select dropdown menu in the add-task-form.

    3.2. By default, the todos should be added to an inbox project object. Make it so that the todos will be added to the project selected in the drop-down and by default, the todos will be added to inbox which is actually a project object.

    3.3. You need to note the project value retrieved from the drop-down in the add task form and see if it matches with any of the project names of the project objects stored in the projectsArray and if it does match, then you use the addTodo() function to add the todo object to the todoList array in the respective project object.

    3.4. Make sure the add task and add project form don't overlap. Add the code that hides the add project form upon pressing add task btn and the add project btn should also hide the add task form when clicked. Also add a box-shadow outset property to the forms so they stand out when visible. Find a way to make the rest of the page unresponsive when the forms are visible on the screen. You can achieve this by putting the forms in a div element, make its background-color opacity 0 and have it take the entire width and height of the page, and finally give it a z-index of 1.

4.  You can iterate through the projectsArray of project objects and display each of the todos under the project. Should be pretty easy.

    4.1. Add an event listener to the nav divs of the projects which when clicked will remove the default contents of the main-content and add the todos from its project object.

    4.2. Put the newly created projects into a div and use event bubbling for the project divs inside that to manipulate the DOM. You can check if the data-project-name attribute value of the div element that was clicked on matches any of the projectNames of the objects from the objects array – projectsArray. If they match, then iterate through the todoList and display the todos in the main-content area under the project’s heading.

5.  Make sure to seperate the application creation logic from the DOM manipulation logic as much as possible.

6.  The UI should display all the projects with their details in real time. Call the projects displaying function after each change to the list of todos. For the todos, display just its title at the top, priorityBar to it’s right, and dueDate just below the title. Upon hovering over the todoDiv, the expand button will appear at the bottom-right corner, upon clicking it the object should expand and display its description, a completed checkbox, an edit button and a delete button to the right. All three inputs have a data-index that is the same as the array index of the todo item which houses the buttons.

    6.0.5. Give the same data-index to the expand button and upon clicking the expand button, you will retrieve its data-index, get its parent todo-div using .parentElement and then iterate through the children of todo-div and then if they have a class of todo-extension-div, then make its display: flex; using cssText.

    6.1. The edit button should allow to edit all the details of the todo. All you have to do is update the todo's details and add it to the same index it was originally present inside the project object. Simply reuse the same form but find the way to retrieve the task’s details and display those existing details and options in the form that pops up.

        6.1.1. Retrieve the edit-todo-btn’s data-index and data-project-name, iterate through projectsArray, match them with the projectArray’s projectName and it’s todoList’s index. Upon matching, retrieve all the details from that particular todo object present in the matched index. Then just assign those as default values to the form before it pops up.

        6.1.2. Then call the displayProjects function again to display the updated todo with the rest of the todos.

    6.2. For the delete button, it has to do two things. First, it has to delete the todo object from the todoList in the project object which is inside projectsArray. How do I do that? You can do that by matching the data-index of the deleted button that was clicked with the todo object in the todoList inside project object and then delete that particular todo from the array.

        6.2.1. Second, it also has to remove the todo-div from the DOM. How do I delete the particular todoDiv element whose delete button was clicked on? So when you click a delete button, that event will bubble up and you can retrieve that button’s data-delete-btn number. Then you just delete the todo object which has the same index number as the data-delete-btn no. from the todoList inside projectsArray. Then just call the displayProjects function again to display the updated todoList in the DOM.

    6.3. How do I make the completedCheckBox work?

        6.3.1. First, add the styling that enables the checkbox to work like a toggle. You can follow that one guide online, find it in your history.

        6.3.2. Second, make sure that toggling the checkbox, changes the value inside the object to true and false appropriately. True = checkboxON, false = checkboxOFF.

        6.3.3. Make sure the checkbox stays ticked and the completedStatus values remained true after another todo item has been deleted.

7.  Adding date functionalities

    7.1. I have to make it so that the add-task-form doesn't allow you to pick dates before today's date. That way the earliest date available is always today's date.

    7.2. So how do I make the today and upcoming nav bars work?

        7.2.1 Iterate through the projectsArray and pick the todos that have the dueDate as today. Put these todo objects in an array. Upon clicking the addEventLisener of today's nav item, it should display all the todo objects in the main-content area.  One thing to note is that you should also display the todo objects by projects. So maybe create h1 elements for the project headings and retrieve the project name from the todo object and assign it as textContent to the h1 element.

        7.2.2 Iterate through the projectsArray and pick the todos that has a dueDate greater than today's. Put these todo objects in an array. Upon clicking the addEventLisener of upcoming's nav item, it should display all the todo objects in the main-content area.  One thing to note is that you should also display the todo objects by projects. So maybe create h1 elements for the project headings and retrieve the project name from the todo object and assign it as textContent to the h1 element.

        7.2.3. Add a button to delete the projects using the nav-bar items.

8.  After successfully implementing the above functionality, find a way to use localStorage to store the details of the projects and todos so that they don’t disappear upon page refresh.

    8.1. What are all the things that I want to save to localStorage?

    - I want to save the projectsArray to localStorage after the creation of a todo object in taskForm. Do that for all cases.
    - I want to save the projectsArray after the creation of new projects in projectForm.
    - I want to save the projectsArray after the deletion of todo objects.
    - I want to save the projectsArray after the deletion of project objects.
    - I want to save the projectsArray after completion status of a todo is changed.
    - I want to save the dateProjectsArray after the todo items are added based on if the dueDate is today and if it’s upcoming.

      8.2. Essentially you’d wanna use localStorage everytime you add something to projectsArray.

          8.2.1. As soon as you add something, you push it to the localStorage. Then, retrieve the newly updated latest projectsArray in the localStorage and display that using displayProjects. This way, you ensure only one projectsArray is displayed and you can avoid the trouble of combining the local original and deep copied localStorage projectsArray. You’re not even displaying the projectsArray that exists locally in your js file, you’re displaying the one from the API.

          8.2.2. save newly created data to localStorage → Retrieve latest data from localStorage → call displayProjects with that data.

      8.3. Everything that you did with projectsArray, you’d follow the exact same approach with dateProjectsArray. They have the same structure and operate the same way. Only reason I used a different one is because if I had added today and upcoming project objects to the projectsArray, then the todos get displayed twice because it matches two ifs inside displayProjects.

      8.4. Make sure to retrieve the pre-existing data from the localStorage and display that upon the initial page load/reload. How? You can either use window.load or you could use DOMContentLoaded event.

          8.4.1 The problem with the displayProject function is that it takes in a dataProjectName argument and uses it to match the projectName inside projectsArray and display just that one array. But we want to display everything everywhere all at once.

          8.4.2. How do I accomplish that? I have to just to iterate through the lSProjectsArray and create a new project object for each of the items that exist in lSProjectsArray and add the todoList of each of the items in lSProjectsArray to the todoList inside the newly created project object.

          8.4.3. Also, just make the newProjectsContainer display the projects retrieved from the localStorage on DOMContentLoaded event.

      8.5 Remember that everything that gets saved into localStorage is saved as a JSON string and when you retrieve that saved data, it’s going to be a JSON string. So, you’d have to use JSON.stringify() and JSON.parse() while sending and retrieving data respectively.

          8.5.1. The functions in localStorageModule.js will do the storing and retrieving properly, including the string conversions.

UI:

The logo can be clicked to view the home page of the web-app. It contains general details and functionalities. It says “Welcome to TaskFlow”, and “Use the dashboard to create/access tasks”.
