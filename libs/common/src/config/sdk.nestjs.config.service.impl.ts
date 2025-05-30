import { Injectable } from "@nestjs/common";
import { ApiConfigService } from "./api.config.service";
import { DrtnestConfigService } from "@terradharitri/sdk-nestjs-common";

@Injectable()
export class SdkNestjsConfigServiceImpl implements DrtnestConfigService {
  constructor(
    private readonly apiConfigService: ApiConfigService,
  ) { }

  getSecurityAdmins(): string[] {
    return this.apiConfigService.getSecurityAdmins();
  }

  getJwtSecret(): string {
    return ''; // We use only NativeAuth in this template, so we don't need a JWT secret
  }

  getApiUrl(): string {
    return this.apiConfigService.getApiUrl();
  }

  getNativeAuthMaxExpirySeconds(): number {
    return this.apiConfigService.getNativeAuthMaxExpirySeconds();
  }

  getNativeAuthAcceptedOrigins(): string[] {
    return this.apiConfigService.getNativeAuthAcceptedOrigins();
  }
}
