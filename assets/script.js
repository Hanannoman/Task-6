



fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
.then(res => res.json())
.then(res=>book4(res))

let Div=document.querySelector('.div');

function book4(res) {
    console.log(res);




    for (let index = 42; index < res.length; index++) {
        Div.innerHTML+=`
        <div class="bord " >
        <div class="d-flex justify-content-center align-items-center border bg-body-tertiary"
" style="width:200px; height:250px"><img style="width:135px;" src="${ res[index].simple_thumb}"/></div>
        <h3 class="py-2 text-center lon">${res[index].title}</h3>
        <p class="text-center text-body-secondary"> ${res[index].author}</p>
        

        `
        
        
    }
    

        
        
    }
    fetch("https://wolnelektury.pl/api/authors/adam-mickiewicz/kinds/liryka/parent_books/")
.then(sol => sol.json())
.then(sol=>book8(sol))
let bk= document.getElementById('bok8');

function book8(sol){
    console.log(sol);



    for (let index = 34; index <sol.length-4 ; index++) {
        bk.innerHTML+=`
            <div style="width:245px;"  class="d-flex justify-content-evenly align-items-center flex-column "px-3">

             <div class="d-flex justify-content-center align-items-center border bg-body-secondary bg-opacity-50"
        " style="width:195px; height:250px">
<img style="width:65%;" src="${ sol[index].simple_thumb}"/></div>

        <h3 class="py-2 text-center fs-6 lon" >${sol[index].title}</h3>
        <p class=" text-body-secondary text-center"> ${sol[index].author}</p>
        

        `
        
    }



    
}

    
    

fetch("https://wolnelektury.pl/api/books/studnia-i-wahadlo/")
.then(ans => ans.json())
.then(ans=>one(ans))
let oneBook=document.querySelector('.once');

function one(ans) {
    console.log(ans);
 
        
            
    
   
    oneBook.innerHTML=`
    <div class="d-flex justify-content-center align-items-center">
    <img style="width:200px; height:300px;" src="${ ans.cover}" class="border border-4 border-white"/>
    <div class="w-50  sec1 px-4">
    <h3 class="titl"> ${ans.fragment_data.title}</h3>
    <div style="width:50px;height:2px" class="lin "></div>
    <h5 class="py-2  "> ${ans.authors[0].name}</h5>
    <p class="text-body-secondary">${ans.fragment_data.html}</p>
    <div class="d-flex  ">
          <p class="  fw-bold ">Shop it Now </p> 
          <i class="fa-solid fa-arrow-right p-2"></i>
          
        </div>
       
    </div>
    </div>
    


    `
    

    
        
    
    
   
    
}
function change(button) {
    const activButton=document.querySelector('.activ');
    if(activButton){
        activButton.classList.remove('activ');
    }
    
    button.classList.add('activ');
    

}



          
        
        
        

