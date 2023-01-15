(function(){"use strict";var e={9261:function(e,a,t){var s=t(7387),r=t.n(s),n=(t(1818),t(9242)),o=t(2723),l=t.n(o),i=t(3396),c=t(7139);const d={class:"body-content"};function u(e,a,t,s,r,n){const o=(0,i.up)("nav-bar"),l=(0,i.up)("home"),u=(0,i.up)("lobby"),h=(0,i.up)("game"),m=(0,i.up)("FooterComponent");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{playerName:e.currentPlayer&&e.currentPlayer.name},null,8,["playerName"]),(0,i._)("div",d,[e.showHomeView?((0,i.wg)(),(0,i.j4)(l,{key:0,class:(0,c.C_)(["animate__animated",e.TRANSITIONS[Math.floor(Math.random()*e.TRANSITIONS.length)]])},null,8,["class"])):(0,i.kq)("",!0),e.showLobbyView?((0,i.wg)(),(0,i.j4)(u,{key:1,currentPlayer:e.currentPlayer},null,8,["currentPlayer"])):(0,i.kq)("",!0),e.showGameView?((0,i.wg)(),(0,i.j4)(h,{key:2,currentPlayer:e.currentPlayer},null,8,["currentPlayer"])):(0,i.kq)("",!0)]),(0,i.Wm)(m)],64)}var h=t(5597);const m=e=>((0,i.dD)("data-v-71516f78"),e=e(),(0,i.Cn)(),e),p={class:"section border-top"},y=m((()=>(0,i._)("div",{class:"is-flex-tablet is-justify-content-end"},[(0,i._)("p",null,[(0,i.Uk)(" Created by "),(0,i._)("a",{href:"https://github.com/etuong/cards-for-humanity",target:"_blank"},"Ethan Uong"),(0,i.Uk)(" 👨‍💻 ")])],-1))),w=[y];function C(e,a,t,s,r,n){return(0,i.wg)(),(0,i.iD)("footer",p,w)}var g=(0,i.aZ)({name:"FooterComponent"}),v=t(89);const b=(0,v.Z)(g,[["render",C],["__scopeId","data-v-71516f78"]]);var f=b;const _={class:"is-fixed-top message-bar"},A={class:"section animate__animated animate__fadeIn"},k={class:"czar-container"};function z(e,a,t,s,r,n){const o=(0,i.up)("winner-modal"),l=(0,i.up)("player-view"),d=(0,i.up)("pane"),u=(0,i.up)("status"),h=(0,i.up)("czar-view"),m=(0,i.up)("splitpanes");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",_,[(0,i._)("p",null,(0,c.zw)(e.message),1)]),(0,i._)("section",A,[(0,i.Wm)(o,{onHandleNextRound:e.handleNextRound},null,8,["onHandleNextRound"]),(0,i.Wm)(m,{class:"default-theme"},{default:(0,i.w5)((()=>[e.amICurrentCzar?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(d,{key:0,size:65},{default:(0,i.w5)((()=>[(0,i.Wm)(l,{currentPlayer:e.currentPlayer,playerMessage:e.playerMessage,isMobile:e.isMobile},null,8,["currentPlayer","playerMessage","isMobile"])])),_:1})),!e.isMobile||e.amICurrentCzar?((0,i.wg)(),(0,i.j4)(d,{key:1,size:35},{default:(0,i.w5)((()=>[(0,i._)("div",k,[(0,i.Wm)(u,{czarName:e.currentCzar.name},null,8,["czarName"]),(0,i.Wm)(h,{playerSelections:e.playerSelections,currentBlackCard:e.currentBlackCard,amICurrentCzar:e.amICurrentCzar,czarMessage:e.czarMessage,roomId:e.currentPlayer&&e.currentPlayer.roomId},null,8,["playerSelections","currentBlackCard","amICurrentCzar","czarMessage","roomId"])])])),_:1})):(0,i.kq)("",!0)])),_:1})])],64)}var S=t(3581);const M=e=>((0,i.dD)("data-v-7c971c93"),e=e(),(0,i.Cn)(),e),x={class:"black-card-container"},P={key:0,class:"czar-selections"},I={class:"prev-selection"},B={class:"current-selection"},D={class:"next-selection"},V={key:1,class:"czar-bar"},L=["disabled"],N=M((()=>(0,i._)("strong",null,"Select!",-1))),H=[N];function R(e,a,t,s,r,n){const o=(0,i.up)("card");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",x,[(0,i.Wm)(o,{isWhite:!1,text:e.currentBlackCard},null,8,["text"])]),e.playerSelections.length>1?((0,i.wg)(),(0,i.iD)("div",P,[(0,i._)("div",I,[(0,i.Wm)(o,{isWhite:!0,text:e.playerSelections[e.czarPrevSelectionIndex]},null,8,["text"])]),(0,i._)("div",B,[(0,i.Wm)(o,{isWhite:!0,text:e.playerSelections[e.czarCurrSelectionIndex]},null,8,["text"])]),(0,i._)("div",D,[(0,i.Wm)(o,{isWhite:!0,text:e.playerSelections[e.czarNextSelectionIndex]},null,8,["text"])]),e.amICurrentCzar?((0,i.wg)(),(0,i.iD)("a",{key:0,class:"prev",onClick:a[0]||(a[0]=a=>e.changeSelection(-1))},"❮")):(0,i.kq)("",!0),e.amICurrentCzar?((0,i.wg)(),(0,i.iD)("a",{key:1,class:"next",onClick:a[1]||(a[1]=a=>e.changeSelection(1))},"❯")):(0,i.kq)("",!0)])):(0,i.kq)("",!0),e.amICurrentCzar?((0,i.wg)(),(0,i.iD)("div",V,[(0,i._)("p",null,(0,c.zw)(e.message),1),(0,i._)("button",{disabled:!e.readyToSelect,class:"button is-success is-small",onClick:a[2]||(a[2]=(...a)=>e.submitSelection&&e.submitSelection(...a))},H,8,L)])):(0,i.kq)("",!0)],64)}var j="data:image/png;base64,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";const E=e=>((0,i.dD)("data-v-392bc580"),e=e(),(0,i.Cn)(),e),T=E((()=>(0,i._)("div",{className:"card-logo"},[(0,i._)("img",{src:j,alt:"card logo"}),(0,i._)("span",null,"Cards For Humanity")],-1)));function G(e,a,t,s,r,n){return(0,i.wg)(),(0,i.iD)("div",{class:(0,c.C_)(e.isWhite?"white-card":"black-card"),onMouseenter:a[0]||(a[0]=(...a)=>e.handleHover&&e.handleHover(...a)),onMouseleave:a[1]||(a[1]=(...a)=>e.handleHover&&e.handleHover(...a)),style:(0,c.j5)([e.hoverable?{position:"relative","margin-bottom":[0===e.offset?"-160px":-(170-e.offset)+"px"]}:{"margin-bottom":"0"}])},[(0,i._)("p",null,(0,c.zw)(e.text),1),T],38)}var U=(0,i.aZ)({name:"Card",props:{hoverable:Boolean,isWhite:Boolean,text:String},data(){return{offset:0}},methods:{handleHover(e){let a=e.type;if("mouseenter"===a){let a=e.target.querySelector("p"),t=a.offsetHeight;this.offset=t+10}else"mouseleave"===a&&(this.offset=0)}}});const Y=(0,v.Z)(U,[["render",G],["__scopeId","data-v-392bc580"]]);var O=Y,W=(0,i.aZ)({name:"CzarView",components:{Card:O},props:{amICurrentCzar:Boolean,currentBlackCard:String,czarMessage:String,playerSelections:Array,roomId:String},data(){return{czarCurrSelectionIndex:0,czarNextSelectionIndex:1,czarPrevSelectionIndex:this.playerSelections.length-1,message:this.czarMessage,readyToSelect:!1}},methods:{setDefault(){this.readyToSelect=!1,this.czarCurrSelectionIndex=0,this.czarNextSelectionIndex=1,this.czarPrevSelectionIndex=this.playerSelections.length-1},changeSelection(e){let a=this.playerSelections.length;const t=t=>(t+=e,t<0?t=a-1:t===a&&(t=0),t);this.$socket.emit("slide_player_selections",{czarPrevSelectionIndex:t(this.czarPrevSelectionIndex),czarCurrSelectionIndex:t(this.czarCurrSelectionIndex),czarNextSelectionIndex:t(this.czarNextSelectionIndex),roomId:this.roomId})},submitSelection(){this.$socket.emit("czar_selection",{czarSelection:this.playerSelections[this.czarCurrSelectionIndex],roomId:this.roomId})}},sockets:{slide_player_selections(e){this.czarPrevSelectionIndex=e.czarPrevSelectionIndex,this.czarCurrSelectionIndex=e.czarCurrSelectionIndex,this.czarNextSelectionIndex=e.czarNextSelectionIndex},new_round(){this.setDefault()}},watch:{czarMessage(e){this.message=e},playerSelections(e){e.length>0&&(this.czarPrevSelectionIndex=e.length-1,this.readyToSelect=!0)}}});const Q=(0,v.Z)(W,[["render",R],["__scopeId","data-v-7c971c93"]]);var Z=Q;const q=e=>((0,i.dD)("data-v-6c49a82a"),e=e(),(0,i.Cn)(),e),K={class:"card-container",id:"card-panel"},J={class:"player-bar"},F=["disabled"],X=q((()=>(0,i._)("strong",null,"Select!",-1))),ee=[X];function ae(e,a,t,s,r,n){const o=(0,i.up)("card");return e.playerCards?((0,i.wg)(),(0,i.iD)("div",{key:0,class:(0,c.C_)(["player-selection",{"white-cards":e.isMobile}])},[(0,i._)("div",K,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.playerCards,((a,t)=>((0,i.wg)(),(0,i.j4)(o,{class:"animate__animated",key:a,isWhite:!0,text:a,onClick:s=>e.selectCard(t,a),hoverable:e.isMobile,style:(0,c.j5)({position:e.isMobile?"relative":"absolute"})},null,8,["text","onClick","hoverable","style"])))),128))]),(0,i._)("div",J,[(0,i._)("p",null,(0,c.zw)(e.message),1),(0,i._)("button",{disabled:!e.enableConfirmationBtn,class:"button is-success is-small",onClick:a[0]||(a[0]=(...a)=>e.submitSelection&&e.submitSelection(...a))},ee,8,F)])],2)):(0,i.kq)("",!0)}var te=(0,i.aZ)({name:"PlayerView",components:{Card:O},props:{currentPlayer:Object,isMobile:Boolean,playerMessage:String},data(){return{enableConfirmationBtn:!1,hasPlayerSelected:!1,message:this.playerMessage,selected_card:[],playerCards:this.currentPlayer?.cards}},methods:{setDefault(){this.nableConfirmationBtn=!1,this.hasPlayerSelected=!1,this.selected_card=[]},selectCard(e,a){this.hasPlayerSelected||(this.selected_card=[e,a],this.message=a,this.enableConfirmationBtn=!0)},submitSelection(){this.$socket.emit("white_card_submission",{roomId:this.currentPlayer.roomId,playerId:this.currentPlayer.id,selection:this.selected_card[1]}),this.message="Waiting on other players",this.enableConfirmationBtn=!1,this.hasPlayerSelected=!0,document.querySelector(".clicked-card").classList.add("selected-card")},attachCardStyle(e){$(e).mousedown((e=>{this.isMobile||($(".clicked-card").css("z-index","0"),$(e.currentTarget).css("z-index","100")),this.hasPlayerSelected&&!this.isMobile||($(".clicked-card").removeClass("clicked-card"),$(e.currentTarget).addClass("clicked-card"))}))},attachDraggable(e){$(e).draggable({stack:"div",containment:"parent"}).addClass("attached")},dropNewCards(e){var a=document.querySelectorAll(e);for(var t of a)$(t).css({left:Math.random()*($("#card-panel").width()-$(t).width()),top:Math.random()*($("#card-panel").height()-$(t).height())})}},sockets:{new_round(){this.setDefault();const e=document.querySelector(".selected-card");e.parentElement.removeChild(e),$(".clicked-card").removeClass("clicked-card")}},mounted(){this.attachCardStyle(this.SELECTOR),this.isMobile||(this.attachDraggable(this.SELECTOR),this.dropNewCards(".card-container .white-card"))},created(){this.SELECTOR=".card-container .white-card:not(.attached)"},watch:{playerMessage(e){this.message=e},currentPlayer(e){this.playerCards=e?.cards,this.$forceUpdate(),setTimeout((()=>{this.attachCardStyle(this.SELECTOR),this.isMobile||($(this.SELECTOR).addClass("animate__heartBeat"),this.attachDraggable(this.SELECTOR))}),100)}}});const se=(0,v.Z)(te,[["render",ae],["__scopeId","data-v-6c49a82a"]]);var re=se;const ne=e=>((0,i.dD)("data-v-1db4e89a"),e=e(),(0,i.Cn)(),e),oe={class:"table is-striped is-hoverable is-fullwidth"},le=ne((()=>(0,i._)("thead",null,[(0,i._)("tr",null,[(0,i._)("th",null,"Name"),(0,i._)("th",null,"Score"),(0,i._)("th",null,"Pick Card?"),(0,i._)("th",null,"View Winning Cards")])],-1))),ie={key:0},ce=ne((()=>(0,i._)("h3",null,"Czar",-1))),de=[ce],ue={key:1},he=["checked"],me=ne((()=>(0,i._)("label",{class:"switch-label"},null,-1))),pe=["disabled","onClick"],ye=ne((()=>(0,i._)("span",{class:"icon"},"👁",-1))),we=[ye];function Ce(e,a,t,s,r,n){const o=(0,i.up)("victory-board-modal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(o,{selectedPlayer:e.selectedPlayer},null,8,["selectedPlayer"]),(0,i._)("table",oe,[le,(0,i._)("tbody",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.playersStatus,((a,t)=>((0,i.wg)(),(0,i.iD)("tr",{key:t},[(0,i._)("td",null,(0,c.zw)(a.name),1),(0,i._)("td",null,(0,c.zw)(a.winningCards.length),1),e.czarName===a.name?((0,i.wg)(),(0,i.iD)("td",ie,de)):((0,i.wg)(),(0,i.iD)("td",ue,[(0,i._)("input",{type:"checkbox",checked:a.cardSelected,class:"switch is-rounded is-outlined is-success"},null,8,he),me])),(0,i._)("td",null,[(0,i._)("button",{class:"victory-button jb-modal","data-target":"sample-modal",type:"button",disabled:a.winningCards.length<1,onClick:t=>e.handleVictoryBoardClick(a)},we,8,pe)])])))),128))])])],64)}const ge=e=>((0,i.dD)("data-v-d9d224d6"),e=e(),(0,i.Cn)(),e),ve={key:0,class:"slideIn"},be={class:"list"},fe=ge((()=>(0,i._)("b",null,"B: ",-1))),_e=ge((()=>(0,i._)("b",null,"W: ",-1)));function Ae(e,a,t,s,r,o){return(0,i.wg)(),(0,i.j4)(n.uT,null,{default:(0,i.w5)((()=>[e.open?((0,i.wg)(),(0,i.iD)("div",ve,[(0,i._)("h1",null,"Player: "+(0,c.zw)(e.playerName),1),(0,i._)("div",be,[(0,i._)("ul",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.pairs,(({black:e,white:a},t)=>((0,i.wg)(),(0,i.iD)("div",{class:"pair-item",key:t},[(0,i._)("li",null,[fe,(0,i.Uk)((0,c.zw)(e),1)]),(0,i._)("li",null,[_e,(0,i.Uk)((0,c.zw)(a),1)])])))),128))])]),(0,i._)("button",{class:"close-btn",onClick:a[0]||(a[0]=a=>e.open=!1)},"X")])):(0,i.kq)("",!0)])),_:1})}var ke=(0,i.aZ)({name:"VictoryBoardModal",props:{selectedPlayer:Object},data(){return{open:!1,playerName:"",pairs:[]}},methods:{},watch:{selectedPlayer(e){this.pairs=e.winningCards,this.playerName=e.name,this.open=!0}}});const ze=(0,v.Z)(ke,[["render",Ae],["__scopeId","data-v-d9d224d6"]]);var Se=ze,Me=(0,i.aZ)({name:"Status",components:{VictoryBoardModal:Se},props:{czarName:String},data(){return{playersStatus:void 0,openPlayerVictoryBoard:!1,selectedPlayer:void 0}},methods:{handleVictoryBoardClick(e){this.selectedPlayer={...e}}},sockets:{update_game_status(e){this.playersStatus=e}}});const xe=(0,v.Z)(Me,[["render",Ce],["__scopeId","data-v-1db4e89a"]]);var Pe=xe;const Ie=e=>((0,i.dD)("data-v-67fbeb00"),e=e(),(0,i.Cn)(),e),Be={class:"modal__title"},De=Ie((()=>(0,i._)("span",{class:"modal__subtitle"},"You've won this round.",-1))),Ve={class:"modal__content"},Le=Ie((()=>(0,i._)("strong",null,"Next Round",-1))),Ne=[Le];function He(e,a,t,s,r,n){const o=(0,i.up)("card"),l=(0,i.up)("vue-final-modal");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(l,{modelValue:e.showModal,"onUpdate:modelValue":a[1]||(a[1]=a=>e.showModal=a),classes:"modal-container","content-class":"modal-content","click-to-close":!1,drag:!0},{default:(0,i.w5)((()=>[(0,i._)("span",Be,"Congratulations, "+(0,c.zw)(e.winner)+"!",1),De,(0,i._)("div",Ve,[(0,i.Wm)(o,{isWhite:!1,text:e.blackCard},null,8,["text"]),(0,i.Wm)(o,{isWhite:!0,text:e.whiteCard},null,8,["text"])]),(0,i._)("button",{class:"button is-success is-medium next-round-btn",onClick:a[0]||(a[0]=(...a)=>e.handleNextRound&&e.handleNextRound(...a))},Ne)])),_:1},8,["modelValue"])])}var Re=t(2848),je=(0,i.aZ)({name:"WinnerModal",components:{VueFinalModal:Re.iR,ModalsContainer:Re.Lu,Card:O},props:{},data(){return{showModal:!1,winner:"",blackCard:"",whiteCard:""}},methods:{handleNextRound(){this.showModal=!this.showModal,this.$emit("handleNextRound")}},sockets:{winner_announced(e){this.winner=e.name,this.blackCard=e.black,this.whiteCard=e.white,this.showModal=!0}}});const Ee=(0,v.Z)(je,[["render",He],["__scopeId","data-v-67fbeb00"]]);var Te=Ee,Ge=(0,i.aZ)({name:"PlayView",components:{CzarView:Z,CzarView:Z,Pane:S.X,PlayerView:re,Splitpanes:S.F,Status:Pe,WinnerModal:Te},props:{currentPlayer:Object},data(){return{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),amICurrentCzar:!1,currentCzar:"",currentBlackCard:"",message:"",playerMessage:"",czarMessage:"",playerSelections:[]}},methods:{setDefault(){this.amICurrentCzar=!1,this.currentCzar="",this.currentBlackCard="",this.message="",this.playerMessage="Please choose a white card to fill in the blank",this.czarMessage="Please wait for the other players to select their white card",this.playerSelections=[]},handleNextRound(){this.$socket.emit("next_round",{roomId:this.currentPlayer.roomId,playerId:this.currentPlayer.id})}},sockets:{update_playground(e){this.currentCzar=e.currentCzar,this.currentBlackCard=e.currentBlackCard,this.amICurrentCzar=this.currentPlayer.name===e.currentCzar.name,this.message=`${this.amICurrentCzar?"You":e.currentCzar.name} ${this.amICurrentCzar?"are":"is"} the current Czar.`},czar_chooses(e){this.playerSelections=e.playerSelections,this.message=`All players have selected a white card. Czar ${this.currentCzar.name} will now choose their favorite!`,this.playerMessage=`Waiting on Czar ${this.currentCzar.name} to select their favorite response`,this.czarMessage="Please select your favorite answer!"},new_round(){this.setDefault()}},mounted(){this.setDefault()}});const Ue=(0,v.Z)(Ge,[["render",z],["__scopeId","data-v-82b2cf76"]]);var Ye=Ue,Oe=t.p+"img/heart-card.145a5c35.png";const We=e=>((0,i.dD)("data-v-f7b3d0f8"),e=e(),(0,i.Cn)(),e),Qe={class:"section"},Ze={class:"container"},qe={class:"mb-6 pb-3 is-multiline"},Ke=We((()=>(0,i._)("div",{class:"column is-12 is-9-desktop mx-auto has-text-centered"},[(0,i._)("h2",{class:"mb-4 is-size-1 is-size-3-mobile has-text-weight-bold"}," Cards For Humanity "),(0,i._)("p",{class:"subtitle has-text-grey mb-5"}," An adult party game in which players complete fill-in-the-blank statements using words or phrases typically deemed offensive, risqué or politically incorrect printed on playing cards ")],-1))),Je={class:"buttons is-centered"},Fe=We((()=>(0,i._)("strong",null,"Create a Game",-1))),Xe=[Fe],$e=We((()=>(0,i._)("strong",null,"Join a Game",-1))),ea=[$e],aa={class:"columns is-multiline"},ta=We((()=>(0,i._)("div",{class:"column is-4 is-6-desktop"},[(0,i._)("img",{class:"mx-auto mt-0-widescreen is-block image",alt:"Heart Card",src:Oe})],-1))),sa={class:"column is-12 is-6-desktop"},ra=We((()=>(0,i._)("p",null," To start the game, create or join a room. Each player is dealt with ten White Cards. ",-1))),na=We((()=>(0,i._)("ol",null,[(0,i._)("li",null," Each player takes turn to be the Card Czar and plays a Black Card "),(0,i._)("li",null," Everyone else answers the question by choosing one White card that fills in the blank "),(0,i._)("li",null," The Card Czar shuffles all of the answers and shares each card combination and then picks a favorite "),(0,i._)("li",null," Whoever played that answer keeps the Black Card as one Awesome Point "),(0,i._)("li",null,"Player with most points wins."),(0,i._)("li",null," It is recommended to use a teleconference software like Zoom to chat. ")],-1))),oa=We((()=>(0,i._)("p",null,"Be nice, but not too nice, and have fun!",-1)));function la(e,a,t,s,r,n){const o=(0,i.up)("game-creator"),l=(0,i.up)("game-joiner"),c=(0,i.up)("icon-text");return(0,i.wg)(),(0,i.iD)("section",Qe,[(0,i._)("div",Ze,[e.showGameCreatorModal?((0,i.wg)(),(0,i.j4)(o,{key:0,onClose:a[0]||(a[0]=a=>e.showGameCreatorModal=!1)})):(0,i.kq)("",!0),e.showGameJoinerModal?((0,i.wg)(),(0,i.j4)(l,{key:1,onClose:a[1]||(a[1]=a=>e.showGameJoinerModal=!1)})):(0,i.kq)("",!0),(0,i._)("div",qe,[Ke,(0,i._)("div",Je,[(0,i._)("button",{class:"button is-success is-medium",onClick:a[2]||(a[2]=a=>e.showGameCreatorModal=!e.showGameCreatorModal)},Xe),(0,i._)("button",{class:"button is-success is-medium",onClick:a[3]||(a[3]=a=>e.showGameJoinerModal=!e.showGameJoinerModal)},ea)])]),(0,i._)("div",aa,[ta,(0,i._)("div",sa,[(0,i.Wm)(c,{title:"Setup"},{default:(0,i.w5)((()=>[ra])),_:1}),(0,i.Wm)(c,{title:"Game Play"},{default:(0,i.w5)((()=>[na])),_:1}),(0,i.Wm)(c,{title:"House Rules"},{default:(0,i.w5)((()=>[oa])),_:1})])])])])}const ia={class:"field column is-6"},ca=(0,i._)("label",{class:"label"},"Player's Name",-1),da={class:"control"},ua={key:0,class:"help is-danger"},ha={class:"field column is-6"},ma=(0,i._)("label",{class:"label"},"Password",-1),pa={class:"control"},ya={key:0,class:"help is-danger"},wa=(0,i._)("input",{type:"submit",style:{display:"none"}},null,-1);function Ca(e,a,t,s,r,o){const l=(0,i.up)("card-modal");return(0,i.wg)(),(0,i.j4)(l,{title:"Create a Game",visible:!0,transition:"fade",class:"section-xs",onCancel:e.close,onOk:e.createRoom,okText:"OK"},{default:(0,i.w5)((()=>[(0,i._)("form",{class:"columns is-multiline",onSubmit:a[2]||(a[2]=(0,n.iM)(((...a)=>e.createRoom&&e.createRoom(...a)),["prevent"]))},[(0,i._)("div",ia,[ca,(0,i._)("div",da,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":a[0]||(a[0]=a=>e.name=a),class:"input",type:"text",placeholder:"Enter your name..",required:""},null,512),[[n.nr,e.name]])]),e.errors["name"]?((0,i.wg)(),(0,i.iD)("p",ua," You have to enter a name ")):(0,i.kq)("",!0)]),(0,i._)("div",ha,[ma,(0,i._)("div",pa,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),class:"input",type:"text",placeholder:"Set a password..",required:""},null,512),[[n.nr,e.password]])]),e.errors["password"]?((0,i.wg)(),(0,i.iD)("p",ya," Minimum password length is 4 ")):(0,i.kq)("",!0)]),wa],32)])),_:1},8,["onCancel","onOk"])}var ga=t(1844),va=(0,i.aZ)({name:"GameCreator",components:{CardModal:ga.AY},data(){return{errors:{name:!1,password:!1},name:"",password:""}},methods:{createRoom(){let e=!0;if(this.name.length<1?(this.errors["name"]=!0,e=!1):this.errors["name"]=!1,this.password.length<1?(this.errors["password"]=!0,e=!1):this.errors["password"]=!1,!e)return!1;this.$socket.emit("create_room",{name:this.name,password:this.password}),this.close()},close(){this.$emit("close")}}});const ba=(0,v.Z)(va,[["render",Ca]]);var fa=ba;const _a={class:"field column is-6"},Aa=(0,i._)("label",{class:"label"},"Player's Name",-1),ka={class:"control"},za={key:0,class:"help is-danger"},Sa={class:"field column is-6"},Ma=(0,i._)("label",{class:"label"},"Password",-1),xa={class:"control"},Pa={key:0,class:"help is-danger"},Ia=(0,i._)("input",{type:"submit",style:{display:"none"}},null,-1);function Ba(e,a,t,s,r,o){const l=(0,i.up)("card-modal");return(0,i.wg)(),(0,i.j4)(l,{title:"Join a Game",visible:!0,transition:"fade",class:"section-xs",onCancel:e.close,onOk:e.joinRoom,okText:"OK"},{default:(0,i.w5)((()=>[(0,i._)("form",{class:"columns is-multiline",onSubmit:a[2]||(a[2]=(0,n.iM)(((...a)=>e.joinRoom&&e.joinRoom(...a)),["prevent"]))},[(0,i._)("div",_a,[Aa,(0,i._)("div",ka,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":a[0]||(a[0]=a=>e.name=a),class:"input",type:"text",placeholder:"Enter your name..",required:""},null,512),[[n.nr,e.name]])]),e.errors["name"]?((0,i.wg)(),(0,i.iD)("p",za," You have to enter a name ")):(0,i.kq)("",!0)]),(0,i._)("div",Sa,[Ma,(0,i._)("div",xa,[(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),class:"input",type:"text",placeholder:"Set a password..",required:""},null,512),[[n.nr,e.password]])]),e.errors["password"]?((0,i.wg)(),(0,i.iD)("p",Pa," Password needs to be at least 4 characters! ")):(0,i.kq)("",!0)]),Ia],32)])),_:1},8,["onCancel","onOk"])}var Da=(0,i.aZ)({name:"GameJoiner",components:{CardModal:ga.AY},data(){return{name:"",password:"",errors:{name:!1,password:!1}}},methods:{joinRoom(){let e=!0;if(this.name.length<1?(this.errors["name"]=!0,e=!1):this.errors["name"]=!1,this.password.length<1?(this.errors["password"]=!0,e=!1):this.errors["password"]=!1,!e)return!1;this.$socket.emit("join_room",{name:this.name,password:this.password}),this.close()},close(){this.$emit("close")}}});const Va=(0,v.Z)(Da,[["render",Ba]]);var La=Va;const Na={class:"mb-6 is-flex"},Ha=(0,i._)("span",null,[(0,i._)("svg",{width:"48",height:"48",viewbox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,i._)("path",{d:"M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z",fill:"#00d1b2"}),(0,i._)("circle",{cx:"24",cy:"24",r:"23.5",stroke:"#00d1b2"})])],-1),Ra={class:"ml-3"},ja={class:"is-size-4 has-text-weight-bold mb-2"},Ea={class:"has-text-grey"};function Ta(e,a,t,s,r,n){return(0,i.wg)(),(0,i.iD)("div",Na,[Ha,(0,i._)("div",Ra,[(0,i._)("h4",ja,(0,c.zw)(e.title),1),(0,i._)("p",Ea,[(0,i.WI)(e.$slots,"default")])])])}var Ga=(0,i.aZ)({name:"IconText",props:{title:{type:String,required:!0}}});const Ua=(0,v.Z)(Ga,[["render",Ta]]);var Ya=Ua,Oa=(0,i.aZ)({name:"HomeView",components:{IconText:Ya,GameCreator:fa,GameJoiner:La},data(){return{showGameCreatorModal:!1,showGameJoinerModal:!1}},methods:{}});const Wa=(0,v.Z)(Oa,[["render",la],["__scopeId","data-v-f7b3d0f8"]]);var Qa=Wa;const Za=e=>((0,i.dD)("data-v-2b5d8e6a"),e=e(),(0,i.Cn)(),e),qa={class:"hero welcome is-small animate__animated animate__fadeIn"},Ka={class:"hero-body"},Ja={class:"container"},Fa={class:"columns"},Xa={class:"column"},$a={class:"title is-1"},et=Za((()=>(0,i._)("h2",{class:"subtitle is-5"},"Are you ready?",-1))),at=["disabled"],tt=Za((()=>(0,i._)("strong",null,"Ready!",-1))),st=[tt],rt=Za((()=>(0,i._)("br",null,null,-1))),nt=Za((()=>(0,i._)("br",null,null,-1))),ot=Za((()=>(0,i._)("h2",{class:"title is-5"},"Let's wait for other players",-1))),lt=Za((()=>(0,i._)("h2",{class:"subtitle is-5"}," We need at least 3 players to start. As soon as all players are ready, anyone can press the Start button to start playing! ",-1))),it=["disabled"],ct=Za((()=>(0,i._)("strong",null,"Start!",-1))),dt=[ct],ut={class:"column"},ht={class:"container"},mt={key:0,class:"list has-hoverable-list-items has-visible-pointer-controls"},pt=["data-letters"],yt={class:"list-item-content"},wt={class:"list-item-title"};function Ct(e,a,t,s,r,n){return(0,i.wg)(),(0,i.iD)("section",qa,[(0,i._)("div",Ka,[(0,i._)("div",Ja,[(0,i._)("div",Fa,[(0,i._)("div",Xa,[(0,i._)("h1",$a,"Hello, "+(0,c.zw)(e.currentPlayer?.name)+"!",1),et,(0,i._)("button",{class:"button is-info is-medium",onClick:a[0]||(a[0]=(...a)=>e.setPlayerReady&&e.setPlayerReady(...a)),disabled:e.currentPlayer?.ready},st,8,at),rt,nt,ot,lt,(0,i._)("button",{class:(0,c.C_)(["button is-success is-medium",{pulse:e.playersData?.isGameReady}]),onClick:a[1]||(a[1]=(...a)=>e.setGameReady&&e.setGameReady(...a)),disabled:!e.playersData?.isGameReady},dt,10,it)]),(0,i._)("div",ut,[(0,i._)("div",ht,[e.playersData&&e.playersData.players?((0,i.wg)(),(0,i.iD)("div",mt,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.playersData.players,((e,a)=>((0,i.wg)(),(0,i.iD)("div",{key:a,class:"list-item"},[(0,i._)("div",{class:"list-item-title","data-letters":`${e.name.charAt(0).toUpperCase()}`},null,8,pt),(0,i._)("div",yt,[(0,i._)("div",wt,(0,c.zw)(e.name),1),(0,i._)("div",{class:(0,c.C_)(["list-item-description",{flash:!e.ready}])},(0,c.zw)(e.ready?"Ready":"Not ready"),3)])])))),128))])):(0,i.kq)("",!0)])])])])])])}var gt=(0,i.aZ)({name:"LobbyView",components:{},props:{currentPlayer:Object},data(){return{playersData:void 0}},methods:{setPlayerReady(){this.$socket.emit("player_ready",this.currentPlayer)},setGameReady(){this.$socket.emit("game_ready",this.currentPlayer.roomId)}},sockets:{update_preparation(e){this.playersData=e}}});const vt=(0,v.Z)(gt,[["render",Ct],["__scopeId","data-v-2b5d8e6a"]]);var bt=vt;const ft=e=>((0,i.dD)("data-v-36ced544"),e=e(),(0,i.Cn)(),e),_t={class:"navbar is-fixed-top"},At={class:"navbar-brand"},kt=ft((()=>(0,i._)("img",{src:j,class:"logo"},null,-1))),zt=ft((()=>(0,i._)("a",{class:"navbar-item site-title",href:"#"},"Cards For Humanity ",-1))),St={class:"navbar-item site-title player-name",href:"#"};function Mt(e,a,t,s,r,n){return(0,i.wg)(),(0,i.iD)("nav",_t,[(0,i._)("div",At,[kt,zt,(0,i._)("a",St,(0,c.zw)(e.playerName),1)])])}var xt=(0,i.aZ)({name:"NavBar",props:{playerName:String},methods:{}});const Pt=(0,v.Z)(xt,[["render",Mt],["__scopeId","data-v-36ced544"]]);var It=Pt,Bt=(0,i.aZ)({components:{FooterComponent:f,Game:Ye,Home:Qa,Lobby:bt,NavBar:It},data(){return{currentPlayer:void 0,showGameView:!1,showHomeView:!0,showLobbyView:!1}},methods:{toggle(){this.open=!this.open},showView(e){switch(this.showHomeView=!1,this.showLobbyView=!1,this.showGameView=!1,e){case"Home":this.showHomeView=!0;break;case"Lobby":this.showLobbyView=!0;break;case"Game":this.showGameView=!0;break;default:}},showToast(e,a,t=3500){(0,h.toast)({message:e,type:a,duration:t,position:"bottom-right",animate:{in:"fadeIn",out:"fadeOut"}})}},sockets:{connected(){console.log("Application socket is connected!")},update_player(e){this.currentPlayer=e},show_home(){this.showView("Home"),this.showToast("Not enough players to play! Need at least 3 people :(","is-danger",5e3),this.currentPlayer=void 0},show_lobby(){this.showView("Lobby")},game_start(){this.showView("Game")},player_disconnect(e){this.showToast(`Player ${e} has left the room`,"is-warning")},room_existed(){this.showToast("Room with your password has been created! Please try again.","is-danger")},player_name_exist(){this.showToast("Name has been taken. Please choose another name!","is-danger")},room_does_not_exist(){this.showToast("Oops! This password does not exist in any room! Please try again.","is-danger")},room_full(){this.showToast("Sorry, this room is full!","is-danger")},game_in_session(){this.showToast("Looks like the game has started!","is-danger")}},created(){this.TRANSITIONS=["animate__backInLeft","animate__backInRight","animate__bounceIn","animate__fadeInTopLeft","animate__fadeIn","animate__rotateInDownLeft","animate__zoomIn"]},mounted(){}});const Dt=(0,v.Z)(Bt,[["render",u],["__scopeId","data-v-d6869684"]]);var Vt=Dt;window.$=window.jQuery=r();const Lt="https://cards-for-humanity.onrender.com/",Nt=(0,n.ri)(Vt);Nt.use(new(l())({debug:!1,connection:Lt})),Nt.mount("#app")}},a={};function t(s){var r=a[s];if(void 0!==r)return r.exports;var n=a[s]={exports:{}};return e[s].call(n.exports,n,n.exports,t),n.exports}t.m=e,function(){var e=[];t.O=function(a,s,r,n){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],r=e[d][1],n=e[d][2];for(var l=!0,i=0;i<s.length;i++)(!1&n||o>=n)&&Object.keys(t.O).every((function(e){return t.O[e](s[i])}))?s.splice(i--,1):(l=!1,n<o&&(o=n));if(l){e.splice(d--,1);var c=r();void 0!==c&&(a=c)}}return a}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[s,r,n]}}(),function(){t.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(a,{a:a}),a}}(),function(){t.d=function(e,a){for(var s in a)t.o(a,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:a[s]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){t.p="/cards-for-humanity/"}(),function(){var e={143:0};t.O.j=function(a){return 0===e[a]};var a=function(a,s){var r,n,o=s[0],l=s[1],i=s[2],c=0;if(o.some((function(a){return 0!==e[a]}))){for(r in l)t.o(l,r)&&(t.m[r]=l[r]);if(i)var d=i(t)}for(a&&a(s);c<o.length;c++)n=o[c],t.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return t.O(d)},s=self["webpackChunkcards_for_humanity_client"]=self["webpackChunkcards_for_humanity_client"]||[];s.forEach(a.bind(null,0)),s.push=a.bind(null,s.push.bind(s))}();var s=t.O(void 0,[998],(function(){return t(9261)}));s=t.O(s)})();
//# sourceMappingURL=app.7fa5bd2a.js.map