export default function (query = "") {
    return new RegExp(
        query.trim().replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"),
        "i",
    );
}
