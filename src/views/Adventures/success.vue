<template>
  <div>
  	<header id="head">
  		<!--<img src="../../assets/imgs/adventures/success_bg.png"/>-->
  	</header>
  	<section id="content">
  		<div class="top">
  				红包已放置到{{tel}}账户中去<br/>请前去查看。
  		</div>
  		<a class="button" @click="weixin"><i class="iconfont icon-weixin"></i>关注微信公众号查看</a>
  		<a class="button" @click="getApp"><i class="iconfont icon-xiazai"></i>下载APP查看</a>
  	</section>
  </div>
  	
</template>

<script>
	
	export default {
		components: {
	   
  	},
	  data () {
	    return {
	    	tel:'',
	    }
	  },
	  beforeRouteEnter (to, from, next) {
					
		  					next(vm => {
			    					vm.tel = vm.$router.currentRoute.query.tel;
			  				})

		  
		},
	  methods:{
	  		weixin(){
	  			var ua = window.navigator.userAgent.toLowerCase(); //判断是否是微信
	        if(ua.match(/MicroMessenger/i) == 'micromessenger'){
	           	window.location.href = 'http://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU4MTE0OTA2Ng==#wechat_redirect'
	        }else{
	            return false;
	        }
	  			
	  		},
	  		getApp(){
	  			
	  		}
	  },
	  mounted(){
	 
	  },
	  watch: {
	    
	  },
	}
</script>


<style lang="less" scoped>
		#head{
			img{
				width: 100%;
			}
		}
		#content{
			text-align: center;margin: 0 5%;
			.top{
				padding-bottom: .9rem;padding-top: .7rem;
				color: #666;font-size: 14px;
			}
			.button{
				background-color: #ff6446;
				margin-bottom: .3rem;font-size: 16px;
			}
		}
		.icon-weixin{
			font-size: 20px;padding-right: 5px;
		}
</style>
