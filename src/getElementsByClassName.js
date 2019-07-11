// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var elements = []
  checkElementChildNodes(document, className)
  return elements

  function checkElementChildNodes(currentlvl, className){ 
    // Base case -when there are no childnodes
    if(currentlvl.childNodes.length === 0){
      return
    } else {
      for( var i = 0; i < currentlvl.childNodes.length; i++){
        if (currentlvl.childNodes[i].classList && currentlvl.childNodes[i].classList.contains(className)){
          elements.push(currentlvl.childNodes[i])
        }
        checkElementChildNodes(currentlvl.childNodes[i], className)
      }
    }
  }
};

