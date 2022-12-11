'use strict';

/**
 * register-support service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::register-support.register-support');
