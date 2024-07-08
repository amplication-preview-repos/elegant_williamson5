import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CloudScanServiceBase } from "./base/cloudScan.service.base";

@Injectable()
export class CloudScanService extends CloudScanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
