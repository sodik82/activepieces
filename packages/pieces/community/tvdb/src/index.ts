import { createPiece, PieceAuth } from '@activepieces/pieces-framework';
import { searchByRemoteid } from './lib/actions/search-by-remoteid';

export const tvdbAuth = PieceAuth.SecretText({
  displayName: 'TVDb API key',
  required: true,
});

export const tvdb = createPiece({
  displayName: 'Tvdb',
  auth: tvdbAuth,
  minimumSupportedRelease: '0.20.0',
  logoUrl: 'https://cdn.activepieces.com/pieces/tvdb.png',
  authors: [],
  actions: [searchByRemoteid],
  triggers: [],
});
