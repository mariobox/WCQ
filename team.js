function Team(name, pj, pg, pe, pp, pts) {
    this.name = name;
    this.pj = pj;
    this.pg = pg;
    this.pe = pe;
    this.pp = pp;
    this.pts = pts
}

Team.prototype.win = function () {
    this.pts += 3;
    this.pj += 1;
    this.pg += 1;

}

Team.prototype.lose = function () {
    this.pts += 0;
    this.pj += 1;
    this.pp += 1;

}

Team.prototype.tie = function () {
    this.pts += 1;
    this.pj += 1;
    this.pe += 1;

}

var i = 0;

var brazil = new Team('Brazil', 16, 11, 4, 1, 37)
var uruguay = new Team('Uruguay', 16, 8, 3, 5, 27)
var colombia = new Team('Colombia', 16, 7, 4, 5, 26)
var peru = new Team('Peru', 16, 7, 3, 6, 24)
var argentina = new Team('Argentina', 16, 6, 6, 4, 24)
var chile = new Team('Chile', 16, 7, 2, 7, 23)
var paraguay = new Team('Paraguay', 16, 6, 3, 7, 21)
var ecuador = new Team('Ecuador', 16, 6, 2, 8, 20)
var bolivia = new Team('Bolivia', 16, 4, 1, 11, 13)
var venezuela = new Team('Venezuela', 16, 1, 5, 10, 8)

var teams = [argentina, bolivia, brazil, chile, colombia, ecuador, paraguay, peru, uruguay, venezuela]

var positions = "";

function sortTeams() {
    teams.sort(function (a, b) {
        return b.pts - a.pts;
    });  // sort teams from more to less points (more points first)
}


function printTable() {
    positions = "<table><tr><th>#</th><th>Country</th><th>PJ</th><th>PG</th><th>PE</th><th>PP</th><th>Pts.</th></tr>";
    for (var i = 0; i < teams.length; i++) {
        positions = positions + '<tr><th>' + (i + 1) + '.' + '</th><th>' + teams[i].name + '</th><th>' + teams[i].pj + '</th><th>' + teams[i].pg + '</th><th>' + teams[i].pe + '</th><th>' + teams[i].pp + '</th><th>' + teams[i].pts + '</th></tr>';
    }
    positions = positions + '</table>';
    document.getElementById('table').innerHTML = positions;
    positions = "";
}

sortTeams();
printTable();

document.body.addEventListener('click', () => {
    document.getElementById('table').innerHTML = "";
    whoWins = event.target.id;
    whatGame = event.target.parentElement.id;
    if (whoWins != "" || whoWins != "tie") {
    event.target.style.border = "2px solid green";
    }

    if (whoWins == "") { 
        console.log('click on an image');
        event.target.style.border = "none";
    }
    else {

    if (whoWins == document.getElementById(whatGame).firstChild.id) {
        window[whoWins].win();
        window[document.getElementById(whatGame).lastChild.id].lose();
    } // close if

    else {
        if (whoWins == document.getElementById(whatGame).lastChild.id) {
            window[whoWins].win();
            window[document.getElementById(whatGame).firstChild.id].lose();
        }  // close if inside else

        else {
            if (whoWins == "tie") {
		window[document.getElementById(whatGame).firstChild.id].tie();
                window[document.getElementById(whatGame).lastChild.id].tie();
            }  // close if inside second else                

        } // close third else


    }  // close second else

}  // close first else

    sortTeams();
    printTable();

});  // close event listener


