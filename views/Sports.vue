<template>
<div> 

	<!-- <Adsense
    data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
    data-ad-slot="1234567890">
</Adsense> -->
	<!-- Featured Results -->
			<v-row
		 align="start"        
     class="mb-0 "
     no-gutters		
	>  
		<v-col lg="10" md="12" xs="12" cols="12" class="" style="background-color:#F3F3F3" >
      <v-row  class="">
          <v-col lg="6" md="6" sm="6" xs="12" cols="12" class="" style="">  						         
							<v-card
									:id="`post-${this.featured[0].id}`"
									class="mx-auto  fill-height d-flex flex-wrap"
									style=""
									:to="{name:'article',params:{slug:this.featured[0].slug}}"
											   								
							>
									<!-- <router-link to="/about"> -->
									<v-img :src="`${uploads}${this.featured[0].original_image}`" alt="" width="100%"></v-img>
									<v-card-text class="">
										<v-row> <h2  class="mr-3 mt-1">{{featured[0].title}}</h2> </v-row>
										<v-row class="mr-0 mt-3 pl-2">{{featured[0].body.substring(0,195)}}...</v-row>
									</v-card-text>
										<!-- </router-link> -->
									<v-card-actions  class="col-12" style="">
										<v-btn
											x-small								
											color="4F7496"
											class="mr-2 "
											style="font-size:12px;color:grey"																															
										>
											<h5>{{featured[0].tags}}</h5>					   
										</v-btn>
										<v-spacer></v-spacer>
											<v-items-list class="">							
												<span class="ml-1 pt-9 " style="font-size:13px;color:#A1A1A1">	{{featured[0].num_views}}</span>
												<v-icon color="#C1C1C1" style="font-size:20px"> remove_red_eye </v-icon>
												<!-- {{this.$router.article}} -->
												<!-- {{href()}} -->
												<v-menu offset-x>
     										 <template v-slot:activator="{ on }">								
												<v-btn
													text
													icon
													color="#A5A5A5"
													v-on="on"						
												>									
												<router-link to="#">	
													<v-icon color="orange" style="font-size:20px">  share  </v-icon>
													</router-link>
												</v-btn>
     										 </template>
													<v-list class="px-2">
															<!-- <v-list-item>aa</v-list-item> -->
															<share :link=this.href(this.featured[0].slug) :ptitle=this.featured[0].title :pdesc=this.featured[0].body.substring(0,100) :tags=this.featured[0].tags> </share>
															<!-- <img src="../../../public/img/icons/facebook.svg" width="25" alt="" class="ml-2">
															<img src="../../../public/img/icons/twitter.svg" width="25" alt="" class="ml-2">
															<img src="../../../public/img/icons/pinterest.svg" width="25" alt="" class="ml-2">
															<img src="../../../public/img/icons/whatsapp.svg" width="25" alt=""> -->
													</v-list>
												</v-menu>
											</v-items-list>
									</v-card-actions>
							</v-card>					
        	</v-col>
    	   <!-- Rest Featured Posts -->
				 <!-- Horizontal rest featured -->
        <v-col id="restfeat_h" lg="6" md="6" sm="6" cols="12"  class="pl-8 hidden-xs-only">
                <v-row  class=""  v-for="(feat,$index) in restfeat" :class="{'rest_feat_border': $index < 3}" style="">              
										<v-card :id="`post-${feat.id}`" cols="12" class="" :to="{name:'article',params:{slug:feat.slug}}">
											<div  class="d-flex flex-no-wrap justify-space-between">													
													<v-col lg="4" md="4" sm="4"  class="pa-2 " :style="">
														<v-img  :src="`${uploads}${feat.thumbnail}`"></v-img>
													</v-col>
													<v-col lg="8">
														<v-card-text class="pt-0 pr-0">
																<h3 class="mb-1 mt-1 p-title">{{feat.title.substring(0,40)}}</h3>
																<span class="text--primary hidden-sm-and-down">
																		<span class="p-body">{{feat.body.substring(0,80)}} ...</span>																									
																</span>
														</v-card-text>
												<v-card-actions class="pr-0 pl-0 pb-0">
						<v-btn
							x-small												
							color="4F7496"
							class=""
							style="font-size:12px;color:grey"
						>
						<h5>{{feat.tags}}</h5>																				   
						</v-btn>
						<v-spacer></v-spacer>
									<v-items-list>							
								<span class="ml-1 pt-0" style="font-size:13px;color:#A1A1A1">	{{feat.num_views}}</span>
								<v-icon color="#C1C1C1" style="font-size:20px"> remove_red_eye </v-icon>								
						<v-menu offset-x>
     	<template v-slot:activator="{ on }">
				<v-btn text icon color="#A5A5A5" v-on="on">
					<router-link to="#">
						<v-icon color="orange" style="font-size:20px">share</v-icon>
					</router-link>
				</v-btn>
			</template>
		<v-list class="px-2">							
				<share :link=href(feat.slug)  :ptitle=feat.title :pdesc=feat.body.substring(0,100) :tags=feat.tags> </share>												
		</v-list>
	</v-menu>
					</v-items-list>						
    			</v-card-actions>
													</v-col>												
											</div>										
										</v-card>										
                </v-row>					               
        </v-col>

				<!-- rest featured vertical vcards - only on mobile -->
				<v-col id="restfeat_vcard" xs="12" lg="6" md="6" sm="6" cols="12"  class="pt-0 mb-n4 hidden-sm-and-up">
					<v-row
					  v-for="(feat,$index) in restfeat"  style=""
						 align="stretch"
						justify="start"
						class="mb-2"
						wrap
						no-gutters 
					>
						<v-card				
							class="mx-auto"
   						max-width="400"
							 	:id="`post-${feat.id}`"
								:to="{name:'article',params:{slug:feat.slug}}"				 					 
			  		>
							<v-img
								class=" white--text"
								height="200px"
								:src="`${uploads}${feat.thumbnail}`"
								width=100%
							>					 
							<v-card-title class="align-end  fill-height"> 						
										<!-- <v-list-item class="pa-0 justify-start mt-n5" style="opacity:0.7;">
												<span style="font-size:14px;color:white;margin-left:2px">{{feat.num_views}}	</span>
												<v-icon color="white"> remove_red_eye </v-icon>
										</v-list-item> -->																
							</v-card-title>					 
					</v-img>
					<v-card-text class="">
							<h3 class="mb-2 p-title">{{feat.title.substring(0,40)}}</h3>
							<span class="text--primary ">
								<span class="p-body">{{feat.body.substring(0,85)}} ...</span><br>								
							</span>
  			  </v-card-text>
					<!-- <v-card-actions class="align-end"> -->
					<v-card-actions class="">
						<v-btn
							x-small													
							color="4F7496"
							class="mr-2"
							style="font-size:12px;color:grey"
						>
						<h5>{{feat.tags}}</h5>																								   
						</v-btn>
						<v-spacer></v-spacer>
									<v-items-list>						
								<span class="ml-1 pt-9" style="font-size:13px;color:#A1A1A1">	{{feat.num_views}}</span>
								<v-icon color="#C1C1C1" style="font-size:20px"> remove_red_eye </v-icon>								
					<v-menu offset-x>
     	<template v-slot:activator="{ on }">
				<v-btn text icon color="#A5A5A5" v-on="on">
					<router-link to="#">
						<v-icon color="orange" style="font-size:20px">share</v-icon>
					</router-link>
				</v-btn>
			</template>
		<v-list class="px-2">							
				<share :link=href(feat.slug)  :ptitle=feat.title :pdesc=feat.body.substring(0,100) :tags=feat.tags> </share>												
		</v-list>
	</v-menu>
					</v-items-list>
						
    			</v-card-actions>
				</v-card>
					</v-row>
				</v-col>		
      </v-row>			
    </v-col>
		
      <v-spacer></v-spacer>

			<!-- LEFT last column - ads or most viewed -->
    <v-col lg="2" cols="12"   class="pr-4 pt-2 mt-3  hidden-md-and-down" style="border:6px #D6D6D6  solid;">
					<img src="../static/images/advertise.jpg" alt="" width="100%" height="440px">
				<!-- <h4 class="ml-3" style="color:#FFFFFF; background-color:orange;padding: 5px 0;text-align:center">الأكثر مشاهده اليوم </h4>
        <v-row style=""> 
            <v-col  lg="auto" class="col-lg-3 ml-2 col-md-2"><img :src="`https://via.placeholder.com/300`" alt="" width="50" height="50"></v-col>
            <v-col ><h5>صلصة الفلافل وصلصة الخيار</h5></v-col>						
        </v-row>
				<hr style="background-color:#F3F3F3;border:0;height:2px" class="ml-3">
        <v-row>
             <v-col  lg="auto"  class="col-lg-3 ml-2 col-md-2"><img :src="`https://via.placeholder.com/300`" alt="" width="50" height="50"></v-col>
            <v-col> <h5>طرق لذيذة للأكل </h5></v-col>
        </v-row>
				<hr style="background-color:#F3F3F3;border:0;height:2px" class="ml-3">
        <v-row>
             <v-col  lg="auto"  class="col-lg-3 ml-2 col-md-2"><img :src="`https://via.placeholder.com/300`" alt="" width="50" height="50"></v-col>
            <v-col><h5>محمرة</h5></v-col>
        </v-row>
				<hr style="background-color:#F3F3F3;border:0;height:2px" class="ml-3">
        <v-row>
             <v-col  lg="auto"  class="col-lg-3 ml-2 col-md-2"><img :src="`https://via.placeholder.com/300`" alt="" width="50" height="50"></v-col>
            <v-col><h5>فتوش</h5></v-col>
       </v-row>
			 <hr style="background-color:#F3F3F3;border:0;height:2px" class="ml-3">
			 <v-row style=""> 
            <v-col  lg="auto"  class="col-lg-3 ml-2 col-md-2"><img :src="`https://via.placeholder.com/300`" alt="" width="50" height="50"></v-col>
            <v-col ><h5>صلصة الفلافل وصلصة الخيار</h5></v-col>						
        </v-row> -->
    </v-col>

	</v-row>
	
	<!-- All Results - Excluding Featured -->
	
	<v-row
    align="stretch"
    justify="start"
    class="mb-6"
		wrap
    no-gutters				
  > 
	
			<v-col v-for="(recipe,$index) in list" class="pa-1 col-md-3 col-xs-1 col-lg-3 col-sm-4">
				
					<!-- get ads -->
				 <v-card 
				 			v-if="($index +  3) % 7 == 0"  align="center" 
							 class="mx-auto pa-2 pb-0 fill-height d-flex flex-wrap" 
							 max-width="400">
					 
					 	<img  src="../static/images/sqad.png" alt="" width="100%">
						
						 <v-card-text align="center" justify="center" class=""> 
							 <!-- <h5 class="mt-2 pa-1" style="background-color:#F5F5F5">إعلان</h5> -->
							 <!-- <h5 class="mt-2 pa-1" style="background-color:#F5F5F5"></h5> -->
							
							
						
						
							 </v-card-text>
				 </v-card>
       		
				<!-- loop results -->
				<v-card
					v-else
					class="mx-auto "
   				max-width="400"
					:id="`post-${recipe.id}`"
					:to="{name:'article',params:{slug:recipe.slug}}"
				>
					<v-img
						class="white--text"
						height="200px"
						:src="`${uploads}${recipe.thumbnail}`"
						width=400
   			  >
					 
					 	<v-card-title class="align-end  fill-height"> 						
									<!-- <v-list-item class="pa-0 justify-start mt-n5" style="opacity:0.7;">
											<span style="font-size:14px;color:white;margin-left:2px">{{recipe.num_views}}	</span>
											<v-icon color="white"> remove_red_eye </v-icon>
									</v-list-item> -->
								  	 
							  
						</v-card-title>
					 
					</v-img>
					<v-card-text class="">
							<h3 class="mb-2 p-title">{{recipe.title.substring(0,40)}}</h3>
							<span class="text--primary ">
								<span class="p-body">{{recipe.body.substring(0,85)}} ...</span><br>								
							</span>
  			  </v-card-text>
					<!-- <v-card-actions class="align-end"> -->
					<v-card-actions class="">
						<v-btn
							x-small
							
						
							color="4F7496"
							class="mr-2"
							style="font-size:12px;color:grey"
						>
						<h5>{{recipe.tags}}</h5>
						
							
							  <!-- <v-btn x-small> مشاريب</v-btn> -->
							   
						</v-btn>
						<v-spacer></v-spacer>
									<v-items-list>
								<!-- <span class="ml-1 pt-9" style="font-size:13px;color:#A1A1A1">	5</span>
								<v-icon color="#C1C1C1" style="font-size:20px"> comment </v-icon>	 -->
								<span class="ml-1 pt-9" style="font-size:13px;color:#A1A1A1">	{{recipe.num_views}}</span>
								<v-icon color="#C1C1C1" style="font-size:20px"> remove_red_eye </v-icon>
								
							<v-menu offset-x>
     	<template v-slot:activator="{ on }">
				<v-btn text icon color="#A5A5A5" v-on="on">
					<router-link to="#">
						<v-icon color="orange" style="font-size:20px">share</v-icon>
					</router-link>
				</v-btn>
			</template>
		<v-list class="px-2">							
				<share :link=href(recipe.slug)  :ptitle=recipe.title :pdesc=recipe.body.substring(0,100) :tags=recipe.tags> </share>												
		</v-list>
	</v-menu>
					</v-items-list>
						
    			</v-card-actions>
				</v-card>
			</v-col>	
	</v-row>	
			<!-- infinite scroll -->
	<infinite-loading @infinite="infiniteHandler">
		<div slot="spinner">جاري التحميل ...</div>
		<div slot="no-more">لا يوجد المزيد</div>
		<div slot="no-results"> لا يوجد نتائج</div>
	</infinite-loading>
	</div>
</template>

<script>
// import subtabs from '../../components/Recipes_SubCat_Tabs.vue'
import share from '../components/SocialSharing.vue'
export default{
	components: {	
	
		share		
  },
	async asyncData({ $axios,query }) {
			// let page = query.p || 1
			// const ip = await $axios.$get('http://icanhazip.com')
			// const data= await $axios.$get('https://mo7eet-server.herokuapp.com/api/posts/recipes',{params:{page:page}})
			// return { ip,featured:data.featured,data:data.data,pageCount:data.pageCount }
			const data= await $axios.$get('https://mo7eet-server.herokuapp.com/api/posts/sports')
			let featured=data.featured
			let restfeat=data.featured.slice(0)
			restfeat.splice(0,1)	

			return {featured,restfeat}
},
data(){
	return{
		page:null,
		list:[],
		ip:'',
		uploads:'https://mo7eet-server.herokuapp.com/uploads'

	}
},
methods:{
	href(slug) {
        return this.$router.resolve({
            name:'article',
            params: {
                slug: slug
            }
        }).href
		},
	infiniteHandler($state){
		this.$axios.$get('https://mo7eet-server.herokuapp.com/api/posts/sports',{params:{page:this.page}}).then((response=>{
			if (this.page <= response.pageCount) {
						this.$router.push({path: this.$route.path, query: {p: this.page}})
						this.page += 1;
						this.list.push(...response.data)
						$state.loaded();
			} else {
						$state.complete();
			}
			
		
			}))
		// 		if (this.page <= this.pageCount) {
		// 	this.$router.push({path: this.$route.path, query: {p: this.page}})
		// 	this.page += 1;
		// 	this.list.push(this.data)
		// 	$state.loaded();
		// }else{
		// 	$state.complete();
		// }
		// })
	
	}
},
created(){
		if (this.$route.query.p) {
				this.page=Number(this.$route.query.p)	
			}else{
				this.page=1
			}	
	
}
}
</script>

<style scoped>
.v-card__text{
	padding-bottom:0px;
}
.v-card__actions{
	padding-top:4px;	
}
#restfeat_h .v-card__actions{
	padding-top:0px
}
.p-title{
	color:#000000bf;
}
.p-body{
	/* color: #0000008a */
	color: #7f7f7f
}
.rest_feat_border{
/* border-bottom:1px solid #D6D6D6; */
margin-bottom:4px
}
#restfeat_h .col{
	padding:0
}
button a{
	text-decoration: none
}
</style>
