import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy} from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
  constructor(){
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    });
  }

  validate(payload: any) {
    // A validate metódusban ellenőrizheted a token payload-ját, és visszaadhatod a felhasználói adatokat.
    console.log("jwtStrategy active");
    console.log(payload);
    return payload ;
  }
  
}
