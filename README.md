# Global styles and css modules - webpack configuration

## Intro
If you want to integrate your project with css modules but you still have to keep a huge amount of global styles files. This repository contains simple webpack configuration for working with both types of styles. 

There are a few way to integrate css modules with big project which has global styles too. This is a probably the easiest way to keep both kind of styles. This example of configuration works with `less` preprocessor, but feel free to change loaders for `sass`. 

## Configuration
Basically global styles can stay as they are right now, all we need to do is create modules styles files and add a few lines of webpack styles loaders.
To recognize global and module style file I suggest to have naming convention for modules files. In this case it will be:

    //global styles files
    main.less 

    //module styles files
    header.module.less

We need to add two rules to webpack which one of them is for `modules` files and the second one is for `global` files. Both should have option `include/exlude`. This is how we tell webpack which configuration is for which files. 

### Webpack 4.x

For webpack 4.x we have to add `modules` property in `css-loader` options. Modules property has `localIdentName` property when we can define our own displayed unique htmlClass name.
https://webpack.js.org/loaders/css-loader/#localidentname

    {
        test: /\.less$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: {
                        localIdentName: '[name]__[local]___[hash:base64:5]',
                    },
                },
            },
            {
                loader: 'less-loader',
                options: { sourceMap: true },
            },
        ],
        include: /\.module\.less$/,
    },
    {
        test: /\.less$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: { sourceMap: true },
            },
            {
                loader: 'less-loader',
                options: { sourceMap: true },
            },
        ],
        exclude: /\.module\.less$/,
    }

### Webpack x3
Webpack in version 3.x has similar configuration, but properties for module are not nested, like in example below.

    {
        test: /\.less$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: {
                    sourceMap: true,
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]',
                },
            },
            {
                loader: 'less-loader',
                options: { sourceMap: true },
            },
        ],
        include: /\.module\.less$/,
    },
    {
        test: /\.less$/,
        use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
                options: { sourceMap: true },
            },
            {
                loader: 'less-loader',
                options: { sourceMap: true },
            },
        ],
        exclude: /\.module\.less$/,
    }



## Demo and screenshot
You can clone this repository, run `npm install` and `npm run start` to see live working demo and try it by yourself on this basic example.

