import {M_BASE_URL} from './commoe_url'
import axios from 'axios'

export const index = () => axios.post(M_BASE_URL, {   //首页数据
  opact: 'ActCpTurnTable/index',
});
export const checkWxBind = () => axios.post(M_BASE_URL, {   //检查是否绑定
  opact: 'Wechat/checkWxBind',
});
export const luckDraw = () => axios.post(M_BASE_URL, {   //抽奖
  opact: 'ActCpTurnTable/luckDraw',
});
export const receive = (tel) => axios.post(M_BASE_URL, {   //输入手机号领取
  opact: 'ActCpTurnTable/receive',
  tel:tel,
});