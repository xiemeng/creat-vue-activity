<template>
  <div>
  	<header id="head">
  		<!--<img src="../../assets/imgs/adventures/accept_01.png"/>-->
  	</header>
  	<section id="sect">
  		<div class="top">
  					<p>恭喜你，获得<span>{{money}}</span>元红包</p>
  					<div class="input vue-1px">
	  					<input v-model="bankVal" type="tel" maxlength="11" placeholder="请输入手机号进行领取" />
  						
  					</div>
  					<div class="agreement">
  						<i class="iconfont icon-dagou" v-if="isTrue" @click="isTrue = false"></i>
  						<i class="iconfont icon-dagou1" v-if="!isTrue" @click="isTrue = true"></i>
  						<span>同意银蝶理财用户协议</span>
  					</div>
  					<a class="button" @click="success">
  						<i class="iconfont icon-lihe"></i>
  						立即领取奖励
  					</a>
  		</div>
  		<div class="main">
  			<div class="m_top">
  				<!--<img src="../../assets/imgs/adventures/accept_02.png"/>-->
  			</div>
  			<ul>
  				<li class="clear" v-for="(item,index) in list">
  					<span class="fl">{{item.butterfly}}<i>{{item.unit}}</i></span>
  					<b>{{item.text}}</b>
  					<span class="fr">{{item.Bao}}<i v-if="index !=2 ">{{item.unit}}</i></span>
  				</li>
  			</ul>
  		</div>
  	</section>
  	<footer id="foot">
  		<p>投资建议：小部分资金存在余额宝，用于日常开销；大部分 存在银蝶，获取更高收益。  投资有风险 理财需谨慎 </p>
  		<span>投资有风险，理财需谨慎</span>
  	</footer>
  	<toast :errorHideBool="errorHideBool" :boolTip="boolTip"  :tipText="tipText"></toast>
  </div>
  	
</template>

<script>
	import toast from '@/components/toast';
	import {receive} from 'api/content'
	export default {
		components: {
	  	 toast
  	},
	  data () {
	    return {
	    	bankVal:null,
	    	money:'',
	    	isTrue:false,//默认同意
	    	tipText:'hello',
				boolTip:false,
				errorHideBool:false,
	    	list:[
	    		{butterfly:'10000',text:'本金',Bao:'10000',unit:'元'},
	    		{butterfly:'30',text:'期限',Bao:'30',unit:'天'},
	    		{butterfly:'5000',text:'奖励',Bao:'----',unit:'体验金'},
	    		{butterfly:'7.18',text:'年利率',Bao:'2.40',unit:'%'},
	    		{butterfly:'60.01',text:'收益',Bao:'19.72',unit:'元'},
	    	]
	    }
	  },
	  beforeRouteEnter (to, from, next) {
					
		  					next(vm => {
			    					vm.money = vm.$router.currentRoute.query.money-0;
			    					vm.money = vm.money.toFixed(2)
			  				})

		  
		},
	  methods:{
	  		success(){
	  			if(this.bankVal == null || this.bankVal == ''){
	  						this.boolTip=true;
	          		this.tipText='请输入手机号';
	          		this.fnError(this.tipText);
	  			}else if(this.bankVal.length<11){
	  						this.boolTip=true;
	          		this.tipText='手机号输入错误';
	          		this.fnError(this.tipText);
	  			}else{
	  					receive(this.bankVal).then((res)=>{
		  						if(res.code == 1000){
		  							this.$router.push({path:'success'})
		  						}else{
		  							this.boolTip=true;
			          		this.tipText=res.msg;
			          		this.fnError(this.tipText);
		  						}
	  					})
	  			}
	  	//		this.$router.push({path:'success'})
	  		},
	  		fnError(){
							var timer2 =  null;
							var timer =  null;
		          let _this = this;
		          this.boolTip=true;
		          clearTimeout(timer2);
		          timer2 = setTimeout(function(){
		            _this.errorHideBool = true;
		            },2000);
		          clearTimeout(timer);
		          timer = setTimeout(function(){
		            _this.boolTip=false;
		            _this.errorHideBool = false;
		          },2000);
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
		#sect{
			.top{
				text-align: center;padding-top: .3rem;
				p{
					font-size: 14px;color: #ff6446;
					padding-bottom: .5rem;
					span{
						font-weight: bold;
					}
				}
				input{
					position: absolute;left: 1px;top: 1px;
					width: 99%;height: 38px;font-size: 12px;text-indent: 1em;
					
				}
				.input{
					
					width: 90%;line-height: 40px;height: 40px;
					margin-left: 5%;
				}
				.agreement{
					margin-top: .15rem;
					width: 90%;text-align: left;margin-left:5% ;
					span{
						font-size: 12px;color: #b6b6b6;
					}
				}
				.button{
					background-color: #ff6446;margin-top: .25rem;
					img{
						width: 20px;padding-top: 10px;padding-right: 5px;
					}
				}
			}
			.main{
				margin: 0 5%;margin-top: .6rem;
				.m_top{
					img{
						width: 100%;
					}
				}
				ul{
					padding-top: .5rem;color: #ff6446;font-size: 18px;text-align: center;
					li{
						padding-bottom:.3rem;
						b{
							display: inline-block;width: 2rem;height: 33px;line-height: 33px;
							background-color:#f0f0f0 ;font-size: 12px;color: #666;border-radius: 30px;
						}
						i{
							font-size: 13px;padding-left: 2px;
						}
						span{
							font-style: italic;display: inline-block;width: 33.33%;text-align: left;				
						}
						.fr{
							text-align: right;	
						}
					}
				}
			}
		}
		#foot{
			margin: 0 5%;margin-top: .6rem;text-align: center;
			color: #d5d5d5;font-size: 12px;padding-bottom: .6rem;
			p{
				height: 40px;background-color: #f6f6f6;padding-top: 8px;
				margin-bottom: .24rem;border-radius: 5px;
			}
		}
		.icon-lihe{
			color: #ffd800;
		}
		.icon-dagou{
			color: #b0b0b0;
		}
		.icon-dagou1{
			color: #ffc040;
		}
		.vue-1px:before{
			border: 1px solid #fe9f12;
			
		}
		
		
</style>
