if (self.CavalryLogger) { CavalryLogger.start_js(["4WgcZ"]); }

__d("MAnimation",["CSS","MLegacyDataStore","getVendorPrefixedName","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();var k=i("animation-duration");function a(a,b,c){__p&&__p();var d=h.get(a);clearTimeout(d.timerEnd);delete d.timerEnd;g.conditionClass(a,b,!1);g.conditionClass(a,"accelerate",!0);a.style[k]=c+"ms";d.timerStart=j(g.conditionClass.bind(null,a,b,!0),0);d.timerEnd=j(function(){g.conditionClass.bind(null,a,b,!1);a.style[k]="";g.conditionClass(a,"accelerate",!1);var c=h.get(a);clearTimeout(c.timerStart);delete c.timerStart},c)}e.exports={animate:a}}),null);
__d("MExpandablePymk",["CSS","DOM","MLegacyDataStore","cx","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i,j,k){__p&&__p();var l="m-add-friend";function a(a,b,c){__p&&__p();var d=[],e=0;if(a){a=h.scry(a,"div","story-wrap");for(var f=0;f<a.length;f++){var g=h.find(a[f],"a",l);g=i.get(g);d.push(g.id);g=i.get(a[f]);g.sent&&e++}c.pymk_group_id=b}d&&(c.uw=d.join(","));e&&(c.pc=e);return d}function b(a,event,b){__p&&__p();if(!a)return;var c=a.getElementsByClassName("_4-ck");c.length>0&&k(function(){a.style.height=""},800);var d=function(a){return function(){g.conditionClass(a,"_4-cl",!0)}},e=function(a){return function(){g.conditionClass(a,"_4-ck",!1)}},f=h.scry(a,"div","story-wrap"),j=0;for(var l=0;l<f.length;l++){var m=i.get(f[l]);if(m.transitionIn)i.set(f[l],{transitionIn:!1}),k(d(f[l]),800),k(e(f[l]),1200);else if(m.sent){var n=f[l];c.length>0&&(a.style.height=(a.offsetHeight-c.length*c[0].offsetHeight).toString()+"px");g.conditionClass(n,"_4-cn",!0);b&&(g.conditionClass(n,"_4-co",!0),g.conditionClass(n,"_4-cp",!1));k(function(){h.remove(n)},600);j++}}if(j<f.length){m=event.getNode("story-wrap");i.set(m,{sent:!0});b&&(g.conditionClass(m,"_4-cp",!0),g.conditionClass(m,"_4-co",!1))}}e.exports={getExtraArgs:a,animateExpansion:b}}),null);
__d("MFriendingState",[],(function(a,b,c,d,e,f){e.exports={REQUEST_SENT:"m:friending-state:request-sent",REQUEST_CANCELED:"m:friending-state:request-canceled",UNFRIENDED:"m:friending-state:unfriended"}}),null);
__d("MAddFriend",["DOM","MAnimation","MExpandablePymk","MFriendingActionError","MFriendingState","MLegacyDataStore","MPageCache","MPageControllerPath","MPymkFunnelLogger","MRequest","MRequestTypes","MURI","Parent","Stratcom","csx","cx"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){__p&&__p();var w="m-add-friend",x="m-cancel-request",y="m-unfriend-request",z="m-unfollow-request",A="m-follow-request",B="check",C="friends",D="add_friend_pymk_chain_placeholder",E="/a/mobile/friends/add_friend.php",F="/a/friendrequest/cancel/index.php",G="/a/friends/remove",H="/a/subscriptions/remove",I="/a/subscriptions/add",J=86,K=224,L="/find-friends/index.php",M="mobile_jewel";function N(a){a=a.querySelector(".touched_hide");a&&h.animate(a,"_4-ic",500)}function O(){var a=n.getRequestPath();m.removeCachedPage(a);m.clearCachedIUIResponses(a)}function P(event){__p&&__p();var a=event.getNode(w),b=l.get(a),c=event.getNode("m-add-friend-secondary"),d=l.get(c),e=b.pymk_group_id||"pymk_suggestions_box",f=event.getNode("id:"+e),h=document.getElementById(D);V(event);l.set(c,{one_click_adding:!0,one_click_cancel_event:null});O();var m={id:b.id,hf:b.hf,sc:b.sc,so:b.so,pl:b.pl,at:b.at,et:b.et,ed:b.ed,fref:b.fref};b.floc&&(m.floc=b.floc);b.frefs&&(m.frefs=b.frefs);b.el&&(m.el=b.el);var n=i.getExtraArgs(f,e,m),o=g.find(c,"*",B),s=g.find(c,"div","m-add-friend-flyout");e=new r(E);b.searchlog&&e.addQueryData(b.searchlog);b=new r(a.href).getQueryData()._ft_;b&&e.addQueryData({_ft_:b});b=new r(a.href).getQueryData().__xts__;b&&e.addQueryData({__xts__:b});a=new p(e.toString()).setType(q.DEPENDENT);a.setData(m).setFailureLogging("friend_request_send");var u=function(){g.show(o),l.get(c).bounce&&N(o),t.listen("friending_state_change",null,Q.bind(event,m.id,j.SEND_OUTGOING_REQUEST_ERROR)),t.invoke(k.REQUEST_SENT,null,{event:event,userid:m.id})};a.listen("start",function(){g.hide(s),u()});a.listen("postprocess",function(a){d.one_click_adding&&(l.set(c,{one_click_adding:!1}),d.one_click_cancel_event&&S(d.one_click_cancel_event)),n&&i.animateExpansion(f,event,h)});a.send();event.kill()}function Q(a,b,event){__p&&__p();var c=event.getData();if(c.userid!=a)return;if(c.error!=b)return;a=this.getNode("m-add-friend-secondary");if(c.error===j.SEND_OUTGOING_REQUEST_ERROR){b=g.find(a,"*",B);var d=g.find(a,"div","m-add-friend-flyout");g.show(d);g.hide(b);t.invoke(j.SEND_OUTGOING_REQUEST_ERROR,null,{event:this})}else if(c.error===j.CANCEL_OUTGOING_REQUEST_ERROR){d=g.find(a,"a","m-cancel-request");b=g.find(a,"div","m-add-friend-flyout");g.show(d);g.hide(b);t.invoke(j.CANCEL_OUTGOING_REQUEST_ERROR,null,{event:this})}t.removeCurrentListener()}function R(a){__p&&__p();var b=l.get(a.getNode(y)),event=b.flyoutEvent;a=event.getNode("undoable-action");a||(a=event.getNode("m-add-friend-secondary"));var c=g.scry(a,"*",C)[0],d=g.find(a,"div","m-add-friend-flyout");a=new r(G);a=new p(a);a.setData({friend_id:b.id,noReload:!0,unref:b.unfriend_ref});a.listen("start",function(){g.hide(c),b.is_deactivated||g.show(d),t.invoke(k.UNFRIENDED,null,{event:event})});a.send();event.kill()}function S(event){__p&&__p();var a=l.get(event.getNode(x)),b=event.getNode("undoable-action");b||(b=event.getNode("m-add-friend-secondary"));b||(b=a.parentNode);var c=g.scry(b,"*",B)[0],d=g.find(b,"*","load"),e=g.find(b,"div","m-add-friend-flyout"),f=g.scry(b,"a","m-xout-pymk-suggestions");b=event.getNode("m-add-friend-secondary");var h=b?l.get(b):null;if(h&&h.one_click_adding){l.set(b,{one_click_cancel_event:event});g.hide(c);g.show(d);return}var i=function(){g.show(e),f.length>0&&(f[0].style.visibility="visible"),t.invoke(k.REQUEST_CANCELED,null,{event:event,userid:a.id})};h=new r(F);b=new p(h);b.setData({subject_id:a.id,ref_param:a.ref_param,floc:a.floc,frefs:a.frefs});t.listen("friending_state_change",null,Q.bind(event,a.id,j.CANCEL_OUTGOING_REQUEST_ERROR));b.listen("start",function(){g.hide(c),g.show(d)});b.listen("finally",function(){g.hide(d);i();var a=event.getNode("story-wrap");a&&l.set(a,{sent:!1})});b.send();event.kill()}function T(event){__p&&__p();var a=event.getNode(z);a=l.get(a);var b=new r(H);b=new p(b);var c=event,d=null;try{event=a.flyoutEvent,d=event.getNode("popup-action-trigger")}catch(a){d=null}if(d!==null){b.setData({subject_id:a.id,forceredirect:!1,location:J});b.send();l.set(d,{is_following:!1});event.kill();return}d=c.getNode("m-add-friend-flyout");var e=g.find(d,"a","m-follow-request"),f=g.find(d,"a","m-unfollow-request"),h=g.find(d,"*","load");b.setData({subject_id:a.id,forceredirect:!1,location:K});b.listen("start",function(){g.hide(f),g.show(h)});b.listen("finally",function(){g.hide(h),g.show(e)});b.send();c.kill()}function U(event){__p&&__p();var a=event.getNode(A);a=l.get(a);var b=new r(I);b=new p(b);var c=event,d=null;try{event=a.flyoutEvent,d=event.getNode("popup-action-trigger")}catch(a){d=null}if(d!==null){b.setData({subject_id:a.id,forceredirect:!1,location:J});b.send();l.set(d,{is_following:!0});event.kill();return}d=c.getNode("m-add-friend-flyout");var e=g.find(d,"a","m-follow-request"),f=g.find(d,"a","m-unfollow-request"),h=g.find(d,"*","load");b.setData({subject_id:a.id,forceredirect:!1,location:K});b.listen("start",function(){g.hide(e),g.show(h)});b.listen("finally",function(){g.hide(h),g.show(f)});b.send();c.kill()}function V(event){__p&&__p();var a=event.getNode(w);if(!a)return;a=s.bySelector(a,"._5pxa");if(!a)return;var b=a.getAttribute("data-pymk-id"),c=a.getAttribute("data-pymk-loc");if(b&&(c===L||c===M)){a=a.getAttribute("data-signature");o.logAdd(b,a,c)}}var W=!1,X=!1;a=function(a){a!==undefined&&a&&!X&&(X=!0,t.listen("click",z,T),t.listen("click",A,U));if(W)return;W=!0;t.listen("click",w,P);t.listen("click",x,S);t.listen("click",y,R)};e.exports={main:a}}),null);
__d("MAddFriendNew",["DOM","MFriendingState","Stratcom"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j="m-add-friend-flyout",k="m-cancel-request";function a(a,b,c){"use strict";this.unit=c,this.userid=b,i.listen(h.REQUEST_SENT,null,this.onFriendRequestSent.bind(this)),i.listen(h.REQUEST_CANCELED,null,this.onFriendRequestCanceled.bind(this))}a.prototype.onFriendRequestCanceled=function(event){"use strict";var a=event.getData();if(!a||a.userid!==this.userid)return;a=g.scry(this.unit,"*",j)[0];var b=g.scry(this.unit,"*",k)[0];g.show(a);g.hide(b)};a.prototype.onFriendRequestSent=function(event){"use strict";var a=event.getData();if(!a||a.userid!==this.userid)return;a=g.scry(this.unit,"*",j)[0];var b=g.scry(this.unit,"*",k)[0];g.hide(a);g.show(b)};e.exports=a}),null);
__d("MFriendDynamicSubtitle",["DOM","MAnimation","MFriendingActionError","MFriendingState","MParent","Stratcom","cx"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m){__p&&__p();var n="undoable-action",o="m-add-friend-request-sent",p="m-friend-request-canceled",q="m-friend-unfriended",r="m-add-friend-source-replaceable",s="m-friend-request-highlight-notice";function a(a,b){"use strict";this.$1=a,this.$2=b,this.$3=k.bySigil(a,n),this.$4=[l.listen([i.SEND_OUTGOING_REQUEST_ERROR,i.CANCEL_OUTGOING_REQUEST_ERROR,j.REQUEST_SENT,j.REQUEST_CANCELED,j.UNFRIENDED],null,this.$5.bind(this)),l.listen("m:page:unload",null,this.$6.bind(this)),l.listen("friending_state_change",null,this.$7.bind(this))]}a.prototype.$7=function(a){"use strict";a=a.getData();if(!a||!a.userid||a.userid!=this.$2)return;if(!a.error)return;this.$8(a.error)};a.prototype.$5=function(a){"use strict";var b=a.getData();if(!b||!b.userid||b.userid!=this.$2)return;b=a.getType();this.$8(b)};a.prototype.$8=function(a){"use strict";this.$9(),a===j.REQUEST_SENT||a===i.CANCEL_OUTGOING_REQUEST_ERROR?this.$10(o):a===j.REQUEST_CANCELED?this.$10(p):a===j.UNFRIENDED?this.$10(q):a===i.SEND_OUTGOING_REQUEST_ERROR&&this.$10(r),this.$11()};a.prototype.$9=function(){"use strict";this.$12(o),this.$12(r),this.$12(p),this.$12(q)};a.prototype.$12=function(a){"use strict";a=g.scry(this.$3,"*",a)[0];a&&g.hide(a)};a.prototype.$10=function(a){"use strict";a=g.scry(this.$3,"*",a)[0];a&&g.show(a)};a.prototype.$11=function(){"use strict";var a=g.scry(this.$3,"*",s)[0];a&&h.animate(a,"_4z0z",4e3)};a.prototype.$6=function(){"use strict";for(var a=0;a<this.$4.length;a++)this.$4[a].remove()};e.exports=a}),null);
__d("MFriendingAutoScroll",["MAnimator","MFriendingState","MViewport","Stratcom"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();var k=400,l=101,m=178,n,o,p,q,r;function a(a){a===void 0&&(a=!1);a?n=m:n=l;t();var b=j.listen("m:page:unload",null,function(){b.remove(),u()})}function s(){var a=i.getScrollPos().y,b=function(b){i.scrollTo(0,a+b*n)};new g().start(b,null,function(){},k)}function t(){u(!0),o=j.listen([h.REQUEST_SENT],null,s),p=j.listen("click","confirm-request",s),q=j.listen("click",["nav-popover","feed"],u),r=j.listen("click",["nav-popover","requests","icon"],t)}function u(a){a===void 0&&(a=!1),o&&o.remove(),p&&p.remove(),q&&q.remove(),a===!0&&r&&r.remove()}e.exports={setup:a}}),null);
__d("MFriendsActionBubble",["DOM","MLegacyDataStore","MURI","Stratcom"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();var k="m-unfriend-request",l="/friendlists/edit",m="manage-friend-list",n="m-follow-request",o="m-unfollow-request";function a(a){"use strict";this.$1=a,this.$2=null}a.prototype.enable=function(){"use strict";this.$2=[j.listen("click","are-friends-popup",this.$3.bind(this)),j.listen("click",m,this.$4.bind(this))]};a.prototype.$3=function(a){"use strict";var b=this.$1.getContentRoot(),c=a.getNode("popup-action-trigger"),d=g.scry(b,"*",k)[0];this.$5(c,d,a);d=g.scry(b,"*",m)[0];this.$5(c,d,a);this.$6(c,b,a)};a.prototype.$6=function(a,b,c){"use strict";var d=h.get(a).is_following;if(d===null)return;var e=g.scry(b,"*",o)[0];this.$5(a,e,c);b=g.scry(b,"*",n)[0];this.$5(a,b,c);d?(g.show(e),g.hide(b)):(g.show(b),g.hide(e))};a.prototype.$5=function(a,b,c){"use strict";if(!a||!b)return;a=h.get(a);a.flyoutEvent=c;h.set(b,a)};a.prototype.$7=function(a,event){"use strict";window.FW_ENABLED||!window.APP_ENABLED?(event.kill(),window.location.href=a.toString()):j.invoke("go",null,{uri:a})};a.prototype.$4=function(event){"use strict";var a=h.get(event.getNode(m));a=new i(l).setQueryData({subject_id:a.id,ref_param:a.manage_list_ref});this.$7(a,event)};a.prototype.disable=function(){"use strict";while(this.$2.length)this.$2.pop().remove()};e.exports=a}),null);
__d("MOptimisticRequestResponse",["DOM","MLegacyDataStore","MRequest","MURI","Stratcom"],(function(a,b,c,d,e,f,g,h,i,j,k){__p&&__p();function a(event){__p&&__p();var a,b;if(b=event.getNode("ignore-request"))a="ignore";else if(b=event.getNode("confirm-request"))a="confirm";else throw new Error("use ignore-request or confirm-request sigils for actions");b=h.get(b);if(!b||!b.optimistic_uri)throw new Error("add meta to buttons with optimistic_uri set");b.flyoutEvent&&(event=b.flyoutEvent);var c=l(event),d=h.get(c),e=d.optimistic_category;if(!e)throw new Error("set optimistic_category meta on root node to separate listeners for optimistic responses");var f=g.scry(c,"*","m-optimistic-response-action"),o=g.scry(c,"*","m-optimistic-response-confirm"),p=g.scry(c,"*","m-optimistic-response-ignore");b=new i(new j(b.optimistic_uri)).setData(b.optimistic_post_data||{}).setMethod("POST");var q={event:event,action:a,action_sections:f,confirm_sections:o,ignore_sections:p,root_node:c};b.listen("start",function(){k.invoke("m:requests:refresh"),k.invoke("m:optimistic-request-response:click",e,q),d.userid&&k.invoke("friending_state_change",null,{userid:d.userid,action:a})});b.listen("postprocess",function(){k.invoke("m:requests:refresh"),k.invoke("m:optimistic-request-response:success",e,q)});b.listen("error",function(){n(f),m(o),m(p)});b.setFailureLogging("friend_response_"+a);b.send()}function l(event){var a=event.getNode("m-optimistic-response-root");if(!a)throw new Error("no parent element with m-optimistic-response-root sigil");return a}function m(a){a.forEach(function(a){g.hide(a)})}function n(a){a.forEach(function(a){g.show(a)})}k.listen("click","confirm-request",a);k.listen("click","ignore-request",a);e.exports={showAll:n,hideAll:m}}),null);
__d("MOptimisticFriendingResponse",["DOM","MFriendingActionError","MOptimisticRequestResponse","Stratcom"],(function(a,b,c,d,e,f,g,h,i,j){__p&&__p();function a(a,b,c){"use strict";this.id=a,this.userid=b,this.inJewel=c,this.listeners=[j.listen("friending_state_change",null,this.onFriendStateChange.bind(this)),j.listen("m:page:unload",null,this.cleanup.bind(this))]}a.prototype.onFriendStateChange=function(a){"use strict";__p&&__p();a=a.getData();if(a.userid!=this.userid)return;var b=document.getElementById(this.id);if(!b)return;var c=g.scry(b,"*","m-optimistic-response-action"),d=g.scry(b,"*","m-optimistic-response-confirm");b=g.scry(b,"*","m-optimistic-response-ignore");switch(a.error){case h.CONFIRM_INCOMING_REQUEST_ERROR:case h.DELETE_INCOMING_REQUEST_ERROR:i.showAll(c);i.hideAll(b);i.hideAll(d);return}i.hideAll(c);switch(a.action){case"confirm":i.showAll(d);i.hideAll(b);break;case"ignore":case"reject":i.showAll(b);i.hideAll(d);break;default:return}};a.prototype.cleanup=function(){"use strict";if(this.inJewel)return;for(var a=0;a<this.listeners.length;a++)this.listeners[a].remove();this.listeners=[]};e.exports=a}),null);
__d("MXoutPYMKSuggestions",["CSS","DOM","MPymkFunnelLogger","Parent","Stratcom","Style","csx"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m){__p&&__p();var n="/find-friends/index.php";function a(event){var a=event.getNode("m-xout-pymk-suggestions");a=j.bySelector(a,"._5pxa");g.hide(a);var b=a.getAttribute("data-pymk-id"),c=a.getAttribute("data-pymk-loc");if(b&&c===n){a=a.getAttribute("data-signature");i.logXOut(b,a,c)}}function b(event){__p&&__p();var a=event.getNode("m-add-friend");if(!a)return;a=j.bySelector(a,"._5pxa");if(!a)return;a=h.scry(a,"*","m-xout-pymk-suggestions")[0];if(!a)return;l.apply(a,{visibility:"hidden"})}k.listen("click","m-add-friend",b);k.listen("click","m-xout-pymk-suggestions",a);e.exports={}}),null);
__d("MLayerHideOnScroll",["Stratcom"],(function(a,b,c,d,e,f,g){__p&&__p();var h=5;function a(a){"use strict";this.$1=null,this.$2=null,this.$3=a,this.$4=null}a.prototype.enable=function(){"use strict";this.$1=[this.$3.addListener("show",this.$5.bind(this)),this.$3.addListener("hide",this.$6.bind(this))],this.$3.isShown()&&this.$5()};a.prototype.disable=function(){"use strict";this.$6();while(this.$1.length)this.$1.pop().remove();this.$1=null};a.prototype.$6=function(){"use strict";this.$2&&this.$2.remove()};a.prototype.$5=function(){"use strict";var a=window;this.$4=a.scrollY;this.$2=g.listen("scroll",null,function(){var b=a.scrollY;Math.abs(this.$4-b)>=h&&this.$3.hide()}.bind(this))};e.exports=a}),null);