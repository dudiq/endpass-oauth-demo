import EndpassCompose from '@endpass/connect/compose';
import EndpassOauth from '@endpass/connect/oauth';
import EndpassDocument from '@endpass/connect/document';

export default class Connect {
  constructor() {
    const ENDPOINT_CLIENT_ID = process.env.ENDPOINT_CLIENT_ID;
    const AUTH_URL = process.env.AUTH_URL;
    const OAUTH_SERVER = process.env.OAUTH_SERVER;

    const authUrl = AUTH_URL || 'https://auth.endpass.com';

    console.log('ENDPOINT_CLIENT_ID', ENDPOINT_CLIENT_ID);
    console.log('AUTH_URL', authUrl);
    console.log('OAUTH_SERVER', OAUTH_SERVER);

    this.instance = new EndpassCompose({
      clientId: ENDPOINT_CLIENT_ID,
      authUrl,
      oauthServer: OAUTH_SERVER,
      plugins:[
//        EndpassDocument,
        EndpassOauth,
      ]
    });
  }

  request(...args) {
    return this.instance.request(...args);
  }
}
