let addBtn = document.querySelector(".set_mony_btn")
let totalMoney =document.querySelector(".total_money");

addBtn.addEventListener("click", function() {
    let addMoney = document.querySelector(".set_money").value;
    let addMoney_alert = document.querySelector(".addMoney_alert");
    let alert_cross = document.querySelector(".cross");
    let case_ended = document.querySelector(".case_alert");
    let case_cross = document.querySelector(".case_cross");
    let chkBtn_disabled = document.querySelector(".search_btn");
    let addMoney_for_disabled = document.querySelector(".set_money");

    
    if(addMoney != ""){
        totalMoney.innerHTML = "Total money: " + addMoney;
    }
    else {
        addMoney_alert.style.display="block"
        
    }

    alert_cross.addEventListener("click", ()=>{
        addMoney_alert.style.display="none";
        
        case_ended.style.display="block";
        case_cross.style. cursor= "not-allowed";
        chkBtn_disabled.disabled= true;
        addMoney_for_disabled.disabled =true;
    })

    if(addMoney >= 10) {
        totalMoney.innerHTML = "Total money: " + addMoney + "$";
    }
    else {
        addMoney_alert.style.display="block"
    }
    let random_math_genaretor_when_click_admony = Math.floor(Math.random() * addMoney / 5);

    console.log(random_math_genaretor_when_click_admony)

    let user_number = document.querySelector(".user_number");
    
    user_number.value = random_math_genaretor_when_click_admony;

    addBtn.value = "disabled";
    addBtn.disabled = true;

   
    

    
    let chkBtn = document.querySelector(".search_btn");
    chkBtn.value = "Spin" + " "  + random_math_genaretor_when_click_admony + "$";

    chkBtn.addEventListener("click", function() {
        
        let bot_number = document.querySelector(".bot_number");
        let random_math_genaretor_when_click_check = Math.floor(Math.random() * addMoney / 4);
        let result = document.querySelector(".result");
       
        bot_number.value = random_math_genaretor_when_click_check;

        if(random_math_genaretor_when_click_admony === random_math_genaretor_when_click_check) {
            result.style.display="block"
            chkBtn.disabled= true; 
            addMoney_for_disabled.disabled = true;
            let congratulation_sound = new Audio('congratulation.mp3');
            congratulation_sound.play();
            console.log("User got the GRANDPRICE!!!")
            
        }
        else {
            console.log("user_not_get_the_GRAND_PRICE!!")
        }

        
        
        
        let cross = document.querySelector(".cross_congratulation");

        cross.addEventListener("click", ()=> {
            result.style.display="none";
            case_ended.style.display="block";
            case_cross.style. cursor= "not-allowed";
            congratulation_sound.stop();

            
        })

        
    })

})