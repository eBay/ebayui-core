import{t as g}from"./index-iqhZMf16.js";import{t as O,r as j,b as q,g as m,h as W,f as H,p as Q,i as E,d as Z}from"./registry-EgEQwbXk.js";import{_ as G}from"./index-VGoHc-V3.js";import{_ as l}from"./render-tag-_0PNNh6Y.js";import{_ as J}from"./preserve-tag-alJxPOrs.js";import{_ as K,a as x}from"./index-rgI-jgGy.js";import{_ as X}from"./index-zvV8HPzg.js";import{_ as Y}from"./index-haOP3g2F.js";import{C as ee}from"./index-7ffGOUZk.js";import"./_commonjsHelpers-5-cIlDoe.js";import"./_commonjs-dynamic-modules-h-SxKiO4.js";import"./index-rIGlTtcv.js";/* empty css             */import"./index-eX8aiyBr.js";const te=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        ebay-video
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.0.0
    </span>
</h1>

## ebay-video (_ALPHA_, some APIs might change)

Video player. Supports either MPD or M3U8 playlist formats.
Natively uses dash.js player under the hood. Loads it async after the video player is loaded on the page.
For resizing, \`ebay-video\` supports fixed width or variable width. If no width is provided the video tag will resize based on the container size.

## Examples and Documentation

-   [Storybook](https://ebay.github.io/ebayui-core/?path=/story/media-ebay-video)
-   [Storybook Docs](https://ebay.github.io/ebayui-core/?path=/docs/media-ebay-video)
-   [Code Examples](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-video/examples)
`;function ae(r){const e=class extends shaka.ui.Element{constructor(a,o,s){super(a,o),this.button_=document.createElement("button"),this.button_.classList.add("video-player__report-button"),this.button_.textContent=s||"Report";const h=r.getComponent("flag-icon").el.cloneNode(!0);this.button_.prepend(h),this.parent.appendChild(this.button_),this.eventManager.listen(this.button_,"click",()=>{r.emit("report")})}};e.Factory=class{constructor(a){this.reportText=a}create(a,o){return new e(a,o,this.reportText)}};const t=shaka.ui.TextSelection;return t.Factory=class{create(a,o){return new shaka.ui.TextSelection(a,o)}},{Report:e,TextSelection:t}}const oe=2e3,re=["abort","canplay","canplaythrough","durationchange","emptied","encrypted","ended","error","loadstart","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","waiting"],w={addBigPlayButton:!1,addSeekBar:!0,controlPanelElements:["play_pause","time_and_duration","spacer","mute","report","fullscreen","overflow_menu"],overflowMenuButtons:["captions"]};class se extends Marko.Component{isPlaylist(e){const t=e.type&&e.type.toLowerCase(),a=e.src;return t==="dash"||t==="hls"?!0:e.src?a.indexOf(".mpd")===a.length-5||a.indexOf(".m3u8")===a.length-6:!1}handleResize(){if(!this.input.width&&this.video){const{width:e}=this.root.getBoundingClientRect();this.containerEl.setAttribute("width",e.toString())}}handlePause(e){this.video.controls=!1,this.emit("pause",{originalEvent:e,player:this.player})}handlePlaying(e){this.showControls(),this.input.playView==="fullscreen"&&this.video.requestFullscreen(),this.state.played=!0,this.emit("play",{originalEvent:e,player:this.player})}handleVolumeChange(e){this.emit("volume-change",{originalEvent:e,volume:this.video.volume,muted:this.video.muted})}handleError(e){this.state.failed=!0,this.state.isLoaded=!0,this.ui&&this.ui.configure({addBigPlayButton:!1}),this.emit("load-error",e)}showControls(){const e=Object.assign({},w);if(e.controlPanelElements=[...w.controlPanelElements],this.state.volumeSlider===!0){const t=e.controlPanelElements.length-2>0?e.controlPanelElements.length-2:e.controlPanelElements.length;e.controlPanelElements.splice(t,0,"volume")}this.ui.configure(e),this.video.controls=!1}takeAction(){switch(this.state.action){case"play":this.video.play();break;case"pause":this.video.pause();break}}onInput(e){this.video&&((e.width||e.height)&&(this.containerEl.style.width=`${e.width}px`),this.video.volume=e.volume??0,this.video.muted=!!e.muted),this.state.action!==e.action&&(this.state.action=e.action??"",this.takeAction()),e.volumeSlider===!0&&(this.state.volumeSlider=e.volumeSlider)}onCreate(){this.state={volumeSlider:!1,action:"",showLoading:!1,isLoaded:!0,failed:!1,played:!1},this.cdnLoader=new ee(this,{key:"shaka",types:["src","css"],files:["shaka-player.ui.js","controls.css"],setLoading:e=>{this.state.showLoading=e},handleError:this.handleError.bind(this),handleSuccess:this.handleSuccess.bind(this)})}_addTextTracks(){(this.input.tracks||[]).forEach(t=>{this.player.addTextTrack(t.src,t.srclang,t.kind)});const[e]=this.player.getTextTracks();e&&this.player.selectTextTrack(e.id)}_loadSrc(e){const t=e||0,a=this.input.sources[t];let o;a&&this.input.sources.length>t+1&&(o=t+1),this.player.load(a.src).then(()=>{this._addTextTracks(),this.state.isLoaded=!0,this.state.failed=!1}).catch(s=>{s.code!==7e3&&(s.code===11&&setTimeout(()=>this._loadSrc(t),0),o?setTimeout(()=>this._loadSrc(o),0):this.handleError(s))})}_attach(){const{Report:e,TextSelection:t}=ae(this);if(this.ui=new shaka.ui.Overlay(this.player,this.containerEl,this.video,this.input.reportText||""),shaka.ui.Controls.registerElement("report",new e.Factory(this.input.reportText)),shaka.ui.Controls.registerElement("captions",new t.Factory),this.ui.configure({addBigPlayButton:!0,controlPanelElements:[],addSeekBar:!1}),this.el){const a=this.getComponent("play-icon").el.cloneNode(!0),o=this.el.querySelector(".shaka-play-button");o.removeAttribute("icon"),o.appendChild(a);const s=this.el.querySelector(".shaka-spinner");s&&setTimeout(()=>{s.hidden=!0},this.input.spinnerTimeout||oe)}}handleSuccess(){shaka.polyfill.installAll(),this.player=new shaka.Player(this.video),this._attach(),this._loadSrc()}onMount(){this.root=this.getEl("root"),this.video=this.root.querySelector("video"),this.containerEl=this.root.querySelector(".video-player__container"),this.video.volume=this.input.volume||1,this.video.muted=this.input.muted||!1,this.subscribeTo(this.video).on("playing",this.handlePlaying.bind(this)).on("pause",this.handlePause.bind(this)).on("volumechange",this.handleVolumeChange.bind(this)),re.forEach(e=>{this.subscribeTo(this.video).on(e,t=>this.emit(e,t))}),this._loadVideo()}onDestroy(){this.ui&&this.ui.destroy()}_loadVideo(){this.state.failed=!1,this.state.isLoaded=!1,this.cdnLoader.setOverrides([this.input.cdnUrl,this.input.cssUrl],this.input.version).mount()}}const v="urQ37fxZ",u=O(v),ie=u,ne=typeof window<"u";j.r(v,()=>u);const R=se;u._=q(function(r,e,t,a,o,s){const{sources:h=[],cdnUrl:le,thumbnail:b,playView:de,a11yPlayText:D="Click to play",a11yLoadText:F="Loading",reportText:ce,errorText:_,volume:ue,muted:he,width:k,height:N,track:$=[],volumeSlider:pe,...z}=r;e.be("div",{class:m(["video-player",!o.played&&b!==""&&"video-player--poster"])},"@root",a,null,1),ne&&!k&&l(G,{to:typeof window=="object"&&window,__events:["on","resize"]},e,t,"0",[["resize","handleResize",!1]]),l(J,{n:!0,renderBody:c=>{c.be("div",{class:"video-player__container",style:W({width:`${k}px`,height:`${N}px`})},"1",a,null,1),c.be("video",H({"no-controls":"",poster:b},Q(z)),"2",a,null,4);{let U=0;for(const p of h||[]){const y=`[${U++}]`;c.e("source",E(p),"3"+y,a,0,4)}let M=0;for(const p of $||[]){const y=`[${M++}]`;c.e("track",E(p),"4"+y,a,0,4)}}c.ee(),c.ee()}},e,t,"1"),e.be("div",{class:m(["video-player__overlay",!o.failed&&"video-player__overlay--hidden"])},"5",a,null,1),l(K,{},e,t,"6"),e.be("div",{class:"video-player__overlay-text"},"7",a,null,1),_?e.t(_,a):e.t("An error has occurred",a),e.ee(),e.ee(),e.be("div",{class:m(["video-player__overlay",o.isLoaded&&"video-player__overlay--hidden"])},"8",a,null,1,{onclick:t.d("click","_loadVideo",!1)}),o.showLoading?l(X,{a11yText:F},e,t,"10"):l(x,{a11yText:D},e,t,"9"),e.ee(),e.be("div",{style:"display:none"},"11",a,null,1),l(x,{},e,t,"@play-icon"),l(Y,{},e,t,"@flag-icon"),e.ee(),e.ee()},{t:v},R);u.Component=Z(R,u._);const f=r=>({input:{...r,renderBody:r.renderBody?e=>{e.html(r.renderBody)}:null}}),Ce={title:"media/ebay-video",component:ie,parameters:{docs:{description:{component:te}}},argTypes:{thumbnail:{description:"The url path for the video thumbnail",control:{type:"text"}},action:{description:'Either "play" or "pause". Will programatically perform the given action',control:{type:"text"}},volume:{type:"number",table:{defaultValue:0},control:{type:"number",min:0,max:1,step:.1}},muted:{type:"boolean",control:{type:"boolean"},description:"True/False to mute or unmute video. Default is false"},playView:{description:'Either "inline", or "fullscreen". When player strats to play, will either play "inline" (default) or switch to "fullscreen"',control:{type:"text"}},cdnUrl:{description:"The full url to point to where to download shaka. This is only used to override the default CDN path.",control:{type:"text"}},cssUrl:{control:{type:"text"},description:"The full url to point to where to download shaka css. This is only used to override the default CDN path."},cdnVersion:{control:{type:"text"},description:"If using the default CDN path, you can override what version of shaka to use."},a11yLoadText:{control:{type:"text"},description:'The accessibility text for the loading spinner. Default is "Loading"'},a11yPlayText:{control:{type:"text"},description:'The accessibility text for the play button. Default is "Click to play"'},errorText:{control:{type:"text"},description:'The content for error when an either the library or video cannot load. Default is "An error has occurred"'},reportText:{control:{type:"text"},description:'The text for report button. Default is "Report"'},volumeSlider:{type:"boolean",description:"True/False to keep or remove volume slider. Default is False"},source:{name:"@source",table:{category:"@attribute tags"}},"onLoad-error":{action:"on-load-error",description:"Triggered when there is a load error with video player or source",table:{category:"Events",defaultValue:{summary:"{ originalEvent }"}}},onPlay:{action:"on-play",description:"Triggered when play begins",table:{category:"Events",defaultValue:{summary:"{ originalEvent, player }"}}},"onVolume-change":{action:"on-volume-change",description:"Triggered when volume is changed. Will return the values of the volume decimal and muted true/false",table:{category:"Events",defaultValue:{summary:"{ originalEvent, volume, muted }"}}},onReport:{action:"on-report",description:"Triggered when report button is clicked",table:{category:"Events",defaultValue:{summary:"{ }"}}},onPause:{action:"on-Pause",table:{category:"Events",defaultValue:{summary:"{ }"}}},onAbort:{action:"on-abort",table:{category:"Events",defaultValue:{summary:"{ }"}}},onCanplay:{action:"on-canplay",table:{category:"Events",defaultValue:{summary:"{ }"}}},onCanplaythrough:{action:"on-canplaythrough",table:{category:"Events",defaultValue:{summary:"{ }"}}},onDurationchange:{action:"on-durationchange",table:{category:"Events",defaultValue:{summary:"{ }"}}},onEmptied:{action:"on-emptied",table:{category:"Events",defaultValue:{summary:"{ }"}}},onEncrypted:{action:"on-encrypted",table:{category:"Events",defaultValue:{summary:"{ }"}}},onEnded:{action:"on-ended",table:{category:"Events",defaultValue:{summary:"{ }"}}},onError:{action:"on-error",table:{category:"Events",defaultValue:{summary:"{ }"}}},onLoadstart:{action:"on-loadstart",table:{category:"Events",defaultValue:{summary:"{ }"}}},onProgress:{action:"on-progress",table:{category:"Events",defaultValue:{summary:"{ }"}}},onRatechange:{action:"on-ratechange",table:{category:"Events",defaultValue:{summary:"{ }"}}},onSeeked:{action:"on-seeked",table:{category:"Events",defaultValue:{summary:"{ }"}}},onSeeking:{action:"on-seeking",table:{category:"Events",defaultValue:{summary:"{ }"}}},onStalled:{action:"on-stalled",table:{category:"Events",defaultValue:{summary:"{ }"}}},onSuspend:{action:"on-suspend",table:{category:"Events",defaultValue:{summary:"{ }"}}},onTimeupdate:{action:"on-timeupdate",table:{category:"Events",defaultValue:{summary:"{ }"}}},onWaiting:{action:"on-waiting",table:{category:"Events",defaultValue:{summary:"{ }"}}}}},d=f.bind({});d.args={width:"600",height:"400",sources:[{src:"https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd",type:"dash"}]};d.parameters={docs:{source:{code:g("ebay-video",d.args)}}};const i=f.bind({});i.storyName="ios";i.args={width:"600",height:"400",sources:[{src:"https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.m3u8",type:"hls"},{src:"https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/playlist.mpd",type:"dash"}]};i.parameters={docs:{source:{code:g("ebay-video",i.args)}}};const n=f.bind({});n.storyName="mp4";n.args={width:"460",height:"300","a11y-load-text":"This video is loading now","a11y-play-text":"Click to start this video",sources:[{src:"https://ir.ebaystatic.com/cr/v/c1/ebayui/video/v1/video.mp4"}]};n.parameters={docs:{source:{code:g("ebay-video",n.args)}}};var T,S,V;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(V=(S=d.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var C,P,B;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(B=(P=i.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var L,A,I;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  input: {
    ...args,
    renderBody: args.renderBody ? out => {
      out.html(args.renderBody);
    } : null
  }
})`,...(I=(A=n.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};const Pe=["Standard","ios","mp4"];export{d as Standard,Pe as __namedExportsOrder,Ce as default,i as ios,n as mp4};