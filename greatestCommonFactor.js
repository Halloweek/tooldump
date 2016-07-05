var gcf = function(a, b) {  
   if (b === 0) {  
       return a;  
   }  

   return gcf(b, a % b);  
}; 
