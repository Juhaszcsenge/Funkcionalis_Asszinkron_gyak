 

// konstansokat generálunk
const fullname = document.getElementById("fullname");
const country = document.getElementById("country");
const city = document.getElementById("city");
const street = document.getElementById("street");
const zip = document.getElementById("zip");
const control  = document.getElementById("control");
const bankcard = document.getElementById("bankcard");
const bankcardname = document.getElementById("bankcardname");
const correct = document.getElementById("result");
/*
 Nev,orszag,varos: minimum egy betu 
 Haz,utca: szamok,betuk,szokoz
 Bank: 4x4-es szamok, kotojel
 Ellenorzo: 3 szamjegy mint a cvc 
 Bankartya nev: angol szamok. betuk
 Zip: nagy betűk karakterek stb
*/

// konstans regex alapú változókat generálunk, megadjuk a számok, betűk hosszát, hogy legyen-e benne szóköz stb
const cname =  /[a-zA-Z]{1,}/;
const ccountry = /[a-zA-Z]{1,}/;
const ccity = /[a-zA-Z]{1,}/;
const cstreet= /^[a-zA-Z0-9 ]*$/;
const czip = /[A-Z0-9]{1,}/;
const kcontrol = /^[0-9]{3}$/;
const cbankcard = /(?:[0-9]{4})-(?:[0-9]{4})-(?:[0-9]{4})-(?:[0-9]{4})/;
const cbankcardname = /\s[A-Za-z]{1,}/;
let result = true;

//ha nem megfelelően töltik ki az űrlapot akkor hibát fog kidobni, mint rosssz név stb
document.getElementById("check").addEventListener("click", () => {
    if(!cname.test(fullname.value))
    {
        result = false;
        correct.textContent = "Incorrect name";
        correct.style.color = red;
    };

    if(!cbankcardname.test(bankcardname.value))
    {
        result = false;
        correct.textContent = "Incorrect bankcard name";
        correct.style.color = red;
    };

    if(!ccountry.test(country.value))
    {
        result = false;
        correct.textContent = "Incorrect country";
        correct.style.color = red;
    };

    if(!czip.test(zip.value))
    {
        result = false;
        correct.textContent = "Incorrect ZIP";
        correct.style.color = red;
    };

    if(!cbankcardname.test(country.value))
    {
        result = false;
        correct.textContent = "Incorrect country";
        correct.style.color = red;
    };

    if(!cstreet.test(street.value))
    {
        result = false;
        correct.textContent = "Incorrect street";
        correct.style.color = red;
    };

    if(!cbankcard.test(bankcard.value))
    {
        result = false;
        correct.textContent = "Incorrect Card";
        correct.style.color = red;
    };

    if(!kcontrol.test(control.value))
    {
        result = false;
        correct.textContent = "Incorrect control code";
        correct.style.color = red;
    };

    if(!ccity.test(city.value))
    {
        result = false;
        correct.textContent = "Incorrect city";
        correct.style.color = red;
    };

    if(!result){
        document.getElementById('contact form').textContent = "Successful Payment";
        document.getElementById('conatct form').style.color = "Green";
    }
});