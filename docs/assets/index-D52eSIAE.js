function a(){let c,t="";return{getIndex:function(n,l,u){t=t.concat(l);let e;if(n==null)return-1;const r=t.toLocaleLowerCase();return e=[...n].findIndex(o=>o.textContent.toLocaleLowerCase().startsWith(r)),e===-1&&(e=[...n].findIndex(o=>o.textContent.toLocaleLowerCase().includes(r))),setTimeout(()=>{clearTimeout(c),t=""},u),e},destroy:function(){}}}export{a as s};