const minVal = document.getElementById('minVal');
const maxVal = document.getElementById('maxVal');
const interval = document.getElementById('interval');

let answerNumber = 0;
let orderNumber = 1;
let gameRun = true;
let minValue = 0;
let maxValue = 0;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

document.getElementById('enter').addEventListener('click', function () {
        minValue = parseInt(minVal.value);
        maxValue = parseInt(maxVal.value);
        minValue = (minValue < -99) ? -99 : parseInt(minVal.value) || -99;
        maxValue = (maxValue > 100) ? 99 : parseInt(maxVal.value) || 99;     
        interval.value = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
})

document.getElementById('findnumber').addEventListener('click', function () {
    answerNumber = Math.floor((maxValue + minValue) / 2);
    const numbers = {
        0: '',
        1: 'один',
        2: 'два',
        3: 'три',
        4: 'четыре',
        5: 'пять',
        6: 'шесть',
        7: 'семь',
        8: 'восемь',
        9: 'девять',
        10: 'десять',
        11: 'одиннадцать',
        12: 'двенадцать',
        13: 'тринадцать',
        14: 'четырнадцать',
        15: 'пятьнадцать',
        16: 'шестьнадцать',
        17: 'семьнадцать',
        18: 'восемьнадцать',
        19: 'девятнадцать',
        20: 'двадцать',
        30: 'тридцать',
        40: 'сорок',
        50: 'пятьдесят',
        60: 'шестьдесят',
        70: 'семьдесят',
        80: 'восемьдесят',
        90: 'девяносто',
        100: 'сто',
    }
    if (answerNumber < 0  &&  answerNumber > -20) {
        negative = Math.abs(answerNumber);
        answerField.innerText = `Вы загадали число минус ${numbers[negative]}?`;
    } else if (answerNumber < - 20) {
        tenths = Math.abs(answerNumber) - Math.abs(answerNumber%10);
        single = Math.abs(answerNumber%10);
        answerField.innerText = `Вы загадали число минус ${numbers[tenths]} ${numbers[single]}?`;
    } else if (answerNumber > 0  &&  answerNumber < 20) {
        answerField.innerText = `Вы загадали число ${numbers[answerNumber]}?`;
    } else if (answerNumber > 20) {
            tenths = answerNumber - answerNumber%10;
            single = answerNumber%10;
            answerField.innerText = `Вы загадали число ${numbers[tenths]} ${numbers[single]}?`; 
    } else {
        answerField.innerText = `Вы загадали число ${answerNumber}?`;
    }
    findnumber.innerHTML =""  
})

orderNumberField.innerText = orderNumber;

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue || orderNumber>7){
            const phraseRandom = Math.round(Math.random()*2);
                if (phraseRandom === 1) {
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;    
                } else if (phraseRandom === 0) {
                    answerPhrase = `Вы забыли загадать число\n\u{1F914}`; 
                } else {
                    answerPhrase = `Вы загадали не число\n\u{1F914}`
                };
        answerField.innerText = answerPhrase;
        gameRun = false;
            
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((maxValue + minValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const numbers = {
                0: '',
                1: 'один',
                2: 'два',
                3: 'три',
                4: 'четыре',
                5: 'пять',
                6: 'шесть',
                7: 'семь',
                8: 'восемь',
                9: 'девять',
                10: 'десять',
                11: 'одиннадцать',
                12: 'двенадцать',
                13: 'тринадцать',
                14: 'четырнадцать',
                15: 'пятьнадцать',
                16: 'шестьнадцать',
                17: 'семьнадцать',
                18: 'восемьнадцать',
                19: 'девятнадцать',
                20: 'двадцать',
                30: 'тридцать',
                40: 'сорок',
                50: 'пятьдесят',
                60: 'шестьдесят',
                70: 'семьдесят',
                80: 'восемьдесят',
                90: 'девяносто',
                100: 'сто',
            }

            if (answerNumber < 0  &&  answerNumber > -20) {
                negative = Math.abs(answerNumber);
                answerField.innerText = `Вы загадали число минус ${numbers[negative]}?`;
            } else if (answerNumber < - 20) {
                tenths = Math.abs(answerNumber) - Math.abs(answerNumber%10);
                single = Math.abs(answerNumber%10);
                answerField.innerText = `Вы загадали число минус ${numbers[tenths]} ${numbers[single]}?`;
            } else if (answerNumber > 0  &&  answerNumber < 20) {
                answerField.innerText = `Вы загадали число ${numbers[answerNumber]}?`;
            } else if (answerNumber > 20) {
                tenths = answerNumber - answerNumber%10;
                single = answerNumber%10;
                answerField.innerText = `Вы загадали число ${numbers[tenths]} ${numbers[single]}?`; 
            } else {
                answerField.innerText = `Вы загадали число ${answerNumber}?`;
            }
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random()*2);
                if (phraseRandom === 1) {
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;    
                } else if (phraseRandom === 0) {
                    answerPhrase = `Вы забыли загадать число\n\u{1F914}`; 
                } else {
                    answerPhrase = `Вы загадали не число\n\u{1F914}`
                };
        answerField.innerText = answerPhrase;
        gameRun = false;
        } else if (minValue !== maxValue) {
            minValue = answerNumber + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const numbers = {
                0: '',
                1: 'один',
                2: 'два',
                3: 'три',
                4: 'четыре',
                5: 'пять',
                6: 'шесть',
                7: 'семь',
                8: 'восемь',
                9: 'девять',
                10: 'десять',
                11: 'одиннадцать',
                12: 'двенадцать',
                13: 'тринадцать',
                14: 'четырнадцать',
                15: 'пятьнадцать',
                16: 'шестьнадцать',
                17: 'семьнадцать',
                18: 'восемьнадцать',
                19: 'девятнадцать',
                20: 'двадцать',
                30: 'тридцать',
                40: 'сорок',
                50: 'пятьдесят',
                60: 'шестьдесят',
                70: 'семьдесят',
                80: 'восемьдесят',
                90: 'девяносто',
                100: 'сто',
            }
            if (answerNumber < 0  &&  answerNumber > -20) {
                negative = Math.abs(answerNumber);
                answerField.innerText = `Вы загадали число минус ${numbers[negative]}?`;
            } else if (answerNumber < - 20) {
                tenths = Math.abs(answerNumber) - Math.abs(answerNumber%10);
                single = Math.abs(answerNumber%10);
                answerField.innerText = `Вы загадали число минус ${numbers[tenths]} ${numbers[single]}?`;
            } else if (answerNumber > 0  &&  answerNumber < 20) {
                answerField.innerText = `Вы загадали число ${numbers[answerNumber]}?`;
            } else if (answerNumber > 20) {
                    tenths = answerNumber - answerNumber%10;
                    single = answerNumber%10;
                    answerField.innerText = `Вы загадали число ${numbers[tenths]} ${numbers[single]}?`; 
            } else {
                answerField.innerText = `Вы загадали число ${answerNumber}?`;
            }
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random()*2);
        if (phraseRandom === 1) {
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;    
        } else if (phraseRandom === 0) {
            answerField.innerText = `Я не сомнивался`; 
        } else {
            answerField.innerText = `С вами приятно иметь дело`
        };
        gameRun = false;
    }
})

document.getElementById('btnRetry', 'btnRetryIdent').addEventListener('click', function () {
    btnRetryIdent.innerHTML ="Активируйте вкладу ввода исходных данных"
    gameRun = true;
    answerNumber = 0;
    minVal.value = '';
    maxVal.value = '';
    interval.value = '';
    orderNumber = 1;
    orderNumberField.innerText = orderNumber;
})

document.getElementById('btnRetryIdent', 'btnRetryIdent').addEventListener('click', function () {
    btnRetryIdent.innerHTML ="" 
    findnumber.innerHTML ="Приступим!"     
})


