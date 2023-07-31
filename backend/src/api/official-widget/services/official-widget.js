'use strict';

/**
 * official-widget service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::official-widget.official-widget');
