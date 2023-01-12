//changes the html element 'jt'
function hello() {
    document.getElementById('jt').innerHTML = 'Hello';
}

//this function gets 'cars' and when a button
//is pressed execuits the resalt of the operation
//and display's it on the screen
function meth(drugs) {
    drugs = ['meth \n','coke \n','fentyl \n','weed \n']
    drugs.sort()
    document.getElementById('mo').innerHTML = drugs;
}

//makes a pop up massage that says welcome
function coke() {
    alert('Welcome')
}