<template>
     <v-tabs 
				class="fixed-tabs-bar" 
				show-arrows next-icon="mdi-arrow-right-bold-box-outline"
     		prev-icon="mdi-arrow-left-bold-box-outline" 
				mobile-break-point
		 >
   	 			<v-tab :to="{name:'recipes'}" >جميع الوصفات</v-tab>
  	 			<v-tab :to="{name:'me-recipes'}">وصفات شرقيه</v-tab>
  	 			<v-tab>وصفات غربيه</v-tab>
  	 			<v-tab>وصفات غربيه</v-tab>
  	 			<v-tab>وصفات غربيه</v-tab>
  	 			<v-tab>وصفات غربيه</v-tab>				
 		 </v-tabs>

</template>

<style>
/* .fixed-tabs-bar {
    position: -webkit-sticky;
    position: sticky;
   top: 3.8rem;
    z-index: 2;
} */
/* .v-application .primary--text{
	color:#FF6600!important; 
	caret-color:!important
} */
.v-tab--active{
	color:gray!important;
}
.v-tab--active[aria-selected='true']{
	/* color:#F68B40!important; */
	color:#FFFFFF!important;
	/* caret-color:red!important; */
	caret-color:#D6D6D6!important;
	background-color:orange
}
.v-application .primary--text{
	/* color:#ffa600!important */
	/* color:white!important; */
	/* caret-color:red!important */
}
.v-item-group.theme--light.v-slide-group.v-tabs-bar.v-tabs-bar--show-arrows.primary--text{
	color:#ffa600!important
}
</style>

<script>
export default {

}
</script>

<style>

</style>
