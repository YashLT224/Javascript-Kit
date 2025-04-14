//maximum depth binary tree
//Input [3,9,20, null, null,15,7]
//output =3

function maxDepth(root) {
    if(!root)return 0;
    return 1+Math.max(maxDepth(root.left),maxDepth(root.right));
   }
   console.log(maxDepth(
     {
       value:3,
       left:{
         value:9
       },
       right:{
          value:20,
          left:{
            value:15,
          },
          right:{
            value:7
          }
        }
     }
     
     ));
   