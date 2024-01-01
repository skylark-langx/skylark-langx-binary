/**
 * skylark-langx-binary - The skylark JavaScript language extension library.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define([],function(){"use strict";var exports={read:function(t,a,o,r,h){var M,f,e=8*h-r-1,i=(1<<e)-1,n=i>>1,w=-7,p=o?h-1:0,u=o?-1:1,h=t[a+p];for(p+=u,M=h&(1<<-w)-1,h>>=-w,w+=e;0<w;M=256*M+t[a+p],p+=u,w-=8);for(f=M&(1<<-w)-1,M>>=-w,w+=r;0<w;f=256*f+t[a+p],p+=u,w-=8);if(0===M)M=1-n;else{if(M===i)return f?NaN:1/0*(h?-1:1);f+=Math.pow(2,r),M-=n}return(h?-1:1)*f*Math.pow(2,M-r)},write:function(t,a,o,r,h,M){var f,e,i=8*M-h-1,n=(1<<i)-1,w=n>>1,p=23===h?Math.pow(2,-24)-Math.pow(2,-77):0,u=r?0:M-1,N=r?1:-1,M=a<0||0===a&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(e=isNaN(a)?1:0,f=n):(f=Math.floor(Math.log(a)/Math.LN2),a*(r=Math.pow(2,-f))<1&&(f--,r*=2),2<=(a+=1<=f+w?p/r:p*Math.pow(2,1-w))*r&&(f++,r/=2),n<=f+w?(e=0,f=n):1<=f+w?(e=(a*r-1)*Math.pow(2,h),f+=w):(e=a*Math.pow(2,w-1)*Math.pow(2,h),f=0));8<=h;t[o+u]=255&e,u+=N,e/=256,h-=8);for(f=f<<h|e,i+=h;0<i;t[o+u]=255&f,u+=N,f/=256,i-=8);t[o+u-N]|=128*M}};return exports});
//# sourceMappingURL=sourcemaps/ieee754.js.map
