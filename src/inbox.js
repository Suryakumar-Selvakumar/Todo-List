const mainContent = document.querySelector(".main-content");
const inboxDiv = document.createElement("div");
const inboxHeader = document.createElement("h1");
inboxHeader.textContent = "Inbox";

function displayInbox(projectsArray) {
    projectsArray.forEach(element => {
        if(element.projectName === "inbox"){
            mainContent.innerHTML = "";
            
        }
    });
}