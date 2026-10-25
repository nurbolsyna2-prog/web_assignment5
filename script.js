// ===== Task 1: profile object =====
const userProfile = {
    name: "Suizza Han",
    birthYear: 2006,
    isDeveloper: true,
    hobbies: ["reading", "drawing", "traveling"],
};

// ===== Find HTML elements =====
const profileOutput = document.getElementById("profile");
const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");
const itemList = document.getElementById("itemList");
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");

// ===== Task 2: show profile and arithmetic =====
function showProfile() {
    const currentYear = new Date().getFullYear();
    const age = currentYear - userProfile.birthYear;
    const hobbyCount = userProfile.hobbies.length;

    profileOutput.innerHTML = `
        Name: ${userProfile.name}<br>
        Birth Year: ${userProfile.birthYear}<br>
        Is Developer: ${userProfile.isDeveloper}<br>
        Hobbies: ${userProfile.hobbies.join(", ")}<br>
        Age: ${age}<br>
        Number of hobbies: ${hobbyCount}
    `;
    profileOutput.style.color = "darkblue";

    console.log(`Age: ${age}`);
    console.log(`Number of hobbies: ${hobbyCount}`);
}
showProfile();

// ===== Task 4: update profile on submit =====
profileForm.addEventListener("submit", function (event) {
    event.preventDefault();
    userProfile.name = usernameInput.value;
    userProfile.birthYear = Number(birthYearInput.value);
    showProfile();
});

// ===== Task 5: add item =====
addBtn.addEventListener("click", function () {
    const text = itemInput.value.trim();
    if (text === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = text;
    itemList.appendChild(li);
    itemInput.value = "";
});

// ===== Task 5: remove last item =====
removeBtn.addEventListener("click", function () {
    const lastItem = itemList.lastElementChild;
    if (lastItem) {
        itemList.removeChild(lastItem);
    }
});


