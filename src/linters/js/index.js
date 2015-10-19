import {
    CLIEngine
} from 'eslint';

import path from 'path';

let cli,
    lintText,
    lintFiles;

cli = new CLIEngine({
    useElintrc: false,
    // baseConfig: false,
    parser: 'babel-eslint',
    baseConfig: path.resolve(__dirname, './eslintrc.json')
});

/**
 * @param {String} text
 */
lintText = (text) => {
    return cli.executeOnText(text).results[0];
};

export {
    lintText
};
