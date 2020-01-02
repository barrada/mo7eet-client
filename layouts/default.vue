<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
     right
     
    >   
    <!-- <v-tabs fixed-tabs>
    <v-tab to="/">Home</v-tab>
    <v-tab to="/about">About</v-tab>
    </v-tabs> -->
      <v-list dense>
        <categories />
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="pl-0">
       <router-link :to="{name:'home'}">
          <v-img
          id=logo
          :src="require('@/assets/logo.png')"
          class="my-3 mr-n2 ml-0"
          contain        
                 
       
        ></v-img> </router-link>
      
        </v-toolbar-title>
        <!-- trending icons -->
           <v-tooltip bottom>
      <template v-slot:activator="{ on }">
           <v-btn text tile icon large dark v-on="on" color="orange"  class="mr-0"> 
              <v-icon>trending_up</v-icon>
            </v-btn>
    
      </template>
      <span>ترندينج</span>
    </v-tooltip>
        <!-- search starts -->
        <v-text-field
        dense
        solo-inverted
        flat
        hide-details
        label="بحث"
        clearable
        prepend-inner-icon="search"
        class="mr-2"
      ></v-text-field>
        <v-spacer></v-spacer>
        <!-- selecet - dropdown-->
         <v-col class="d-flex" cols="2" sm="2">
        <!-- <v-select
        dense
        hide-details
          :items="items"
          label="الشائع"
         
          solo
        ></v-select> -->
      </v-col>
    </v-app-bar>

    <v-content>
      <v-container
     
        fluid
      >
       
       <nuxt />
     
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>


<script>
import HelloWorld from '@/components/HelloWorld';
import categories from '@/components/categories'

export default {
  name: 'App',
  components: {
    HelloWorld,
    categories,
  },
  data: () => ({
      drawer: null,
    }),
    created () {
      this.$vuetify.theme = true
      this.$vuetify.rtl = true;
      // this.$vuetify.theme.dark = true
      
    },
};
</script>
<style>
*{
 font-family :'Almarai', sans-serif;
 font-weight:400
}
h1,h2,h3,h4,h5,h6 {
   font-family :'Almarai', sans-serif;
 font-weight:700;
}
.infinite-status-prompt div{
	padding:5px;
	font-weight: bold;
	color:#ff9800 ;
	margin-top:3px
}

</style>