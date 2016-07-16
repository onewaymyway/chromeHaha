
console.log("powered by orzooo.com")

function trace()
{
	console.log.apply(console,arguments);
}
function checkNode(node)
{
	if(node && node.nodeType === 1){
		 if(!isTargetNode(node)) return false;
     if(checkNodeV(node)) return;
   }
   var i = 0, childNodes = node.childNodes,item;
   for(; i < childNodes.length ; i++){
     item = childNodes[i];
     if(item.nodeType === 1){
       //递归先序遍历子节点
       checkNode(item);
     }
   }
}
function checkNodeV(node)
{
	type=node.tagName;
	switch(type)
	{
		case "IMG":
		case "SCRIPT":

		   break;
		case "DIV":
		   if(isNestDiv(node))break;
		case "A":
		case "LINK":
		case "H1":
		case "H2":
		case "LI":
		case "SPAN":
		case "P":
		case "EM":
		case "B":
		case "TEXTAREA":
		case "I":
		//case "DIV":

		   return tryAdptNode(node);
		   break;  
		default:
		   //node.innerHtml+="haha"
		   //trace(type)
		   if(node.childNodes.length<1&&node.outerText)
		   {
		   	tryAdptNode(node)
		   }
	}
	return false;
}
function isNestDiv(node)
{
	var nodes=node.childNodes;
	len=nodes.length;
	for(i=0;i<len;i++)
	{
		if(nodes[i].tagName=="DIV") return true;
	}
	return false;
}
var tarS="的";
var desS="Orz!!";
var transDic=
{
	"的":"滴~",
	"我":"俺~",
	"你":"侬~"
}
function tryAdptNode(node)
{
	var isOK;
	isOk=false;
	for( key in transDic)
	{
		isOk=tReplace(key,transDic[key],node)||isOk;
	}
	return isOk;
}
function isTargetStr(tStr)
{
	return tStr.indexOf(tarS)>=0;
}
function isTargetNode(node)
{
	outS=node.innerHTML;
	//trace("outS:",outS);
	for( key in transDic)
	{
		if(isTargetStr(key)) return true;
	}
	return false;
}
function tReplace(oStr,nStr,node)
{
	outS=node.outerText;
	//trace(oStr,"outS:",outS);
	if(outS.indexOf(oStr)<0) return false;
	var reg=new RegExp(oStr,"g");
	node.innerHTML=node.innerHTML.replace(reg,nStr);
	return true;
}
function hahaMethod()
{
	checkNode(document)
}

hahaMethod()


chrome.extension.onRequest.addListener(onRequestFunction);

function onRequestFunction(request, sender, sendResponse) {
    if (request.type == "change")
    {
    	     
    	     pageChangeHandler()
    }
  }
preID=-1;
function pageChangeHandler()
{
	//trace("page change")
	window.clearTimeout(preID);
	preID=window.setTimeout(hahaMethod,1000);
}

