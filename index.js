var f="Free";
var p="Paid"; 
import Udemy from './udemy-courses.js';
const output=document.querySelector(".output");
// console.log(Udemy);

//    var aaray=Udemy.filter((e)=>e.subject==='Web Development')
//    console.log(aaray)

const btn=document.querySelectorAll("button");
btn.forEach((ele)=>{
  ele.addEventListener("click",()=>{
      output.innerHTML='';
         var aaray=Udemy.filter((e)=>e.subject===ele.innerHTML)
         aaray.map((item,i)=>{
            if(i<20)
            {
                var div=`  <div class="col-md-4 col-12 col-sm-12 col-xs-12 col-lg-4 mr-2 mt-3 p-3 mx-auto " style=" border:1px solid black">
        <h6 class="text-center">${item.course_title}</h6>

                 <div class="link">
            <p class="text-center">Duration: <span class="text-danger" style="font-weight: 800;">${item.content_duration.substring(0,10)}Hrs</span></p>
            <p class="text-center">Paid/Free: <span class="text-danger" style="font-weight: 800;">${item.is_paid ? p:f }</span></p>
            <p class="text-center">Level: <span class="text-danger" style="font-weight: 800;">${item.level}</span></p>
        </div>
        <div class="link">
            <p class="text-center">Price: <span class="text-danger" style="font-weight: 800;">${item.price}$.</span></p>
            <p class="text-center">Subject: <span class="text-danger" style="font-weight: 800;">${item.subject}</span></p>
            <p class="text-center">Published: <span class="text-danger" style="font-weight: 800;">${item.published_timestamp}</span></p>
        </div>
        <a href=${item.url}><button class="btn-dark mt-3" style="width: 100%;">More Info</button></a>
    </div>
    </div>
    `;

    output.innerHTML+=div;
            }
         });
  })
})