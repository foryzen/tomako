function sc(x){
    return document.getElementById(x)
}

function exe(){
    if(sc('score').value!==''){
        if(sc('subject').value=='sub1'){
            calc(Number(sc('score').value),50,20)
            sc('notice').innerHTML = 'Notice:この教科は、サンプルが少ないため正確な値が出力されない可能性があります！'
        }else if(sc('subject').value=='sub2'){
            calc(Number(sc('score').value),50,20)
            sc('notice').innerHTML = 'Notice:この教科は、サンプルが少ないため正確な値が出力されない可能性があります！'
        }else if(sc('subject').value=='sub3'){
            calc(Number(sc('score').value),60.3333,27.7528)
            sc('notice').innerHTML = 'Notice:この教科は、サンプルが少ないため正確な値が出力されない可能性があります！'
        }else if(sc('subject').value=='sub4'){
            calc(Number(sc('score').value),54.125,23.0403)
        }else if(sc('subject').value=='sub5'){
            calc(Number(sc('score').value),64,15.8508)
        }else if(sc('subject').value=='sub6'){
            calc(Number(sc('score').value),64,20.7183)
        }else if(sc('subject').value=='sub7'){
            calc(Number(sc('score').value),58.5,13)
        }else if(sc('subject').value=='sub8'){
            calc(Number(sc('score').value),50,20)
            sc('notice').innerHTML = 'Notice:この教科は、サンプルが少ないため正確な値が出力されない可能性があります！'
        }else{
            sc('output').innerHTML = '教科を入力してください！'
        }
    }else{
        sc('output').innerHTML = '点数を入力してください！'
    }
}

function calc(a,b,c){
    //a = 点数
    //b = 平均点
    //c = 標準偏差

    sc('output').innerHTML = (a-b)/c*10+50
}

function foryzen(e){
    if(e.code=='Enter'){
        exe()
    }
}

document.addEventListener('keydown',foryzen)