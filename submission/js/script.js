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

function saveTrainingList() {

    const drills = [];

    document.querySelectorAll("#trainingList li").forEach(function (item) {

        drills.push(item.firstChild.textContent);

    });

    localStorage.setItem("trainingDrills", JSON.stringify(drills));

}

function createTrainingItem(drill) {

    const listItem = document.createElement("li");

    listItem.textContent = drill;

    const removeButton = document.createElement("button");

    removeButton.textContent = " Remove";

    removeButton.addEventListener("click", function () {

        listItem.remove();

        saveTrainingList();

    });

    listItem.appendChild(removeButton);

    trainingList.appendChild(listItem);

}

function loadTrainingList() {

    const drills = JSON.parse(localStorage.getItem("trainingDrills")) || [];

    drills.forEach(function (drill) {

        createTrainingItem(drill);

    });

}

addTraining.addEventListener("click", function () {

    const drill = trainingInput.value.trim();

    if (drill === "") {

        return;

    }

    createTrainingItem(drill);

    saveTrainingList();

    trainingInput.value = "";

});

loadTrainingList();


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
const bannerImage = document.getElementById("bannerImage");
const bannerCaption = document.getElementById("bannerCaption");

bannerImage.addEventListener("click", function () {

    bannerCaption.classList.toggle("hidden");

});