import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CloudScanService } from "./cloudScan.service";
import { CloudScanControllerBase } from "./base/cloudScan.controller.base";

@swagger.ApiTags("cloudScans")
@common.Controller("cloudScans")
export class CloudScanController extends CloudScanControllerBase {
  constructor(protected readonly service: CloudScanService) {
    super(service);
  }
}
