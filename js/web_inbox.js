console.log("web_inbox.js loaded");

// CleverTap
var clevertap = {event:[], profile:[], account:[], onUserLogin:[], notifications:[], privacy:[]};
// replace with the CLEVERTAP_ACCOUNT_ID with the actual ACCOUNT ID value from your Dashboard -> Settings page
clevertap.account.push({"id": "TEST-846-KWR-455Z"});
clevertap.privacy.push({optOut: false}); //set the flag to true, if the user of the device opts out of sharing their data
clevertap.privacy.push({useIP: true}); //set the flag to true, if the user agrees to share their IP data
(function () {
     var wzrk = document.createElement('script');
     wzrk.type = 'text/javascript';
     wzrk.async = true;
     wzrk.src = 'https://sharokhct.github.io/CT-Web-Integration/a.js';
     var s = document.getElementsByTagName('script')[0];
     s.parentNode.insertBefore(wzrk, s);
})();

// App Inbox
function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "#f6f7f9";
}

console.log("web_inbox.js loaded");
clevertap.notificationCallback = function(msg){
    //raise the notification viewed and clicked events in the callback
    clevertap.raiseNotificationViewed();
    console.log(JSON.stringify(msg));
     var $button = jQuery("<button></button>");//element on whose click you want to raise the notification clicked event
      $button.click(function(){
         clevertap.raiseNotificationClicked();
      });//your custom rendering 
    var ul = document.getElementById("all");
      var src=msg.kv.imageURL;
      var title=msg.kv.title;
      var message=msg.kv.msg;
      var button_name=msg.kv.buttonText;
      var deeplink=msg.kv.deeplink;
      var wrapper= document.createElement('div');
      var impDivString='<div class="card"><img class="card-img-top" src="'+src+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+title+'</h5><p class="card-text">'+message+'</p><a href="'+deeplink+'" class="btn btn-primary">'+button_name+'</a></div>';
       wrapper.innerHTML= impDivString;
    var div=wrapper.firstChild;
   ul.appendChild(div);

   if (msg.kv.category=='promotion'){
    var promo=document.getElementById("promotions");
    var wrapper= document.createElement('div');
      var impDivString='<div class="card"><img class="card-img-top" src="'+src+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+title+'</h5><p class="card-text">'+message+'</p><a href="'+deeplink+'" class="btn btn-primary">'+button_name+'</a></div>';
       wrapper.innerHTML= impDivString;
    var div=wrapper.firstChild;
    promo.appendChild(div);
   }
   else if (msg.kv.category=='offers'){
    var offers=document.getElementById("offers");
    var wrapper= document.createElement('div');
      var impDivString='<div class="card"><img class="card-img-top" src="'+src+'" alt="Card image cap"><div class="card-body"><h5 class="card-title">'+title+'</h5><p class="card-text">'+message+'</p><a href="'+deeplink+'" class="btn btn-primary">'+button_name+'</a></div>';
       wrapper.innerHTML= impDivString;
    var div=wrapper.firstChild;
    offers.appendChild(div);
   }
   
    // Parse the JSON stored in allEntriesP
    var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
    if(existingEntries == null) existingEntries = [];
    var entryTitle = msg.kv.category;
    var entry= JSON.parse(localStorage.getItem("entry"));
    if(entry == null) entry = [];
    var dao_entry= {
        "ID": entryTitle,
        "UI": impDivString
    };
    entry.push(dao_entry);
    localStorage.setItem("entry", JSON.stringify(entry));
    // Save allEntries back to local storage
    existingEntries.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(existingEntries));
    //document.getElementById("go").addEventListener("click", function() {
    //addEntry();
    // List of all entries
   console.log(localStorage.getItem("allEntries"));
    // Last entry inserted
  //  console.log(localStorage.getItem("entry"));
// //}, false);
// var items = JSON.parse(localStorage.getItem("allEntries"));
// var uiparse = JSON.parse(localStorage.getItem("entry"));
    $button.click(function(){
       clevertap.raiseNotificationClicked();
    });
};

    window.onload = function() {
           var ul = document.getElementById("all");
   
      var items = JSON.parse(localStorage.getItem("allEntries"));
 var uiparse = JSON.parse(localStorage.getItem("entry"));
var wrapper= document.createElement('div');

 for (var i = 0; i < items.length; i++) {
  
    if (uiparse[i].ID=='promotion'){
        var promo=document.getElementById("promotions");
        var wrapper= document.createElement('div');
        wrapper.innerHTML= uiparse[i].UI;
    var div=wrapper.firstChild;
    promo.appendChild(div);
       }
       else if (uiparse[i].ID=='offers'){
        var offers=document.getElementById("offers");
        var wrapper= document.createElement('div');
        wrapper.innerHTML= uiparse[i].UI;
        var div=wrapper.firstChild;
        offers.appendChild(div);
       } 
       
        wrapper.innerHTML= uiparse[i].UI;
        var all=document.getElementById("all");
        var div=wrapper.firstChild;
       all.appendChild(div);
  
  }
};