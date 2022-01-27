var array = ['Yakov','John','Jack','Ronin','Vicky','jerry','Bratt','jeremy'];

function names () {
    for(var element of array){
        if(element.charAt(0) ==='J' || element.charAt(0) === "j") {
            console.log('Goodbye ' + element);
        } else {
            console.log('Hello ' + element);
        }
    }
}
names();