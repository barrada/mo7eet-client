<template>
	<div>
				<v-row
 		align="start"            
 	  no-gutters		
	>


		<v-col cols="12" lg="9"  class="" style="background-color:white">
			<v-row>
				<v-col cols="12" lg="5" class="" style="background-color:white">
						<v-card-text class="">
										<v-row> <h2  class="mr-3 mt-1">{{post.title}}</h2> </v-row>
										<v-row class="mr-0 mt-3 pl-2" style="font-size:15px">		{{post.body}}</v-row>
						</v-card-text> 
				<share class="text-center" :link=this.$route.path  :ptitle=post.title :pdesc=post.body.substring(0,100) :tags=post.tags> </share>	
				
				</v-col>
				<v-col cols="12" lg="7">
					<v-carousel
						height="300"
						hide-delimiter-background
					>
							
					<v-carousel-item 
					v-for="(img, $index) in this.gallery"
					:key="$index"
					:src="`${uploads}${img}`"
					reverse-transition="fade-transition"
     		  transition="fade-transition"
					> 								
					</v-carousel-item>
					</v-carousel>
				</v-col>
				<v-col cols="12" lg="12" class="pt-0" style="background-color:white">
					<v-row
				
					align="center"            
 	  			no-gutters
					style="border-bottom:1px solid #E6E6E6;"
					class="pr-2 pl-2 pb-2"		
					>
						<h2>مكونات</h2> 
						<v-spacer></v-spacer>
						<div class="">
									{{sub_details.ready_in}} دق
							<v-icon color="#828282"class="ml-2 pr-1"> av_timer </v-icon> 
								
								{{sub_details.servings}} أفراد
							<v-icon color="#828282"class="pr-1 ml-2"> people </v-icon>
									{{sub_details.calories}} كالوري
							<v-icon color="#828282"class="mr-1"> equalizer </v-icon>										
						</div>
					</v-row>	
					 					
						<!-- ingredients -->


						<v-row >						
									<v-col  class="col lg-12 xs-12 sm-12 pt-0 pb-0">
											<v-row
												 
         								  justify="space-between"
													 style="background-color:white"
													 class="pr-8"
													 
											>
														<v-col id="ingredients-1" cols="12" md="5" class="">
																
														<v-items-list  v-for="(ing,$index) in sub_details.ingredients" v-if="$index < Math.floor(sub_details.ingredients.length / 2)" class=" pt-1 mb-1">		
																<v-icon color="#C1C1C1" style="font-size:20px"> radio_button_unchecked </v-icon>					
																					<span class="ml-1" style="font-size:15px;">	{{ing}}</span>	<br>										
														</v-items-list>	
															</v-col> 
														
								
															<v-col id="ingredients-2" cols="12" md="5" class="">
																
																			<v-items-list  v-for="(ing,$index) in sub_details.ingredients" v-if="$index > Math.floor(sub_details.ingredients.length / 2)" class=" pt-1 mb-1">		
																<v-icon color="#C1C1C1" style="font-size:20px"> radio_button_unchecked </v-icon>					
																					<span class="ml-1" style="font-size:15px;">	{{ing}}</span>	<br>										
														</v-items-list>	
														
															</v-col>
																<v-col class="sm-12 xs-12"></v-col>
											</v-row>
									</v-col>
						</v-row> 
						
					
						<!-- directions -->

								<v-row
				
					align="center"            
 	  			no-gutters
					style="border-bottom:1px solid #E6E6E6;"
					class="pr-2 pl-2 pb-2"		
					>
						<h2>طريقة التحضير</h2> 
						<v-spacer></v-spacer>
						<div class="">
								تجهيز		{{sub_details.preperation_time}} د.ق
							<v-icon color="#828282"class="ml-1 pr-1"> av_timer </v-icon> 
								
									 طهي	{{sub_details.cooking_time}} د.ق
							<v-icon color="#828282"class="pr-1 ml-1"> av_timer </v-icon>

						</div>
					</v-row>
							
						 <v-col id="directions"  cols="12"  v-for="(dir,$index) in sub_details.directions" class="mb-3 mt-3">
										<v-items-list class=" pt-1 mb-1">		
							<span color="#C1C1C1" style="font-size:14px;border:3px solid #E9E9E9;border-radius:60px;" class="ml-2 pr-2 pl-1 pb-1"> {{$index + 1}} </span>					
												<span class="ml-1" style="font-size:15px;">	{{dir}}</span>											
					</v-items-list>	
						</v-col>						
					<v-row class="pr-8">
						<div class="mb-2" v-if="(sub_details.footnotes !== null)">	
							<h3 class="mb-1" >معلومه </h3> 
							<hr class="mt-1 mb-1">{{sub_details.footnotes}}
						</div>
					<div  class="mb-2" v-if="(sub_details.nutrition_facts !== 0 || sub_details.nutrition_facts !=null)">	
						<h3 >حقائق غذائية</h3> 
						<hr class="mt-1 mb-1"> {{sub_details.nutrition_facts}}
					</div>
					</v-row>
				</v-col>
			</v-row>
		</v-col>
		
		<v-col class="pa-5 pt-3">
				<!-- <v-img  src="../../../static/images/big_rec.jpg" alt="" width="100%"></v-img> -->
				<img  src="../../static/images/big_rec.jpg" alt="" width="100%">

		</v-col> 
			
	</v-row>
	</div>
</template>

<script>
import share from '../../components/SocialSharing.vue'

export default {
	components:{
		share
	},
	async asyncData({ $axios,params }) {
		let slug = encodeURIComponent(params.slug)
		const { data } = await $axios.$get(`https://mo7eet-server.herokuapp.com/api/post/${slug}`)
			// this.sub_details=	JSON.parse(this.data.sub_details)
			// this.gallery=JSON.parse(this.data.gallery_images)
				// sub_details=	JSON.parse(data[0].sub_details)
		return { post: data[0], sub_details: JSON.parse(data[0].sub_details),gallery:JSON.parse(data[0].gallery_images) }
			
},
	data(){
		return {		
			post:this.post,
			slug:this.slug,
			sub_details:this.sub_details,	
			gallery:this.gallery,
			ings_length:this.ings_length,
			test:'',
			uploads:'https://mo7eet-server.herokuapp.com/uploads'
			
		}
	},
	created(){
		// this.slug=this.$route.params.slug
		// this.$axios.$get(`https://mo7eet-server.herokuapp.com/api/post/${this.slug}`).then((response) => {
		// 				this.post=response.data[0];	
		// 				this.sub_details=	JSON.parse(this.post.sub_details)
		// 				this.gallery=JSON.parse(this.post.gallery_images)						
		// })

	}
	
}
</script>

<style>
#directions li,#ingredients li{
	/* list-style-type:none;	 */
}
#directions ul,#ingredients ul{
	 list-style-position: outside
}
/* #ingredients.col{
padding:1px 25px;
} */
#directions.col{
padding:2px 25px;
}
v-items-list {
	list-style-position: outside;
	margin-right:-24px
}

</style>