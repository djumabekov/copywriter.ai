import {
  getOpenAiResult,
  saveResult,
  getSavedResults,
  delFromSavedResults,
} from '../controllers/ChatController.js';
import { getTemplate, getTemplates, saveTemplate } from '../controllers/TemplateController.js';

import express from 'express';
import cors from 'cors';

const router = express.Router();
router.use(express.json());
router.use(cors());

router.post('/chat', getOpenAiResult);

router.post('/chat/saveresult', saveResult);

router.post('/chat/getsavedresults', getSavedResults);

router.delete('/chat/delfromsavedresults/:id', delFromSavedResults);

router.post('/chat/gettemplate', getTemplate);

router.post('/chat/gettemplates', getTemplates);

router.post('/chat/savetemplate', saveTemplate);
export { router };
