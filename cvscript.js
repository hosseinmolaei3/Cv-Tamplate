var menuicon=document.getElementById("icon-m");
      var menuicon2=document.getElementById("icon-m2");
      var toolmenu=document.getElementById("toolmenu");
      menuicon2.style.display="none";
      menuicon.addEventListener("click",function(){
        toolmenu.style.display="none";
        menuicon.style.display="none";
        menuicon2.style.display="block";
      });
      menuicon2.addEventListener("click",function(){
        toolmenu.style.display="flex";
        menuicon.style.display="block";
        menuicon2.style.display="none";
      });