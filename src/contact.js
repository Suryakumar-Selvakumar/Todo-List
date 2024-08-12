import contactOneImg from "./manager.jpg";
import contactTwoImg from "./head-chef.jpg";
import contactThreeImg from "./sous-chef.jpg";
import contactFourImg from "./ws.jpg";

export function contact() {
  const div = document.createElement("div");

  const header = document.createElement("h1");
  header.textContent = "CONTACT US";

  //CONTACT ONE
  const contactOneDiv = document.createElement("div");
  const contactOne = document.createElement("div");
  const myContactOneImg = new Image();
  myContactOneImg.src = contactOneImg;
  myContactOneImg.classList.add("contact-one-img");
  const contactOneName = document.createElement("p");
  contactOneName.textContent = "Giovanni Rossi";
  const contactOnePosition = document.createElement("p");
  contactOnePosition.textContent = "Manager";
  const contactOnePhone = document.createElement("p");
  contactOnePhone.textContent = "(123) 456-7890";
  const contactOneEmail = document.createElement("p");
  contactOneEmail.textContent = "giovanni.rossi@fake.com";
  contactOne.append(
    contactOneName,
    contactOnePosition,
    contactOnePhone,
    contactOneEmail
  );
  contactOneDiv.append(myContactOneImg, contactOne);

  // CONTACT TWO
  const contactTwoDiv = document.createElement("div");
  const contactTwo = document.createElement("div");
  const myContactTwoImg = new Image();
  myContactTwoImg.src = contactTwoImg;
  myContactTwoImg.classList.add("contact-two-img");
  const contactTwoName = document.createElement("p");
  contactTwoName.textContent = "Maria Bianchi";
  const contactTwoPosition = document.createElement("p");
  contactTwoPosition.textContent = "Head Chef";
  const contactTwoPhone = document.createElement("p");
  contactTwoPhone.textContent = "(123) 456-7891";
  const contactTwoEmail = document.createElement("p");
  contactTwoEmail.textContent = "maria.bianchi@fake.com";
  contactTwo.append(
    contactTwoName,
    contactTwoPosition,
    contactTwoPhone,
    contactTwoEmail
  );
  contactTwoDiv.append(myContactTwoImg, contactTwo);

  // CONTACT THREE
  const contactThreeDiv = document.createElement("div");
  const contactThree = document.createElement("div");
  const myContactThreeImg = new Image();
  myContactThreeImg.src = contactThreeImg;
  myContactThreeImg.classList.add("contact-three-img");
  const contactThreeName = document.createElement("p");
  contactThreeName.textContent = "Luca Verdi";
  const contactThreePosition = document.createElement("p");
  contactThreePosition.textContent = "Sous Chef";
  const contactThreePhone = document.createElement("p");
  contactThreePhone.textContent = "(123) 456-7892";
  const contactThreeEmail = document.createElement("p");
  contactThreeEmail.textContent = "luca.verdi@fake.com";
  contactThree.append(
    contactThreeName,
    contactThreePosition,
    contactThreePhone,
    contactThreeEmail
  );
  contactThreeDiv.append(myContactThreeImg, contactThree);

  // CONTACT FOUR
  const contactFourDiv = document.createElement("div");
  const contactFour = document.createElement("div");
  const myContactFourImg = new Image();
  myContactFourImg.src = contactFourImg;
  myContactFourImg.classList.add("contact-four-img");
  const contactFourName = document.createElement("p");
  contactFourName.textContent = "Isabella Neri";
  const contactFourPosition = document.createElement("p");
  contactFourPosition.textContent = "Waitstaff Supervisor";
  const contactFourPhone = document.createElement("p");
  contactFourPhone.textContent = "(123) 456-7893";
  const contactFourEmail = document.createElement("p");
  contactFourEmail.textContent = "isabella.neri@fake.com";
  contactFour.append(
    contactFourName,
    contactFourPosition,
    contactFourPhone,
    contactFourEmail
  );
  contactFourDiv.append(myContactFourImg, contactFour);

  div.classList.add("contacts-div");
  div.append(contactOneDiv, contactTwoDiv, contactThreeDiv, contactFourDiv);

  const contactsOuterContainer = document.createElement("div");
  contactsOuterContainer.classList.add("contacts-outer-container");
  contactsOuterContainer.append(header, div);

  const contactsContainer = document.createElement("div");
  contactsContainer.classList.add("contacts-container");
  contactsContainer.append(contactsOuterContainer);

  return contactsContainer;
}
