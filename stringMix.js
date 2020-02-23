var ob1="mmmmm m nnnnn y&friend&Paul has heavy hats! &";
var ob2="my frie n d Joh n has ma n y ma n y frie n ds n&";
var alphabet = new Array();


function Frequency(string){
  var count = {};
  string.split('').forEach(function(ch) {
   if(ch.match(/[a-z]/)){
     count[ch] ? count[ch]++ : count[ch] = 1;
   }
  });
  return count;
 }

 function Alphabet(){
   var alphabet=new Array();
   for(var i=97; i<122;i++){
    alphabet.push(String.fromCharCode(i));
   }
   return alphabet;
 }

 function SearchMax(obj1,obj2,alphabet){
    var res = {}
    alphabet.forEach(x=>{
      if(obj1[x]>1 || obj2[x]>1){
        res[x]={};
      if((x in obj1) && (x in obj1)){
        if(obj1[x]>obj2[x]){
          res[x].number = 1;
          res[x].status = ':';
          res[x].count = obj1[x];
        }
       else if(obj1[x]<obj2[x]){
          res[x].number = 2;
          res[x].status = ':';
          res[x].count = obj2[x];
        }
        else if(obj1[x]===obj2[x]){
          res[x].number = null;
          res[x].status = '=:';
          res[x].count = obj2[x];
        }
      }
      else if((x in obj1) && !(x in obj2)){
          res[x].number = 1;
          res[x].status = ':';
          res[x].count = obj1[x];
      }
      else if(!(x in obj1) && (x in obj2)){
          res[x].number = 2;
          res[x].status = ':';
          res[x].count = obj2[x];
      }  
      }   
    })
  return res;
 }



 ob1 = Frequency(ob1);
 ob2 = Frequency(ob2);
 alphabet = Alphabet();
var ob=SearchMax(ob1,ob2,alphabet);
//console.log(ob);


 function print(obj,alphabet){
  var temp = "";
  var arr = new Array();
  alphabet.forEach(x => {
    if(x in obj){
      arr = [];
      for(var i=0;i<obj[x].count;i++){
        arr.push(x);
      }
      arr = arr.join('');
      //console.log(arr);
      if(obj[x].number!=null)
        temp+=(obj[x].number+obj[x].status+arr+'/');
      if(obj[x].number===null)
        temp+=(obj[x].status+arr+'/');
    }
  });
    console.log(temp);
    return;
}
print(SearchMax(ob1,ob2,alphabet),alphabet);