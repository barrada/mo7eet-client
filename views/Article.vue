<template>
  <div>
    <v-row>
      <v-col cols="12" lg="12" md="12" sm="12" class="hidden-md-and-up">
             <adsbygoogle
               
             ad-slot="3043867444" 
             data-ad-format="horizontal"                 
        >           
        </adsbygoogle>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="2" lg="3" class="hidden-sm-and-down text-left"> 
          	 <adsbygoogle               
									ad-slot="3284019521"	
                  data-ad-format="vertical"			          
						 >           
						 </adsbygoogle>
        
      </v-col>
      <v-col  cols="12" md="6" lg="6" class="mx-auto">
   
    <!-- <span>{{ new Date() | moment("dddd, MMMM Do YYYY") }}</span> -->
    <!-- <span>{{ "2019-12-24T10:47:21.000Z" | moment("from", "now") }}</span> -->
    <h1>{{post.title}}</h1> 
    <v-row>
      <v-col>
        <div class>{{ `${post.post_date}` | moment("from", "now") }}</div>
      </v-col>
      <v-col>
        <share
          class="text-left"
          :link="this.$route.path"
          :ptitle="post.title"
          :pdesc="post.body.substring(0,100)"
          :tags="post.tags"
        ></share>
      </v-col>
      
    </v-row>

    <v-img
      v-if="gallery == false"
      :src="`${uploads}${post.original_image}`"
      width="100%"
      class="my-5"
    ></v-img>

    <v-carousel v-else height="300" hide-delimiter-background>
      <v-carousel-item
        v-for="(img, $index) in this.gallery"
        :key="$index"
        :src="`${uploads}${img}`"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <div class="mt-5">
          {{post.body}}
    </div>
        </v-col>
          <v-col md="2" lg="3" class="hidden-sm-and-down">
            	 <adsbygoogle               
									ad-slot="7370604197"
                  data-ad-format="vertical"							        
								>           
								</adsbygoogle>
  
      </v-col>
    </v-row>
  </div>
</template>

<script>
import share from "../components/SocialSharing.vue";

export default {
  components: {
    share
  },
  async asyncData({ $axios, params }) {
    let slug = encodeURIComponent(params.slug);
    let uploads= "https://mo7eet-server.herokuapp.com/uploads"
    let url = process.env.baseUrl +'/' +slug
    const { data } = await $axios.$get(
      `https://mo7eet-server.herokuapp.com/api/post/${slug}`
    );
    let gallery=(data[0].gallery_images) ? JSON.parse(data[0].gallery_images) : false;
    
    console.log(gallery)
   
    return { post: data[0], gallery: gallery,title:data[0].title,bodySEO:data[0].body,tags:data[0].tags,descritpion:data[0].body.substring(0,100) + '...',thumbnail:uploads+data[0].thumbnail,url:url,date:data[0].post_date,keywords:data[0].keywords };
  },
  data() {
    return {     
      // gallery:this.gallery,
      uploads: "https://mo7eet-server.herokuapp.com/uploads",     
    };
  },
  methods: {},
  mounted() {
    
    // console.log("length is " + this.gallery.length);
  },
  head(){
    return{
      title:this.title,
      meta:[
         { hid: 'description', name: 'description', content: this.descritpion },
         { hid: 'keywords', name: 'keywords', content: this.tags },
         { hid:'name',name:'title', itemprop: 'title', content:this.title},
         { hid:'description',description:'description', itemprop: 'description', content: this.descritpion},
         { hid:'image',name:'image', itemprop: 'image', content:this.thumbnail},
         { hid:'og:description',name:'og:description', property: 'og:description', content:this.descritpion},
         { hid:'og:url',name:'og:url', property: 'og:url', content:this.url},
         { hid:'og:image',name:'og:image', property: 'og:image', content:this.thumbnail},
         { hid:'twitter:card',name:'twitter:card', content:'summary_large_image'},
         { hid:'twitter:title',name:'twitter:title', content:this.title},
         { hid:'twitter:description',name:'twitter:description', content:this.descritpion},
         { hid:'twitter:image',name:'twitter:image', content:this.thumbnail},
      ],
      link:[
        {rel:'canonical',href:this.url}
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { 
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "Article",
            "author": "محيط",
            "datePublished": "${this.date}",
            "headline": "${this.title}",
            "image": "${this.thumbnail}",
            "keywords": "${this.keywords}",
            "publisher": {
              "@type": "Organization",
              "name": "محيط",
              "logo": {
                "@type": "ImageObject",
                "url": "http://mo7eet.com/logo.jpg"
              }
            },
            "articleBody": "${this.bodySEO}",
            "dateModified": "${this.date}",
            "mainEntityOfPage":"${this.url}"
          }`, 
          type: 'application/ld+json' 
        }
      ]
    }
  }
};
</script>

<style scoped>
</style>
