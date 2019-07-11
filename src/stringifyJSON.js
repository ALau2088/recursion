// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  return json(obj)
   
  function json(object){
      // if object
      if (Object.prototype.toString.call(object) === '[object Object]'){
        // if has key
        if (Object.keys(object).length > 0){
          console.log(Object.keys(object))

          var newObj = {}
          var objString = "{"
          // yes-recurse key
          for (var key in object){
            console.log(key)
            if (key === 'functions' || key === 'undefined') {
              newObj['"' + key + '"'] = '{}'
              objString = '{}'
            } else {
              newObj['"' + key + '"'] = object[key]
              objString = objString + '"' + key + '"' + ':' + json(newObj['"' + key + '"']) + ','
            }
            
          }
            //objString = objString + newObj['"' + key + '"'] + '"'
          // for (var key in newObj){
          //   objString = objString + key + ':"' + newObj[key] + '",'
          //   console.log(objString)
          // }
          console.log(objString)
          objString = objString.substring(0, objString.length -1)
          objString = objString.replace(/:"true"/g, ':true')
          objString = objString.replace(/:"false"/g, ':false')
          objString = objString.replace(/:"null"/g, ':null')
          console.log(objString)
          return objString + '}'
        } else {
          // no-empty object
          return '{}'
        }
      }

      // if array
      if (Array.isArray(object)){
        // if array check has elements
        if (object.length > 0){
          var array = []
          // yes-recurse element
          for (var j = 0; j < object.length; j++){
            array.push(json(object[j]))
          }
          return '[' + array + ']'
        } else {
          // no-return empty array
          return '[]'
        }
      }

      // Base case- obj is anything else
      // if stringifiable
        //String
        if (Object.prototype.toString.call(object) === '[object String]'){
          return '"' + object + '"'
        }

        //Number
        if (Object.prototype.toString.call(object) === '[object Number]'){
          console.log(object.toString())
          return object.toString();
        }

        //Null
        if (Object.prototype.toString.call(object) === '[object Null]'){
          return "null";
        }

        //Boolean
        if (Object.prototype.toString.call(object) === '[object Boolean]'){
          return object.toString();
        }
  }
};
