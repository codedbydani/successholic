const achievements = [
    {
        name: "Inter-University Competitions"
    },
    {
        name: "Regional Tennis Tournaments"
    },
    {
        name: "Promoting Student Participation"
    },
    {
        name: "Leadership and Sportsmanship Development"
    },
    {
        name: "Kisumu Opens Tournament Participation"
    }
];

const achievementList = document.getElementById("achievementList");

achievements.forEach(function (achievement) {

    const listItem = document.createElement("li");

    listItem.textContent = achievement.name;

    achievementList.appendChild(listItem);

});
const trainingInput = document.getElementById("trainingInput");
const addTraining = document.getElementById("addTraining");
const trainingList = document.getElementById("trainingList");

addTraining.addEventListener("click", function () {

    if (trainingInput.value.trim() === "") {
        return;
    }

    const listItem = document.createElement("li");

    listItem.textContent = trainingInput.value;

    const removeButton = document.createElement("button");

    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(removeButton);

    trainingList.appendChild(listItem);

    trainingInput.value = "";

});
const joinForm = document.getElementById("joinForm");
const formMessage = document.getElementById("formMessage");

joinForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {

        formMessage.textContent = "Please fill in all fields.";

        return;

    }

    formMessage.textContent = "Registration successful!";
});