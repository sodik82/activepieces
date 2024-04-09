import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { getSecret } from './lib/actions/get-secret';

export const simpleSecretAuth = PieceAuth.SecretText({
  displayName: 'Your secret text',
  required: true,
});

export const simpleSecret = createPiece({
  displayName: 'Simple Secret',
  auth: simpleSecretAuth,
  minimumSupportedRelease: '0.20.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/simple-secret.png',
  authors: [],
  actions: [getSecret],
  triggers: [],
});
