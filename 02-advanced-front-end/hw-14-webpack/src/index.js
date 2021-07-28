import "./styles/index.css"
import carPicture from "./images/vintage-car.png"
import {
    getMaxDigit, 
    getPairs, 
    getAverage,
    calculateWordLetters,
    getUkraineTaxes,
    getOstapInfo,
    generateBlocks,
    getRandomChinese,
    getPlanetsList,
    generate,
} from "../src/previous-homeworks"

const functions = [
    getMaxDigit, 
    getPairs, 
    getAverage,
    calculateWordLetters,
    getUkraineTaxes,
    getOstapInfo,
    generateBlocks,
    generate,
    getRandomChinese,
    getPlanetsList,
]

for (let i = 0; i < functions.length; i++) {
    functions[i]();
}

document.getElementById('body').insertAdjacentHTML('afterbegin', `<img id="car" src="${carPicture}">`)

