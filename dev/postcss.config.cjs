const postcssRtlLogicalProperties = require('postcss-rtl-logical-properties');
const postcssRTL = require('postcss-rtl');
module.exports = {
    plugins: [
        postcssRtlLogicalProperties(),
        postcssRTL({
            blacklist: postcssRtlLogicalProperties.ignoreDeclarationList
        }),
        require('autoprefixer')(),
    ]
};