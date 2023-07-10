// Функція для побудови елемента та розміщення його в Dresistance
function buildElementToPage(id, elem) {                               
    const element = document.createElement('div')
    element.classList.add('element')
    element.insertAdjacentHTML('afterbegin', `
    <div class="element-data">
        <img src="img/${elem.pictname}" class="element-img">
  
        <p class="element-text">Model: <span class="element-Model">${elem.Model}</span></p> 
        <p class="element-text">Conect: <span class="element-Conect">${elem.Conect}</span></p> 
        <p class="element-text">minhz: <span class="element-minhz">${elem.minhz}</span></p>
        <p class="element-text">maxhz: <span class="element-maxhz">${elem.maxhz}</span></p>
        <p class="element-text">resistance: <span class="element-resistance">${elem.resistance}</span></p>
    </div>
    <div class="element-footer">
        <button class="button" onclick="modifyModalToEdit(${id})"><span class="blue">Edit</span></button><span> </span>
        <button class="button" onclick="removeElementFromStorage(${id})"><span class="red">Delete</span></button>
    </div>
    <p></p>
    `)
    document.getElementsByClassName("displayzone")[0].appendChild(element)
}

// Зміна параметрів модалки для СТВОРЕННЯ нового елементу
function modifyModalToCreate() {
    document.getElementsByClassName("modal-title")[0].innerText = "Create new cup"
    document.getElementById("submitbtn").setAttribute("onclick", `addElementToLocalStorage()`)
    document.getElementById("submitbtn").innerText = "Create"
    document.getElementById("img-prev-section").setAttribute("style", "display: none")
    document.getElementById("label-select-img").innerText = "Select image file:"
    //  Вікриваємо модалку
    modal.open()
}

// Зміна параметрів модалки для РЕДАГУВАННЯ поточного елементу
function modifyModalToEdit(id) {
    document.getElementsByClassName("modal-title")[0].innerText = "Edit headphone"
    document.getElementById("submitbtn").innerText = "Update"
    document.getElementById("submitbtn").setAttribute("onclick", `editElementInLocalStorage(${id})`)
    //  Вибираємо елемент по ID з LS і парсимо в об'єкт
    let edElem = JSON.parse(localStorage.getItem(id))
    //  Встановлюємо значення полів формиі  
    document.getElementById("Model").value = edElem.Model;   
    document.getElementById("Conect").value = edElem.Conect;
    document.getElementById("minhz").value = edElem.minhz; 
    document.getElementById("maxhz").value = edElem.maxhz;
    document.getElementById("resistance").value = edElem.resistance;
    document.getElementById("imgprev").setAttribute("src", `img/${edElem.pictname}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
    // document.getElementById("imgfile").value = edElem.pictname; 
    //  Вікриваємо модалку
    modal.open()
}

//  Відображення в модалці зменшеної картинки
function showPrewImg(){
    let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
    document.getElementById("imgprev").setAttribute("src", `img/${filename}`)
    document.getElementById("label-select-img").innerText = "You can choose another image file:"
    document.getElementById("img-prev-section").setAttribute("style", "display: block")
}

//Слухаємо, чи змінилося значення поля input type="file" (чи вибралася інша картинка)
document.getElementById("imgfile").addEventListener("change", showPrewImg)


//Валідація введеного імені і об'єму чашки
function validNameAndModel(){
    let valid = true;
    let showMsg = '';
    let formModel = document.getElementById("Model").value.trim();
    
    if (!formModel) {
        showMsg = 'Cup name field is empty. INPUT CUPs NAME . '
        valid = false;
    }  
    
    if (!formModel) {
        showMsg = showMsg + 'Cup Model field is empty. INPUT the CUP Model. '
        valid = false;
    } 
    
    
    if (valid) {return valid} else {alert (showMsg)}
   
}
function validImg() {
    if (document.getElementById("imgfile").value) {return true} 
    else {
        alert ("The image for the cup was not selected. SELECT an IMAGE for the CUP. ")
        return false} ;
}

// Створення параметрів нового елемента та розміщення його в LS
function addElementToLocalStorage(){
            
    if (validNameAndModel() && validImg()) {
        //Шукаємо максимальне значення ID,  в LS не зайняте
        let keyArr = [];
        for(let i=0; i<localStorage.length; i++) {
            let key = Number(localStorage.key(i)) ;
            keyArr[i] = key
        }
        const freeKey = Math.max(...keyArr) + 1; 
        //Забираємо значення з форми
        let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
        // Будуємо новий елемент
        const newElement = {};  
        newElement.Model = document.getElementById("Model").value;   
        newElement.Conect = document.getElementById("Conect").value;
        newElement.minhz = document.getElementById("minhz").value;
        newElement.maxhz = document.getElementById("maxhz").value;
        newElement.resistance = document.getElementById("resistance").value;
        newElement.pictname = filename;   
        // Конвертуємо елемент в стрічку
        let rowSt = JSON.stringify(newElement)
        // Пакуємо елемент в LS
        localStorage.setItem(`${freeKey}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000)
    }
}
   
// Редагування параметрів елемента та розміщення його в LS
function editElementInLocalStorage(id) {
    if (validNameAndModel()) {
        let edElem = JSON.parse(localStorage.getItem(id))
  
        edElem.Model = document.getElementById("Model").value;   
        edElem.Conect = document.getElementById("Conect").value;
        edElem.minhz = document.getElementById("minhz").value;
        edElem.maxhz = document.getElementById("maxhz").value;
        edElem.resistance = document.getElementById("resistance").value;
        if (document.getElementById("imgfile").value) {
            let filename = document.getElementById("imgfile").value.replace(/C:\\fakepath\\/, ''); // Обрізаємо C:\fakepath\
            edElem.pictname = filename; 
        }
        // Конвертуємо елемент в стрічку
        let rowSt = JSON.stringify(edElem)
        // Пакуємо елемент в LS
        localStorage.setItem(`${id}`, rowSt)
        modal.close()
        setTimeout(location.reload(), 1000) //Перезавантажуємо вікно
    }
   
}

// Видалення параметрів елемента з LS
function removeElementFromStorage(id){
    if (confirm("Are you sure you want to delete?")) {
        localStorage.removeItem(id)
        location.reload();          //Перезавантажуємо вікно
    }

} 

let keyNumbers = Object.keys(localStorage).length //Визначаємо кількість об'єктів LocalStorage

for (let k=0; k<keyNumbers; k++) {
    let keyName = localStorage.key(k)
    let row = JSON.parse(localStorage.getItem(keyName))
    buildElementToPage(keyName, row)
}

