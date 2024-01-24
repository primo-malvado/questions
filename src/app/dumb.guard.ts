import { CanActivateFn } from '@angular/router';

export const dumbGuard: CanActivateFn = (route, state) => {
  let canEnter = false;

  if(canEnter){
    return true; 
  }else{
    alert("you cannot access to this route")
    return false;
  }
};
