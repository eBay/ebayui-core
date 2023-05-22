const README = ["Welcome", "Getting Started", "Contributing"];

const categories = [
    "buttons",
    "dialogs",
    "form input",
    "graphics & icons",
    "media",
    "navigation & disclosure",
    "notices & tips",
    "progress",
    "building blocks",
];
// Ensure that the "Overview" file is always above all of the other stories
const categoriesWithOverview = categories.flatMap((category) => [
    category,
    ["Overview"],
]);

export default [...README, ...categoriesWithOverview];
