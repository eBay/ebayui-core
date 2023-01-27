## CDN Loader

This module helper allows components to download their source from a CDN. This is mostly used for components which rely on large external libraries.
Since these large libraries will probably be bundled with the initial payload, we want to offload them and load them afterwards. Most components here do not require these on page load, but rather can wait before loading (3d-player, video, charts).

### How it loads

First, the source project is included as a `devDepdency` in `package.json`. Then, in `scripts/generate-cdn.js`, we can add a loader for this source. This loader will copy the given source files needed into a `_cdn` directory, and lock down the given version. This version will be updated in the `./versions.json` file, which will be used by the cdn loader to know what version will be used.
Once the `_cdn` directory is generated, the contents should be uploaded to a CDN, before publishing the next version. Also the `./versions.json` file needs to be checked in.

### How it works

This CDN loader does either a `requestIdleCallback` or `setTimeout` (if `requestIdleCallback` is not supported in the browser). Once that completes, it then loads the file from the CDN and injects it into the head of the page. It can load CSS, JS, or JS with type=module.
This will retry 3 times to load the script before erroing out.
