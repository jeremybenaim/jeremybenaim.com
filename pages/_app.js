import App from 'next/app';
import Router from 'next/router';
import * as track from '../common/track';

Router.events.on('routeChangeComplete', url => track.pageview(url));

export default App;
