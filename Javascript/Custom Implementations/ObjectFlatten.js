 



let user={
    name:'akshay',
    address:{
        Pincode:160101,
        Personal:{
            city:'Dehradun',
            area:'uttarakhand'
        },
        office:{
            city:'Hitec',
            area:'Hyderabad'
        }
    }
}




function format(obj,defaultKey){
     let result={}
     function traverse(obj,Objkey){
        for(let key in obj ){
          if(typeof obj[key]==='object'){
            traverse(obj[key],Objkey+'_'+key);
          }
          else{
            result[Objkey+'_'+key]=obj[key];
          }
       }
   }
 traverse(obj,defaultKey);
 return result;
}
   
console.log(format(user,'user'))






output={
    user_name:'Akshay',
    user_address_Pincode:160,
    user_address_Personal_city:'Dehradun',
    user_address_Personal_area:'uttarakhand',
    user_address_office_city:'Hitec',
    user_address_office_area:'Hyderabad',
}