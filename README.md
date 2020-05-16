# App Inbox for Websites:

This will help you to create App inbox messages on Websites.

Table contents:
1. [Working Demo link](https://github.com/sharokhCT/CT-Web-App-Inbox-Hackathon#1-working-demo-link-)
2. [Installation](https://github.com/sharokhCT/CT-Web-App-Inbox-Hackathon#2-integration-)
3. [Dashboard Usage](https://github.com/sharokhCT/CT-Web-App-Inbox-Hackathon#3-dashboard-usage-)
4. [Custom Keys](https://github.com/sharokhCT/CT-Web-App-Inbox-Hackathon#4-custom-keys)

# 1. Working Demo link :
https://sharokhct.github.io/CT-Web-App-Inbox-Hackathon

# 2. Integration :

The web inbox will be delivered as soon as a user performs a certain trigger event. In order to render it inside the custom web inbox, you will have to configure a custom rendering listener on your website.
Using this custom callback, you will be able to parse the payload and control the look, feel and location of the web inbox which you create on your CleverTap Dashboard.

You need to explicitly call clevertap.raiseNotificationViewed(); & clevertap.raiseNotificationClicked(); to ensure that notification views and clicks are tracked in your CleverTap Dashboard.


clevertap.notificationCallback = function(msg){
      //raise the notification viewed and clicked events in the callback
      clevertap.raiseNotificationViewed();
      console.log(JSON.stringify(msg));//your custom rendering implementation here
      var $button = jQuery("<button></button>");//element on whose click you want to raise the notification clicked event
      $button.click(function(){
         clevertap.raiseNotificationClicked();
      });
};


The msg will be in the format below. msgId contains the campaign id and the date stamp so you can programmatically decide whether to show the notification or not. kv contains the custom key value pairs.

{
"msgContent":{},
"msgId":"1589621908_20200516",
"kv":{
"title":"I'm the title",
"msg":"I'm the message",
"imageURL":"https://wallpapercave.com/wp/ppQthYS.jpg",
"buttonText":"Btn Click",
"deeplink":"https://youtube.com"
}
}





# 3. Dashboard Usage :

Create an Interstitial Web Pop up campaign on the CleverTap Dashboard.
Please ensure that you are selecting the option Invoke the Javascript function as shared in the example screenshot below.


Define the Custom keys and their value
Schedule the campaign









# 4. Custom Keys:


Keys

title
Title of the message
msg
Content or Message
imageURL
Image Link
buttonText
Button text
deeplink
Deeplink URL on click of button
category
Tab where you want to show the Inbox.
Tab values: all or promotion or offers



| Keys.         | Description.                          |
| ------------- | ------------------------------------- |
| title         | Title of the message                  |
| msg           | Content or Message                    |
| imageURL      | Image Link.                           |
| buttonText    | Button text.                          |
| deeplink      | Deeplink URL on click of button       |
| category      | Tab where you want to show the Inbox. |
|               | Tab values: all or promotion or offers|






