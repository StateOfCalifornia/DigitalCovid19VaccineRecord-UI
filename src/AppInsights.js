import { ApplicationInsights } from '@microsoft/applicationinsights-web'
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js'
import { globalHistory } from "@reach/router"

const {APPLICATION_INSIGHTS_INSTRUMENTATION_KEY} = window.config;
const reactPlugin = new ReactPlugin();
const ai = new ApplicationInsights({
    config: {
        instrumentationKey: '0a94977e-279d-4407-8f57-864d08dd878e',
        extensions: [reactPlugin],
        extensionConfig: {
            [reactPlugin.identifier]: { history: globalHistory }
        }
    }
})
ai.loadAppInsights()

export default (Component) => withAITracking(reactPlugin, Component)
export const appInsights = ai.appInsights 