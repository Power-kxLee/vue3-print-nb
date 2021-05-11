/*
 * @Author: lee
 * @Date: 2021-05-10 16:40:30
 * @LastEditors: lee
 * @LastEditTime: 2021-05-11 14:18:45
 * @Description: file content
 */
import Print from './packages/print.js';
Print.install = function (Vue) {
  Vue.directive('print', Print);
};

export default Print;