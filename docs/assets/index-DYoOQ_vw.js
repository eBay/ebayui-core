const a=typeof Marko=="object"?Marko.Component:function(){};class c extends a{isRadio(){return this.type==="radio"}getCheckedValues(){return this.isRadio()?[(this.items[this.state.checkedIndex]||{}).value]:this.items.filter((e,t)=>this.state.checkedItems[t]).map(e=>e.value)}getCheckedIndexes(){return this.isRadio()?this.state.checkedIndex===void 0?void 0:[this.state.checkedIndex]:this.items.map((e,t)=>this.state.checkedItems[t]&&t).filter(e=>e!==!1&&e!==void 0)}getInputState(e){return this.items=(e.items||[]).filter(t=>!t.separator),this.type=e.type,this.isRadio()?{checkedIndex:(this.items||[]).findIndex(t=>t.checked||!1)}:{checkedItems:(this.items||[]).map(t=>t.checked||!1)}}isChecked(e){return this.isRadio()?e===this.state.checkedIndex:this.state.checkedItems[e]}isDisabled(e){return this.items[e].disabled}toggleChecked(e){if(Array.isArray(e)){this.isRadio()?this.state.checkedIndex=e[0]:this.state.checkedItems=this.state.checkedItems.map((t,s)=>e.indexOf(s)!==-1);return}this.isRadio()&&e!==this.state.checkedIndex?this.state.checkedIndex=e:this.type!=="radio"&&(this.state.checkedItems[e]=!this.state.checkedItems[e],this.setStateDirty("checkedItems"))}getSeparatorMap(e){let t=0;return(e.items||[]).reduce((s,r,h)=>(r.separator&&(s[h-t]=!0,t++),s),{})}}function d(i){Object.defineProperties(i,Object.getOwnPropertyDescriptors(c.prototype))}export{c as M,d as s};