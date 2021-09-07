function HashMap() {
  this.map = {};
  this.listsize = 0;
}
HashMap.prototype._string = function(key) {
  if(typeof key.toString !== 'undefined') {
    return key.toString();
  }
  else {
    throw new Error('No valid key supplied. Only supply Objects witha  toString() method as keys');
  }
}
HashMap.prototype.put = function(key,value) {
  key = this._string(key);
  if(typeof this.map[key] === 'undefined') {
    this.listsize++;
  }
  this.map[key] = value;
}
HashMap.prototype.get = function(key) {
  key = this._string(key);
  return this.map[key];
  }
HashMap.prototype.containsKey = function(key) {
  key = this._string(key);
  return !(this.map[key] === 'undefined');
  }
HashMap.prototype.putAll = function(hashmap) {
  if(hashmap instanceof HashMap) {
    var othermap = hashmap.map;
    for(var key in othermap) {
      if(othermap.hasOwnProperty(key)) {
        if(typeof this.map[key] === 'undefined') {
          this.listsize++;
        }
        this.map[key] = othermap[key];
      }
    }
  }
  else {
    throw new Error('No HashMap instance supplied');
  }
}
HashMap.prototype.remove = function(key) {
  key = this._string(key);
  var ret = null;
  if(typeof this.map[key] !== 'undefined') {
    ret = this.map[key];
    delete this.map[key];
    this.listsize--;
  }
  return ret;
}
HashMap.prototype.clear = function() {
  this.map = {};
  this.listsize = 0;
  }
HashMap.prototype.containsValue = function(value) {
  for(var key in this.map) {
    if(this.map.hasOwnProperty(key)) {
       if(this.map[key] === value) {
        return true;
       }
    }
  }
  return false;
}
HashMap.prototype.clone = function() {
  var ret = new HashMap();
  ret.map = this.map;
  ret.listsize = this.listsize;
  return ret;
  }
HashMap.prototype.entrySet = function() {
  return this.map;
  }
HashMap.prototype.keySet = function() {
  var ret = [];
  for(var key in this.map) {
    if(this.map.hasOwnProperty(key)) {
       ret.push(key);
       }
    }
  return ret;
  }
HashMap.prototype.values = function() {
  var ret = [];
  for(var key in this.map) {
    if(this.map.hasOwnProperty(key)) {
       ret.push(this.map[key]);
       }
    }
  return ret;
  }
HashMap.prototype.size = function(activeCheck) {
  //Active check is expensive.
  if(typeof activeCheck !== 'undefined' && activeCheck) {
    var count = 0;
    for(var key in this.map) {
       if(this.map.hasOwnProperty(key)) {
          count++;
       }
     }
     return count;
  }
  return this.listsize;
  }
HashMap.prototype.save = function(){
    return JSON.stringify(this.map);
}
HashMap.prototype.load = function(json) {
    if(typeof json !== 'string') {
        throw new Error("No valid input supplied. Only supply JSON Strings");
    }
    this.map = JSON.parse(json);
    this.listsize = this.size(true);
}
          
 var map = new HashMap();

 console.log(
 map.put('hello', true),
 map.get('hello'),
 map.put('hello',10),
 map.put('world',20),
 map.values(),
 map.keySet(),
 map.entrySet(),
 map.containsValue('twoshoes'),
 map.size()
 );
var map2 = new HashMap();
map2.put('goody','twoshoes');
map2.putAll(map);
 console.log(
 map2.get('hello'),
 map2.values(),
 map2.keySet(),
 map2.entrySet(),
 map2.containsValue('twoshoes'),
 map2.size()
 );

var map3 = new HashMap();
map3.load(map2.save());

 console.log(
 map3.get('hello'),
 map3.values(),
 map3.keySet(),
 map3.entrySet(),
 map3.containsValue('twoshoes'),
 map3.size()
 );
