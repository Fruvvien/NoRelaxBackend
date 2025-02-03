// Ez a fájl definiálja a LocalStrategy-t, amelyet a felhasználói hitelesítő 
// adatok (felhasználónév és jelszó) érvényesítésére használnak a 
// bejelentkezés során.

import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { AuthService } from "../auth.service";
import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private authService: AuthService){
    super({ usernameField: "email" });  // alap esetben username/jelszó kombinációt fogad el a local passport stratégia ellenőrzés során, emiatt be kell állítani a usernameField-et
                                        // ha email-el akarunk dolgozni!

                                        
  }

  validate(email: string, password: string){
    const user = this.authService.validateUserStrategy({email, password});
    if(!user){
      throw new UnauthorizedException();
    } 
    return user;
  }
}
