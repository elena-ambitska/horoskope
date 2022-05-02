

export function getZodiacSign() {
   let day = document.querySelector('.s-1').value;
   let month = document.querySelector('.s-2').value;

    const field =  document.querySelector(".zodiac");
    let template="";


    const zodiacSigns = {
        'capricorn': ['Козерог', './image/zodiac-icon/10_Capricorn.svg'],
        'aquarius': ['Водолей', './image/zodiac-icon/11_Aquarius.svg'],
        'pisces': ['Рыбы', './image/zodiac-icon/12_Pisces.svg'],
        'aries': ['Овен', './image/zodiac-icon/1_aries.svg'],
        'taurus': ['Телец', './image/zodiac-icon/2_Taurus.svg'],
        'gemini': ['Близнецы', './image/zodiac-icon/3_Gemini.svg'],
        'cancer': ['Рак', './image/zodiac-icon/Cancer_Rak.svg'],
        'leo': ['Лев', './image/zodiac-icon/5_Leo.svg'],
        'virgo': ['Девы', './image/zodiac-icon/6_Virgo.svg'],
        'libra': ['Весы', './image/zodiac-icon/7_Libra.svg'],
        'scorpio': ['Скорпион', './image/zodiac-icon/8_Scorpio.svg'],
        'sagittarius': ['Стрелец', './image/zodiac-icon/9_Sagittarius.svg']
}

    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
       template = `
         <figure>
                <img src=${zodiacSigns.capricorn[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.capricorn[0]}</figcaption>
            </figure>
        `
       return  field.innerHTML=template;

    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        template = `
         <figure>
                <img src=${zodiacSigns.aquarius[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.aquarius[0]}</figcaption>
            </figure>
        `
        return  field.innerHTML=template;

    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        template = `
         <figure>
                <img src=${zodiacSigns.pisces[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.pisces[0]}</figcaption>
            </figure>
        `
        return  field.innerHTML=template;

    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        template = `
         <figure>
                <img src=${zodiacSigns.aries[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.aries[0]}</figcaption>
            </figure>
        `
        return  field.innerHTML=template;

    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        template = `
         <figure>
                <img src=${zodiacSigns.taurus[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.taurus[0]}</figcaption>
            </figure>
        `
        return field.innerHTML=template;

    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        template = `
         <figure>
                <img src=${zodiacSigns.gemini[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.gemini[0]}</figcaption>
            </figure>
        `
        return  field.innerHTML=template;

    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        template = `
         <figure>
                <img src=${zodiacSigns.cancer[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.cancer[0]}</figcaption>
            </figure>
        `
        return field.innerHTML=template;

    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        template = `
         <figure>
                <img src=${zodiacSigns.leo[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.leo[0]}</figcaption>
            </figure>
        `
        return  field.innerHTML=template;

    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        template = `
         <figure>
                <img src=${zodiacSigns.virgo[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.virgo[0]}</figcaption>
            </figure>
        `
        return field.innerHTML=template;

    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        template = `
         <figure>
                <img src=${zodiacSigns.libra[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.libra[0]}</figcaption>
            </figure>
        `
        return  field.innerHTML=template;

    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        template = `
         <figure>
                <img src=${zodiacSigns.scorpio[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.scorpio[0]}</figcaption>
            </figure>
        `
        return  field.innerHTML=template;

    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        template = `
         <figure>
                <img src=${zodiacSigns.sagittarius[1]} alt="zodiac" class="zodiac-icon"/>
                <figcaption>${zodiacSigns.sagittarius[0]}</figcaption>
            </figure>
        `
        return  field.innerHTML=template;

    }

}

