import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WebScanService } from "./webScan.service";
import { WebScanControllerBase } from "./base/webScan.controller.base";

@swagger.ApiTags("webScans")
@common.Controller("webScans")
export class WebScanController extends WebScanControllerBase {
  constructor(protected readonly service: WebScanService) {
    super(service);
  }
}
