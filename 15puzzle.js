var word1 = document.getElementById("word1");
var op = document.getElementById("op");
var puzzle = {};
btnVal = [];
puzzle.create = function () {
    for (var i = 0; i < 16; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = i + 1;
        word1.appendChild(btn);
        btnVal.push(btn);
        btn.className = "btns"
    };
    btnVal[15].id = "blank";
    var blank = document.getElementById("blank");
    blank.innerHTML = "blank";
};

puzzle.move = function () {
    for (var i = 0; i < btnVal.length; i++) {
        (function (index) {
            btnVal[i].onclick = function () {
                var arr = [];
                for (var i = 0; i < btnVal.length; i++) {
                    arr.push(btnVal[i].innerHTML);
                };
                if ((index + 1) === arr.indexOf('blank')) {
                    var temp = { innerHTML: btnVal[index].innerHTML, id: btnVal[index].id }
                    btnVal[index].innerHTML = btnVal[arr.indexOf('blank')].innerHTML;
                    btnVal[index].id = btnVal[arr.indexOf('blank')].id;
                    btnVal[arr.indexOf('blank')].innerHTML = temp.innerHTML;
                    btnVal[arr.indexOf('blank')].id = temp.id;
                    // puzzle.check();
                } else if ((index - 1) === arr.indexOf('blank')) {
                    var temp = { innerHTML: btnVal[index].innerHTML, id: btnVal[index].id }
                    btnVal[index].innerHTML = btnVal[arr.indexOf('blank')].innerHTML;
                    btnVal[index].id = btnVal[arr.indexOf('blank')].id;
                    btnVal[arr.indexOf('blank')].innerHTML = temp.innerHTML;
                    btnVal[arr.indexOf('blank')].id = temp.id;
                    // puzzle.check();
                } else if ((index + 4) === arr.indexOf('blank')) {
                    var temp = { innerHTML: btnVal[index].innerHTML, id: btnVal[index].id }
                    btnVal[index].innerHTML = btnVal[arr.indexOf('blank')].innerHTML;
                    btnVal[index].id = btnVal[arr.indexOf('blank')].id;
                    btnVal[arr.indexOf('blank')].innerHTML = temp.innerHTML;
                    btnVal[arr.indexOf('blank')].id = temp.id;
                    // puzzle.check();
                } else if ((index - 4) === arr.indexOf('blank')) {
                    var temp = { innerHTML: btnVal[index].innerHTML, id: btnVal[index].id }
                    btnVal[index].innerHTML = btnVal[arr.indexOf('blank')].innerHTML;
                    btnVal[index].id = btnVal[arr.indexOf('blank')].id;
                    btnVal[arr.indexOf('blank')].innerHTML = temp.innerHTML;
                    btnVal[arr.indexOf('blank')].id = temp.id;
                    // puzzle.check();
                };
            };
        })(i);
    };
};

puzzle.solve = function () {
    while (word1.hasChildNodes()) {
        word1.removeChild(word1.firstChild)
    };
    var puzzle = {};
    btnVal = [];
    this.create();
    this.move();
}

puzzle.shuffle = function (a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1].innerHTML;
        a[i - 1].innerHTML = a[j].innerHTML;
        a[j].innerHTML = x;
    }
    for (var k = 0; k < btnVal.length; k++) {
        if (btnVal[k].innerHTML === "blank") {
            var a = document.getElementById('blank');
            var b = { id: a.id };
            a.id = "";
            btnVal[k].id = b.id;
        }
    }
};
var answer = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "blank"];
puzzle.check = function () {
    var arr2 = [];
    for (var i = 0; i < btnVal.length; i++) {
        arr2.push(btnVal[i].innerHTML);
    };
    if (arr2.toString() === answer.toString()) {
        tt.push(performance.now());
        alert("CLEAR! YOU TAKE " + spent())
    }
}

puzzle.init = function () {
    puzzle.create();
    puzzle.move();
    // puzzle.shuffle(btnVal);
};

puzzle.init();

///추가사항 1.크기조정 2.솔브지우기 3.스타트/피니쉬+시간체크 4.리팩토링

var tt = [];
var spent = function(){
    var st = tt[1] - tt[0];
    var st2 = Math.floor(st / 1000);
    var min = Math.floor(st2 / 60);
    var sec = st2 % 60;
    return min + "MIN " + sec +"SEC!";

}
var click = 0;
var onceTwice = function () {
    if (click === 0) {
        puzzle.shuffle(btnVal);
        op.innerHTML = "FINISH"
        tt.push(performance.now());
        click++;
    } else if (click === 1) {
        puzzle.check();
    }
}