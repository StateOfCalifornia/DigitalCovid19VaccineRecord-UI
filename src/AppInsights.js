import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js'
import { globalHistory } from "@reach/router"

const {APPLICATION_INSIGHTS_INSTRUMENTATION_KEY} = window.config;
const reactPlugin = new ReactPlugin();
const ai = new ApplicationInsights({
    config: {
        instrumentationKey: {APPLICATION_INSIGHTS_INSTRUMENTATION_KEY},
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: globalHistory }
        }
    }
})
ai.loadAppInsights()

export default (Component) => withAITracking(reactPlugin, Component)
export const appInsights = ai.appInsights