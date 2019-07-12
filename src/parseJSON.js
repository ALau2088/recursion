// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json){
  return data(json)

  function data(json){
    console.log(json)

    // Unparseable (e.g., '["foo", "bar"')
    if (json.startsWith('[') && !json.endsWith(']')){
      throw new SyntaxError('Unexpected end of JSON input')
    }

    // Unparseable (e.g., '["foo", "bar\\"]')
    if (json.includes('\\')){
      throw new SyntaxError('Unexpected end of JSON input')
    }

    // Object
    if (json.startsWith('{') && json.endsWith('}')){
      // Create new object
      var newObj = {};
      // if empty object
      if (json.length === 2) {
        //yes - return empty object
        return newObj
      }

      // Object with keys
      // Remove {}
      json = json.substring( 1, json.length-1)
      // if json contains one key (i.e, one colon and zero commas)
      var splitKeyValue = json.split(":")
      newObj[splitKeyValue[0].substring(1, splitKeyValue[0].length - 1)] = data(splitKeyValue[1]).substring(2, data(splitKeyValue[1]).length - 1)
      return newObj
      
      // if json contains multiple keys (i.e, one 
      
        // store keys & recurse values
    }

    // Array
    if (json.startsWith('[') && json.endsWith(']')){
      // Create new array
      var newArr = []
      // if empty array
      if (json.length === 2) {
        //yes - return empty array
        return newArr
      }

      // Array with elements
      // Remove [] from JSONstring
      json = json.substring( 1, json.length-1)
      json = json.split(", ")
      for (i = 0; i < json.length; i++){
        newArr.push(json[i].substring(1, json[i].length-1))
      }
      return newArr
    }

    // String
    if (typeof json === "string"){
      return json
    }
  }
};
