import { NextFunction, Request, Response } from 'express';
import * as os from 'os';
import * as process from 'process';
import {
  IProcessInfoResponse,
  IResourceUsageResponse,
  IServerTimeResponse,
  ISystemInfoResponse
} from '../@types/system-status.types';

export const getSystemInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: ISystemInfoResponse = {
      cpus: os.cpus(),
      network: os.networkInterfaces(),
      os: {
        platform: process.platform,
        version: os.release(),
        totalMemory: os.totalmem(),
        uptime: os.uptime()
      },
      currentUser: os.userInfo()
    };

    res.status(200).json({
      status: 'success',
      data: response,
    });
  } catch (err) {
    next(err);
  }
}

// eslint-disable-next-line class-methods-use-this
export const getServerTime = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const now: Date = new Date();
    const utc: Date = new Date(
      now.getTime() + now.getTimezoneOffset() * 60000
    );
    const time: IServerTimeResponse = {
      utc,
      date: now
    };
    res.status(200).json({
      status: 'success',
      data: time,
    });
  } catch (error) {
    next(error);
  }
}

export const getResourceUsage = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const totalMem: number = os.totalmem();
    const memProc: NodeJS.MemoryUsage = process.memoryUsage();
    const freemMem: number = os.freemem();

    const response: IResourceUsageResponse = {
      processMemory: memProc,
      systemMemory: {
        free: freemMem,
        total: totalMem,
        percentFree: Math.round((freemMem / totalMem) * 100)
      },
      processCpu: process.cpuUsage(),
      systemCpu: os.cpus()
    };

    res.status(200).json({
      status: 'success',
      data: response,
    });
  } catch (err) {
    next(err);
  }
}

export const getProcessInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response: IProcessInfoResponse = {
      procCpu: process.cpuUsage(),
      memUsage: process.memoryUsage(),
      env: process.env,
      pid: process.pid,
      uptime: process.uptime(),
      applicationVersion: process.version,
      nodeDependencyVersions: process.versions
    };

    res.status(200).json({
      status: 'success',
      data: response,
    });
    
  } catch (err) {
    next(err);
  }
}