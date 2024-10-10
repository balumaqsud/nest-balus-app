import { Controller, Get, Post, Put, Delete, Param, Query, Body, NotFoundException } from '@nestjs/common';
import { CreateBaluDto } from './dto/create-balu-dto';
import { BalusService } from './balus.service';
import { UpdateBaluDto } from './dto/update-balu-dto';


@Controller('balus')
export class BalusController {
    constructor( private readonly balusservice: BalusService) {}

    // GET /balus ---> []
    @Get()
    getBalus(@Query('weapon') weapon: 'knife' | 'guns') {
        return this.balusservice.getBalus(weapon)
    }
    // GET /balus/:id ---> { ... }
    @Get(':id')
    getOneBalu(@Param('id') id: string) {
        try {
            return this.balusservice.getBalu(+id)
            
        } catch (error) {
            throw new NotFoundException({message: "there are no balu with this id"})
        }
        
    }

    //POST /balus ---> { ...}
    @Post()
    createBalu(@Body() createBaluDto: CreateBaluDto ) {
        return this.balusservice.createBalu(createBaluDto)
    }
    // PUT /balus/:id ---> { ... }
    @Put(':id') 
    updateBalu(@Param('id') id: string,@Body() updateBaluDto: UpdateBaluDto) {
        return this.balusservice.updateBalu(+id, updateBaluDto)
    }
    //DELETE /balus/:id
    @Delete(':id') 
    deleteBalu(@Param('id') id: string) {
        return this.balusservice.removeBalu(+id)
    }
}
