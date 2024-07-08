import * as graphql from "@nestjs/graphql";
import { CloudScanResolverBase } from "./base/cloudScan.resolver.base";
import { CloudScan } from "./base/CloudScan";
import { CloudScanService } from "./cloudScan.service";

@graphql.Resolver(() => CloudScan)
export class CloudScanResolver extends CloudScanResolverBase {
  constructor(protected readonly service: CloudScanService) {
    super(service);
  }
}
