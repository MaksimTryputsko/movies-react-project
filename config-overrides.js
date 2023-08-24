const { alias } = require("react-app-rewire-alias")

module.exports = function override(config) {
  alias({
    "@shared": "src/shared",
    "@features": "src/features",
    "@pages": "src/pages",
    "@shared": "src/shared",
  })(config)

  return config
}
