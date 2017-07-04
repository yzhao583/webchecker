var fs      = require('fs');
var Monitor = require('./lib/monitor');
var YAML    = require('yamljs');
var config  = YAML.load('./config/production.yaml');

// start the monitor
monitor = Monitor.createMonitor(config.monitor);

// load plugins
config.plugins.forEach(function(pluginName) {
  var plugin = require(pluginName);
  if (typeof plugin.initMonitor !== 'function') return;
  console.log('loading plugin %s on monitor', pluginName);
  plugin.initMonitor({
    monitor: monitor,
    config:  config
  });
});

monitor.start();

module.exports = monitor;
