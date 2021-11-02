
function assignObject (obj1,obj2) {
    let emptyObj = {}
    Object.assign(emptyObj,obj1,obj2);
    return emptyObj;
}

obj1 = { x: 10 } ;
obj2 = { x: 20, y: 30 } ;

console.log(assignObject(obj1,obj2))