let loveScore = Math.random();
loveScore = loveScore * 10;
loveScore = Math.floor(loveScore) + 1;


$(".btn-pink").click(function() {
    let fName = document.getElementsByTagName("input")[0].value;
    let sName = document.getElementsByTagName("input")[1].value;
    if (loveScore > 7) {
        alert("Wow! A match of " + loveScore + " out of 10\n" + fName + " and " + sName + " really belong together!")
    } else {
        alert(fName + " and " + sName + " have a love score of " + loveScore + " out of 10");
    }
    console.log(loveScore);
})