//! Завдання 1 "Порівняння кількох промісів"
//Ви маєте набір функцій, які повертають проміси з випадковими затримками. Ваше завдання — виконати всі проміси одночасно за допомогою Promise.all і обробити результати.


function promiseTask1(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}

const promises = [
  promiseTask1('Promise 1', 1000),
  promiseTask1('Promise 2', 2000),
  promiseTask1('Promise 3', 500),]

  Promise.all(promises)
   .then((values) => {
      console.log(values);
    })
   .catch((error) => {
      console.error(error);
    });
  //Створіть функцію delayedPromise, яка приймає значення і затримку (у мілісекундах) і повертає проміс, який вирішується з заданим значенням після затримки.
  const delayedPromise = ((resolve, delay) =>{
    return new Promise((resolve, delay) => {
        setTimeout(() => {
          resolve(value);
        }, delay);

    })
  })
//Створіть масив з 5 промісів, використовуючи функцію delayedPromise, із різними значеннями та затримками.
const promisesTask3 = [
    delayedPromise('Promise 1', 1000),
    delayedPromise('Promise 2', 2000),
    delayedPromise('Promise 3', 500),
    delayedPromise('Promise 4', 3000),
    delayedPromise('Promise 5', 4000),
 ]
//Використайте Promise.all, щоб одночасно виконати всі проміси з масиву.
  Promise.all(promisesTask3)
   .then((values) => {
      console.log(values);
    })
   .catch((error) => {
      console.error(error);
    });
    //! Завдання 2 "Змагання промісів"
    
    
    
    
    
    
    
   
    //Використайте Promise.race, щоб виконати всі проміси з масиву і отримати результат найшвидшого проміса.
    //Обробіть результат найшвидшого проміса та виведіть його у консоль.

const randomDelay = (some, _) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(some);
    }, Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000);
  });
}

const promisesTask4 = [
  randomDelay('Promise 1', 1),
  randomDelay('Promise 2', 2),
  randomDelay('Promise 3', 3),
  randomDelay('Promise 4', 4),
  randomDelay('Promise 5', 5),
]

Promise.race(promisesTask4)
  .then((theFaster) => {
    console.log(theFaster);
  })