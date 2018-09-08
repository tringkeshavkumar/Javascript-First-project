var finalData = [];
var strtable=" ";
var rindex;
var table="";
function validate(letters)
{
  var regex1 = /^[a-zA-Z]+$/;
  var regex2 = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/;
  var regex3 = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;


  if (regex1.test(letters.yourname.value) == false) {
    alert("Name must be in alphabets only");
    letters.yourname.focus();
    return false;
  }

  if (letters.yourname.value == " ") {
    alert("Name Field cannot be left empty");
    letters.yourname.focus();
    return false;
  }

  if (letters.myemail.value == " ") {
    alert("Email Field cannot be left empty");
    letters.yourname.focus();
    return false;
  }
  if (regex2.test(letters.myemail.value)==false) {
    alert("Please enter the valid email address");
    letters.myemail.focus();
    return false;
  }

  if (regex3.test(letters.yourphone.value)==false) {
        alert("Please enter your phone number");
        letters.yourphone.focus();
        return false;
      }
    if (letters.yourphone.value == " ") {
        alert("Email Field cannot be left empty");
        letters.yourphone.focus();
        return false;
      }
      var dup = false;
        for (i in finalData) {
            if ((document.getElementById('name').value == finalData[i].Name) && (document.getElementById('email').value == finalData[i].Email && (document.getElementById('phone').value == finalData[i].Phone))) {
                dup = true;
            }
        }
  if((regex1.test(letters.yourname.value) == true) &&
     (regex2.test(letters.myemail.value)==true)&&
     (regex3.test(letters.yourphone.value)==true) )
     {
     {
       if(!dup)
       {
       var jsondata=
       {
         "Name":letters.yourname.value,
         "Email":letters.myemail.value,
         "Phone":letters.yourphone.value
       };
       finalData.push(jsondata);
       var json=JSON.stringify(jsondata,0,4);
       appendtables(finalData);
        }

        else{
          alert("Duplicate Values");
        }
       }
       return false;
     }

   }
  function appendtables (data){

     for(i in data){

     strtable +='<tr>';
     strtable +='<td>'+data[i].Name +'</td>';
     strtable +='<td>'+data[i].Email +'</td>';
     strtable +='<td>'+data[i].Phone + '</td>';
     strtable +='<td><button id="edit" data-name = "'+data[i].Name+'" data-email = "'+data[i].Email+'"  data-phone = "'+data[i].Phone+'"onClick="edit_row(this)">edit</button><button onClick="del(this)">Delete</button></td></tr>';
     document.getElementById('tbodyy').innerHTML = strtable;

      }
      strtable=' ';
  }

function del(r){
  rindex = r.parentNode.parentNode.rowIndex;
  document.getElementById("table").deleteRow(rindex);
  delete finalData.pop(rindex);
}
function dels(r) {
  document.getElementById("table").deleteRow(rindex);
  delete finalData.pop(rindex);
}

function edit_row(k) {
  rindex=k.parentNode.parentNode.rowIndex;
  table=document.getElementById("table").rindex;
  // for(var i=i;i<table.rows.length;i++){
  //
  // }
    document.getElementById('save').style.display="inline";
    document.getElementById('submit').style.display="none";
    document.getElementById("name").value =k.getAttribute('data-name');
    document.getElementById("email").value =k.getAttribute('data-email');
    document.getElementById("phone").value = k.getAttribute('data-phone');
}

function dave(){

  // var newrow = row.insertRow(rIndex);

  var dup = false;

    for (i in finalData) {
        if ((document.getElementById('name').value == finalData[i].Name)
        &&
         (document.getElementById('email').value) == finalData[i].Email
         &&
         (document.getElementById('phone').value == finalData[i].Phone) &&
         ((regex1.test(document.getElementById('name').value) == false)
          || (regex2.test(document.getElementById('email').value)==false)
           || (regex3.test(document.getElementById('phone').value)==false) ))
           {
            dup = true;
        }
    }


    if (!dup)
  {
    dels(rindex);
    document.getElementById('submit').style.display="inline";
    document.getElementById('save').style.display="none";
    var Table = document.getElementById('table');
    Table.rows[rindex].cells[0].innerHTML = document.getElementById('name').value;
    Table.rows[rindex].cells[1].innerHTML = document.getElementById('email').value;
    Table.rows[rindex].cells[2].innerHTML = document.getElementById('phone').value;

  }


}

  // newrow.[0]innerHTML = document.getElementById('name').value;
  // newrow.[1]innerHTML = document.getElementById('email').value;
  // newrow.[2]innerHTML = document.getElementById('phone').value;


  // table.rows[rIndex].cells[0].innerHTML=document.getElementById('name').value;
  // table.rows[rIndex].cells[1].innerHTML=document.getElementById('email').value;
  // table.rows[rIndex].cells[2].innerHTML=document.getElementById('phone').value;



// var tb=document.getElementById("table"),rIndex;
//
//  for(var j=1;j<table.row.length;j+=1){
//      table.rows[j].onClick=function(){
//      rIndex=this.rowIndex;
//      console.log[rIndex];
//      document.getElementById("name").value=this.cells[0].innerHTML;
//      document.getElementById("email").value=this.cells[1].innerHTML;
//      document.getElementById("phone").value=this.cells[2].innerHTML;
//    };
//  }
// function edit_row()
// {
//   table.rows(rIndex).cells[0].innerHTML=document.getElementById('name').value;
//   table.rows(rIndex).cells[1].innerHTML=document.getElementById('email').value;
//   table.rows(rIndex).cells[2].innerHTML=document.getElementById('phone').value;
// }
