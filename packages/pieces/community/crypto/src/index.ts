import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { hashText } from './lib/actions/hash-text';
import { generatePassword } from './lib/actions/generate-password';

export const Crypto = createPiece({
  displayName: 'crypto',
  auth: PieceAuth.None(),
  minimumSupportedRelease: '0.9.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/crypto.png',
  authors: [],
  actions: [hashText, generatePassword],
  triggers: [],
});
