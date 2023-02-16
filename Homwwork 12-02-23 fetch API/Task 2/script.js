let examp = fetch('https://go-apod.herokuapp.com/apod').then((response) => response.json()).then((response) => diplsayAPI(response));

function diplsayAPI(json) {
    console.log(json);
    saveToStorage(json);
    let text = document.createTextNode(json.title);
    let textBlock = document.createElement('div');
    textBlock.style.fontWeight = "900";
    textBlock.style.fontSize = "17pt";
    textBlock.style.paddingBottom = "15pt";
    textBlock.style.textAlign = "center";
    textBlock.style.paddingTop = "30px";
    textBlock.appendChild(text);
    document.body.appendChild(textBlock);


    let picBlock = document.createElement('div');
    let backgroundImage = document.createElement('img');
    backgroundImage.src = json.url;
    picBlock.appendChild(backgroundImage);
    picBlock.style.textAlign = "center";
    backgroundImage.style.height = "350px";
    picBlock.style.paddingBottom = "50px";


    document.body.appendChild(picBlock);

    let infoBlock = document.createElement('div');
    let infoText = document.createTextNode(json.explanation);
    infoBlock.appendChild(infoText);
    infoBlock.style.paddingLeft = "400px";
    infoBlock.style.paddingRight = "400px";
    document.body.appendChild(infoBlock);

}

function saveToStorage(jsonInput) {
    if (!localStorage.getItem('jsonBlock')) {
        localStorage.setItem('jsonBlock', JSON.stringify(jsonInput));
    } else {
        console.log('JSON ALREADY EXIST');
    }
}

////need to add a checker if the json are already in storage if not add it.