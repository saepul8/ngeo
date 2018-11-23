/**
 * @module gmf.mobile.navigation.module
 */
import * as angular from 'angular';
import gmfMobileNavigationComponent from 'gmf/mobile/navigation/component.js';

/**
 * @type {!angular.IModule}
 */
export default angular.module('gmfMobileNavigationModule', [
  gmfMobileNavigationComponent.name,
]);
