import { Module } from "@nestjs/common";
import { WebScanModuleBase } from "./base/webScan.module.base";
import { WebScanService } from "./webScan.service";
import { WebScanController } from "./webScan.controller";
import { WebScanResolver } from "./webScan.resolver";

@Module({
  imports: [WebScanModuleBase],
  controllers: [WebScanController],
  providers: [WebScanService, WebScanResolver],
  exports: [WebScanService],
})
export class WebScanModule {}
