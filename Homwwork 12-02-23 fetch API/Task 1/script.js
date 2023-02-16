
class Prediction {
    firstName;

    constructor(){
       let getButton = document.getElementById('goBtn').addEventListener('click',()=>{
            this.getNewValue();
        });
        
    }
    
    getNewValue(){
       let getNewName = document.getElementById('getName').value;
       this.firstName = getNewName;
       this.serverRequest();
    }

    serverRequest(){
        fetch(`https://api.agify.io/?name=${this.firstName}`).then((response)=>response.json()).then((response)=>this.display(response));
    }

    display(predictionInput){
        let screen = document.getElementById('displayScreen');
        let text = document.createTextNode(`The prediction for ur name is `+predictionInput.age);

        screen.innerHTML = "";
        let newBlock = document.createElement('div');
        newBlock.appendChild(text);
        screen.appendChild(text);
    }
}

let a = new Prediction();

