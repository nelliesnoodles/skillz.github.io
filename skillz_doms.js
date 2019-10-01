// JavaScript source code
const skillz_catagories = [
    "mechanical",
    "home repair",
    "tailor/sewing",
    "knitting",
    "fine art",
    "woodworking",
    "home cleaning",
    "programming",
    "computer repair",
    "other repair",
    "other art", 

];


let nav_search = new Event('add_search');

function get_drop_down() {
    console.log('getting drop down...')
    
    let search = document.getElementById('search')
    console.log(search)
   
    search.style.display = 'flex';
     
}

function add_catagories() {

    let search = document.getElementById('search')
    console.log(search)

    let leng = skillz_catagories.length
    for (var i = 0; i < leng; i++) {
        console.log("for loop: adding catagory...")
        let catagory = document.createElement('li')
        var item = skillz_catagories[i];
        catagory.appendChild(document.createTextNode(item))
        search.appendChild(catagory)
    }
}


function nav_events() {
    let search = document.getElementById("nav_4");
    search.addEventListener('click', get_drop_down);
    console.log("nav event listener added...")
}
window.onload = function () {
    console.log("This page is fully loaded.")
   
    
    add_catagories()
    }
