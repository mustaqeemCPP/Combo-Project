
// Hamburger Menu type 1

document.querySelector('.hamburger-button').addEventListener('click', sideBar);

function sideBar() {
    document.querySelector('.nav-links-mb').style.display = 
    (document.querySelector('.nav-links-mb').style.display == 'none') ? 'flex' : 'none';
 };


//  Other ways to script the hamburger menu

// function openNav() {
//     document.getElementById("myNavbar").style.backgroundColor = "red";
//     // or you can use display block
//     document.getElementById("myHeropage").style.marginTop = "400px";
//     // or you can allow it to overlay on the hero section
// }

// function closeNav() {
//     document.getElementById("myNavbar").style.width = "0";
//     // or you can use display none
//     document.getElementById("myHeropage").style.marginBottom = "0";
// }

//  function Nav() {
//     if (display = "none") {
//         display = "flex"
//     }
//     else {
//         display = "none"
//     }
//  }

// function() {
//     document.querySelector('.nav-links-mb').style.display = 
//     (document.querySelector('.nav-links-mb').style.display == 'none') ? 'flex' : 'none';
//  }


