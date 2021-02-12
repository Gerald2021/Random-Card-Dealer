window.onload = function () 
{
    var suits = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
    var value = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
    
    var randomSuits = suits[Math.floor(Math.random() * suits.length)];
    var randomValue = value[Math.floor(Math.random() * value.length)];

    document.getElementById("card-header").innerHTML  = randomSuits;
    document.getElementById("card-content").innerHTML = randomValue;
    document.getElementById("card-footer").innerHTML = randomSuits;
    
  
    if (randomSuits === '&hearts;' || randomSuits === '&diams;'){
        document.querySelector("body").classList.add('redColor');
    }else {
        document.querySelector("body").classList.add('blackColor');
    }
}

