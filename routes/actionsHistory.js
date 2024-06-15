import express from 'express';
import { getHistory, addStarted, updatePause, updateReset, updateFinished,updateRestarted } from '../controllers/historico.js';

const routerHistory = express.Router()

routerHistory.get('/history', getHistory);

routerHistory.post('/history/started', addStarted);

routerHistory.put('/history/pause/:id', updatePause);

routerHistory.put('/history/reset/:id', updateReset);

routerHistory.put('/history/finished/:id', updateFinished);

routerHistory.put('/history/restarted/:id', updateRestarted);

export default routerHistory;