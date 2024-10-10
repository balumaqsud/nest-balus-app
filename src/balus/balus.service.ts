import { Injectable } from "@nestjs/common";
import { CreateBaluDto} from './dto/create-balu-dto'
import { UpdateBaluDto} from './dto/update-balu-dto'


@Injectable()
export class BalusService {

    //just an array
    private balus = [
        {id: 0, name: 'super', weapon: 'knife'},
        {id: 2, name: 'great', weapon: 'guns'},
    ]
    getBalus(weapon?: 'knife' | 'guns') {  
        if (weapon) {
            return this.balus.filter((balus) => balus.weapon === weapon)
        }

        return this.balus

    }
    getNames(name?: 'great' | 'super' ) {
        if (name) {
            return this.balus.filter((balus) => balus.name === name)
        }
        return this.balus
    }

    getBalu(id: number) {
        const balu = this.balus.find((balus) => balus.id === id)
        if (!balu) {
            throw new  Error('balu is not found')
        }
        return balu
    }
    createBalu(createBaluDto: CreateBaluDto ) {
        const newBalu = { 
            ...createBaluDto, id: Date.now()
        }
        this.balus.push(newBalu)
        return newBalu;
    }

    updateBalu(id: number, updateBaluDto: UpdateBaluDto) {
        this.balus = this.balus.map((balu) => {
            if (balu.id === id ) {
                return {...balu, ...updateBaluDto}

            }
            return balu;
        })  
        return this.getBalu(id)
    }
    removeBalu(id: number) {
        const toBeRemoved = this.getBalu(id)
        this.balus = this.balus.filter((balu) => balu.id !==id)
        return toBeRemoved;
    }
}

