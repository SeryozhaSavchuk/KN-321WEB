
// Неважлива фенкція. Служить для полегшеного запуску процесу демонстрації проекту
function prepare(){
    let startArray = [
        {Model: Apple, Conect: "Leading", pictname: "Apple EarPods.jpg"},
        {Model: Apple, Conect: "Wireless", pictname: "Apple AirPods 2.webp"},
        {Model: Apple, Conect: "Wireless", pictname: "Apple AirPods 3.jpg"},
        {Model: Apple, Conect: "Wireless", pictname: "Apple AirPods Pro.jpg"},
        {Model: Apple, Conect: "Wireless", pictname: "Apple AirPods Max.jpg"},
    ]
    
    localStorage.clear() //Очищуємо LocalStorage
    
    //Додаємо нові елементи в LocalStorage
    for (let i=0; i<startArray.length; i++) {   
        let row = startArray[i]
        let rowSt = JSON.stringify(row)
        localStorage.setItem(`${i}`, rowSt)
    }

    location.reload();  //Перезавантажуємо вікно
}