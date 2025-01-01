import express from 'express';
import { addJumpbox, editJumpbox, deleteJumpbox } from '../config/jumpbox';
import { addDevice, editDevice, deleteDevice } from '../config/devices';
import { addCredential, editCredential, deleteCredential } from '../config/credentials';
import { analyzeData } from '../services/analyzer';
import { monitorTraffic, monitorDeviceHealth } from '../services/monitor';
import { generateReport } from '../services/reporter';

const router = express.Router();

// Jumpbox routes
router.post('/jumpbox', addJumpbox);
router.put('/jumpbox/:id', editJumpbox);
router.delete('/jumpbox/:id', deleteJumpbox);

// Device routes
router.post('/devices', addDevice);
router.put('/devices/:id', editDevice);
router.delete('/devices/:id', deleteDevice);

// Credential routes
router.post('/credentials', addCredential);
router.put('/credentials/:id', editCredential);
router.delete('/credentials/:id', deleteCredential);

// Analysis route
router.post('/analyze', analyzeData);

// Monitoring routes
router.get('/monitor/traffic', monitorTraffic);
router.get('/monitor/health', monitorDeviceHealth);

// Report generation route
router.get('/report', generateReport);

export default router;