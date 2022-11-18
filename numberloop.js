const firstone = document.getElementById('firstone');
const secondone = document.getElementById('secondone');
const thirdone = document.getElementById('thirdone');



const upate = ()=>{
    let target = 500
    let count = +firstone.textContent
    if( count < 500){
        firstone.textContent = count + 5
        setTimeout(upate , 10)
    
    }else{
        firstone.textContent = 500 + "+"
    }
}
const upate1 = ()=>{
    let target = 17140
    let count = +secondone.textContent
    if( count < 17140){
        secondone.textContent = count + 50
        setTimeout(upate1 , 1)
    
    }else{
        secondone.textContent = 17140 + "+"
    }
}

const upate2 = ()=>{
    let target = 1500
    let count = +thirdone.textContent
    if( count < 1500){
        thirdone.textContent = count + 5
        setTimeout(upate2 , 1)
    
    }else{
        thirdone.textContent = 1500 + "+"
    }
}




upate2()
upate()
upate1()