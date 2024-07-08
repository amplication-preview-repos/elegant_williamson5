import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WebScanServiceBase } from "./base/webScan.service.base";

@Injectable()
export class WebScanService extends WebScanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
