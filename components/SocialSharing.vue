<template>
	<social-sharing :url="url"
                      :title="ptitle"
                      :description="pdesc"
                      :quote="ptitle"
                      :hashtags="tags"
                      twitter-user=""
                      inline-template
	>
  <div>
		<!-- {{ptitle}} -->
      <!-- <network network="email">
          <i class="fa fa-envelope"></i> Email
      </network> -->
     	<network network="whatsapp">
        <img src="../static/images/icons/whatsapp.svg" width="25" alt="" class="ml-2">
      </network>
			<network network="pinterest">
       <img src="../static/images/icons/pinterest.svg" width="25" alt="" class="ml-2">
      </network>
			 <network network="twitter">
        <img src="../static/images/icons/twitter.svg" width="25" alt="" class="ml-2">
      </network>		
			 <network network="facebook">
        <img src="../static/images/icons/facebook.svg" width="25" alt="" class="">
      </network>
      <!-- <network network="googleplus">
        <i class="fa fa-google-plus"></i> Google +
      </network>
      <network network="line">
        <i class="fa fa-line"></i> Line
      </network>
      <network network="linkedin">
        <i class="fa fa-linkedin"></i> LinkedIn
      </network>
      <network network="odnoklassniki">
        <i class="fa fa-odnoklassniki"></i> Odnoklassniki
      </network>
      
      <network network="reddit">
        <i class="fa fa-reddit"></i> Reddit
      </network>
      <network network="skype">
        <i class="fa fa-skype"></i> Skype
      </network>
      <network network="sms">
        <i class="fa fa-commenting-o"></i> SMS
      </network>
      <network network="telegram">
        <i class="fa fa-telegram"></i> Telegram
      </network>
     
      <network network="vk">
        <i class="fa fa-vk"></i> VKontakte
      </network>
      <network network="weibo">
        <i class="fa fa-weibo"></i> Weibo
      </network>  -->
      
  </div>
	
</social-sharing>

</template>

<script>
export default {
	// name:'SocialSharing',
	props:['link','ptitle','pdesc','tags'],
	data(){
		return {			
			url:this.url
		}
	},
	created(){


		// this.url = window.location.origin + this.link;
		this.url = process.env.baseUrl + this.link

	}
}
</script>

<style>

</style>