let sub2=document.getElementById("submit2");
        sub2.addEventListener('click',()=>{
            let sid=document.getElementById("sid").value;
            let det = alldetails.find(det => det.BookId === sid) ;
            if(det){
                console.log(det);
                document.getElementById("as5").innerHTML=JSON.stringify(det,null,2) ;
            }
            else{
                console.log("Not found");
                const msg = "The entered Book ID is not found";
                document.getElementById("as5").innerHTML=msg;
            }
           
        })
        let sub3=document.getElementById("show");
        sub3.addEventListener('click',() =>{
            document.getElementById("as5").innerHTML=JSON.stringify(alldetails,null,2);
        })