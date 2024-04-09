import { createAction, Property } from '@activepieces/pieces-framework';
import { tvdbAuth } from "../..";

export const searchByRemoteid = createAction({
  auth: tvdbAuth,
  name: 'searchByRemoteid',
  displayName: 'Search by remoteId',
  description: 'Search DB by remote ID (e.g. imdbId)',
  props: {},
  async run() {
    // Action logic here
  },
});
