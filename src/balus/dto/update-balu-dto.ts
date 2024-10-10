import {PartialType} from '@nestjs/mapped-types';
import { CreateBaluDto} from './create-balu-dto';

export class UpdateBaluDto extends PartialType
  (CreateBaluDto) {
  }