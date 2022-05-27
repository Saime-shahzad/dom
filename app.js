

/* _____________________________________________________________________
//                            CHAPTER 58 -------67 (DOM)
// ________________________________________________________________________*/


// _______________________QUESTION NO 01 ()_________//


// ________Q 01 (i)_________//


var x = document.getElementById("main-content")

// ________Q 01 (ii)_________//

var y = x.childNodes

console.log(y)

// ________Q 01 (iii)_________//

var z = x.childNodes[1, 3, 5, 7, 9]

document.write(z)

// ________Q 01 (iv)_________//


function forFirst() {
    document.getElementById("first-name").value = "Alex";
}

// ________Q 01 (v)_________//


function forLast() {
    document.getElementById("last-name").value = "Bank";
}

function forEmail() {
    document.getElementById("email").value = "Bankalexbank@example.com";
}



// _______________________QUESTION NO 02 ()________________//


// ________Q 02 (i)_________//

var x = document.getElementById("form-content")

document.write("Node type of element :")
document.write(x.nodeType)


// ________Q 02 (ii)_________//


var x = document.getElementById("last-name")

console.log(x.nodeType)

console.log(x.childNodes)

// ________Q 02 (iii)_________//

function myFunction() {
    var textnode = document.createTextNode("s");
    var item = document.getElementById("lastName").childNodes[0];
    item.replaceChild(textnode, item.childNodes[0]);
}

// ________Q 02 (iv)_________//


var x = document.getElementById("main-content")

console.log(x.firstChild)
console.log(x.lastChild)

// ________Q 02 (v)_________//

var x = document.getElementById("lastName")

console.log(x.nextSibling)
console.log(x.previousSibling)

// ________Q 02 (vi)_________//


var x = document.getElementById("email")

console.log(x.parentNode)
console.log(x.nodeType)
console.log(x.nodeName)