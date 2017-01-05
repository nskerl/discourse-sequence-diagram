# name: diagrams
# about: Draw a sequence diagram
# version: 0.3
# authors: Nathan Skerl
# url: https://github.com/nskerl/discourse-sequence-diagram.git

enabled_site_setting :diagrams_plugin_enabled

register_asset "javascripts/snap.svg-min.js"
register_asset "javascripts/sequence-diagram-min.js"
register_asset "javascripts/initializers/sequence-diagram.js.es6"
register_asset "javascripts/sequence_diagram_dialect.js", :server_side


