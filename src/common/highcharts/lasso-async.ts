export function load() {
    return new Promise((resolve, reject) => {
        require("lasso-loader").async((err: Error) => {
            if (err) {
                reject(err);
            } else {
                resolve(require("./highcharts"));
            }
        });
    });
}
