import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    // ...apply enhancements to the app
    // FONT AWESOME
    library.add(faTag);
    Vue.component('font-awesome-icon', FontAwesomeIcon);
    // DEBUG
    Vue.config.debug = true;
    dom.watch();
}
