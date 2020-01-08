import Vue from 'vue'
import Router from 'vue-router'

import home from '~/components/HelloWorld'
// import home from  '~/views/Recipes/Recipes.vue'
import sports from '~/views/Sports.vue'
import games from '~/views/Games.vue'
import technology from '~/views/Technology.vue'
import travel from '~/views/Travel.vue'
import fashion from '~/views/Fashion.vue'
import photography from '~/views/Photography.vue'
import recipes from '~/views/Recipes/Recipes.vue'
import ME_Recipes from '~/views/Recipes/ME_Recipes.vue'
import Single_Recipe from '~/views/Recipes/Single_Recipe.vue'
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
				path: "/رياضه",
				name: "sports",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Sports.vue"),
					sports,
					// props:true,
					props:(route) => ({ page: route.query.p })
			},
			{
				path: "/العاب",
				name: "games",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Sports.vue"),
					games,
					// props:true,
					props:(route) => ({ page: route.query.p })
			},
			{
				path: "/تكنولوجيا",
				name: "technology",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Sports.vue"),
					technology,
					// props:true,
					props:(route) => ({ page: route.query.p })
			},
			{
				path: "/السفر",
				name: "travel",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Sports.vue"),
					travel,
					// props:true,
					props:(route) => ({ page: route.query.p })
			},
			{
				path: "/موضة",
				name: "fashion",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Sports.vue"),
					fashion,
					// props:true,
					props:(route) => ({ page: route.query.p })
			},
			{
				path: "/فوتوغرافيا",
				name: "photography",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Sports.vue"),
					photography,
					// props:true,
					props:(route) => ({ page: route.query.p })
			},
			{
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
					// props:true,
					props:(route) => ({ slug: route.params.slug })       
			},
			{
				path: "/:slug",
				name: "article",     
				component: () =>
					// import(/* webpackChunkName: "about" */ "./views/Recipes/Single_Recipe.vue"),
					Article,
					// props:true,
					props:(route) => ({ slug: route.params.slug })       
			},
    ]
  })
}