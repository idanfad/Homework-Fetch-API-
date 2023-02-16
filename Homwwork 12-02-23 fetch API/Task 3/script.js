// let btcPrice = 0;

// function displayAPI(jsonInput) {
//     let screen = document.getElementById('display');
//     screen.innerHTML = "";
//     let text = document.createTextNode(jsonInput.lastPrice+' $');
//     if(jsonInput.lastPrice > btcPrice){
//         screen.style.color = "green";
//     } else {
//         screen.style.color = "red";
//     }
//     screen.appendChild(text);
//     btcPrice = jsonInput.lastPrice;

// }

// function get() {
//     setInterval(() => {
//         fetch('https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT').then((response) => response.json()).then((response) => displayAPI(response))
//     }, 3000)
// }

// get();


//////////////////////////////////////////////////////////////////////////////////////

let btcPrice = 0;

class GetCoinData {
    coinType;

    constructor(coinTypeInpu) {
        this.coinType = coinTypeInpu;
        this.requestData();
    }

    requestData() {
        setInterval(() => {
            fetch(`https://data.binance.com/api/v3/ticker/24hr?symbol=${this.coinType}`)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response);
                    let a = new RenderData(this.coinType, response.lastPrice);
                });
        }, 2000)
    }
}



class RenderData {
    coinType;
    coinPrice;
    
    constructor(coinTypeInput, coinPriceInput) {
        this.coinType = coinTypeInput;
        this.coinPrice = coinPriceInput;
        
        console.log(this.coinType, this.coinPrice);
        this.createCollection();
    }
    
    createCollection() {
        /// DOM ///
        let coinTypeElement = document.getElementById(this.coinType);
        if (coinTypeElement) {
            const priceElement = coinTypeElement.getElementsByTagName('span')
            if (priceElement && priceElement.length) {
                priceElement[0].innerText = this.coinPrice + '$';
            }
        } else {
            let coinBlock = document.createElement('div');
            coinBlock.setAttribute('id', this.coinType);
            coinBlock.style.border = "1px solid black";
            coinBlock.style.paddingTop = "25px";
            coinBlock.style.paddingBottom = "25px";
            coinBlock.style.textAlign = "center";
            coinBlock.style.backgroundColor = "lemonchiffon";
            coinBlock.style.marginLeft = "250px";
            coinBlock.style.marginRight = "250px";
            coinBlock.style.marginBottom = "25px";

            let coinText = document.createElement('h3');
            let coinContent = document.createTextNode(`${this.coinType} Currency Live display`);
            coinText.appendChild(coinContent);

            let coinCounter = document.createElement('span');
            let coinCounterContent = document.createTextNode(this.coinPrice+'$');
            
        
            coinCounter.appendChild(coinCounterContent);
            coinBlock.appendChild(coinText);
            coinBlock.appendChild(coinCounter);
            document.getElementById('main-container').appendChild(coinBlock);
        }
    }
}


class Execute{
    constructor(){
        document.getElementById('goBtn').addEventListener('click',()=>{
          let getCoinType = document.getElementById('getValue').value;
          let a = new GetCoinData(getCoinType);
          
        });
    }
}

let a  = new Execute();
// let a = new GetCoinData('BTCUSDT');
// let b = new GetCoinData('ETHBTC');