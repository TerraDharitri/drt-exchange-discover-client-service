import { Module } from '@nestjs/common';
import { ApiConfigModule, ApiMetricsController, HealthCheckController } from '@drt-monorepo/common';
import { ApiMetricsModule } from '@drt-monorepo/common';
import { LoggingModule } from '@terradharitri/sdk-nestjs-common';
import configuration from '../config/configuration';

@Module({
  imports: [
    LoggingModule,
    ApiMetricsModule,
    ApiConfigModule.forRoot(configuration),
  ],
  providers: [],
  controllers: [
    ApiMetricsController,
    HealthCheckController,
  ],
})
export class PrivateAppModule { }
