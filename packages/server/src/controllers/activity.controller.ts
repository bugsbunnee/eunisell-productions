import { activityRepository } from '../repositories/activity.repository.js';

import type { Request, Response } from 'express';

const MAX_LIMIT = 50;
const DEFAULT_LIMIT = 8;

class ActivityController {
  async recent(req: Request, res: Response) {
    const limit = Math.min(Number(req.query.limit) || DEFAULT_LIMIT, MAX_LIMIT);
    const data = await activityRepository.recent(limit);

    return res.json({ data });
  }
}

export default new ActivityController();
