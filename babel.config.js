const plugins = []

if (process.env.NODE_ENV === 'production') {
  plugins.push(['transform-remove-console', { exclude: [] }])
}

// Cannot convert to ES module because babel can only read Commonjs
module.exports = {
  plugins,
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript',
    '@babel/preset-react',
  ],
}
