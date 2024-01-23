import { CanActivateFn } from '@angular/router';

export const dumbGuard: CanActivateFn = (route, state) => {
  alert("you cannot access to this route")
  return false;
};
