
// var myFullpage = new fullpage('#fullpage', {
//     scrollingSpeed: 1000,
//     slidesNavigation: true,
//     scrollOverflow: true,
//     css3: true,
//     controlArrows: true,
// });

// function setMenuActive(anchor, e){
//     allAnchor.forEach((link) =>{
//       link.classList.remove('my-navbar-active')
//       if(link.classList.contains(anchor)) link.classList.add("my-navbar-active")
//     });
//     location.hash = "#" + anchor
//   }
  
//   window.addEventListener('hashchange', function(){
  
//     let anchor = location.hash.split("#")[1];
//     if(anchor){
//       if(anchor.toLocaleLowerCase().includes("first-quote") || anchor.toLocaleLowerCase().includes("skills-page"))
//       anchor = "skills-page"
//     else if(anchor.toLocaleLowerCase().includes("second-quote")|| anchor.toLocaleLowerCase().includes("project-page"))
//       anchor = "project-page"
  
  
//     allAnchor.forEach((link) =>{
//       link.classList.remove('my-navbar-active')
//       if(link.classList.contains(anchor)) link.classList.add("my-navbar-active")
//     });
  
//     }
    
//     // history.replaceState(null, '', location.href.split("#")[0]);
//   })
  
  
//   const allAnchor = document.querySelectorAll(".all-anchor");