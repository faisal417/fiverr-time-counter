//get elements

const fiverrForm = document.getElementById('fiverrForm');
const counter = document.querySelector('.counter')



// submit fiverr form

fiverrForm.onsubmit=(e)=>{
    e.preventDefault();

    //get data (value) from formdata object

    let formData= new FormData(e.target);
    let {date, time}= Object.fromEntries(formData.entries());


    let count = setInterval(()=>{
        //get timestamps
        let startTime = Date.now(); // we cat also use here {new Date()} instand of Date.now()
        let endTime = new Date( date +' '+ time );
        let orderTime = Math.floor(Math.abs(endTime.getTime() - startTime));
    
        console.log(orderTime);
    
        // get value from times (miliseconds)
    
        let totalSecond = Math.floor(orderTime/1000);
        let totalMin = Math.floor(totalSecond/60);
        let totalHours = Math.floor(totalMin/60);
        let totalDay = Math.floor(totalHours/24);
    
    
        let hours = totalHours - (totalDay*24);
        let min = totalMin - (totalDay*24*60) - (hours*60);
        let sec = totalSecond - (totalDay*24*60*60) - (hours*60*60) - (min*60);
    
        
            if( sec <= 0 && min <= 0 && hours <= 0 && totalDay <= 0){
                clearInterval(count);
            };
     
            counter.innerHTML=` <span> ${totalDay} Days : ${hours} Hours : ${min} Minutes : ${sec} Seconds</span> `;   
           
        
    }, 1000)
};
