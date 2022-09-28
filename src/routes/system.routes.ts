import express from 'express';
import { getProcessInfo, getResourceUsage, getServerTime, getSystemInfo } from '../controllers/system-status.controller';
import { deserializeUser } from '../middleware/deserializeUser';
import { requireUser } from '../middleware/requireUser';

const router = express.Router();

// protected router
// router.use(deserializeUser, requireUser);

// Get currently logged in system
router.get('/status', getSystemInfo);

router.get('/time', getServerTime);

router.get('/usage', getResourceUsage);

router.get('/process', getProcessInfo);

export default router;
