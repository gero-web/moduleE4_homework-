function Task2(name, obj){
    return name in obj;
}

obj = {
    't': 'dsds',
}

let result = Task2('t', obj);
console.log(result);