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