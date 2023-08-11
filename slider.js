
    function $id(id){  //$id("btnLeft")
        return document.getElementById(id);  //document.getElementById("btnLeft")
    }
    
    
    window.addEventListener("load", function(){
    
        let wrap = document.querySelector(".wrap");
        let curIndex = 0;
        //-----------------------------------------btnLeft.onclick
        $id("btnLeft").onclick = function(){
            curIndex--;
            wrap.style.left = -1240 * curIndex + "px";
            
            if(curIndex === 0){
                $id("btnLeft").disabled = true;
            }
            $id("btnRight").disabled = false;
        }
        //-----------------------------------------btnRight.onclick
        $id("btnRight").onclick = function(){
            curIndex++; //1
            wrap.style.left = -1240 * curIndex + "px";
    
            if(curIndex === 1){
                $id("btnRight").disabled = true;
            }
            $id("btnLeft").disabled = false;
        }
    })














function $id(id){  //$id("btnLeft")
    return document.getElementById(id);  //document.getElementById("btnLeft")
}


window.addEventListener("load", function(){

    let wrap = document.querySelector(".wrap");
    let curIndex = 0;
    //-----------------------------------------btnLeft.onclick
    $id("btnLeft").onclick = function(){
        curIndex--;
        wrap.style.left = -1240 * curIndex + "px";
        
        if(curIndex === 0){
            $id("btnLeft").disabled = true;
        }
        $id("btnRight").disabled = false;
    }
    //-----------------------------------------btnRight.onclick
    $id("btnRight").onclick = function(){
        curIndex++; //1
        wrap.style.left = -1240 * curIndex + "px";

        if(curIndex === 1){
            $id("btnRight").disabled = true;
        }
        $id("btnLeft").disabled = false;
    }
})

