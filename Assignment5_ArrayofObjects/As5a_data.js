var alldetails = [{BookId:"1",
            BookName:"Harry Potter",
            BookGenere:"Fan",
            BookCost:"122",
            BookPublishedYear:"2007"}];
        
        let sub=document.getElementById("submit");
        sub.addEventListener('click',()=>{
            let id=document.getElementById("ID").value;
            let name=document.getElementById("Name").value;
            let genere=document.getElementById("Genere").value;
            let cost=document.getElementById("Cost").value;
            let year=document.getElementById("year").value;
            console.log("BookId",id);
            console.log("BookName",name);
            console.log("BookGenere",genere);
            console.log("Cost",cost);
            console.log("Year",year);
            let newobj = {BookId: id,
                BookName:name,
                BookGenere:genere,
                BookCost:cost,
                BookPublishedYear:year}
            alldetails.push(newobj);
        }
        )
        