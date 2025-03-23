import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiParam } from '@nestjs/swagger';

@Controller('userLogin')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

 /*  @Post()
  create(@Body() createLoginDto: CreateLoginDto) {
    return this.loginService.create(createLoginDto);
  }

  @Get()
  findAll() {
    return this.loginService.findAll();
  } */


   /**
     * Returns the data of a user with the given email
     * 
     * @param email The email of the user
     * @returns 
     */
    @ApiParam({
      name: 'email',
      description: 'The email of the user to get',
      type: 'string',
      example: "asd2@gmail.com"
    })
  @Get(':email')
  findOneWithEmail(@Param('email') email: string) {
    return this.loginService.findOneWithEmail(email);
  }

  /* @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoginDto: UpdateLoginDto) {
    return this.loginService.update(+id, updateLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  } */
}
