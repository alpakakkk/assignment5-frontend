const userProfile = {
  name: "Student",
  birthYear: 2005,
  isDeveloper: false,
  hobbies: ["Music", "Sport", "Reading"]
};

const profileForm = document.getElementById("profile-form");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birth-year");
const hobbyInput = document.getElementById("hobby-input");
const hobbiesList = document.getElementById("hobbies-list");
const formMessage = document.getElementById("form-message");
const listMessage = document.getElementById("list-message");
const removeButton = document.getElementById("remove-item");

function showMessage(element, text, isError = false) {
  element.textContent = text;
  element.classList.toggle("error", isError);
}

function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

function renderProfile() {
  document.getElementById("display-name").textContent = userProfile.name;
  document.getElementById("display-birth-year").textContent = userProfile.birthYear;
  document.getElementById("display-age").textContent = calculateAge(userProfile.birthYear);
  document.getElementById("display-hobby-count").textContent = userProfile.hobbies.length;
  document.getElementById("developer-status").textContent = userProfile.isDeveloper
    ? "Developer" : "Learning JavaScript";
  
  console.log("User profile:", userProfile);
  console.log("Approximate age:", calculateAge(userProfile.birthYear));
  console.log("Total hobbies:", userProfile.hobbies.length);
}

function renderHobbies() {
  hobbiesList.replaceChildren();

  userProfile.hobbies.forEach((hobby) => {
    const item = document.createElement("li");
    item.textContent = hobby;
    hobbiesList.appendChild(item);
  });

  removeButton.disabled = userProfile.hobbies.length === 0;
  renderProfile();
}

profileForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newName = usernameInput.value.trim();
  const year = Number(birthYearInput.value);
  const currentYear = new Date().getFullYear();

  if (!newName || !Number.isInteger(year) || year < 1900 || year > currentYear) {
    showMessage(formMessage, `Enter a username and a year from 1900 to ${currentYear}.`, true);
    return;
  }

  userProfile.name = newName;
  userProfile.birthYear = year;
  renderProfile();
  showMessage(formMessage, "Profile updated successfully!");
});

document.getElementById("add-item").addEventListener("click", function () {
  const newHobby = hobbyInput.value.trim();

  if (!newHobby) {
    showMessage(listMessage, "Please type a hobby before adding it.", true);
    return;
  }

  userProfile.hobbies.push(newHobby);
  renderHobbies();
  hobbyInput.value = "";
  hobbyInput.focus();
  showMessage(listMessage, `Added: ${newHobby}`);
});

removeButton.addEventListener("click", function () {
  if (userProfile.hobbies.length === 0) return;

  const removedHobby = userProfile.hobbies.pop();
  renderHobbies();
  showMessage(listMessage, `Removed: ${removedHobby}`);
});

birthYearInput.max = String(new Date().getFullYear());
renderHobbies();
