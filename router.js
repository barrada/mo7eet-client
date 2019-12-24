import Vue from 'vue'
import Router from 'vue-router'

import home from '~/components/HelloWorld'
import sports from '~/views/Sports'
import recipes from '~/views/Recipes/Recipes'
import ME_Recipes from '~/views/Recipes/ME_Recipes'
import Single_Recipe from '~/views/Recipes/Single_Recipe'
import Article from '~/views/Article.vue'
// import sports from '~/views/Sports'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
				path: '/',
				name:'home',
        component: home
			},
			{
				path: "/الرياضه",
				name: "sports",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Sports.vue"),
					sports,
					// props:true,
					props:(route) => ({ page: route.query.p })
			},{
				path: "/وصفات",
				name: "recipes",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Recipes/Recipes.vue"),
					recipes,
					// props:true,
					props:(route) => ({ page: route.query.p })
			},
			{
				path: "/وصفات/وصفات-شرقيه",
				name: "me-recipes",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Recipes/ME_Recipes.vue")
					ME_Recipes,
			},
			{
				path: "/طهي/طريقه-عمل/:slug",
				name: "recipe_article",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Recipes/Single_Recipe.vue"),
					Single_Recipe,
					props:true,
					props:(route) => ({ slug: route.params.slug })       
			},
			{
				path: "/:slug",
				name: "article",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Recipes/Single_Recipe.vue"),
					Article,
					props:true,
					props:(route) => ({ slug: route.params.slug })       
			},
    ]
  })
}