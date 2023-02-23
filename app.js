let i = Number
 for (let i = 1; i < 51; i++){
  if(i % 10 == 0){
   console.log('今'+( i )+'回ループしました');
  }else if(i % 4 == 0){
   console.log('４で割れる数です。'+'['+(i)+']');
  }else {
    console.log(i);
   } 
   if(i === 50){
   alert('50回カウントが終わりました');  
  }
}
