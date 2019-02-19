const markoWidgets = require('marko-widgets');

/**
 * Hack to get the widget id before w-bind in Marko 3.
 * In Marko 4 this will return undefined, which means no id.
 */
module.exports = function(out) {
    const widgetArgs = out.data.widgetArgs;
    if (widgetArgs) {
        return `${widgetArgs.scope}-${widgetArgs.id}`;
    }

    const ctx = markoWidgets.getWidgetsContext && markoWidgets.getWidgetsContext(out);
    return ctx && ctx._nextWidgetId();
};
