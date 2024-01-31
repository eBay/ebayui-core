export function load() {
    return new Promise((resolve, reject) => {
        require("lasso-loader").async(function (err: Error) {
            if (err) {
                reject(err);
            } else {
                resolve(require("./highcharts"));
            }
        });
    });
}
