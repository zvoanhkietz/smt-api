import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Query, Res } from "@nestjs/common";
import { CreateUserDto, ListAllEntities, UpdateUserDto } from "./interface/users.dto";
import { Response } from "express";
import { ConfigService } from "@nestjs/config";

@Controller('users')
export class UsersController
{
    constructor(private configService: ConfigService) {}

    @Post()
    create(@Body() createUserDto:CreateUserDto, @Res() res: Response) {
        console.log(
            this.configService.get<any>('database')
        );
        
        res.status(HttpStatus.CREATED).send();
    }

    @Get()
    findAll(@Query() query: ListAllEntities, @Res() res: Response){
        res.status(HttpStatus.OK).json([]);
    }

    @Get(':username')
    findOne(@Param('username') username:string){
        return `This action returns a #${username} user`;
    }

    @Put(':username')
    update(@Param('username') username:string, @Body() updateUserDto:UpdateUserDto){
        return `This action updates a #${username} user`;
    }

    @Delete(':username')
    remove(@Param('username') username:string){
        return `This action removes a #${username} user`;
    }
}