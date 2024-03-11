const presets = [
  {
    presets: [["@babel/preset-env"], "@babel/preset-typescript"],
    plugins: [
      "@babel/plugin-transform-runtime",
      "babel-plugin-add-import-extension",
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
          },
        },
      ],
    ],
  },
];
module.exports = { presets };
