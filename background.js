function trace()
{
	console.log.apply(console,arguments);
}
function onBeforeRequest() 
{
	//trace("onBefore")
}

function onRequestCompletedOrErrored(dataO) 
{
	
	//trace("onComplete")
	noticeChange(dataO);
}
function init(){
	//trace("init")
	const filter = { urls: [ "<all_urls>" ] };
	chrome.webRequest.onBeforeRequest.addListener(onBeforeRequest, filter);
	chrome.webRequest.onCompleted.addListener(onRequestCompletedOrErrored, filter);
	chrome.webRequest.onErrorOccurred.addListener(onRequestCompletedOrErrored, filter);
}
var textTypes=
{
	"script":true,
	"xmlhttprequest":true,
	"sub_frame":true
}
function noticeChange(dataO)
{
  if(textTypes[dataO.type])
  {
  	chrome.tabs.sendRequest(dataO.tabId, {type:"change"}, function(response) {
    });
  }else
  	{
  		trace(dataO.type)
  	}
  
}

init();

