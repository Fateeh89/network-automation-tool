import express from 'express';
import { getDashboard } from '../services/reporter';

const router = express.Router();

// Route for the web dashboard
router.get('/', (req, res) => {
    res.send(getDashboard());
});

// Additional web routes can be added here

export default router;