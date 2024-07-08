import * as graphql from "@nestjs/graphql";
import { WebScanResolverBase } from "./base/webScan.resolver.base";
import { WebScan } from "./base/WebScan";
import { WebScanService } from "./webScan.service";

@graphql.Resolver(() => WebScan)
export class WebScanResolver extends WebScanResolverBase {
  constructor(protected readonly service: WebScanService) {
    super(service);
  }
}
