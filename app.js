// JavaScript Document

var appC = [];


document.addEventListener("DOMContentLoaded", function (ev) {
        //this runs when the page loads
        'use strict'
        if (localStorage.getItem("grocery-shah0150")) {
            appC = JSON.parse(localStorage.getItem("grocery-shah0150"));
            //convert from String to Array
        }
    
    showList();

    document.querySelector("#btnAdd").addEventListener("click", function (ev) {
        ev.preventDefault();
        var newItem = document.querySelector("#item").value;
        if(newItem!=""){
        appC.push(newItem);
        localStorage.setItem("grocery-shah0150", JSON.stringify(appC));
        document.getElementById("item").value = '';
        //convert from Array to String.
        showList();
        return false;
        }
    });


    //document.myForm.addEventListener("submit", function(ev){});
});

function removeItem(ev) {
    //this.firstChild.nodeValue
    //ev.currentTarget.firstChild - the textNode inside the paragraph
    //ev.currentTarget.firstChild.nodeValue - the text inside the textNode
    var txt = ev.currentTarget.firstChild.nodeValue;
    for (var i = 0; i < appC.length; i++) {
        if (appC[i] == txt) {
            //found the match
            appC.splice(i, 1);
        }
    }
    localStorage.setItem("DeletedItem", JSON.stringify(appC));
    showList();
}

function showList() {
    var output = document.querySelector(".output");
    output.innerHTML = " ";
    for (var i = 0; i < appC.length; i++) {
        var divy = document.createElement("div");
        var inputdiv = document.createElement("div");
        var pdiv = document.createElement("div");
        var input = document.createElement("input");
        var p = document.createElement("p");
        
   
        input.setAttribute("type", "checkbox");
        inputdiv.setAttribute("class", "inputDiv");
        pdiv.setAttribute("class", "pDiv");
        divy.setAttribute("class", "divy");
       
        p.innerHTML = appC[i];

        inputdiv.appendChild(input);
        pdiv.appendChild(p);
        divy.appendChild(inputdiv);
        divy.appendChild(pdiv);
        
        output.appendChild(divy);
        p.addEventListener("click", removeItem);
    }

}