function result(){
    let count = 0;
    let output = "";

    function countcard(card){
        switch(card){
            case 0:
                break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
                count++;
                break;
            case 7:
            case 8:
            case 9:
                count += 0;
                break;
            case 10:
            case 1:
            case 11:
            case 12:
            case 13:
                count--;
                break;
        }
        return (card > 0)? output = count + " Bet":
        output = count + " Hold";

    }
    let setCard1 = parseInt(document.getElementById("setcard1").value);
    let setCard2 = parseInt(document.getElementById("setcard2").value);
    let setCard3 = parseInt(document.getElementById("setcard3").value);
    let setCard4 = parseInt(document.getElementById("setcard4").value);
    let setCard5 = parseInt(document.getElementById("setcard5").value);
    countcard(setCard1); countcard(setCard2); countcard(setCard3); countcard(setCard4); countcard(setCard5);
    document.getElementById("result").innerHTML = output;
}


