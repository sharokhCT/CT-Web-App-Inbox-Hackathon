clevertap.notificationCallback = function(msg){
    //raise the notification viewed and clicked events in the callback
    clevertap.raiseNotificationViewed();
    console.log(JSON.stringify(msg));//your custom rendering implementation here
    var $button = jQuery("<button></button>");//element on whose click you want to raise the notification clicked event
    $button.click(function(){
       clevertap.raiseNotificationClicked();
    });
};
