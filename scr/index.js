// Задання вихідних параметрів (title, [x], content) конфігурації модалки 
const modal = $.modal({
    title: 'Cup options',
    closable: true,
    content: `
        <div class="modal-form">
            <label for="name">Headphone model:</label><br>
                <input type="text" id="Model" name="Model" class="modal-form-field" placeholder="Input headphones model..."/><br><br>
            
            
                <label for="Model">Min Hz:</label><br>
                    <select id="minhz" name="minhz" class="modal-form-field">
                    <option value="16">16</option>
                    <option value="32">32</option>
                    <option value="64">64</option>
                    <option value="128">128</option>
                    <option value="258">258</option>
                    <option value="512">512</option>
                    <option value="1024">1024</option>
                    <option value="2048">2048</option>
                    <option value="4096">4096</option>
                
                    </select><br><br>

                    <label for="max">Max Hz:</label><br>

                    <select id="maxhz" name="maxhz" class="modal-form-field">
                        <option value="16">16</option>
                        <option value="32">32</option>
                        <option value="64">64</option>
                        <option value="128">128</option>
                        <option value="258">258</option>
                        <option value="512">512</option>
                        <option value="1024">1024</option>
                        <option value="2048">2048</option>
                        <option value="4096">4096</option>
                    
                    </select><br><br>
                <label for="conect">Connect:</label><br>

                    <select id="Conect" name="Conect" class="modal-form-field">
                        <option value="leading">leading</option>
                        <option value="wireless">wireless</option>
                    </select><br><br>


                <label for="resistance">Resistance:</label><br>
                    <select id="resistance" name="resistance" class="modal-form-field">
                        <option value="resistance">8</option>
                        <option value="resistance">16</option>
                        <option value="resistance">32</option>
                        <option value="resistanc">64</option>
                        <option value="resistance">128</option>
                        <option value="resistance">258</option>
                    </select><br><br>


            <div id= "img-prev-section">
                <img id="imgprev" src="" >
            </div>   
                <label for="file" id="label-select-img">Select image file:</label><br>
                <input type="file" id="imgfile" name="imgfile"><br><br>
            
            <button id="submitbtn" class="blue-button" onclick="myFunction()">Click me</button>
        </div> 
    `,
    width: '500px'
})

// Вибірка всіх "Model" та обчислення "Total Model"
function countTotalModel(){
    let volArr = document.getElementsByClassName("element-Model")
    let totalModel = 0
    for (let i=0; i<volArr.length; i++) {
        totalModel+= Number(volArr[i].outerText)
    }
    document.getElementById("countresult").innerHTML = `Total Model:  <b>${totalModel} ml</b>`
}



countbtn.addEventListener('click', countTotalModel)









