var appID = ""; 
// token for anonymous profile
var token =
'';
// -----
  Talla.config = Talla.init(
    appID,
    Talla.OptionJWTCredentials(token), 
    Talla.OptionBotName("Brightcove Campaign Doc Search"),
    Talla.OptionAnonymous(true),
    Talla.OptionThemeColor('rgb(193, 66, 217)'),
    Talla.OptionDisplayName('Search Brightcove Campaign Docs'),
    Talla.OptionKnowledgeGroups(['']),
    Talla.OptionWideBeacon(true),
    Talla.OptionBeaconCTA("Search Brightcove Campaign Docs"),
    Talla.OptionOpenIcon('https://learning-services-media.brightcove.com/doc-assets/site-assets/images/site/search.png'),
    Talla.OptionBotIcon('https://learning-services-media.brightcove.com/doc-assets/site-assets/images/site/search.png'),
    Talla.OptionAutodetectSession
  );
// configure to load up as custom placement
Talla.chat = Talla.config.configure(Talla.OptionLoadChat);
// function to load up the chat
 function displayChat() {
   Talla.chat.managedDisplay(Talla.OptionDetectParent(() => { return document.querySelector('#talla_chat')} ));
 }