// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import '~/assets/layout/styles/layout.css'

/*
import '~/assets/layout/scripts/jquery.min.js'
import '~/assets/layout/scripts/jquery.backtotop.js'
import '~/assets/layout/scripts/jquery.mobilemenu.js'
*/

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

 
}
