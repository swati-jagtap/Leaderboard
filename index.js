
//form validation



function formData() {
    let c=0;
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const country = document.getElementById('country');
    const score = document.getElementById('score');
    

    const warning = document.querySelector('.warning')
    console.log(warning) 
    if(c==0)
    {
        warning.textContent ="";
    }
    
   // const alert = document.createElement('h5');
   // alert.textContent = "all fields requiered";
    
   
    if(fname.value == "")
    {
        console.log("All fields requiered");
        c=1;
        if(c==1)
        {
            warning.textContent = "All fields requiered";
            c=0;
        }
        
    }
    else if(lname.value == "")
    {
        c=1;
        if(c==1)
        {
            warning.textContent = "All fields requiered";
            c=0;
        }
    }
    else if(country.value == "")
    {
        c=1;
        if(c==1)
        {
            warning.textContent = "All fields requiered";
            c=0;
        }
    }
    else if(score.value == "")
    {
        c=1;
        if(c==1)
        {
            warning.textContent = "All fields requiered";
            c=0;
        }    
    }
    else if(isNaN(score.value)==true)
    {
        c=1;
        if(c==1)
        {
            warning.textContent = "Score must be number";
            c=0;
        }       
    }   
    else
    {  
       
        const data = [fname.value,lname.value,country.value,score.value];
        showData(data);
     
    }
}

function showData(data)
{
  console.log(data);
  
  const board=document.querySelector('.board');
  const row=document.createElement('div');
  row.className="row";
  row.className +=" background";
  for(let i=0;i<=4;i++)
  {
      const col = document.createElement('div');
      col.className = 'column';
      if(i!=4){
        col.textContent=data[i];
      }
      
     // console.log(data[i])
     // console.log(col.textContent)
      //row.appendChild(col);
      if(i==0)
      {
        let d = new Date ();
        const month=["January","February","March","April","May","June","July","August","September","October","November","December"]
        var m=month[d.getMonth()];
        var day=d.getDate();
        var y=d.getFullYear();
        var h=d.getHours();
        var min=d.getMinutes();
        var sec=d.getSeconds();
       // console.log(d.getMonth(),d.getYear())
        let date = document.createElement('p');
        date.textContent = ` ${m} ${day} , ${y} ${h}:${min}:${sec}`;
        col.appendChild(date);
      }
      if(i==4)
      {
          col.className +=" colButtonStyle";
        //creating +5 -5 and delete buttons

        var Delete = document.createElement('button');
        Delete.className = 'delete';
        Delete.className += ' buttonStyle';
        Delete.textContent = 'D';

        var add5 = document.createElement('button');
        add5.className = 'add5';
        add5.className += ' buttonStyle';
        add5.textContent = '+5';

        var minnus5 = document.createElement('button');
        minnus5.className = 'minnus5';
        minnus5.className += ' buttonStyle';
        minnus5.textContent = '-5';

        var bDiv = document.createElement('div');
        bDiv.className = 'dyanamicButton';
        bDiv.appendChild(Delete);
        bDiv.appendChild(add5);
        bDiv.appendChild(minnus5);
        col.appendChild(bDiv);

        Delete.addEventListener('click',function(){
            board.removeChild(row)
            console.log(row)
            console.log(row.childNodes[3].textContent)
        })
        add5.addEventListener('click',function(){
            console.log(row)
            row.childNodes[3].textContent =parseInt(row.childNodes[3].textContent) + 5;
            console.log(row.childNodes[3].textContent)
        })
        minnus5.addEventListener('click',function(){
            console.log(row)
            row.childNodes[3].textContent -= 5;
            console.log(row.childNodes[3].textContent)
        })
      }
      row.appendChild(col);
  }
 // board.innerHTML += row;
  board.appendChild(row)
  console.log(row)

}

//dynamic rows
