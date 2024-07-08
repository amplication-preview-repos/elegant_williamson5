import { Module } from "@nestjs/common";
import { CloudScanModuleBase } from "./base/cloudScan.module.base";
import { CloudScanService } from "./cloudScan.service";
import { CloudScanController } from "./cloudScan.controller";
import { CloudScanResolver } from "./cloudScan.resolver";

@Module({
  imports: [CloudScanModuleBase],
  controllers: [CloudScanController],
  providers: [CloudScanService, CloudScanResolver],
  exports: [CloudScanService],
})
export class CloudScanModule {}
