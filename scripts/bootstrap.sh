list_dev_pkgs="
    babel
    webpack
    flow-bin
    jest
    file-loader
    redux
    eslint
    https://github.com/nosebit/common-config.git
    clean-webpack-plugin
    write-file-webpack-plugin
    html-webpack-plugin
    flowtype-loader
    babel-plugin-add-module-exports
    babel-plugin-autobind-class-methods
    babel-plugin-transform-class-properties
    babel-plugin-transform-export-extensions
    babel-polyfill
    react-redux
    react-router
    style-loader
    css-loader
    stylus
    stylus-loader
    url-loader
    eslint-loader
    babel-loader
    eslint-plugin-react
    babel-eslint
    babel-preset-env
    babel-preset-react
    babel-preset-flow
"

for i in $list_dev_pkgs;
do
    echo $i;
done