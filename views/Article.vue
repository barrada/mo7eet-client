<template>
  <div class="col-5 mx-auto">
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

    <!-- <v-carousel v-else height="300" hide-delimiter-background>
      <v-carousel-item
        v-for="(img, $index) in this.gallery"
        :key="$index"
        :src="`${uploads}${img}`"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel> -->
    {{post.body}}
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
    const { data } = await $axios.$get(
      `https://mo7eet-server.herokuapp.com/api/post/${slug}`
    );
    let gallery=(data[0].gallery_images) ? JSON.parse(data[0].gallery_images) : false;
    
    console.log(gallery)
   
    return { post: data[0], gallery: gallery };
  },
  data() {
    return {
      // gallery:this.gallery,
      uploads: "https://mo7eet-server.herokuapp.com/uploads"
    };
  },
  methods: {},
  mounted() {
    
    // console.log("length is " + this.gallery.length);
  }
};
</script>

<style scoped>
</style>
