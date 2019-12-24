<template>
    <v-container>
      <v-list-item :to="{name:'sports'}" @click="">
          <v-list-item-action>
          
            <v-icon color="orange">sports_soccer</v-icon>
              <!-- <img src="https://styles.redditmedia.com/t5_2qgzy/styles/communityIcon_dzvt1faxi6q31.png" alt="" width="30"> -->
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
						الرياضة </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item :to="{name:'recipes'}" @click="">
          <v-list-item-action>
            <v-icon color="orange">restaurant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 طهي </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item to="/test" @click="">
          <v-list-item-action>
            <v-icon color="orange">games</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الألعاب </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item to="/الأخبار" @click="">
          <v-list-item-action>
            <v-icon color="orange">library_books</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الأخبار </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">tv</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 التلفزيون </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">insert_chart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 أوو </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">insert_emoticon</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الميمات </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">image</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الصور المتحركة </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">card_travel</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 السفر </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">wifi_tethering</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 التكنولوجيا </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">library_music</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الموسيقى </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">format_paint</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الفن والتصميم </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">face</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الجمال </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">menu_book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الكتب والكتابة </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 التشفير </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">chat</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 النقاش </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">pregnant_woman</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الموضة </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">business</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 المالية والأعمال </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">fitness_center</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الصحة واللياقة </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">school</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 التعلم </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 mindblowing </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">outdoor_grill</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 في الهواء الطلق </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">people</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 الأبوة والأمومة </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">camera_alt</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 فوتوغرافيا </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 والعلاقات </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 والعلوم </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon color="orange">ondemand_video</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 وأشرطة الفيديو </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
 vroom </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
 <v-list-item @click="">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>صحي
</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

</v-container>
</template>
<style scoped>
.v-list-item__title  {
  font-size:14px!important;
  font-weight:800;
  padding:2px 0;
  color:#6c6e70
}
.v-list-item {
  border-bottom:1px solid #e7e7e7;
}
.v-list-item__action{
  margin:2px;
}
.v-navigation-drawer__content{
  overflow-y:hidden
}
</style>

<script>
export default {
   
}
</script>
