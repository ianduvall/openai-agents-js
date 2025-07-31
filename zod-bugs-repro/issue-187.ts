// https://github.com/openai/openai-agents-js/issues/187

import { Agent } from '@openai/agents';
import { z } from 'zod';

const SimpleOutput = z.object({
  hotelName: z.string(),
  hotelWeb: z.string(),
});

new Agent({
  name: 'test agent',
  instructions: 'Test instructions',
  outputType: SimpleOutput,
});
