'use strict';

// проверка строка или нет
function lineCheck(text) {
    if(typeof text === 'string') {
        return text;
    } else {
        alert('Передана не строка!!!');
    }
}

// удаление пробелов 

let spaceRemoval = function(str) {
    return lineCheck(str).trim();    
}

// три точки
let threeDots = function(str){
   let string = spaceRemoval(str);  

   if (string.length > 30) {
      let text = string.substring(0, 30) + '...';
      return text;
   } else {
       return string;
   }
}

    console.log(threeDots(' You can initialize this repository with code from a Subversion, Mercurial, or TFS project '));

