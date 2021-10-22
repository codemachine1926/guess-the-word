function addUser() {

    Name1 = document.getElementById("player1_name_input").value;
    Name2 = document.getElementById("player2_name_input").value;
    localStorage.setItem("Name1", Name1);
    localStorage.setItem("Name2", Name2);
    window.location = "game_page.html";
}