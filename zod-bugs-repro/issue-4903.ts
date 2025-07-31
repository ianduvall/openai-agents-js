// https://github.com/colinhacks/zod/issues/4903
// https://github.com/colinhacks/zod/issues/4984

import { Agent, tool } from '@openai/agents';
import { z } from 'zod/v3';

const getWeather = tool({
  name: 'get_weather',
  description: 'Get the weather for a given city',
  parameters: z.object({ city: z.string() }),
  async execute({ city }) {
    return `The weather in ${city} is sunny.`;
  },
});

new Agent({
  name: 'Haiku Agent',
  instructions: 'Always respond in haiku form.',
  outputType: z.object({ haiku: z.string() }),
  tools: [getWeather],
});
