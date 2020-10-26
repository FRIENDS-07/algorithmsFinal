function isTouching(obc1, obc2){

    if(obc2.x - obc1.x <= obc1.width / 2 + obc2.width / 2 && obc1.x - obc2.x <= obc1.width / 2 + obc2.width / 2 &&
      obc2.y - obc1.y <= obc1.height / 2 + obc2.height / 2 && obc1.y - obc2.y <= obc1.height / 2 + obc2.height / 2){
      return true;
    }
    else{
      return false;
    }
  
  }
  
  function bounce(obc1, obc2){
  
    if(obc2.x - obc1.x <= obc1.width / 2 + obc2.width / 2 && obc1.x - obc2.x <= obc1.width / 2 + obc2.width / 2 ){
      obc2.velocityX = -1 * obc2.velocityX;
      obc1.velocityX = -1 * obc1.velocityX;
    }
  
    if(obc2.y - obc1.y <= obc1.height / 2 + obc2.height / 2 && obc1.y - obc2.y <= obc2.height / 2 + obc1.height / 2){
      obc2.velocityY = -1 * obc2.velocityY;
      obc1.velocityY = -1 * obc1.velocityY;
    }
  
  }
  