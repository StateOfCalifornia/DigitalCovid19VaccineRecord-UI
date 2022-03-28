import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from 'history';

const { APPLICATION_INSIGHTS_INSTRUMENTATION_KEY } = window.config;
const browserHistory = createBrowserHistory({ basename: '' });
const reactPlugin = new ReactPlugin();
const appInsights = new ApplicationInsights({
  config: {
    instrumentationKey: { APPLICATION_INSIGHTS_INSTRUMENTATION_KEY },
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory },
    },
  },
});
appInsights.loadAppInsights();
export { reactPlugin, appInsights };