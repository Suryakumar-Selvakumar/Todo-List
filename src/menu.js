export function content() {
  const div = document.createElement("div");

  const header = document.createElement("h1");
  header.classList.add("header-menu");
  header.textContent = "MENU";

  //APPETIZERS
  const appetizersContainer = document.createElement("div");
  appetizersContainer.classList.add("appetizers-container");

  const headerAppetizers = document.createElement("h1");
  headerAppetizers.textContent = "Appetizers";

  const appetizers = document.createElement("div");

  const divAppetizerOne = document.createElement("div");
  const appetizerOne = document.createElement("p");
  appetizerOne.textContent = "Bruschetta with Tomato";
  const appetizerOneDesc = document.createElement("p");
  appetizerOneDesc.textContent =
    "Freshly toasted bread topped with a mix of ripe tomatoes, basil, and olive oil.";
  const appetizerOnePrice = document.createElement("p");
  appetizerOnePrice.textContent = "$8.50";
  divAppetizerOne.append(appetizerOne, appetizerOneDesc, appetizerOnePrice);

  const divAppetizerTwo = document.createElement("div");
  const appetizerTwo = document.createElement("p");
  appetizerTwo.textContent = "Caprese Salad";
  const appetizerTwoDesc = document.createElement("p");
  appetizerTwoDesc.textContent =
    "Juicy tomatoes, fresh mozzarella, and basil drizzled with balsamic reduction.";
  const appetizerTwoPrice = document.createElement("p");
  appetizerTwoPrice.textContent = "$9.00";
  divAppetizerTwo.append(appetizerTwo, appetizerTwoDesc, appetizerTwoPrice);

  const divAppetizerThree = document.createElement("div");
  const appetizerThree = document.createElement("p");
  appetizerThree.textContent = "Fried Calamari";
  const appetizerThreeDesc = document.createElement("p");
  appetizerThreeDesc.textContent =
    "Crispy fried squid rings served with a tangy marinara sauce.";
  const appetizerThreePrice = document.createElement("p");
  appetizerThreePrice.textContent = "$11.50";
  divAppetizerThree.append(
    appetizerThree,
    appetizerThreeDesc,
    appetizerThreePrice
  );

  appetizers.append(divAppetizerOne, divAppetizerTwo, divAppetizerThree);
  appetizersContainer.append(headerAppetizers, appetizers);

  //MAIN COURSE
  const mainCourseContainer = document.createElement("div");
  mainCourseContainer.classList.add("main-course-container");

  const headermainCourse = document.createElement("h1");
  headermainCourse.textContent = "Main Course";

  const mainCourse = document.createElement("div");

  const divMainCourseOne = document.createElement("div");
  const mainCourseOne = document.createElement("p");
  mainCourseOne.textContent = "Chicken Parmigiana";
  const mainCourseOneDesc = document.createElement("p");
  mainCourseOneDesc.textContent =
    "Breaded chicken breast topped with marinara and melted cheese.";
  const mainCourseOnePrice = document.createElement("p");
  mainCourseOnePrice.textContent = "$15.00";
  divMainCourseOne.append(mainCourseOne, mainCourseOneDesc, mainCourseOnePrice);

  const divMainCourseTwo = document.createElement("div");
  const mainCourseTwo = document.createElement("p");
  mainCourseTwo.textContent = "Veal Marsala";
  const mainCourseTwoDesc = document.createElement("p");
  mainCourseTwoDesc.textContent =
    "Tender veal cooked in a savory Marsala wine sauce.";
  const mainCourseTwoPrice = document.createElement("p");
  mainCourseTwoPrice.textContent = "$18.00";
  divMainCourseTwo.append(mainCourseTwo, mainCourseTwoDesc, mainCourseTwoPrice);

  const divMainCourseThree = document.createElement("div");
  const mainCourseThree = document.createElement("p");
  mainCourseThree.textContent = "Grilled Salmon";
  const mainCourseThreeDesc = document.createElement("p");
  mainCourseThreeDesc.textContent =
    "Fresh salmon fillet grilled to perfection with a hint of lemon.";
  const mainCourseThreePrice = document.createElement("p");
  mainCourseThreePrice.textContent = "$20.00";
  divMainCourseThree.append(
    mainCourseThree,
    mainCourseThreeDesc,
    mainCourseThreePrice
  );

  mainCourse.append(divMainCourseOne, divMainCourseTwo, divMainCourseThree);
  mainCourseContainer.append(headermainCourse, mainCourse);

  //SIDE DISHES
  const sideDishesContainer = document.createElement("div");
  sideDishesContainer.classList.add("side-dishes-container");

  const headerSideDishes = document.createElement("h1");
  headerSideDishes.textContent = "Side Dishes";

  const sideDishes = document.createElement("div");

  const divSideDishOne = document.createElement("div");
  const sideDishOne = document.createElement("p");
  sideDishOne.textContent = "Garlic Bread";
  const sideDishOneDesc = document.createElement("p");
  sideDishOneDesc.textContent = "Toasted bread with garlic, butter, and herbs.";
  const sideDishOnePrice = document.createElement("p");
  sideDishOnePrice.textContent = "$4.50";
  divSideDishOne.append(sideDishOne, sideDishOneDesc, sideDishOnePrice);

  const divSideDishTwo = document.createElement("div");
  const sideDishTwo = document.createElement("p");
  sideDishTwo.textContent = "Sautéed Spinach";
  const sideDishTwoDesc = document.createElement("p");
  sideDishTwoDesc.textContent =
    "Fresh spinach sautéed with garlic.";
  const sideDishTwoPrice = document.createElement("p");
  sideDishTwoPrice.textContent = "$5.00";
  divSideDishTwo.append(sideDishTwo, sideDishTwoDesc, sideDishTwoPrice);

  const divSideDishThree = document.createElement("div");
  const sideDishThree = document.createElement("p");
  sideDishThree.textContent = "Roasted Potatoes";
  const sideDishThreeDesc = document.createElement("p");
  sideDishThreeDesc.textContent = "Crispy roasted potatoes seasoned with herbs.";
  const sideDishThreePrice = document.createElement("p");
  sideDishThreePrice.textContent = "$5.50";
  divSideDishThree.append(sideDishThree, sideDishThreeDesc, sideDishThreePrice);

  sideDishes.append(divSideDishOne, divSideDishTwo, divSideDishThree);
  sideDishesContainer.append(headerSideDishes, sideDishes);

  //BEVERAGES
  const beveragesContainer = document.createElement("div");
  beveragesContainer.classList.add("beverages-container")

  const headerBeverages = document.createElement("h1");
  headerBeverages.textContent = "Beverages";

  const beverages = document.createElement("div");

  const divBeverageOne = document.createElement("div");
  const beverageOne = document.createElement("p");
  beverageOne.textContent = "Espresso";
  const beverageOneDesc = document.createElement("p");
  beverageOneDesc.textContent = "Rich and bold Italian coffee shot.";
  const beverageOnePrice = document.createElement("p");
  beverageOnePrice.textContent = "$3.00";
  divBeverageOne.append(beverageOne, beverageOneDesc, beverageOnePrice);

  const divBeverageTwo = document.createElement("div");
  const beverageTwo = document.createElement("p");
  beverageTwo.textContent = "Cappuccino";
  const beverageTwoDesc = document.createElement("p");
  beverageTwoDesc.textContent = "Espresso with steamed milk and foam.";
  const beverageTwoPrice = document.createElement("p");
  beverageTwoPrice.textContent = "$4.50";
  divBeverageTwo.append(beverageTwo, beverageTwoDesc, beverageTwoPrice);

  const divBeverageThree = document.createElement("div");
  const beverageThree = document.createElement("p");
  beverageThree.textContent = "Limoncello";
  const beverageThreeDesc = document.createElement("p");
  beverageThreeDesc.textContent = "Sweet and tangy Italian lemon liqueur.";
  const beverageThreePrice = document.createElement("p");
  beverageThreePrice.textContent = "$6.00";
  divBeverageThree.append(beverageThree, beverageThreeDesc, beverageThreePrice);

  beverages.append(divBeverageOne, divBeverageTwo, divBeverageThree);
  beveragesContainer.append(headerBeverages, beverages);

  div.classList.add("menu-div");
  div.append(
    header,
    appetizersContainer,
    mainCourseContainer,
    sideDishesContainer,
    beveragesContainer
  );

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");
  menuContainer.appendChild(div);

  return menuContainer;
}
