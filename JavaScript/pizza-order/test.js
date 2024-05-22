


let z = [,
];


function pizzaPrice(pizza, ...extras) {
    let price = 0;
    if (pizza === 'Margherita') {
        price = 7;
    } else if (pizza === 'Caprese') {
        price = 9;
    } else {
        price = 10;
    }

    for(let i = 0; i < extras.length; i++){
        if(extras[i] === 'ExtraSauce'){
            price += 1; 
        }else{
            price += 2; 
        }
    }

}

pizzaPrice('Caprese', 'ExtraToppings',
    'ExtraToppings',
    'ExtraToppings',
    'ExtraToppings',); 