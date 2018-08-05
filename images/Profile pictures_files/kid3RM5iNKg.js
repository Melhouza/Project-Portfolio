if (self.CavalryLogger) { CavalryLogger.start_js(["N4XqD"]); }

__d("XGroupSuggestionXoutFollowupController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/groups/xout_suggested_group_followup/",{id:{type:"Int",required:!0}})}),null);
__d("MGroupSuggestionFollowupHandler",["DOM","EventListener","MRequest","XGroupSuggestionXoutFollowupController","ge"],(function(a,b,c,d,e,f,g,h,i,j,k){"use strict";a={hideItem:function(a){h.listen(a.button,"click",function(){var b=j.getURIBuilder().setInt("id",a.groupID).getURI();new i(b).setMethod("POST").send();g.remove(k(a.cardID))})}};e.exports=a}),null);
__d("MScrollAreaScroller",["MAnimator","MTouchScroll","QE2Logger"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=100,k=.15;function l(a,b){"use strict";__p&&__p();this._canAnimate=function(){return this.scrolling}.bind(this);b=b||{};this._pagingPositions=b.pagingPositions;this._usePaging=b.paging;this._scrollSnapType=b.scrollSnapType;this._canScrollX=b.direction==="horizontal";this._canScrollY=!this._canScrollX;this.lockMax=b.lockMax||!1;this.lockMin=b.lockMin||!1;this.scrollPastMinOffset=b.scrollPastMinOffset||0;this.left=b.scrollX||0;this.top=b.scrollY||0;this.noThreshold=b.noThreshold;this._lessenViewportScroll=b.lessenViewportScroll;this._logExposureForUser=b.logExposureForUser;this._handler=a;this._animator=new g()}l.prototype.dispose=function(){"use strict";if(!this._disposed){this.stop();for(var a in this)delete this[a];this._disposed=!0}};l.prototype.scrollByPages=function(a){"use strict";__p&&__p();var b=this.left,c=this.top,d;if(this._canScrollX){if(this._pagingPositions){var e=this._getPageIndex()+a;e=this._indexToLeftOffset(e)}else e=Math.floor(b/this.width)*this.width+a*this.width;if(e>this.maxScrollLeft||e<this.minScrollLeft)return;d=c}else{d=Math.floor(c/this.height)*this.height+a*this.height;if(d>this.maxScrollTop||d<this.minScrollTop)return;e=b}this.stop();var f=e-b,g=d-c;a=function(a){this.scrolling=a<1,this._scrollTo(b+f*a,c+g*a)}.bind(this);e=function(){this._handler.onScrollEnd(this.left,this.top,!1)}.bind(this);this.scrolling=!0;this._handler.onScrollStart(this.left,this.top);this._animator.start(a,this._canAnimate,e,l.SCROLL_ANIMATION_DURATION_MS)};l.prototype.setDimensions=function(a,b,c,d,e,f){"use strict";__p&&__p();c=c<a?a:c;d=d<b?b:d;this._usePaging&&(c=a*Math.ceil(c/a),d=b*Math.ceil(d/b));e&&e!=this._pagingPositions&&(this._pagingPositions=e);this.scrollWidth=c;this.scrollHeight=d;this.width=a;this.height=b;this.maxScrollTop=d-b;this.maxScrollLeft=c-a;this.minScrollTop=0;this.scrollPastMinOffset&&(this.minScrollTop=this.height<this.scrollPastMinOffset?0:-this.height+this.scrollPastMinOffset);f&&(this.minScrollLeft=this.maxScrollLeft*-1,this.maxScrollLeft=0);this._syncPaging()};l.prototype.stop=function(){"use strict";this._animator.stop(),this.scrolling=!1,this._touchMoved=!1,delete this._moveCoordStart};l.prototype.doTouchStart=function(a){"use strict";__p&&__p();this._scrolled&&(this._logExposureForUser&&setTimeout(function(){return i.logExposureForUser("m_better_hscroll")},0),this._lessenViewportScroll&&h.blockDuringTouch(a));this.stop();a=a.getTouch();var b=a.pageX;a=a.pageY;this._moveCoordStart={x:b,y:a};this._startX=this.left;this._startY=this.top;this._startDirection=null;this._touchMoved=!1;this._scrolled=!1;this._skipTouchMove=!1;this._scrollList=[{time:Date.now(),position:this._moveCoordStart}]};l.prototype.doTouchMove=function(a){"use strict";__p&&__p();if(!this._moveCoordStart||this._skipTouchMove)return;var b=a.getTouch(),c=b.pageX;b=b.pageY;c={x:c,y:b};b=Date.now();this._scrollList.push({time:b,position:c});while(b-this._scrollList[1].time>j)this._scrollList.shift();if(this.scrolling){this._moveTimePrevious=this._moveTimeNow;this._moveTimeNow=b;if(c.y===this._moveCoordNow.y&&c.x===this._moveCoordNow.x)return}var d=this._moveCoordStart,e=d.x-c.x;d=d.y-c.y;if(!this.scrolling){var f=Math.abs(e),g=Math.abs(d);if(f>this._SCROLL_START_DELTA||g>this._SCROLL_START_DELTA){var h=this.noThreshold||this._canScrollX&&f>g||this._canScrollY&&g>f;if(h)this.noThreshold?this._startDirection=this._canScrollX?"x":"y":this._startDirection=f>g?"x":"y",this.scrolling=!0,this._moveCoordPrevious=this._moveCoordNow,this._moveCoordNow=c,this._moveTimeNow=b,this._touchMoved=!0;else{this._skipTouchMove=!0;return}}}a.prevent();if(this._startDirection==="x"&&!this._canScrollX||this._startDirection==="y"&&!this._canScrollY)return;this._scrolled||(this._scrolled=!0,this._handler.onScrollStart(this.left,this.top,!0));this._moveCoordPrevious=this._moveCoordNow;this._moveCoordNow=c;this._touchMoved=!0;e=this._canScrollX?e:0;d=this._canScrollY?d:0;h=this._TENSION_FACTOR;f=this._TENSION_LIMIT;var i;g=this._startX+e;if(this._canScrollX){if(g<this.minScrollLeft){if(this.lockMin)return;i=g-this.minScrollLeft}else if(g>this.maxScrollLeft){if(this.lockMax)return;i=g-this.maxScrollLeft}i&&(b=Math.min(1,Math.abs(i)/f),b=1-Math.cos(b*Math.PI/2),g-=i*Math.pow(h,~~(b*10)));i=null}a=this._startY+d;if(this._canScrollY){if(a<this.minScrollTop){if(this.lockMin)return;i=a-this.minScrollTop}else if(a>this.maxScrollTop){if(this.lockMax)return;i=a-this.maxScrollTop}i&&(b=Math.min(1,Math.abs(i)/f),b=1-Math.cos(b*Math.PI/2),a-=i*Math.pow(h,~~(b*10)))}this._scrollTo(g,a)};l.prototype.doTouchEnd=function(a){"use strict";__p&&__p();if(!this._moveCoordStart)return;this.scrolling&&a.prevent();a=0;var b=this._moveCoordPrevious,c=this._moveCoordStart;c=this._moveCoordNow||b||c;var d=this._canScrollX?this.left:this.top,e,f,g=this._SCROLLING_DURATION,h=this._moveTimePrevious===undefined?null:Date.now()-this._moveTimePrevious;if(this._usePaging&&this._scrollSnapType==="mandatory"){this._syncPaging();g=this._PAGING_DURATION;var i=this._getRecentTimeAndLocation();i=this._getIndexDelta(i.position,i.time);i=this.pageIndex+i;i=this._clamp(i,0,this.pagesCount-1);this._canScrollX?e=this._clamp(this._indexToLeftOffset(i),this.minScrollLeft,this.maxScrollLeft):e=this._clamp(i*this.height,this.minScrollTop,this.maxScrollTop)}else this._touchMoved&&h<this._MAX_TOUCH_MOVE_INTERVAL?(i=this._canScrollX?b.x-c.x:b.y-c.y,a=i/h):(this.top<this.minScrollTop?e=this.minScrollTop:this.top>this.maxScrollTop?e=this.maxScrollTop:this.left<this.minScrollLeft?e=this.minScrollLeft:this.left>this.maxScrollLeft&&(e=this.maxScrollLeft),e!==undefined&&(g=this._PAGING_DURATION));this._doPostTouchScrolling(d,e,f,a,g);delete this._moveCoordStart;this._scrollList=null;this._touchMoved=!1};l.prototype.isTouchMoving=function(){"use strict";return this._touchMoved};l.prototype.scrollTo=function(a,b,c){"use strict";this.stop(),this._handler.onScrollStart(this.left,this.top),this._scrollTo(a,b),this._handler.onScrollEnd(this.left,this.top,!1),c&&c()};l.prototype.animatedScrollTo=function(a,b,c,d){"use strict";__p&&__p();this.stop();var e=this.left,f=this.top,g=0,h=0;this._canScrollX?g=a-e:this._canScrollY&&(h=b-f);a=function(a){this.scrolling=a<1,this._scrollTo(e+g*a,f+h*a)}.bind(this);b=function(){this._handler.onScrollEnd(this.left,this.top,!1),d&&d()}.bind(this);this.scrolling=!0;this._handler.onScrollStart(this.left,this.top);this._animator.start(a,this._canAnimate,b,c?c:l.SCROLL_ANIMATION_DURATION_MS)};l.prototype.scrollToBottom=function(a,b,c){"use strict";a?this.animatedScrollTo(0,this.maxScrollTop,b,c):this.scrollTo(0,this.maxScrollTop,b,c)};l.prototype.scrollToTop=function(a,b,c){"use strict";a?this.animatedScrollTo(0,this.minScrollTop,b,c):this.scrollTo(0,this.minScrollTop,b,c)};l.prototype.getPagingPositions=function(){"use strict";return this._pagingPositions};l.prototype._doPostTouchScrolling=function(a,b,c,d,e){"use strict";__p&&__p();if(this.lockMax||this.lockMin){var f=this._canScrollX?this.maxScrollLeft:this.maxScrollTop,g=this._canScrollY?this.minScrollLeft:this.minScrollTop;this.lockMax&&(b>f?(b=f,e=this._BOUNDED_DURATION):a+d*e>f&&(b=f,e=this._BOUNDED_DURATION));this.lockMin&&(b<g?(b=g,e=this._BOUNDED_DURATION):a+d*e<g&&(b=g,e=this._BOUNDED_DURATION))}d*=this._SPEED_FACTOR;b===undefined&&(b=a+d*e,this._canScrollX?c=this._clamp(b,this.minScrollLeft,this.maxScrollLeft):c=this._clamp(b,this.minScrollTop,this.maxScrollTop),b!==c&&(b=c+(b-c)*this._BOUNCE_FACTOR/Math.max(1,Math.abs(d))),(b<a&&c<b||b>a&&c>b)&&(b=c));c===undefined&&(c=b);if(b===a&&b===c)return;var h=this._canScrollX?function(a){this._scrollTo(a,this.top)}:function(a){this._scrollTo(this.left,a)};f=this._createStepFunction(a,b,c,function(a,b){this.scrolling=b<1,h.call(this,a)});this.scrolling=!0;this._animator.start(f,this._canAnimate,f,e)};l.prototype._createStepFunction=function(a,b,c,d){"use strict";b=b===undefined?a:b;c=c===undefined?b:c;var e=b-a,f=c-b;return function(c,g,h){f===0?h=a+e*c:c<=.5?h=a+e*(c/.5):h=b+f*((c-.5)/.5);d.call(this,h,c);g||this._handler.onScrollEnd(this.left,this.top,!0)}.bind(this)};l.prototype._scrollTo=function(a,b){"use strict";a=Math.round(a),b=Math.round(b),(this.left!==a||this.top!==b)&&(this.left=a,this.top=b,this._syncPaging(),this._handler.onScroll(a,b))};l.prototype._syncPaging=function(){"use strict";__p&&__p();if(this._usePaging){if(!this.height||!this.width){this.pageIndex=0;this.pagesCount=1;return}this.pageIndex=this._canScrollX?this._getPageIndex():Math.floor(this.top/this.height);this.pagesCount=this._canScrollX?this._getPagesCount():Math.ceil(this.scrollHeight/this.height)}};l.prototype._indexToLeftOffset=function(a){"use strict";if(this._pagingPositions){a=Math.max(Math.min(a,this._pagingPositions.length-1),0);return this._pagingPositions[a]}return a*this.width};l.prototype._getPagesCount=function(){"use strict";return this._pagingPositions?this._pagingPositions.length:Math.ceil(this.scrollWidth/this.width)};l.prototype._getPageIndex=function(){"use strict";var a;this._scrollSnapType==="normal"?a=this.left+this.width/2:a=this.left;if(this._pagingPositions)for(var b=this._pagingPositions.length-1;b>=0;--b)if(this._pagingPositions[b]<=a)return b;return Math.max(0,Math.floor(this.left/this.width))};l.prototype._getRecentTimeAndLocation=function(){"use strict";for(var a=this._scrollList.length-1;a>-1;a--)if(Date.now()-this._scrollList[a].time>j)return this._scrollList[a];return this._scrollList[0]};l.prototype._getRecentTimeDelta=function(a){"use strict";return Date.now()-a};l.prototype._getRecentScrollDistance=function(a){"use strict";return this._canScrollX?Math.abs(this._moveCoordNow.x-a.x):Math.abs(this._moveCoordNow.y-a.y)};l.prototype._isBackSwipe=function(){"use strict";return this._canScrollX?this._moveCoordNow.x>this._moveCoordStart.x:this._moveCoordNow.y>this._moveCoordStart.y};l.prototype._isRecentBackSwipe=function(a){"use strict";if(this._canScrollX)return this._moveCoordNow.x>a.x;else return this._moveCoordNow.y>a.y};l.prototype._getDistance=function(){"use strict";return this._canScrollX?Math.abs(this._moveCoordNow.x-this._moveCoordStart.x):Math.abs(this._moveCoordNow.y-this._moveCoordStart.y)};l.prototype._crossesMedian=function(){"use strict";return this._canScrollX?this._getDistance()>this.width/2:this._getDistance()>this.height/2};l.prototype._getVelocity=function(a,b){"use strict";return a/b};l.prototype._getIndexDelta=function(a,b){"use strict";if(!this._touchMoved)return 0;var c=this._crossesMedian(),d=this._isBackSwipe(),e=this._isRecentBackSwipe(a);a=this._getVelocity(this._getRecentScrollDistance(a),this._getRecentTimeDelta(b));if(a>k)return e?0:1;return c?d?0:1:d?1:0};l.prototype._clamp=function(a,b,c){"use strict";return a<b?b:a>c?c:a};Object.assign(l.prototype,{scrolling:!1,lockMax:!1,lockMin:!1,scrollPastMinOffset:0,width:0,height:0,scrollWidth:0,scrollHeight:0,left:0,top:0,minScrollTop:0,minScrollLeft:0,maxScrollTop:0,maxScrollLeft:0,pagesCount:0,pageIndex:0,noThreshold:!1,_SPEED_FACTOR:/android/gi.test(navigator.appVersion)?1:.2,_MAX_TOUCH_MOVE_INTERVAL:220,_SCROLL_START_DELTA:2,_PAGING_DURATION:400,_SCROLLING_DURATION:450,_TENSION_FACTOR:/android/gi.test(navigator.appVersion)?.4:.95,_TENSION_LIMIT:30,_BOUNCE_FACTOR:.35,_BOUNDED_DURATION:35});l.SCROLL_ANIMATION_DURATION_MS=500;e.exports=l}),null);
__d("MScrollArea",["CancelableEventListener","CSS","DOM","FBLogger","MJSEnvironment","MScrollAreaScroller","Stratcom","StratcomManager","cancelAnimationFrame","getVendorPrefixedName","requestAnimationFrame","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){__p&&__p();var s=/Firefox/.test(navigator.userAgent),t=["enableMarauderLogging","infiniteScroller","egoScroller"];function a(a,b,c){"use strict";__p&&__p();this.reflow=function(a){__p&&__p();if(this._disposed||!this._element.offsetWidth)return;m.invoke("MScrollArea:reflow",null,this._eventData);var b=s&&this._content?this._content.style:null,c;b&&(c=b.overflow,b.overflow="hidden");(!a||a==="auto"&&this._isHorizontal)&&(a=this.calculatePagingPositions());a!=this._pagingPositions&&(this._pagingPositions=a);var d=this.useCustomScrollHeight?this.customScrollHeight:this._content.scrollHeight;this._scroller.setDimensions(this._element.offsetWidth+(this._isHorizontal?this._betweenSpacing:0),this._element.offsetHeight+(this._isHorizontal?0:this._betweenSpacing),this._content.scrollWidth,d,a,this._invertX);m.invoke("MScrollArea:updatedPages",null,this._eventData);d=Math.min(this._scroller.top,this._scroller.maxScrollTop);a=Math.min(this._scroller.left,this._scroller.maxScrollLeft);(d!==this._scroller.top||a!==this._scroller.left)&&this.scrollTo(a,d);b&&(b.overflow=c);this._syncPaginator()}.bind(this);this._onTouchMove=function(a){if(a.getStopped()){this._onTouchEnd();return}else this._scroller.doTouchMove(a)}.bind(this);this._onTouchEnd=function(a){this._scroller.doTouchEnd(a),this._clearListeners()}.bind(this);this._renderScroll=function(){__p&&__p();if(this._disposed)return;if(this._scrollBounds){var a,b;this._isHorizontal?(a=this._scroller.left,b=this._scroller.minScrollLeft):(a=this._scroller.top,b=this._scroller.minScrollTop);var c,d=this._scroller.getPagingPositions();d&&(c=d[d.length-1]);if(a<b||c&&a>c)return}delete this._renderID;d=-this._scroller.left;b=-this._scroller.top;if(this.renderedLeft!==d||this.renderedTop!==b){this.renderedLeft=d;this.renderedTop=b;a=this._content;var e=this._isHorizontal?d:b,f=this._isHorizontal?this.getScrollWidth():this.getScrollHeight();e>0&&e>f/4&&m.invoke("MScrollArea:limit",null,this._eventData);this._isContainerDraggable&&(e<0?this._updateElementPosition(this._element,0,0):(a=this._element,this._updateElementPosition(this._content,0,0)));this._updateElementPosition(a,b,d)}this._renderSlowly&&this._scroller.scrolling&&(this._renderID=q(this._renderScroll))}.bind(this);c=c||{};this._enabled=!0;this.customScrollHeight=0;this.useCustomScrollHeight=c.useCustomScrollHeight;this._element=a;this._content=b;this._listeners=[];this._isHorizontal=c.direction==="horizontal";this._canUseHscroll=c.canusehscroll;this._automaticPaging=c.pagingPositions==="auto"&&this._isHorizontal;this._automaticPaging&&(this._automaticPagingStrategy=c.pagingStrategy||"centered",this._automaticPagingStrategy!=="centered"&&this._automaticPagingStrategy!=="left"&&j("scroll_area").mustfix("MScrollArea automaticPagingStrategy '%s', should be either 'centered' or 'left'",this._automaticPagingStrategy));this._automaticPaging&&(c.pagingPositions=this.calculatePagingPositions(),c.betweenSpacing=0);c.pagingPositions&&(this._pagingPositions=c.pagingPositions);c.scrollsnaptype==="normal"&&!c.paging&&j("scroll_area").mustfix("MScrollArea scrollsnaptype '%s', requires paging be 'true'",c.scrollsnaptype);this._scroller=new l(this,c);this._isContainerDraggable=c.containerDraggable;this._betweenSpacing=c.betweenSpacing||0;this._scrollBounds=c.scrollBounds;this._lockMax=c.lockMax;this._lockMin=c.lockMin;this._scrollPastMinOffset=c.scrollPastMinOffset;this._invertX=c.invertX;this._eventData={scrollarea:this,element:a,contentElement:this._content,scrolledByUser:!1,container:this._content,scrollEndCount:0,logName:c.logName,logData:c.logData};c.showpaginator&&this._isHorizontal&&(this._paginatorEl=i.find(this._element,"div","scroll-area-paginator"));this.reflow(this._pagingPositions);this._renderScroll();this._scrollStart=!1;c.pageIndex&&(this._isHorizontal?this.scrollTo(this.getScrollWidth()*c.pageIndex,0):this.scrollTo(0,this.getScrollWidth()*c.pageIndex));b=function(){this._disposed||m.invoke("MScrollArea:create",null,this._eventData)}.bind(this);r(b,1e3)}a.prototype.setCustomScrollHeight=function(a){"use strict";this.customScrollHeight=a};a.prototype.calculatePagingPositions=function(){"use strict";__p&&__p();var a=this._content.offsetWidth,b=this._content.children,c=[0],d=[b[0]?b[0].offsetWidth:0];for(var e=1,f=b.length;e<f;e++){var g=b[e].offsetLeft,h=b[e].offsetWidth,i=g+h,j=c[c.length-1];i>j+a?(c.push(g),d.push(h)):d[d.length-1]=i-j}if(this._automaticPagingStrategy==="centered")for(e=1,f=c.length-1;e<f;e++)c[e]-=Math.round((a-d[e])/2);c[c.length-1]-=a-d[d.length-1];return c};a.prototype.dispose=function(){"use strict";__p&&__p();if(!this._disposed){o(this._renderID);this._paginatorEl&&i.setContent(this._paginatorEl,"");this._clearListeners();this._scroller.dispose();for(var a in this)delete this[a];this._disposed=!0}};a.prototype.isTouchMoving=function(){"use strict";return this._scroller.isTouchMoving()};a.prototype.reset=function(){"use strict";if(this._disposed)return;this.scrollTo(0,0);this._updateElementPosition(this._content,0,0);this._updateElementPosition(this._element,0,0)};a.prototype.scrollByPages=function(a){"use strict";this._disposed||this._scroller.scrollByPages(a)};a.prototype.scrollTo=function(a,b){"use strict";if(this._disposed)return;this._scroller.scrollTo(a,b);this._renderScroll()};a.prototype.animatedScrollTo=function(a,b,c){"use strict";this._disposed||this._scroller.animatedScrollTo(a,b,c)};a.prototype.scrollToBottom=function(a,b,c){"use strict";this._disposed||this._scroller.scrollToBottom(a,b,c)};a.prototype.scrollToTop=function(a,b,c){"use strict";this._disposed||this._scroller.scrollToTop(a,b,c)};a.prototype.scrollToIndex=function(a){"use strict";this.reflow(this._pagingPositions),this.scrollTo(this.getScrollWidth()*a,0)};a.prototype.isScrolling=function(){"use strict";return this._scrollStart};a.prototype.getScrollLeft=function(){"use strict";return this._scroller.left};a.prototype.getScrollTop=function(){"use strict";return this._scroller.top};a.prototype.getMaxScrollTop=function(){"use strict";return this._scroller.maxScrollTop};a.prototype.getMaxScrollLeft=function(){"use strict";return this._scroller.maxScrollLeft};a.prototype.getScrollWidth=function(){"use strict";return this._scroller.width};a.prototype.getScrollHeight=function(){"use strict";return this._scroller.height};a.prototype.getScrollPageCount=function(){"use strict";return this._scroller.pagesCount};a.prototype.getScrollPageIndex=function(){"use strict";return this._scroller.pageIndex};a.prototype.isFirstPage=function(){"use strict";return this._scroller.pageIndex===0};a.prototype.isLastPage=function(){"use strict";return this._scroller.pageIndex+1===this._scroller.pagesCount};a.prototype.appendChild=function(a){"use strict";this._content.appendChild(a)};a.prototype.prependChild=function(a){"use strict";i.prependContent(this._content,a)};a.prototype.getNumChildren=function(){"use strict";return this._content.children.length};a.prototype.getChildAtPageIndex=function(a){"use strict";return this._content.children[a]};a.prototype.emptyChildren=function(){"use strict";i.setContent(this._content,null)};a.prototype.getAutomaticPaging=function(){"use strict";return this._automaticPaging};a.prototype.onTouchStart=function(a){"use strict";this.reflow(this._pagingPositions),this._scroller.doTouchStart(a),this._clearListeners(),this._enabled&&this._bindListeners()};a.prototype.onTouchMove=function(a){"use strict";this._onTouchMove(a)};a.prototype.onTouchEnd=function(a){"use strict";this._onTouchEnd(a)};a.prototype.onClick=function(a){"use strict";this._scroller.scrolling&&a.kill()};a.prototype.onScrollStart=function(a,b,c){c===void 0&&(c=!1),this._scrollStart=!0,this._eventData.scrolledByUser=c,m.invoke("MScrollArea:scrollstart",null,this._eventData),this._renderSlowly&&(o(this._renderID),this._renderID=q(this._renderScroll))};a.prototype.onScroll=function(a,b){"use strict";m.invoke("MScrollArea:scroll",null,this._eventData),this._renderSlowly||this._renderScroll()};a.prototype.onScrollEnd=function(a,b,c){"use strict";__p&&__p();this._scrollStart=!1;this._syncPaginator();this._eventData.scrollEndCount++;this._eventData.scrolledByUser=c;a=null;for(var b=0;b<t.length;b++)if(m.hasSigil(this._element,t[b])){a=t[b];break}m.invoke("MScrollArea:scrollend",a,this._eventData);this._renderSlowly&&(o(this._renderID),delete this._renderID,this._renderScroll())};a.prototype.setEnabled=function(a){"use strict";this._enabled=a,a||this._clearListeners()};a.prototype._bindListeners=function(){"use strict";var a=this._element;this._listeners.push(g.listen(a,"touchmove",null,this._onTouchMove),g.listen(a,"touchend",null,this._onTouchEnd),g.listen(a,"touchcancel",null,this._onTouchEnd))};a.prototype._clearListeners=function(){"use strict";for(var a=0,b;b=this._listeners[a];a++)b.remove();this._listeners.length=0};a.prototype._updateElementPosition=function(a,b,c){"use strict";var d=p("transform");a=a&&a.style;a&&(d?(a[p("backface-visibility")]="hidden",a[d]="translate("+c+"px,"+b+"px)"):(a.left=c+"px",a.top=b+"px"))};a.prototype._syncPaginator=function(){"use strict";__p&&__p();if(this._paginatorEl){var a=i.create("i",{className:"scrollAreaPaginatorBubble"}),b=document.createDocumentFragment(),c=this._scroller.pageIndex;for(var d=0;d<this._scroller.pagesCount;d++){var e=a.cloneNode(!1);d===c&&h.conditionClass(e,"scrollAreaPaginatorBubbleActive",!0);b.appendChild(e)}i.setContent(this._paginatorEl,b)}};a.prototype.getElement=function(){"use strict";return this._element};a.prototype.getEventData=function(){"use strict";return this._eventData};a.prototype.getLogginSigils=function(){"use strict";return t};a.prototype.getContent=function(){"use strict";return this._content};Object.assign(a.prototype,{_renderSlowly:k.IS_ANDROID&&k.OS_VERSION<4.1});(function(){n.enableDispatch(window,"orientationchange")})();e.exports=a}),null);
__d("MScrollableScrollArea",["Event","MScrollArea","Stratcom"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;b=babelHelpers.inherits(a,h);j=b&&b.prototype;function a(a,b,c){j.constructor.call(this,a,b,c),g.listen(this.getElement(),"scroll",function(a){a=null;for(var b=0;b<this.getLogginSigils().length;b++)if(i.hasSigil(this.getElement(),this.getLogginSigils()[b])){a=this.getLogginSigils()[b];break}i.invoke("MScrollArea:scrollend",a,this.getEventData())}.bind(this)),this.$MScrollableScrollArea1=this.getContent().offsetWidth}a.prototype.getScrollPageIndex=function(){if(this.$MScrollableScrollArea1<=0){this.$MScrollableScrollArea1=this.getContent().offsetWidth;return 0}else return Math.ceil(this.getElement().scrollLeft/this.$MScrollableScrollArea1)};e.exports=a}),null);
__d("InitMScrollArea",["CancelableEventListener","MLegacyDataStore","MScrollableScrollArea","MScrollArea","Stratcom","ge"],(function(a,b,c,d,e,f,g,h,i,j,k,l){__p&&__p();var m="scroll-area",n=[],o=!1;function p(){__p&&__p();function a(){var a=document.documentElement;for(var b=0,c;c=n[b];b++)if(a!==null&&!a.contains(c.element)){c.scrollArea.dispose();c=h.get(c.element);delete c.scrollArea;n.splice(b,1);b--}}k.listen("m:page:unload",null,a);function b(a){__p&&__p();for(var b=0,c;c=n[b];b++){var d=c.scrollArea,e=d.getAutomaticPaging(),f=a.getType()==="m:orientation-resize:complete";if(e){var g=d.getScrollWidth();if(f&&g===c.width)continue;c.width=g}else if(f)continue;d.reflow(e?"auto":null)}}k.listen("m:viewport:orientation-change",null,b);k.listen("m:orientation-resize:complete",null,b);function c(a){var b=h.get(a.getNode(m));b&&b.scrollArea&&b.scrollArea.onClick(a)}k.listenCapture("click",m,c)}function a(a){a={root:l(a.id),body:l(a.bodyId),marauderEventName:Object.prototype.hasOwnProperty.call(a,"marauderEventName")?a.marauderEventName:null,useNativeScroll:!1};return q(a)}function q(a){__p&&__p();o||(p(),o=!0);var b=a.root;if(!b)return null;function c(a){var c=h.get(b);c&&c.scrollArea&&c.scrollArea.onTouchStart&&c.scrollArea.onTouchStart(a)}g.listen(b,"touchstart",m,c);c=h.get(b);(!c||!c.scrollArea)&&(c.marauderEventName=a.marauderEventName,a.useNativeScroll?c.scrollArea=new i(b,a.body,c):c.scrollArea=new j(b,a.body,c),n.push({scrollArea:c.scrollArea,element:b}));return c.scrollArea}e.exports={mainWithTypedConfig:q,main:a}}),null);
__d("XFeedEgoImpressionLoggingController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ego/feed/logging/impression/",{ego_id:{type:"Int",required:!0},qid:{type:"Int",required:!0},mf_story_key:{type:"Int",required:!0},uid:{type:"Int"}})}),null);