import { createAction, Property } from '@activepieces/pieces-framework';
import { simpleSecretAuth } from '../..';

export const getSecret = createAction({
  auth: simpleSecretAuth,
  name: 'getSecret',
  displayName: 'Get Secret',
  description: 'Get your stored secret',
  props: {},
  async run(context) {
    return context.auth;
  },
});
