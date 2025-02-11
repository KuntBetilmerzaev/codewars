// Description:

// Write a function that adds a named property to an object. 
// It must be possible to set the property to a new value. 
// If the property already exists on the object, and error should be thrown.

// Solution: 

function addProperty(obj, prop, value) {
    if (!obj.hasOwnProperty(prop)) {
    obj[prop] = value;
      console.log(obj); // Логируем объект только после успешного добавления свойства
    } else {
      throw `Error: ${prop} already present`; // Бросаем ошибку, если свойство уже существует
    }
}