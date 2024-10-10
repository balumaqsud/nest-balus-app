import { Test, TestingModule } from '@nestjs/testing';
import { BalusController } from './balus.controller';

describe('BalusController', () => {
  let controller: BalusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BalusController],
    }).compile();

    controller = module.get<BalusController>(BalusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
