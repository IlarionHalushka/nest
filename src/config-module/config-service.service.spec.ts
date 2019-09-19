import { Test, TestingModule } from '@nestjs/testing';
import { ConfigServiceService } from './config-service.service';

describe('ConfigServiceService', () => {
  let service: ConfigServiceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConfigServiceService],
    }).compile();

    service = module.get<ConfigServiceService>(ConfigServiceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
