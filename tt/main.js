function sc(x){
    return document.getElementById(x)
}

function c(x,y,z){
    return x*3600+y*60+z
}

function cd(ins){
    h = (ins-ins%3600)/3600
    m = (ins-h*3600-(ins-h*3600)%60)/60
    s = ins-h*3600-m*60

    h = Math.floor(ins/3600)
    m = Math.floor(ins%3600/60)
    s = Math.floor(ins%3600%60)

    return [h,m,s]
}

var t
var count = 0

setInterval(()=>{
    if(sc('select').value=='a'){
        schedule_A()
    }else if(sc('select').value=='b'){
        schedule_B()
    }else if(sc('select').value=='c'){
        schedule_C()
    }
},10)

function schedule_A(){
    t = new Date()

    t = [
        Number(t.getHours()),
        Number(t.getMinutes()),
        Number(t.getSeconds())
    ]

    now = c(t[0],t[1],t[2])

    sc('time').innerHTML = t[0]+'時'+t[1]+'分'+t[2]+'秒'

    if(now>=c(8,30,0)&&now<=c(8,39,59)){
        sc('sj').innerHTML = 'SHR(NEXT:5分休み)'
        remain = cd(c(8,40,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(8,40,0)&&now<=c(8,44,59)){
        sc('sj').innerHTML = '5分休み(NEXT:1時限)'
        remain = cd(c(8,45,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(8,45,0)&&now<=c(9,34,59)){
        sc('sj').innerHTML = '1時限(NEXT:10分休み)'
        remain = cd(c(9,35,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(9,35,0)&&now<=c(9,44,59)){
        sc('sj').innerHTML = '10分休み(NEXT:2時限)'
        remain = cd(c(9,45,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(9,45,0)&&now<=c(10,34,59)){
        sc('sj').innerHTML = '2時限(NEXT:10分休み)'
        remain = cd(c(10,35,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(10,35,0)&&now<=c(10,44,59)){
        sc('sj').innerHTML = '10分休み(NEXT:3時限)'
        remain = cd(c(10,45,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(10,45,0)&&now<=c(11,34,59)){
        sc('sj').innerHTML = '3時限(NEXT:10分休み)'
        remain = cd(c(11,35,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(11,35,0)&&now<=c(11,44,59)){
        sc('sj').innerHTML = '10分休み(NEXT:4時限)'
        remain = cd(c(11,45,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(11,45,0)&&now<=c(12,34,59)){
        sc('sj').innerHTML = '4時限(NEXT:昼休み)'
        remain = cd(c(12,35,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(12,35,0)&&now<=c(13,19,59)){
        sc('sj').innerHTML = '昼休み(NEXT:5時限)'
        remain = cd(c(13,20,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(13,20,0)&&now<=c(14,9,59)){
        sc('sj').innerHTML = '5時限(NEXT:10分休み)'
        remain = cd(c(14,10,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(14,10,0)&&now<=c(14,19,59)){
        sc('sj').innerHTML = '10分休み(NEXT:5時限)'
        remain = cd(c(14,20,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(14,20,0)&&now<=c(15,9,59)){
        sc('sj').innerHTML = '6時限(NEXT:SHR)'
        remain = cd(c(15,10,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(15,10,0)&&now<=c(15,14,59)){
        sc('sj').innerHTML = 'SHR(NEXT:なし)'
        remain = cd(c(15,15,0)-c(t[0],t[1],t[2]))

    }else{
        if(c(t[0],t[1],t[2])<c(8,30,0)){
            sc('sj').innerHTML = 'なし(NEXT:SHR)'
            remain = cd(c(8,30,0)-c(t[0],t[1],t[2]))
            count++
        }else{
            sc('sj').innerHTML = 'なし(NEXT:SHR)'
            remain = cd(c(32,30,0)-c(t[0],t[1],t[2]))
            count++
        }
    }
    
    if(count){
        sc('remain').innerHTML = remain[0]+'時'+remain[1]+'分'+remain[2]+'秒'
        count = 0
    }else{
        sc('remain').innerHTML = remain[1]+'分'+remain[2]+'秒'
    }
}

function schedule_B(){
    t = new Date()

    t = [
        Number(t.getHours()),
        Number(t.getMinutes()),
        Number(t.getSeconds())
    ]

    now = c(t[0],t[1],t[2])

    sc('time').innerHTML = t[0]+'時'+t[1]+'分'+t[2]+'秒'

    if(now>=c(8,30,0)&&now<=c(8,39,59)){
        sc('sj').innerHTML = 'SHR(NEXT:5分休み)'
        remain = cd(c(8,40,1)-c(t[0],t[1],t[2]))

    }else if(now>=c(8,40,0)&&now<=c(8,44,59)){
        sc('sj').innerHTML = '5分休み(NEXT:1時限)'
        remain = cd(c(8,45,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(8,45,0)&&now<=c(9,29,59)){
        sc('sj').innerHTML = '1時限(NEXT:10分休み)'
        remain = cd(c(9,30,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(9,30,0)&&now<=c(9,39,59)){
        sc('sj').innerHTML = '10分休み(NEXT:2時限)'
        remain = cd(c(9,40,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(9,40,0)&&now<=c(10,24,59)){
        sc('sj').innerHTML = '2時限(NEXT:10分休み)'
        remain = cd(c(10,25,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(10,25,0)&&now<=c(10,29,59)){
        sc('sj').innerHTML = '10分休み(NEXT:3時限)'
        remain = cd(c(10,35,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(10,35,0)&&now<=c(11,19,59)){
        sc('sj').innerHTML = '3時限(NEXT:10分休み)'
        remain = cd(c(11,20,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(11,20,0)&&now<=c(11,29,59)){
        sc('sj').innerHTML = '10分休み(NEXT:4時限)'
        remain = cd(c(11,30,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(11,30,0)&&now<=c(12,14,59)){
        sc('sj').innerHTML = '4時限(NEXT:昼休み)'
        remain = cd(c(12,15,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(12,15,0)&&now<=c(12,54,59)){
        sc('sj').innerHTML = '昼休み(NEXT:5時限)'
        remain = cd(c(12,55,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(12,55,0)&&now<=c(13,39,59)){
        sc('sj').innerHTML = '5時限(NEXT:10分休み)'
        remain = cd(c(13,40,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(13,40,0)&&now<=c(13,49,59)){
        sc('sj').innerHTML = '10分休み(NEXT:5時限)'
        remain = cd(c(13,50,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(13,50,0)&&now<=c(14,34,59)){
        sc('sj').innerHTML = '6時限(NEXT:5分休み)' 
        remain = cd(c(15,10,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(14,35,0)&&now<=c(14,39,59)){
        sc('sj').innerHTML = '5分休み(NEXT:行事)'
        remain = cd(c(14,40,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(14,40,0)&&now<=c(15,9,59)){
        sc('sj').innerHTML = '行事(NEXT:SHR)'
        remain = cd(c(14,10,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(14,10,0)&&now<=c(15,14,59)){
        sc('sj').innerHTML = 'SHR(NEXT:なし)'
        remain = cd(c(15,15,0)-c(t[0],t[1],t[2]))

    }else{
        if(c(t[0],t[1],t[2])<c(8,30,0)){
            sc('sj').innerHTML = 'なし(NEXT:SHR)'
            remain = cd(c(8,30,0)-c(t[0],t[1],t[2]))
            count++
        }else{
            sc('sj').innerHTML = 'なし(NEXT:SHR)'
            remain = cd(c(32,30,0)-c(t[0],t[1],t[2]))
            count++
        }
    }
    
    if(count){
        sc('remain').innerHTML = remain[0]+'時'+remain[1]+'分'+remain[2]+'秒'
        count = 0
    }else{
        sc('remain').innerHTML = remain[1]+'分'+remain[2]+'秒'
    }
}

function schedule_C(){
    t = new Date()

    t = [
        Number(t.getHours()),
        Number(t.getMinutes()),
        Number(t.getSeconds())
    ]

    now = c(t[0],t[1],t[2])

    sc('time').innerHTML = t[0]+'時'+t[1]+'分'+t[2]+'秒'

    if(now>=c(8,30,0)&&now<=c(8,35,0)){
        sc('sj').innerHTML = 'SHR(NEXT:5分休み)'
        remain = cd(c(8,35,1)-c(t[0],t[1],t[2]))

    }else if(now>=c(8,35,1)&&now<=c(8,50,59)){
        sc('sj').innerHTML = '5分休み(NEXT:1時限)'
        remain = cd(c(8,50,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(8,50,0)&&now<=c(9,39,59)){
        sc('sj').innerHTML = '1時限(NEXT:10分休み)'
        remain = cd(c(9,40,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(9,40,0)&&now<=c(9,49,59)){
        sc('sj').innerHTML = '10分休み(NEXT:2時限)'
        remain = cd(c(9,50,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(9,50,0)&&now<=c(10,39,59)){
        sc('sj').innerHTML = '2時限(NEXT:10分休み)'
        remain = cd(c(10,40,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(10,40,0)&&now<=c(10,49,59)){
        sc('sj').innerHTML = '10分休み(NEXT:3時限)'
        remain = cd(c(10,50,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(10,50,0)&&now<=c(11,39,59)){
        sc('sj').innerHTML = '3時限(NEXT:10分休み)'
        remain = cd(c(11,40,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(11,40,0)&&now<=c(11,49,59)){
        sc('sj').innerHTML = '10分休み(NEXT:4時限)'
        remain = cd(c(11,50,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(11,50,0)&&now<=c(12,39,59)){
        sc('sj').innerHTML = '4時限(NEXT:昼休み)'
        remain = cd(c(12,40,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(12,40,0)&&now<=c(13,19,59)){
        sc('sj').innerHTML = '昼休み(NEXT:5時限)'
        remain = cd(c(13,15,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(13,15,0)&&now<=c(14,9,59)){
        sc('sj').innerHTML = '5時限(NEXT:10分休み)'
        remain = cd(c(14,10,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(14,10,0)&&now<=c(14,19,59)){
        sc('sj').innerHTML = '10分休み(NEXT:5時限)'
        remain = cd(c(14,20,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(14,20,0)&&now<=c(15,9,59)){
        sc('sj').innerHTML = '6時限(NEXT:SHR)'
        remain = cd(c(15,10,0)-c(t[0],t[1],t[2]))

    }else if(now>=c(15,10,0)&&now<=c(15,14,59)){
        sc('sj').innerHTML = 'SHR(NEXT:なし)'
        remain = cd(c(15,15,0)-c(t[0],t[1],t[2]))

    }else{
        if(c(t[0],t[1],t[2])<c(8,30,0)){
            sc('sj').innerHTML = 'なし(NEXT:SHR)'
            remain = cd(c(8,30,0)-c(t[0],t[1],t[2]))
            count++
        }else{
            sc('sj').innerHTML = 'なし(NEXT:SHR)'
            remain = cd(c(32,30,0)-c(t[0],t[1],t[2]))
            count++
        }
    }
    
    if(count){
        sc('remain').innerHTML = remain[0]+'時'+remain[1]+'分'+remain[2]+'秒'
        count = 0
    }else{
        sc('remain').innerHTML = remain[1]+'分'+remain[2]+'秒'
    }
}