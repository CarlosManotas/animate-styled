module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'AnimateStyled',
      externals: {
        'react': 'React',
        'styled-components': 'styled-components'
      }
    }
  }
}
