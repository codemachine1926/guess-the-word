player1_name = localStorage.getItem("Name1");
player2_name = localStorage.getItem("Name2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = player1_name + "'s turn to question";
document.getElementById("player_answer").innerHTML = player2_name + "'s turn to answer";

function send() {

    store_word = document.getElementById("word").value;
    lc_word = store_word.toLowerCase();
    charat1 = lc_word.charAt(1);

    length_word = Math.floor(lc_word.length / 2);
    charat2 = lc_word.charAt(length_word);
    nope = lc_word.length - 1;
    charat3 = lc_word.charAt(nope);

    remove1 = lc_word.replace(charat1, "_");
    remove2 = remove1.replace(charat2, "_");
    remove3 = remove2.replace(charat3, "_");
    console.log(remove3);

    question = "<h4 id='word_display'>Question : " + remove3 + "</h4>";
    input_box = "<br><br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    all_div_html = question + input_box + check_button;
    document.getElementById("output").innerHTML = all_div_html;
    document.getElementById("word").value = "";
}

answer_turn = "player2";
question_turn = "player1";

function check() {

    store_answer = document.getElementById("input_check_box").value;
    lower_word = store_answer.toLowerCase();

    if (lower_word == lc_word) {

        if (answer_turn == "player2") {

            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

        else {

            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }

    if (question_turn == "player1") {

        question_turn = "player2";
        document.getElementById("player_question").innerHTML = player2_name + "'s turn to question";
    }
    else {

        question_turn = "player1";
        document.getElementById("player_question").innerHTML = player1_name + "'s turn to question";
    }

    if (answer_turn == "player1") {

        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = player2_name + "'s turn to answer";
    }
    else {

        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = player1_name + "'s turn to answer";
    }

    document.getElementById("output").innerHTML = "";
}
