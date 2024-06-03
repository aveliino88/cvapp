import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://directus-b0gkskk.qubex.io').with(
  rest({
    onRequest: (options) => ({ ...options, cache: 'no-store' }),
  })
);

export default directus;