webpackJsonp([1],{119:function(e,t){},120:function(e,t){},121:function(e,t){},122:function(e,t){},123:function(e,t){},124:function(e,t){},137:function(e,t,n){function o(e){n(122)}var s=n(10)(n(85),n(144),o,"data-v-8a8be0bc",null);e.exports=s.exports},138:function(e,t,n){function o(e){n(119)}var s=n(10)(n(87),n(141),o,"data-v-0d9e5bf8",null);e.exports=s.exports},139:function(e,t,n){function o(e){n(124)}var s=n(10)(n(88),n(146),o,"data-v-de9d1d56",null);e.exports=s.exports},140:function(e,t,n){function o(e){n(123)}var s=n(10)(n(89),n(145),o,"data-v-afde3984",null);e.exports=s.exports},141:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("header",[n("img",{staticClass:"avatar",attrs:{width:"40",height:"40",alt:e.user.name,src:e.user.img}}),e._v(" "),n("p",{staticClass:"name"},[e._v(e._s(e.user.name))]),e._v(" "),n("div",[e._v("状态:  "+e._s(e.loginstate))])])])},staticRenderFns:[]}},142:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"main"},[n("mainv"),e._v(" "),e._m(0)],1),e._v(" "),n("div",{staticClass:"sidebar"},[n("userhead",[e._v("card")]),e._v(" "),n("list",{attrs:{id:"members"}},[e._v("list")]),e._v(" "),n("ctrl",{attrs:{id:"ctrl"}})],1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{attrs:{id:"qrcode",src:"http://39.108.80.57:81/images/droid_download_qrcode.png"}})])}]}},143:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"roomtitle"},[e._v("房间: "+e._s(e.room))]),e._v(" "),e._l(e.vs,function(e){return n("vwrap",{key:e.myid,staticClass:"pai",attrs:{stobj:e.stm}})}),e._v(" "),n("video",{ref:"localcamera",staticClass:"vlocal",attrs:{autoplay:""}})],2)},staticRenderFns:[]}},144:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"ctlitem"},[n("div",{staticClass:"la"},[e._v("camera:")]),e._v(" "),n("el-switch",{attrs:{"on-color":"#13ce66","off-color":"#ff4949"},model:{value:e.camonoff,callback:function(t){e.camonoff=t},expression:"camonoff"}})],1),e._v(" "),n("div",{staticClass:"ctlitem"},[n("div",{staticClass:"la"},[e._v("audio:")]),e._v(" "),n("el-switch",{attrs:{"on-color":"#13ce66","off-color":"#ff4949"},model:{value:e.audonoff,callback:function(t){e.audonoff=t},expression:"audonoff"}})],1),e._v(" "),n("div",{staticClass:"ctlitem",attrs:{id:"usera"}},[n("el-input",{attrs:{placeholder:"null",size:"small"},model:{value:e.setroom.t,callback:function(t){e.setroom.t=t},expression:"setroom.t"}},[n("template",{slot:"prepend"},[e._v("Room")])],2),e._v(" "),n("el-select",{attrs:{clearable:"",placeholder:"请选择"},on:{change:e.selectchange},model:{value:e.seleindex,callback:function(t){e.seleindex=t},expression:"seleindex"}},e._l(e.rooms,function(e){return n("el-option",{key:e.t,attrs:{label:e.t,value:e}})})),e._v(" "),n("el-button",{attrs:{plain:!0,size:"small",type:"primary"},on:{click:e.enterroom}},[e._v("Join")]),n("br"),n("br"),e._v(" "),n("el-input",{attrs:{placeholder:"null",size:"small"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}},[n("template",{slot:"prepend"},[e._v("username")])],2),e._v(" "),n("el-input",{attrs:{placeholder:"null",size:"small"},model:{value:e.userpass,callback:function(t){e.userpass=t},expression:"userpass"}},[n("template",{slot:"prepend"},[e._v("password")])],2),e._v(" "),n("el-button",{attrs:{plain:!0,size:"small",type:"primary",disabled:!e.debug},on:{click:e.auth}},[e._v("Login")]),e._v(" "),e.debug?n("button",{on:{click:e.start}},[e._v("start")]):e._e(),e._v(" "),e.debug?n("button",{on:{click:e.test}},[e._v("test")]):e._e()],1)])},staticRenderFns:[]}},145:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list2"},e._l(e.users,function(t){return n("div",{staticClass:"active2"},[n("img",{staticClass:"avatar",attrs:{width:"30",height:"30",alt:t.name,src:t.img}}),e._v(" "),n("p",{staticClass:"uname"},[e._v(e._s(t.name))])])}))},staticRenderFns:[]}},146:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("video",{ref:"rvideo1",staticClass:"vclass",attrs:{autoplay:""}})},staticRenderFns:[]}},159:function(e,t){},28:function(e,t,n){"use strict";function o(e){e+="";for(var t=0;t<R.length;t++)if(R[t].name===e)return R[t]}function s(e){for(var t=0;t<R.length;t++)if(R[t].name===e)return void R.splice(t,1)}function a(e){function t(t){console.log("------ice cadidate---usr:",e),t.candidate?l(e,{type:"candidate",label:t.candidate.sdpMLineIndex,id:t.candidate.sdpMid,candidate:t.candidate.candidate}):console.log("End of candidates.--------usr:",e)}function n(t){console.log("Remote stream added.------usr:",e),E.a.commit("JOIN_STREAM",{myid:e,stm:t.stream})}function o(t){console.log("-----Remote stream removed. usr,event: ",e,t),i.srcObject=null,C.push(i)}function s(){E.a.commit("REMOVE_STREAM",{myid:e})}function a(t){console.log("------------createOffer------:",t),c.setLocalDescription(t),l(e,t)}e+="";var i=C.shift();try{var r=new RTCPeerConnection(w);console.log("----------peer connection ok:",r),r=null}catch(e){return console.log("Failed to create PeerConnection, exception: "+e.message),void alert("Cannot create RTCPeerConnection object.")}var c=new RTCPeerConnection(w);return c.onicecandidate=t,c.onaddstream=n,c.onremovestream=o,console.log("Created RTCPeerConnnection------usr:",e),T&&c.addStream(T),{name:e,rpc:c,setLocal:a,leave:s}}function i(e,t){var n=a(e);R.push(n),n.rpc.setRemoteDescription(new RTCSessionDescription(t)),n.rpc.createAnswer().then(n.setLocal,m),console.log("-------------------------join room usr:",e),E.a.commit("JOIN_ROOM",{name:e,img:"http://39.108.80.57:81/images/ooopic_128.png"})}function r(e){var t={from:E.a.state.user.uid,to:e,type:5,msg:{t:1}};S.emit("msg",t)}function c(e){var t={from:E.a.state.user.uid,to:e,type:5,msg:{t:5}};S.emit("msg",t)}function l(e,t){var n={from:E.a.state.user.uid,to:e,type:4,msg:t};console.log("---send webrtc msg:",n),S.emit("msg",n)}function u(){var e=E.a.state.user.uid,t=E.a.state.user.name,n=E.a.state.user.pass;S.emit("auth",{uid:e,name:t,passwd:n},function(e){console.log("---auth:",e),"ok"===e&&p(2)})}function d(e,t){e="https://39.108.80.57"+e,fetch(e,{credentials:"include",mode:"cors"}).then(function(e){return console.log("fetch:"+e.statusText),e.text()}).then(function(e){t(null,e)})}function f(e,t,n){e="https://39.108.80.57"+e,fetch(e,{credentials:"include",mode:"cors",method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t}).then(function(e){return console.log("fetch:"+e.statusText),e.text()}).then(function(e){n(null,e)})}function m(e){console.log("Failed to create session description: "+e.toString())}function p(e){E.a.commit("SET_LOGINSTATE",e)}function v(e,t,n,o){console.log("-----io channel init----"),y=e,C.push(t),C.push(n),C.push(o)}function g(e){b=e,r(e.id)}function h(e,t){console.log("Requesting local stream");var n=E.a.state.cameraSwitch,o=E.a.state.audioSwitch;navigator.mediaDevices.getUserMedia({audio:o,video:n}).then(function(e){y.srcObject=e,T=e,console.log("----------------localStream created-----"),t(null)}).catch(function(e){alert("getUserMedia() error: "+e),t(e)})}var _=n(130),O=n.n(_),E=n(6),S=O()("https://39.108.80.57"),b="manyroot",R=[];S.on("msg",function(e){console.log("----msg:",e);var t=e.from,n=e.to,r=e.type,l=e.msg,u=e.bdy;if(console.log("--------from:",t),r)switch(console.log("---------on msg:",n,r,l),r){case 4:if("offer"===l.type)console.log("------------------------offer---------"),i(t,l);else if("answer"===l.type){var d=o(t);console.log("------------------------answer---------u:",d,t),d&&(console.log("------------------------answer---------u1"),d.rpc.setRemoteDescription(new RTCSessionDescription(l)),console.log("------------------------answer---------u2"))}else if("candidate"===l.type){var f=new RTCIceCandidate({sdpMLineIndex:l.label,candidate:l.candidate}),m=o(t);console.log("--------add ice candidate----,",m,t),m&&m.rpc.addIceCandidate(f)}break;case 5:if(3===l.t)console.log("-----joinret",l),h(b.id,function(e){c(b.id)}),console.log("--------room t",b),E.a.commit("SET_ROOM",b.t);else if(1===l.t){console.log("----------------msg userjoined:",l.uid);var p=a(l.uid);R.push(p),p.rpc.createOffer(p.setLocal,function(e){return console.log("-------createOffer err:",e)}),E.a.commit("JOIN_ROOM",{name:l.uid,img:"http://39.108.80.57:81/images/ooopic_128.png"})}else if(2===l.t){console.log("----------------msg userjoined:",l.uid);var v=a(l.uid);v.rpc.close(),v.rpc=null,v.leave(),s(l.uid),v=null,console.log("------htmlvs---len:",C.length),E.a.commit("REMOVE_ROOM",{name:l.uid})}}else if("offer"===u.type)console.log("------------------------offer---------"),i(t,u);else if("answer"===u.type){var g=o(t);console.log("------------------------answer---------u:",g),g&&(console.log("------------------------answer---------u1"),g.rpc.setRemoteDescription(new RTCSessionDescription(u)),console.log("------------------------answer---------u2"))}else if("candidate"===u.type){var _=new RTCIceCandidate({sdpMLineIndex:u.label,candidate:u.candidate}),O=o(t);console.log("--------add ice candidate----,",O),O&&O.rpc.addIceCandidate(_)}else if("usrjoined"===u){var S=a(t);R.push(S),console.log("--------usrjoined--------"),S.rpc.createOffer(S.setLocal,function(e){return console.log("-------createOffer err:",e)}),E.a.commit("JOIN_ROOM",{name:t,img:"http://39.108.80.57:81/images/ooopic_128.png"})}else if("usrleave"===u){var T=a(t);T.rpc.close(),T.rpc=null,T.leave(),s(t),T=null,console.log("------htmlvs---len:",C.length),E.a.commit("REMOVE_ROOM",{name:t})}}),S.on("joinret",function(e){console.log("-----joinret",e),e.code<0||(h(b.id),setTimeout(S.emit("notifyready",{room:b.id}),1e3),console.log("--------room t",b),E.a.commit("SET_ROOM",b.t))}),S.on("connect",function(){console.log("-------connected----,user:"+E.a.state.user.name),p(1)}),S.on("disconnect",function(){console.log("-------disconnected----")});var T,w={iceServers:[{urls:"stun:39.108.80.57"},{urls:"turn:39.108.80.57",username:"my",credential:"123456"}]},C=[],y={};window.onbeforeunload=function(){console.log("----------on before unload----------")},t.a={auth:function(){var e=E.a.state.user.name,t=E.a.state.user.pass;S.emit("auth",{name:e,passwd:t},function(e){return console.log(e)})},httpget:d,httppost:f,init:v,stop:stop,reqJoin:g,authIO:u}},47:function(e,t,n){function o(e){n(121)}var s=n(10)(n(86),n(143),o,"data-v-797442be",null);e.exports=s.exports},49:function(e,t,n){"use strict";var o=n(3),s=n(147),a=n(47),i=n.n(a);o.default.use(s.a),t.a=new s.a({routes:[{path:"/",name:"Hello",component:i.a}]})},51:function(e,t){},52:function(e,t){},53:function(e,t){},54:function(e,t){},55:function(e,t){},56:function(e,t){},57:function(e,t,n){function o(e){n(120)}var s=n(10)(n(84),n(142),o,null,null);e.exports=s.exports},6:function(e,t,n){"use strict";var o=n(3),s=n(149);o.default.use(s.a),t.a=new s.a.Store({state:{user:{uid:0,name:"",pass:"123456",img:"http://39.108.80.57:81/images/ooopic_128.png"},iceconfig:{iceServers:[{url:"stun:39.108.80.57"}]},defimag:"http://39.108.80.57:81/images/ooopic_128.png",userlist:[],cameraSwitch:!0,audioSwitch:!1,streams:[],room:"-",loginState:0},getters:{getICE:function(e){return e.iceconfig}},mutations:{IO_CHANNEL_INIT:function(e){console.log("----------IO_CHANNEL_INIT-------")},STATE_USERNAME:function(e,t){e.user.name=t.n,e.user.uid=t.uid},STATE_USERPASS:function(e,t){e.user.pass=t},JOIN_ROOM:function(e,t){e.userlist.push(t)},REMOVE_ROOM:function(e,t){for(var n=0;n<e.userlist.length;n++){if(e.userlist[n].name===t.name){e.userlist.splice(n,1);break}}},JOIN_STREAM:function(e,t){console.log("aaaaaaaaaa----------add streams-----",t),e.streams.push(t)},REMOVE_STREAM:function(e,t){for(var n=0;n<e.streams.length;n++){if(e.streams[n].myid===t.myid){e.streams.splice(n,1);break}}},SET_CAMERA_ONOFF:function(e,t){e.cameraSwitch=t},SET_AUDIO_ONOFF:function(e,t){e.audioSwitch=t},SET_ROOM:function(e,t){e.room=t},SET_LOGINSTATE:function(e,t){e.loginState=t}},actions:{ioInit:function(e){e.state;console.log("ioInit")},search:function(e,t){return(0,e.commit)("SET_FILTER_KEY",t)},auth:function(e){e.state;console.log("-----store----auth--------")}}})},83:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),s=n(57),a=n.n(s),i=n(49),r=n(58),c=(n.n(r),n(6)),l=n(50),u=(n.n(l),n(54)),d=(n.n(u),n(56)),f=(n.n(d),n(55)),m=(n.n(f),n(52)),p=(n.n(m),n(51)),v=(n.n(p),n(53));n.n(v);o.default.use(l.Switch),o.default.use(l.Table),o.default.use(l.TableColumn),o.default.use(l.Input),o.default.use(l.Button),o.default.use(l.Select),o.default.use(l.Option),o.default.config.productionTip=!1,new o.default({el:"#app",router:i.a,store:c.a,template:"<App/>",components:{App:a.a}})},84:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(47),s=n.n(o),a=n(138),i=n.n(a),r=n(140),c=n.n(r),l=n(137),u=n.n(l);t.default={name:"app",components:{mainv:s.a,userhead:i.a,list:c.a,ctrl:u.a},data:function(){return{camonoff:!0}}}},85:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),s=n(28);t.default={data:function(){return{debug:!1,setroom:{},seleindex:[],rooms:[]}},computed:{camonoff:{get:function(){return o.a.state.cameraSwitch},set:function(e){return o.a.commit("SET_CAMERA_ONOFF",e)}},audonoff:{get:function(){return o.a.state.audioSwitch},set:function(e){return o.a.commit("SET_AUDIO_ONOFF",e)}},username:{get:function(){return o.a.state.user.name},set:function(e){o.a.commit("STATE_USERNAME",e)}},userpass:{get:function(){return o.a.state.user.pass},set:function(e){o.a.commit("STATE_USERPASS",e)}},room:{get:function(){return o.a.state.room},set:function(e){o.a.commit("SET_ROOM",e)}},tt:{get:function(){return this.rooms}}},mounted:function(){console.log("-----monted ctrl-----:");var e=this;s.a.httppost("/api/guestlogin","lat=12.123&lng=113.4434",function(t,n){var a=JSON.parse(n);if(0!==a.code)return void console.log("------login error:",n);o.a.commit("STATE_USERNAME",a),s.a.httpget("/api/getrooms?lat=12.123&lng=113.4434",function(t,n){var o=JSON.parse(n);o&&o.rooms&&o.rooms.length>0&&(e.rooms=o.rooms),s.a.authIO()})})},methods:{auth:function(){console.log("------2----auth--------"),s.a.auth()},start:function(){console.log("start local stream")},stop:function(){s.a.stop()},enterroom:function(){s.a.reqJoin(this.setroom)},test:function(){s.a.httpget("/api/getOnlines/0",function(e,t){return console.log("----http test:"+t+" err:"+e)}),o.a.commit("REMOVE_ROOM",{name:"m2"}),o.a.commit("STATE_USERNAME","heiehie")},selectchange:function(e){console.log("----selectchange---:",e),this.setroom=e}}}},86:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(28),s=n(139),a=n.n(s);t.default={computed:{room:function(){return decodeURIComponent(this.$store.state.room)},vs:function(){return this.$store.state.streams}},components:{vwrap:a.a},mounted:function(){console.log("mounted----mainView-------"),o.a.init(this.$refs.localcamera)},methods:{update:function(){console.log("---------update--------");for(var e in this.vs){var t=this.vs[e];console.log("---------update-----vvvv---",t.myid,this.$refs),this.$refs[t.myid]&&(console.log("-------------set stream----"),this.$refs[t.myid][0].srcObject=t.stm)}}}}},87:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6);t.default={computed:{user:function(){return o.a.state.user},loginstate:function(){var e=o.a.state.loginState;return 0===e?"未连接":1===e?"已连接":2===e?0===o.a.state.user.name.indexOf("Guest")?"游客已登录":"已登录":void 0}},methods:{onKeyup:function(e){console.log("--------------onKeyup---------"),console.log("---store:",o.a.state.user)}}}},88:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6);t.default={computed:{user:function(){return o.a.state.user}},props:["stobj"],mounted:function(){console.log("---------video wrap----mounted----"),this.$refs.rvideo1.srcObject=this.stobj},methods:{onKeyup:function(e){console.log("--------------onKeyup---------"),console.log("---store:",o.a.state.user)}}}},89:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6);t.default={computed:{users:function(){return o.a.state.userlist}},mounted:function(){console.log("-----monted list-----")}}}},[83]);
//# sourceMappingURL=app.212943e4907833d15092.js.map