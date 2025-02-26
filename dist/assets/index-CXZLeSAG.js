(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vo="173",Ei={ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bc=0,ma=1,zc=2,Fl=1,kc=2,hn=3,Cn=0,Pt=1,Qt=2,An=0,qn=1,_a=2,ga=3,va=4,Hc=5,Vn=100,Vc=101,Gc=102,Wc=103,Xc=104,qc=200,Yc=201,jc=202,Zc=203,Gr=204,Wr=205,$c=206,Kc=207,Jc=208,Qc=209,eu=210,tu=211,nu=212,iu=213,su=214,Xr=0,qr=1,Yr=2,wi=3,jr=4,Zr=5,$r=6,Kr=7,Bl=0,ru=1,ou=2,wn=0,au=1,lu=2,cu=3,uu=4,hu=5,du=6,fu=7,zl=300,Ci=301,Ri=302,Jr=303,Qr=304,tr=306,eo=1e3,Wn=1001,to=1002,jt=1003,pu=1004,ds=1005,en=1006,ar=1007,Xn=1008,mn=1009,kl=1010,Hl=1011,Qi=1012,Go=1013,jn=1014,dn=1015,rs=1016,Wo=1017,Xo=1018,Pi=1020,Vl=35902,Gl=1021,Wl=1022,Yt=1023,Xl=1024,ql=1025,bi=1026,Li=1027,Yl=1028,qo=1029,jl=1030,Yo=1031,jo=1033,Hs=33776,Vs=33777,Gs=33778,Ws=33779,no=35840,io=35841,so=35842,ro=35843,oo=36196,ao=37492,lo=37496,co=37808,uo=37809,ho=37810,fo=37811,po=37812,mo=37813,_o=37814,go=37815,vo=37816,xo=37817,yo=37818,So=37819,Mo=37820,Eo=37821,Xs=36492,bo=36494,To=36495,Zl=36283,Ao=36284,wo=36285,Co=36286,mu=3200,_u=3201,gu=0,vu=1,Tn="",Ut="srgb",Di="srgb-linear",js="linear",tt="srgb",ni=7680,xa=519,xu=512,yu=513,Su=514,$l=515,Mu=516,Eu=517,bu=518,Tu=519,ya=35044,Sa="300 es",fn=2e3,Zs=2001;class Jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qs=Math.PI/180,Ro=180/Math.PI;function Ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[i&255]+Mt[i>>8&255]+Mt[i>>16&255]+Mt[i>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Au(i,e){return(i%e+e)%e}function lr(i,e,t){return(1-t)*i+t*e}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const wu={DEG2RAD:qs};class ue{constructor(e=0,t=0){ue.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,n,s,r,o,a,l,c){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],m=n[5],g=n[8],_=s[0],p=s[3],d=s[6],R=s[1],v=s[4],x=s[7],N=s[2],D=s[5],P=s[8];return r[0]=o*_+a*R+l*N,r[3]=o*p+a*v+l*D,r[6]=o*d+a*x+l*P,r[1]=c*_+u*R+h*N,r[4]=c*p+u*v+h*D,r[7]=c*d+u*x+h*P,r[2]=f*_+m*R+g*N,r[5]=f*p+m*v+g*D,r[8]=f*d+m*x+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,g=t*h+n*f+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(s*c-u*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(u*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=m*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(cr.makeScale(e,t)),this}rotate(e){return this.premultiply(cr.makeRotation(-e)),this}translate(e,t){return this.premultiply(cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cr=new Be;function Kl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Cu(){const i=es("canvas");return i.style.display="block",i}const Ma={};function _i(i){i in Ma||(Ma[i]=!0,console.warn(i))}function Ru(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Pu(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Lu(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ea=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ba=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Du(){const i={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===tt&&(s.r=pn(s.r),s.g=pn(s.g),s.b=pn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Tn?js:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Di]:{primaries:e,whitePoint:n,transfer:js,toXYZ:Ea,fromXYZ:ba,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ut},outputColorSpaceConfig:{drawingBufferColorSpace:Ut}},[Ut]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:Ea,fromXYZ:ba,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ut}}}),i}const Ke=Du();function pn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ii;class Iu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ii===void 0&&(ii=es("canvas")),ii.width=e.width,ii.height=e.height;const n=ii.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ii}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=pn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pn(t[n]/255)*255):t[n]=pn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Uu=0;class Jl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ur(s[o].image)):r.push(ur(s[o]))}else r=ur(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Iu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nu=0;class At extends Jn{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=Wn,s=Wn,r=en,o=Xn,a=Yt,l=mn,c=At.DEFAULT_ANISOTROPY,u=Tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Ui(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=zl;At.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,n=0,s=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],g=l[9],_=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(m+1)/2,N=(d+1)/2,D=(u+f)/4,P=(h+_)/4,O=(g+p)/4;return v>x&&v>N?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=D/n,r=P/n):x>N?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=D/s,r=O/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=P/r,s=O/r),this.set(n,s,r,t),this}let R=Math.sqrt((p-g)*(p-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(R)<.001&&(R=1),this.x=(p-g)/R,this.y=(h-_)/R,this.z=(f-u)/R,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ou extends Jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new At(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Jl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Ou{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ql extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fu extends At{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=jt,this.minFilter=jt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==f||c!==m||u!==g){let p=1-a;const d=l*f+c*m+u*g+h*_,R=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const N=Math.sqrt(v),D=Math.atan2(N,d*R);p=Math.sin(p*D)/N,a=Math.sin(a*D)/N}const x=a*R;if(l=l*p+f*x,c=c*p+m*x,u=u*p+g*x,h=h*p+_*x,p===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*m-c*f,e[t+1]=l*g+u*f+c*h-a*m,e[t+2]=c*g+u*m+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),h=a(r/2),f=l(n/2),m=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"YXZ":this._x=f*u*h+c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"ZXY":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h-f*m*g;break;case"ZYX":this._x=f*u*h-c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h+f*m*g;break;case"YZX":this._x=f*u*h+c*m*g,this._y=c*m*h+f*u*g,this._z=c*u*g-f*m*h,this._w=c*u*h-f*m*g;break;case"XZY":this._x=f*u*h-c*m*g,this._y=c*m*h-f*u*g,this._z=c*u*g+f*m*h,this._w=c*u*h+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ta.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ta.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),u=2*(a*t-r*s),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hr.copy(this).projectOnVector(e),this.sub(hr)}reflect(e){return this.sub(hr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hr=new z,Ta=new $n;class Qn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gt):Gt.fromBufferAttribute(r,o),Gt.applyMatrix4(e.matrixWorld),this.expandByPoint(Gt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(e.matrixWorld),this.union(fs)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gt),Gt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),ps.subVectors(this.max,Bi),si.subVectors(e.a,Bi),ri.subVectors(e.b,Bi),oi.subVectors(e.c,Bi),vn.subVectors(ri,si),xn.subVectors(oi,ri),Un.subVectors(si,oi);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-Un.z,Un.y,vn.z,0,-vn.x,xn.z,0,-xn.x,Un.z,0,-Un.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-Un.y,Un.x,0];return!dr(t,si,ri,oi,ps)||(t=[1,0,0,0,1,0,0,0,1],!dr(t,si,ri,oi,ps))?!1:(ms.crossVectors(vn,xn),t=[ms.x,ms.y,ms.z],dr(t,si,ri,oi,ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new z,new z,new z,new z,new z,new z,new z,new z],Gt=new z,fs=new Qn,si=new z,ri=new z,oi=new z,vn=new z,xn=new z,Un=new z,Bi=new z,ps=new z,ms=new z,Nn=new z;function dr(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Nn.fromArray(i,r);const a=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),l=e.dot(Nn),c=t.dot(Nn),u=n.dot(Nn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Bu=new Qn,zi=new z,fr=new z;class nr{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Bu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zi.subVectors(e,this.center);const t=zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(zi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zi.copy(e.center).add(fr)),this.expandByPoint(zi.copy(e.center).sub(fr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new z,pr=new z,_s=new z,yn=new z,mr=new z,gs=new z,_r=new z;class Zo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){pr.copy(e).add(t).multiplyScalar(.5),_s.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(pr);const r=e.distanceTo(t)*.5,o=-this.direction.dot(_s),a=yn.dot(this.direction),l=-yn.dot(_s),c=yn.lengthSq(),u=Math.abs(1-o*o);let h,f,m,g;if(u>0)if(h=o*l-a,f=o*a-l,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(pr).addScaledVector(_s,f),m}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),s=on.dot(on)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,s,r){mr.subVectors(t,e),gs.subVectors(n,e),_r.crossVectors(mr,gs);let o=this.direction.dot(_r),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,e);const l=a*this.direction.dot(gs.crossVectors(yn,gs));if(l<0)return null;const c=a*this.direction.dot(mr.cross(yn));if(c<0||l+c>o)return null;const u=-a*yn.dot(_r);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ot{constructor(e,t,n,s,r,o,a,l,c,u,h,f,m,g,_,p){ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,u,h,f,m,g,_,p)}set(e,t,n,s,r,o,a,l,c,u,h,f,m,g,_,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=g,d[11]=_,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ot().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ai.setFromMatrixColumn(e,0).length(),r=1/ai.setFromMatrixColumn(e,1).length(),o=1/ai.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f+_*a,t[4]=g*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,g=c*u,_=c*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,g=a*u,_=a*h;t[0]=l*u,t[4]=g*c-m,t[8]=f*c+_,t[1]=l*h,t[5]=_*c+f,t[9]=m*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-f*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+g,t[10]=f-_*h}else if(e.order==="XZY"){const f=o*l,m=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+_,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zu,e,ku)}lookAt(e,t,n){const s=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Sn.crossVectors(n,Dt),Sn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Sn.crossVectors(n,Dt)),Sn.normalize(),vs.crossVectors(Dt,Sn),s[0]=Sn.x,s[4]=vs.x,s[8]=Dt.x,s[1]=Sn.y,s[5]=vs.y,s[9]=Dt.y,s[2]=Sn.z,s[6]=vs.z,s[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],m=n[13],g=n[2],_=n[6],p=n[10],d=n[14],R=n[3],v=n[7],x=n[11],N=n[15],D=s[0],P=s[4],O=s[8],T=s[12],M=s[1],F=s[5],X=s[9],Y=s[13],te=s[2],ae=s[6],ne=s[10],Q=s[14],B=s[3],_e=s[7],xe=s[11],Me=s[15];return r[0]=o*D+a*M+l*te+c*B,r[4]=o*P+a*F+l*ae+c*_e,r[8]=o*O+a*X+l*ne+c*xe,r[12]=o*T+a*Y+l*Q+c*Me,r[1]=u*D+h*M+f*te+m*B,r[5]=u*P+h*F+f*ae+m*_e,r[9]=u*O+h*X+f*ne+m*xe,r[13]=u*T+h*Y+f*Q+m*Me,r[2]=g*D+_*M+p*te+d*B,r[6]=g*P+_*F+p*ae+d*_e,r[10]=g*O+_*X+p*ne+d*xe,r[14]=g*T+_*Y+p*Q+d*Me,r[3]=R*D+v*M+x*te+N*B,r[7]=R*P+v*F+x*ae+N*_e,r[11]=R*O+v*X+x*ne+N*xe,r[15]=R*T+v*Y+x*Q+N*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],g=e[3],_=e[7],p=e[11],d=e[15];return g*(+r*l*h-s*c*h-r*a*f+n*c*f+s*a*m-n*l*m)+_*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+n*o*m+r*a*u-n*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],g=e[12],_=e[13],p=e[14],d=e[15],R=h*p*c-_*f*c+_*l*m-a*p*m-h*l*d+a*f*d,v=g*f*c-u*p*c-g*l*m+o*p*m+u*l*d-o*f*d,x=u*_*c-g*h*c+g*a*m-o*_*m-u*a*d+o*h*d,N=g*h*l-u*_*l-g*a*f+o*_*f+u*a*p-o*h*p,D=t*R+n*v+s*x+r*N;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/D;return e[0]=R*P,e[1]=(_*f*r-h*p*r-_*s*m+n*p*m+h*s*d-n*f*d)*P,e[2]=(a*p*r-_*l*r+_*s*c-n*p*c-a*s*d+n*l*d)*P,e[3]=(h*l*r-a*f*r-h*s*c+n*f*c+a*s*m-n*l*m)*P,e[4]=v*P,e[5]=(u*p*r-g*f*r+g*s*m-t*p*m-u*s*d+t*f*d)*P,e[6]=(g*l*r-o*p*r-g*s*c+t*p*c+o*s*d-t*l*d)*P,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*P,e[8]=x*P,e[9]=(g*h*r-u*_*r-g*n*m+t*_*m+u*n*d-t*h*d)*P,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*d+t*a*d)*P,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*m-t*a*m)*P,e[12]=N*P,e[13]=(u*_*s-g*h*s+g*n*f-t*_*f-u*n*p+t*h*p)*P,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*p-t*a*p)*P,e[15]=(o*h*s-u*a*s+u*n*l-t*h*l-o*n*f+t*a*f)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,g=r*h,_=o*u,p=o*h,d=a*h,R=l*c,v=l*u,x=l*h,N=n.x,D=n.y,P=n.z;return s[0]=(1-(_+d))*N,s[1]=(m+x)*N,s[2]=(g-v)*N,s[3]=0,s[4]=(m-x)*D,s[5]=(1-(f+d))*D,s[6]=(p+R)*D,s[7]=0,s[8]=(g+v)*P,s[9]=(p-R)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ai.set(s[0],s[1],s[2]).length();const o=ai.set(s[4],s[5],s[6]).length(),a=ai.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Wt.copy(this);const c=1/r,u=1/o,h=1/a;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=u,Wt.elements[5]*=u,Wt.elements[6]*=u,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=fn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),h=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(a===fn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zs)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=fn){const l=this.elements,c=1/(t-e),u=1/(n-s),h=1/(o-r),f=(t+e)*c,m=(n+s)*u;let g,_;if(a===fn)g=(o+r)*h,_=-2*h;else if(a===Zs)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ai=new z,Wt=new ot,zu=new z(0,0,0),ku=new z(1,1,1),Sn=new z,vs=new z,Dt=new z,Aa=new ot,wa=new $n;class _n{constructor(e=0,t=0,n=0,s=_n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Aa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Aa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wa.setFromEuler(this),this.setFromQuaternion(wa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_n.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hu=0;const Ca=new z,li=new $n,an=new ot,xs=new z,ki=new z,Vu=new z,Gu=new $n,Ra=new z(1,0,0),Pa=new z(0,1,0),La=new z(0,0,1),Da={type:"added"},Wu={type:"removed"},ci={type:"childadded",child:null},gr={type:"childremoved",child:null};class yt extends Jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yt.DEFAULT_UP.clone();const e=new z,t=new _n,n=new $n,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ot},normalMatrix:{value:new Be}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.multiply(li),this}rotateOnWorldAxis(e,t){return li.setFromAxisAngle(e,t),this.quaternion.premultiply(li),this}rotateX(e){return this.rotateOnAxis(Ra,e)}rotateY(e){return this.rotateOnAxis(Pa,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Ca.copy(e).applyQuaternion(this.quaternion),this.position.add(Ca.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ra,e)}translateY(e){return this.translateOnAxis(Pa,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(ki,xs,this.up):an.lookAt(xs,ki,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),li.setFromRotationMatrix(an),this.quaternion.premultiply(li.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Da),ci.child=e,this.dispatchEvent(ci),ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Wu),gr.child=e,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Da),ci.child=e,this.dispatchEvent(ci),ci.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,e,Vu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ki,Gu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}yt.DEFAULT_UP=new z(0,1,0);yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new z,ln=new z,vr=new z,cn=new z,ui=new z,hi=new z,Ia=new z,xr=new z,yr=new z,Sr=new z,Mr=new ut,Er=new ut,br=new ut;class qt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Xt.subVectors(e,t),s.cross(Xt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Xt.subVectors(s,t),ln.subVectors(n,t),vr.subVectors(e,t);const o=Xt.dot(Xt),a=Xt.dot(ln),l=Xt.dot(vr),c=ln.dot(ln),u=ln.dot(vr),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,g=(o*u-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Mr.setScalar(0),Er.setScalar(0),br.setScalar(0),Mr.fromBufferAttribute(e,t),Er.fromBufferAttribute(e,n),br.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Mr,r.x),o.addScaledVector(Er,r.y),o.addScaledVector(br,r.z),o}static isFrontFacing(e,t,n,s){return Xt.subVectors(n,t),ln.subVectors(e,t),Xt.cross(ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Xt.cross(ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;ui.subVectors(s,n),hi.subVectors(r,n),xr.subVectors(e,n);const l=ui.dot(xr),c=hi.dot(xr);if(l<=0&&c<=0)return t.copy(n);yr.subVectors(e,s);const u=ui.dot(yr),h=hi.dot(yr);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ui,o);Sr.subVectors(e,r);const m=ui.dot(Sr),g=hi.dot(Sr);if(g>=0&&m<=g)return t.copy(r);const _=m*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(hi,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Ia.subVectors(r,s),a=(h-u)/(h-u+(m-g)),t.copy(s).addScaledVector(Ia,a);const d=1/(p+_+f);return o=_*d,a=f*d,t.copy(n).addScaledVector(ui,o).addScaledVector(hi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mn={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Tr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}let ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ke.workingColorSpace){if(e=Au(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Tr(o,r,e+1/3),this.g=Tr(o,r,e),this.b=Tr(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,s),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pn(e.r),this.g=pn(e.g),this.b=pn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Ke.fromWorkingColorSpace(Et.copy(this),e),Math.round(qe(Et.r*255,0,255))*65536+Math.round(qe(Et.g*255,0,255))*256+Math.round(qe(Et.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,s=Et.g,r=Et.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=Ut){Ke.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,s=Et.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Mn),this.setHSL(Mn.h+e,Mn.s+t,Mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Mn),e.getHSL(ys);const n=lr(Mn.h,ys.h,t),s=lr(Mn.s,ys.s,t),r=lr(Mn.l,ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};const Et=new ke;ke.NAMES=tc;let Xu=0;class os extends Jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=qn,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gr,this.blendDst=Wr,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ni,this.stencilZFail=ni,this.stencilZPass=ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==Cn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gr&&(n.blendSrc=this.blendSrc),this.blendDst!==Wr&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==wi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ni&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ni&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ni&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class nc extends os{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _n,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ft=new z,Ss=new ue;let qu=0;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ya,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ss.fromBufferAttribute(this,t),Ss.applyMatrix3(e),this.setXY(t,Ss.x,Ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix3(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyMatrix4(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.applyNormalMatrix(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ft.fromBufferAttribute(this,t),ft.transformDirection(e),this.setXYZ(t,ft.x,ft.y,ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ct(t,this.array),n=Ct(n,this.array),s=Ct(s,this.array),r=Ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ya&&(e.usage=this.usage),e}}class ic extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sc extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ht extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yu=0;const Bt=new ot,Ar=new yt,di=new z,It=new Qn,Hi=new Qn,gt=new z;class Nt extends Jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kl(e)?sc:ic)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Be().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bt.makeRotationFromQuaternion(e),this.applyMatrix4(Bt),this}rotateX(e){return Bt.makeRotationX(e),this.applyMatrix4(Bt),this}rotateY(e){return Bt.makeRotationY(e),this.applyMatrix4(Bt),this}rotateZ(e){return Bt.makeRotationZ(e),this.applyMatrix4(Bt),this}translate(e,t,n){return Bt.makeTranslation(e,t,n),this.applyMatrix4(Bt),this}scale(e,t,n){return Bt.makeScale(e,t,n),this.applyMatrix4(Bt),this}lookAt(e){return Ar.lookAt(e),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(gt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(gt),gt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(gt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Hi.setFromBufferAttribute(a),this.morphTargetsRelative?(gt.addVectors(It.min,Hi.min),It.expandByPoint(gt),gt.addVectors(It.max,Hi.max),It.expandByPoint(gt)):(It.expandByPoint(Hi.min),It.expandByPoint(Hi.max))}It.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)gt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(gt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)gt.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(e,c),gt.add(di)),s=Math.max(s,n.distanceToSquared(gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let O=0;O<n.count;O++)a[O]=new z,l[O]=new z;const c=new z,u=new z,h=new z,f=new ue,m=new ue,g=new ue,_=new z,p=new z;function d(O,T,M){c.fromBufferAttribute(n,O),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,M),f.fromBufferAttribute(r,O),m.fromBufferAttribute(r,T),g.fromBufferAttribute(r,M),u.sub(c),h.sub(c),m.sub(f),g.sub(f);const F=1/(m.x*g.y-g.x*m.y);isFinite(F)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(F),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(F),a[O].add(_),a[T].add(_),a[M].add(_),l[O].add(p),l[T].add(p),l[M].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let O=0,T=R.length;O<T;++O){const M=R[O],F=M.start,X=M.count;for(let Y=F,te=F+X;Y<te;Y+=3)d(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const v=new z,x=new z,N=new z,D=new z;function P(O){N.fromBufferAttribute(s,O),D.copy(N);const T=a[O];v.copy(T),v.sub(N.multiplyScalar(N.dot(T))).normalize(),x.crossVectors(D,T);const F=x.dot(l[O])<0?-1:1;o.setXYZW(O,v.x,v.y,v.z,F)}for(let O=0,T=R.length;O<T;++O){const M=R[O],F=M.start,X=M.count;for(let Y=F,te=F+X;Y<te;Y+=3)P(e.getX(Y+0)),P(e.getX(Y+1)),P(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,h=new z;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),_=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gt.fromBufferAttribute(e,t),gt.normalize(),e.setXYZ(t,gt.x,gt.y,gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let d=0;d<u;d++)f[g++]=c[m++]}return new tn(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ua=new ot,On=new Zo,Ms=new nr,Na=new z,Es=new z,bs=new z,Ts=new z,wr=new z,As=new z,Oa=new z,ws=new z;class kt extends yt{constructor(e=new Nt,t=new nc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){As.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(wr.fromBufferAttribute(h,e),o?As.addScaledVector(wr,u):As.addScaledVector(wr.sub(t),u))}t.add(As)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),On.copy(e.ray).recast(e.near),!(Ms.containsPoint(On.origin)===!1&&(On.intersectSphere(Ms,Na)===null||On.origin.distanceToSquared(Na)>(e.far-e.near)**2))&&(Ua.copy(r).invert(),On.copy(e.ray).applyMatrix4(Ua),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],R=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let x=R,N=v;x<N;x+=3){const D=a.getX(x),P=a.getX(x+1),O=a.getX(x+2);s=Cs(this,d,e,n,c,u,h,D,P,O),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const R=a.getX(p),v=a.getX(p+1),x=a.getX(p+2);s=Cs(this,o,e,n,c,u,h,R,v,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const p=f[g],d=o[p.materialIndex],R=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let x=R,N=v;x<N;x+=3){const D=x,P=x+1,O=x+2;s=Cs(this,d,e,n,c,u,h,D,P,O),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=g,d=_;p<d;p+=3){const R=p,v=p+1,x=p+2;s=Cs(this,o,e,n,c,u,h,R,v,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function ju(i,e,t,n,s,r,o,a){let l;if(e.side===Pt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Cn,a),l===null)return null;ws.copy(a),ws.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:i}}function Cs(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Es),i.getVertexPosition(l,bs),i.getVertexPosition(c,Ts);const u=ju(i,e,t,n,Es,bs,Ts,Oa);if(u){const h=new z;qt.getBarycoord(Oa,Es,bs,Ts,h),s&&(u.uv=qt.getInterpolatedAttribute(s,a,l,c,h,new ue)),r&&(u.uv1=qt.getInterpolatedAttribute(r,a,l,c,h,new ue)),o&&(u.normal=qt.getInterpolatedAttribute(o,a,l,c,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new z,materialIndex:0};qt.getNormal(Es,bs,Ts,f.normal),u.face=f,u.barycoord=h}return u}class as extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(h,2));function g(_,p,d,R,v,x,N,D,P,O,T){const M=x/P,F=N/O,X=x/2,Y=N/2,te=D/2,ae=P+1,ne=O+1;let Q=0,B=0;const _e=new z;for(let xe=0;xe<ne;xe++){const Me=xe*F-Y;for(let Oe=0;Oe<ae;Oe++){const Ye=Oe*M-X;_e[_]=Ye*R,_e[p]=Me*v,_e[d]=te,c.push(_e.x,_e.y,_e.z),_e[_]=0,_e[p]=0,_e[d]=D>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(Oe/P),h.push(1-xe/O),Q+=1}}for(let xe=0;xe<O;xe++)for(let Me=0;Me<P;Me++){const Oe=f+Me+ae*xe,Ye=f+Me+ae*(xe+1),I=f+(Me+1)+ae*(xe+1),L=f+(Me+1)+ae*xe;l.push(Oe,Ye,L),l.push(Ye,I,L),B+=6}a.addGroup(m,B,T),m+=B,f+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ii(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Tt(i){const e={};for(let t=0;t<i.length;t++){const n=Ii(i[t]);for(const s in n)e[s]=n[s]}return e}function Zu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const $u={clone:Ii,merge:Tt};var Ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ju=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends os{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ku,this.fragmentShader=Ju,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=Zu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class oc extends yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const En=new z,Fa=new ue,Ba=new ue;class zt extends oc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ro*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ro*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){En.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(En.x,En.y).multiplyScalar(-e/En.z),En.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(En.x,En.y).multiplyScalar(-e/En.z)}getViewSize(e,t){return this.getViewBounds(e,Fa,Ba),t.subVectors(Ba,Fa)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class Qu extends yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new zt(fi,pi,e,t);s.layers=this.layers,this.add(s);const r=new zt(fi,pi,e,t);r.layers=this.layers,this.add(r);const o=new zt(fi,pi,e,t);o.layers=this.layers,this.add(o);const a=new zt(fi,pi,e,t);a.layers=this.layers,this.add(a);const l=new zt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new zt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ac extends At{constructor(e,t,n,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ci,super(e,t,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class eh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ac(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:en}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new as(5,5,5),r=new gn({name:"CubemapFromEquirect",uniforms:Ii(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:An});r.uniforms.tEquirect.value=t;const o=new kt(s,r),a=t.minFilter;return t.minFilter===Xn&&(t.minFilter=en),new Qu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}class Xi extends yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const th={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),d=this._getHandJoint(c,_);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(th)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Xi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class nh extends yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _n,this.environmentIntensity=1,this.environmentRotation=new _n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Rr=new z,ih=new z,sh=new Be;class bn{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Rr.subVectors(n,t).cross(ih.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),s=this.coplanarPoint(Rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fn=new nr,Rs=new z;class $o{constructor(e=new bn,t=new bn,n=new bn,s=new bn,r=new bn,o=new bn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],d=s[12],R=s[13],v=s[14],x=s[15];if(n[0].setComponents(l-r,f-c,p-m,x-d).normalize(),n[1].setComponents(l+r,f+c,p+m,x+d).normalize(),n[2].setComponents(l+o,f+u,p+g,x+R).normalize(),n[3].setComponents(l-o,f-u,p-g,x-R).normalize(),n[4].setComponents(l-a,f-h,p-_,x-v).normalize(),t===fn)n[5].setComponents(l+a,f+h,p+_,x+v).normalize();else if(t===Zs)n[5].setComponents(a,h,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fn)}intersectsSprite(e){return Fn.center.set(0,0,0),Fn.radius=.7071067811865476,Fn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Rs.x=s.normal.x>0?e.max.x:e.min.x,Rs.y=s.normal.y>0?e.max.y:e.min.y,Rs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ko extends os{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $s=new z,Ks=new z,za=new ot,Vi=new Zo,Ps=new nr,Pr=new z,ka=new z;class rh extends yt{constructor(e=new Nt,t=new Ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$s.fromBufferAttribute(t,s-1),Ks.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$s.distanceTo(Ks);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ps.copy(n.boundingSphere),Ps.applyMatrix4(s),Ps.radius+=r,e.ray.intersectsSphere(Ps)===!1)return;za.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(za);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=u.getX(_),R=u.getX(_+1),v=Ls(this,e,Vi,l,d,R,_);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),p=u.getX(m),d=Ls(this,e,Vi,l,_,p,g-1);d&&t.push(d)}}else{const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=m,p=g-1;_<p;_+=c){const d=Ls(this,e,Vi,l,_,_+1,_);d&&t.push(d)}if(this.isLineLoop){const _=Ls(this,e,Vi,l,g-1,m,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ls(i,e,t,n,s,r,o){const a=i.geometry.attributes.position;if($s.fromBufferAttribute(a,s),Ks.fromBufferAttribute(a,r),t.distanceSqToSegment($s,Ks,Pr,ka)>n)return;Pr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Pr);if(!(c<e.near||c>e.far))return{distance:c,point:ka.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}const Ha=new z,Va=new z;class lc extends rh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ha.fromBufferAttribute(t,s),Va.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ha.distanceTo(Va);e.setAttribute("lineDistance",new ht(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cc extends At{constructor(e,t,n,s,r,o,a,l,c,u=bi){if(u!==bi&&u!==Li)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===bi&&(n=jn),n===void 0&&u===Li&&(n=Pi),super(null,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:jt,this.minFilter=l!==void 0?l:jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);const u=n[s],f=n[s+1]-u,m=(o-u)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new ue:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,s=[],r=[],o=[],a=new z,l=new ot;for(let m=0;m<=e;m++){const g=m/e;s[m]=this.getTangentAt(g,new z)}r[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(s[m-1],s[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(qe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(qe(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jo extends nn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ue){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*h+this.aX,c=f*h+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oh extends Jo{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Qo(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,u,h){let f=(o-r)/c-(a-r)/(c+u)+(a-o)/u,m=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,m*=u,s(o,a,f,m)},calc:function(r){const o=r*r,a=o*r;return i+e*r+t*o+n*a}}}const Ds=new z,Lr=new Qo,Dr=new Qo,Ir=new Qo;class ah extends nn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){const n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,u;this.closed||a>0?c=s[(a-1)%r]:(Ds.subVectors(s[0],s[1]).add(s[0]),c=Ds);const h=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Ds.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Ds),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Lr.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,g,_,p),Dr.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,g,_,p),Ir.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,g,_,p)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),Dr.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),Ir.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(Lr.calc(l),Dr.calc(l),Ir.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ga(i,e,t,n,s){const r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function lh(i,e){const t=1-i;return t*t*e}function ch(i,e){return 2*(1-i)*i*e}function uh(i,e){return i*i*e}function ji(i,e,t,n){return lh(i,e)+ch(i,t)+uh(i,n)}function hh(i,e){const t=1-i;return t*t*t*e}function dh(i,e){const t=1-i;return 3*t*t*i*e}function fh(i,e){return 3*(1-i)*i*i*e}function ph(i,e){return i*i*i*e}function Zi(i,e,t,n,s){return hh(i,e)+dh(i,t)+fh(i,n)+ph(i,s)}class uc extends nn{constructor(e=new ue,t=new ue,n=new ue,s=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(e,s.x,r.x,o.x,a.x),Zi(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mh extends nn{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){const n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Zi(e,s.x,r.x,o.x,a.x),Zi(e,s.y,r.y,o.y,a.y),Zi(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class hc extends nn{constructor(e=new ue,t=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ue){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _h extends nn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dc extends nn{constructor(e=new ue,t=new ue,n=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ue){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ji(e,s.x,r.x,o.x),ji(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gh extends nn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(ji(e,s.x,r.x,o.x),ji(e,s.y,r.y,o.y),ji(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fc extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ue){const n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(Ga(a,l.x,c.x,u.x,h.x),Ga(a,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ue().fromArray(s))}return this}}var Po=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:ah,CubicBezierCurve:uc,CubicBezierCurve3:mh,EllipseCurve:Jo,LineCurve:hc,LineCurve3:_h,QuadraticBezierCurve:dc,QuadraticBezierCurve3:gh,SplineCurve:fc});class vh extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Po[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Po[s.type]().fromJSON(s))}return this}}class Ai extends vh{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new hc(this.currentPoint.clone(),new ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new dc(this.currentPoint.clone(),new ue(e,t),new ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){const a=new uc(this.currentPoint.clone(),new ue(e,t),new ue(n,s),new ue(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new fc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){const c=new Jo(e,t,n,s,r,o,a,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class $i extends Ai{constructor(e){super(e),this.uuid=Ui(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Ai().fromJSON(s))}return this}}const xh={triangulate:function(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=pc(i,0,s,t,!0);const o=[];if(!r||r.next===r.prev)return o;let a,l,c,u,h,f,m;if(n&&(r=bh(i,e,r,t)),i.length>80*t){a=c=i[0],l=u=i[1];for(let g=t;g<s;g+=t)h=i[g],f=i[g+1],h<a&&(a=h),f<l&&(l=f),h>c&&(c=h),f>u&&(u=f);m=Math.max(c-a,u-l),m=m!==0?32767/m:0}return ts(r,o,t,a,l,m,0),o}};function pc(i,e,t,n,s){let r,o;if(s===Nh(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Wa(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Wa(r,i[r],i[r+1],o);return o&&ir(o,o.next)&&(is(o),o=o.next),o}function Kn(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ir(t,t.next)||at(t.prev,t,t.next)===0)){if(is(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ts(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Rh(i,n,s,r);let a=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?Sh(i,n,s,r):yh(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),is(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Mh(Kn(i),e,t),ts(i,e,t,n,s,r,2)):o===2&&Eh(i,e,t,n,s,r):ts(Kn(i),e,t,n,s,r,1);break}}}function yh(i){const e=i.prev,t=i,n=i.next;if(at(e,t,n)>=0)return!1;const s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=a<l?a<c?a:c:l<c?l:c,f=s>r?s>o?s:o:r>o?r:o,m=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=m&&yi(s,a,r,l,o,c,g.x,g.y)&&at(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sh(i,e,t,n){const s=i.prev,r=i,o=i.next;if(at(s,r,o)>=0)return!1;const a=s.x,l=r.x,c=o.x,u=s.y,h=r.y,f=o.y,m=a<l?a<c?a:c:l<c?l:c,g=u<h?u<f?u:f:h<f?h:f,_=a>l?a>c?a:c:l>c?l:c,p=u>h?u>f?u:f:h>f?h:f,d=Lo(m,g,e,t,n),R=Lo(_,p,e,t,n);let v=i.prevZ,x=i.nextZ;for(;v&&v.z>=d&&x&&x.z<=R;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&yi(a,u,l,h,c,f,v.x,v.y)&&at(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&yi(a,u,l,h,c,f,x.x,x.y)&&at(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=d;){if(v.x>=m&&v.x<=_&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&yi(a,u,l,h,c,f,v.x,v.y)&&at(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=R;){if(x.x>=m&&x.x<=_&&x.y>=g&&x.y<=p&&x!==s&&x!==o&&yi(a,u,l,h,c,f,x.x,x.y)&&at(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Mh(i,e,t){let n=i;do{const s=n.prev,r=n.next.next;!ir(s,r)&&mc(s,n,n.next,r)&&ns(s,r)&&ns(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),is(n),is(n.next),n=i=r),n=n.next}while(n!==i);return Kn(n)}function Eh(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Dh(o,a)){let l=_c(o,a);o=Kn(o,o.next),l=Kn(l,l.next),ts(o,e,t,n,s,r,0),ts(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function bh(i,e,t,n){const s=[];let r,o,a,l,c;for(r=0,o=e.length;r<o;r++)a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=pc(i,a,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Lh(c));for(s.sort(Th),r=0;r<s.length;r++)t=Ah(s[r],t);return t}function Th(i,e){return i.x-e.x}function Ah(i,e){const t=wh(i,e);if(!t)return e;const n=_c(t,i);return Kn(n,n.next),Kn(t,t.next)}function wh(i,e){let t=e,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;const a=s,l=s.x,c=s.y;let u=1/0,h;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&yi(o<c?r:n,o,l,c,o<c?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),ns(t,i)&&(h<u||h===u&&(t.x>s.x||t.x===s.x&&Ch(s,t)))&&(s=t,u=h)),t=t.next;while(t!==a);return s}function Ch(i,e){return at(i.prev,i,e.prev)<0&&at(e.next,i,i.next)<0}function Rh(i,e,t,n){let s=i;do s.z===0&&(s.z=Lo(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ph(s)}function Ph(i){let e,t,n,s,r,o,a,l,c=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,c*=2}while(o>1);return i}function Lo(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Lh(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yi(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Dh(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ih(i,e)&&(ns(i,e)&&ns(e,i)&&Uh(i,e)&&(at(i.prev,i,e.prev)||at(i,e.prev,e))||ir(i,e)&&at(i.prev,i,i.next)>0&&at(e.prev,e,e.next)>0)}function at(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ir(i,e){return i.x===e.x&&i.y===e.y}function mc(i,e,t,n){const s=Us(at(i,e,t)),r=Us(at(i,e,n)),o=Us(at(t,n,i)),a=Us(at(t,n,e));return!!(s!==r&&o!==a||s===0&&Is(i,t,e)||r===0&&Is(i,n,e)||o===0&&Is(t,i,n)||a===0&&Is(t,e,n))}function Is(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Us(i){return i>0?1:i<0?-1:0}function Ih(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&mc(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ns(i,e){return at(i.prev,i,i.next)<0?at(i,e,i.next)>=0&&at(i,i.prev,e)>=0:at(i,e,i.prev)<0||at(i,i.next,e)<0}function Uh(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function _c(i,e){const t=new Do(i.i,i.x,i.y),n=new Do(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Wa(i,e,t,n){const s=new Do(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function is(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Do(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Nh(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Yn{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return Yn.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];Xa(e),qa(n,e);let o=e.length;t.forEach(Xa);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,qa(n,t[l]);const a=xh.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Xa(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function qa(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class ea extends Nt{constructor(e=new $i([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ht(s,3)),this.setAttribute("uv",new ht(r,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:m-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const d=t.extrudePath,R=t.UVGenerator!==void 0?t.UVGenerator:Oh;let v,x=!1,N,D,P,O;d&&(v=d.getSpacedPoints(u),x=!0,f=!1,N=d.computeFrenetFrames(u,!1),D=new z,P=new z,O=new z),f||(p=0,m=0,g=0,_=0);const T=a.extractPoints(c);let M=T.shape;const F=T.holes;if(!Yn.isClockWise(M)){M=M.reverse();for(let j=0,q=F.length;j<q;j++){const y=F[j];Yn.isClockWise(y)&&(F[j]=y.reverse())}}const Y=Yn.triangulateShape(M,F),te=M;for(let j=0,q=F.length;j<q;j++){const y=F[j];M=M.concat(y)}function ae(j,q,y){return q||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(q,y)}const ne=M.length,Q=Y.length;function B(j,q,y){let ie,$,le;const U=j.x-q.x,C=j.y-q.y,re=y.x-j.x,A=y.y-j.y,S=U*U+C*C,W=U*A-C*re;if(Math.abs(W)>Number.EPSILON){const se=Math.sqrt(S),he=Math.sqrt(re*re+A*A),ce=q.x-C/se,De=q.y+U/se,ye=y.x-A/he,Te=y.y+re/he,Ve=((ye-ce)*A-(Te-De)*re)/(U*A-C*re);ie=ce+U*Ve-j.x,$=De+C*Ve-j.y;const ge=ie*ie+$*$;if(ge<=2)return new ue(ie,$);le=Math.sqrt(ge/2)}else{let se=!1;U>Number.EPSILON?re>Number.EPSILON&&(se=!0):U<-Number.EPSILON?re<-Number.EPSILON&&(se=!0):Math.sign(C)===Math.sign(A)&&(se=!0),se?(ie=-C,$=U,le=Math.sqrt(S)):(ie=U,$=C,le=Math.sqrt(S/2))}return new ue(ie/le,$/le)}const _e=[];for(let j=0,q=te.length,y=q-1,ie=j+1;j<q;j++,y++,ie++)y===q&&(y=0),ie===q&&(ie=0),_e[j]=B(te[j],te[y],te[ie]);const xe=[];let Me,Oe=_e.concat();for(let j=0,q=F.length;j<q;j++){const y=F[j];Me=[];for(let ie=0,$=y.length,le=$-1,U=ie+1;ie<$;ie++,le++,U++)le===$&&(le=0),U===$&&(U=0),Me[ie]=B(y[ie],y[le],y[U]);xe.push(Me),Oe=Oe.concat(Me)}for(let j=0;j<p;j++){const q=j/p,y=m*Math.cos(q*Math.PI/2),ie=g*Math.sin(q*Math.PI/2)+_;for(let $=0,le=te.length;$<le;$++){const U=ae(te[$],_e[$],ie);E(U.x,U.y,-y)}for(let $=0,le=F.length;$<le;$++){const U=F[$];Me=xe[$];for(let C=0,re=U.length;C<re;C++){const A=ae(U[C],Me[C],ie);E(A.x,A.y,-y)}}}const Ye=g+_;for(let j=0;j<ne;j++){const q=f?ae(M[j],Oe[j],Ye):M[j];x?(P.copy(N.normals[0]).multiplyScalar(q.x),D.copy(N.binormals[0]).multiplyScalar(q.y),O.copy(v[0]).add(P).add(D),E(O.x,O.y,O.z)):E(q.x,q.y,0)}for(let j=1;j<=u;j++)for(let q=0;q<ne;q++){const y=f?ae(M[q],Oe[q],Ye):M[q];x?(P.copy(N.normals[j]).multiplyScalar(y.x),D.copy(N.binormals[j]).multiplyScalar(y.y),O.copy(v[j]).add(P).add(D),E(O.x,O.y,O.z)):E(y.x,y.y,h/u*j)}for(let j=p-1;j>=0;j--){const q=j/p,y=m*Math.cos(q*Math.PI/2),ie=g*Math.sin(q*Math.PI/2)+_;for(let $=0,le=te.length;$<le;$++){const U=ae(te[$],_e[$],ie);E(U.x,U.y,h+y)}for(let $=0,le=F.length;$<le;$++){const U=F[$];Me=xe[$];for(let C=0,re=U.length;C<re;C++){const A=ae(U[C],Me[C],ie);x?E(A.x,A.y+v[u-1].y,v[u-1].x+y):E(A.x,A.y,h+y)}}}I(),L();function I(){const j=s.length/3;if(f){let q=0,y=ne*q;for(let ie=0;ie<Q;ie++){const $=Y[ie];Z($[2]+y,$[1]+y,$[0]+y)}q=u+p*2,y=ne*q;for(let ie=0;ie<Q;ie++){const $=Y[ie];Z($[0]+y,$[1]+y,$[2]+y)}}else{for(let q=0;q<Q;q++){const y=Y[q];Z(y[2],y[1],y[0])}for(let q=0;q<Q;q++){const y=Y[q];Z(y[0]+ne*u,y[1]+ne*u,y[2]+ne*u)}}n.addGroup(j,s.length/3-j,0)}function L(){const j=s.length/3;let q=0;w(te,q),q+=te.length;for(let y=0,ie=F.length;y<ie;y++){const $=F[y];w($,q),q+=$.length}n.addGroup(j,s.length/3-j,1)}function w(j,q){let y=j.length;for(;--y>=0;){const ie=y;let $=y-1;$<0&&($=j.length-1);for(let le=0,U=u+p*2;le<U;le++){const C=ne*le,re=ne*(le+1),A=q+ie+C,S=q+$+C,W=q+$+re,se=q+ie+re;fe(A,S,W,se)}}}function E(j,q,y){l.push(j),l.push(q),l.push(y)}function Z(j,q,y){V(j),V(q),V(y);const ie=s.length/3,$=R.generateTopUV(n,s,ie-3,ie-2,ie-1);me($[0]),me($[1]),me($[2])}function fe(j,q,y,ie){V(j),V(q),V(ie),V(q),V(y),V(ie);const $=s.length/3,le=R.generateSideWallUV(n,s,$-6,$-3,$-2,$-1);me(le[0]),me(le[1]),me(le[3]),me(le[1]),me(le[2]),me(le[3])}function V(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function me(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Fh(t,n,e)}static fromJSON(e,t){const n=[];for(let r=0,o=e.shapes.length;r<o;r++){const a=t[e.shapes[r]];n.push(a)}const s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Po[s.type]().fromJSON(s)),new ea(n,e.options)}}const Oh={generateTopUV:function(i,e,t,n,s){const r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ue(r,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[s*3],m=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],d=e[r*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-h),new ue(f,1-g),new ue(_,1-d)]:[new ue(a,1-l),new ue(u,1-h),new ue(m,1-g),new ue(p,1-d)]}};function Fh(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class ls extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],g=[],_=[],p=[];for(let d=0;d<u;d++){const R=d*f-o;for(let v=0;v<c;v++){const x=v*h-r;g.push(x,-R,0),_.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let R=0;R<a;R++){const v=R+c*d,x=R+c*(d+1),N=R+1+c*(d+1),D=R+1+c*d;m.push(v,x,D),m.push(x,N,D)}this.setIndex(m),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(_,3)),this.setAttribute("uv",new ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class ta extends Nt{constructor(e=1,t=.4,n=64,s=8,r=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:o},n=Math.floor(n),s=Math.floor(s);const a=[],l=[],c=[],u=[],h=new z,f=new z,m=new z,g=new z,_=new z,p=new z,d=new z;for(let v=0;v<=n;++v){const x=v/n*r*Math.PI*2;R(x,r,o,e,m),R(x+.01,r,o,e,g),p.subVectors(g,m),d.addVectors(g,m),_.crossVectors(p,d),d.crossVectors(_,p),_.normalize(),d.normalize();for(let N=0;N<=s;++N){const D=N/s*Math.PI*2,P=-t*Math.cos(D),O=t*Math.sin(D);h.x=m.x+(P*d.x+O*_.x),h.y=m.y+(P*d.y+O*_.y),h.z=m.z+(P*d.z+O*_.z),l.push(h.x,h.y,h.z),f.subVectors(h,m).normalize(),c.push(f.x,f.y,f.z),u.push(v/n),u.push(N/s)}}for(let v=1;v<=n;v++)for(let x=1;x<=s;x++){const N=(s+1)*(v-1)+(x-1),D=(s+1)*v+(x-1),P=(s+1)*v+x,O=(s+1)*(v-1)+x;a.push(N,D,O),a.push(D,P,O)}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(u,2));function R(v,x,N,D,P){const O=Math.cos(v),T=Math.sin(v),M=N/x*v,F=Math.cos(M);P.x=D*(2+F)*.5*O,P.y=D*(2+F)*T*.5,P.z=D*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Bh extends os{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zh extends os{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Js={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kh{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],g=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Hh=new kh;class cs{constructor(e){this.manager=e!==void 0?e:Hh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const un={};class Vh extends Error{constructor(e,t){super(e),this.response=t}}let Gh=class extends cs{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Js.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:s});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=un[e],h=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,g=m!==0;let _=0;const p=new ReadableStream({start(d){R();function R(){h.read().then(({done:v,value:x})=>{if(v)d.close();else{_+=x.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:m});for(let D=0,P=u.length;D<P;D++){const O=u[D];O.onProgress&&O.onProgress(N)}d.enqueue(x),R()}},v=>{d.error(v)})}}});return new Response(p)}else throw new Vh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Js.add(e,c);const u=un[e];delete un[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=un[e];if(u===void 0)throw this.manager.itemError(e),c;delete un[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};class Wh extends cs{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Js.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=es("img");function l(){u(),Js.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Xh extends cs{constructor(e){super(e)}load(e,t,n,s){const r=new At,o=new Wh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class gc extends yt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Ur=new ot,Ya=new z,ja=new z;class qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $o,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ya.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ya),ja.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ja),t.updateMatrixWorld(),Ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vc extends oc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yh extends qh{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Za extends gc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yt.DEFAULT_UP),this.updateMatrix(),this.target=new yt,this.shadow=new Yh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class jh extends gc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zh extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class $h{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=$a(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=$a();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function $a(){return performance.now()}class Ka{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ja=new ue;class Kh{constructor(e=new ue(1/0,1/0),t=new ue(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ja.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ja).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class Jh extends lc{constructor(e=10,t=10,n=4473924,s=8947848){n=new ke(n),s=new ke(s);const r=t/2,o=e/t,a=e/2,l=[],c=[];for(let f=0,m=0,g=-a;f<=t;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?n:s;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const u=new Nt;u.setAttribute("position",new ht(l,3)),u.setAttribute("color",new ht(c,3));const h=new Ko({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Qh extends lc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new Nt;s.setAttribute("position",new ht(t,3)),s.setAttribute("color",new ht(n,3));const r=new Ko({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(e,t,n){const s=new ke,r=this.geometry.attributes.color.array;return s.set(e),s.toArray(r,0),s.toArray(r,3),s.set(t),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Bn{constructor(){this.type="ShapePath",this.color=new ke,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new Ai,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,s){return this.currentPath.quadraticCurveTo(e,t,n,s),this}bezierCurveTo(e,t,n,s,r,o){return this.currentPath.bezierCurveTo(e,t,n,s,r,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(d){const R=[];for(let v=0,x=d.length;v<x;v++){const N=d[v],D=new $i;D.curves=N.curves,R.push(D)}return R}function n(d,R){const v=R.length;let x=!1;for(let N=v-1,D=0;D<v;N=D++){let P=R[N],O=R[D],T=O.x-P.x,M=O.y-P.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(P=R[D],T=-T,O=R[N],M=-M),d.y<P.y||d.y>O.y)continue;if(d.y===P.y){if(d.x===P.x)return!0}else{const F=M*(d.x-P.x)-T*(d.y-P.y);if(F===0)return!0;if(F<0)continue;x=!x}}else{if(d.y!==P.y)continue;if(O.x<=d.x&&d.x<=P.x||P.x<=d.x&&d.x<=O.x)return!0}}return x}const s=Yn.isClockWise,r=this.subPaths;if(r.length===0)return[];let o,a,l;const c=[];if(r.length===1)return a=r[0],l=new $i,l.curves=a.curves,c.push(l),c;let u=!s(r[0].getPoints());u=e?!u:u;const h=[],f=[];let m=[],g=0,_;f[g]=void 0,m[g]=[];for(let d=0,R=r.length;d<R;d++)a=r[d],_=a.getPoints(),o=s(_),o=e?!o:o,o?(!u&&f[g]&&g++,f[g]={s:new $i,p:_},f[g].s.curves=a.curves,u&&g++,m[g]=[]):m[g].push({h:a,p:_[0]});if(!f[0])return t(r);if(f.length>1){let d=!1,R=0;for(let v=0,x=f.length;v<x;v++)h[v]=[];for(let v=0,x=f.length;v<x;v++){const N=m[v];for(let D=0;D<N.length;D++){const P=N[D];let O=!0;for(let T=0;T<f.length;T++)n(P.p,f[T].p)&&(v!==T&&R++,O?(O=!1,h[T].push(P)):d=!0);O&&h[v].push(P)}}R>0&&d===!1&&(m=h)}let p;for(let d=0,R=f.length;d<R;d++){l=f[d].s,c.push(l),p=m[d];for(let v=0,x=p.length;v<x;v++)l.holes.push(p[v].h)}return c}}class ed extends Jn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Qa(i,e,t,n){const s=td(n);switch(t){case Gl:return i*e;case Xl:return i*e;case ql:return i*e*2;case Yl:return i*e/s.components*s.byteLength;case qo:return i*e/s.components*s.byteLength;case jl:return i*e*2/s.components*s.byteLength;case Yo:return i*e*2/s.components*s.byteLength;case Wl:return i*e*3/s.components*s.byteLength;case Yt:return i*e*4/s.components*s.byteLength;case jo:return i*e*4/s.components*s.byteLength;case Hs:case Vs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case io:case ro:return Math.max(i,16)*Math.max(e,8)/4;case no:case so:return Math.max(i,8)*Math.max(e,8)/2;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Xs:case bo:case To:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zl:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*8;case wo:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function td(i){switch(i){case mn:case kl:return{byteLength:1,components:1};case Qi:case Hl:case rs:return{byteLength:2,components:1};case Wo:case Xo:return{byteLength:2,components:4};case jn:case Go:case dn:return{byteLength:4,components:1};case Vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xc(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function nd(i){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,g)=>m.start-g.start);let f=0;for(let m=1;m<h.length;m++){const g=h[f],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,od=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ad=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ld=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,dd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,md=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_d=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ad=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ld=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Id="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Od=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Hd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$d=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ef=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,af=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,df=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ff=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,mf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_f=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Af=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,If=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$f=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Kf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Jf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,up=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Np=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:id,alphahash_pars_fragment:sd,alphamap_fragment:rd,alphamap_pars_fragment:od,alphatest_fragment:ad,alphatest_pars_fragment:ld,aomap_fragment:cd,aomap_pars_fragment:ud,batching_pars_vertex:hd,batching_vertex:dd,begin_vertex:fd,beginnormal_vertex:pd,bsdfs:md,iridescence_fragment:_d,bumpmap_pars_fragment:gd,clipping_planes_fragment:vd,clipping_planes_pars_fragment:xd,clipping_planes_pars_vertex:yd,clipping_planes_vertex:Sd,color_fragment:Md,color_pars_fragment:Ed,color_pars_vertex:bd,color_vertex:Td,common:Ad,cube_uv_reflection_fragment:wd,defaultnormal_vertex:Cd,displacementmap_pars_vertex:Rd,displacementmap_vertex:Pd,emissivemap_fragment:Ld,emissivemap_pars_fragment:Dd,colorspace_fragment:Id,colorspace_pars_fragment:Ud,envmap_fragment:Nd,envmap_common_pars_fragment:Od,envmap_pars_fragment:Fd,envmap_pars_vertex:Bd,envmap_physical_pars_fragment:Zd,envmap_vertex:zd,fog_vertex:kd,fog_pars_vertex:Hd,fog_fragment:Vd,fog_pars_fragment:Gd,gradientmap_pars_fragment:Wd,lightmap_pars_fragment:Xd,lights_lambert_fragment:qd,lights_lambert_pars_fragment:Yd,lights_pars_begin:jd,lights_toon_fragment:$d,lights_toon_pars_fragment:Kd,lights_phong_fragment:Jd,lights_phong_pars_fragment:Qd,lights_physical_fragment:ef,lights_physical_pars_fragment:tf,lights_fragment_begin:nf,lights_fragment_maps:sf,lights_fragment_end:rf,logdepthbuf_fragment:of,logdepthbuf_pars_fragment:af,logdepthbuf_pars_vertex:lf,logdepthbuf_vertex:cf,map_fragment:uf,map_pars_fragment:hf,map_particle_fragment:df,map_particle_pars_fragment:ff,metalnessmap_fragment:pf,metalnessmap_pars_fragment:mf,morphinstance_vertex:_f,morphcolor_vertex:gf,morphnormal_vertex:vf,morphtarget_pars_vertex:xf,morphtarget_vertex:yf,normal_fragment_begin:Sf,normal_fragment_maps:Mf,normal_pars_fragment:Ef,normal_pars_vertex:bf,normal_vertex:Tf,normalmap_pars_fragment:Af,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Rf,iridescence_pars_fragment:Pf,opaque_fragment:Lf,packing:Df,premultiplied_alpha_fragment:If,project_vertex:Uf,dithering_fragment:Nf,dithering_pars_fragment:Of,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:Bf,shadowmap_pars_fragment:zf,shadowmap_pars_vertex:kf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Vf,skinbase_vertex:Gf,skinning_pars_vertex:Wf,skinning_vertex:Xf,skinnormal_vertex:qf,specularmap_fragment:Yf,specularmap_pars_fragment:jf,tonemapping_fragment:Zf,tonemapping_pars_fragment:$f,transmission_fragment:Kf,transmission_pars_fragment:Jf,uv_pars_fragment:Qf,uv_pars_vertex:ep,uv_vertex:tp,worldpos_vertex:np,background_vert:ip,background_frag:sp,backgroundCube_vert:rp,backgroundCube_frag:op,cube_vert:ap,cube_frag:lp,depth_vert:cp,depth_frag:up,distanceRGBA_vert:hp,distanceRGBA_frag:dp,equirect_vert:fp,equirect_frag:pp,linedashed_vert:mp,linedashed_frag:_p,meshbasic_vert:gp,meshbasic_frag:vp,meshlambert_vert:xp,meshlambert_frag:yp,meshmatcap_vert:Sp,meshmatcap_frag:Mp,meshnormal_vert:Ep,meshnormal_frag:bp,meshphong_vert:Tp,meshphong_frag:Ap,meshphysical_vert:wp,meshphysical_frag:Cp,meshtoon_vert:Rp,meshtoon_frag:Pp,points_vert:Lp,points_frag:Dp,shadow_vert:Ip,shadow_frag:Up,sprite_vert:Np,sprite_frag:Op},Se={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Jt={basic:{uniforms:Tt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Tt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Tt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Tt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Tt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new ke(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Tt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Tt([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Tt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Tt([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Tt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Tt([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Tt([Se.common,Se.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Tt([Se.lights,Se.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Jt.physical={uniforms:Tt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ns={r:0,b:0,g:0},zn=new _n,Fp=new ot;function Bp(i,e,t,n,s,r,o){const a=new ke(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function _(v){let x=!1;const N=g(v);N===null?d(a,l):N&&N.isColor&&(d(N,1),x=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,x){const N=g(x);N&&(N.isCubeTexture||N.mapping===tr)?(u===void 0&&(u=new kt(new as(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:Ii(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(D,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),zn.copy(x.backgroundRotation),zn.x*=-1,zn.y*=-1,zn.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),u.material.uniforms.envMap.value=N,u.material.uniforms.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fp.makeRotationFromEuler(zn)),u.material.toneMapped=Ke.getTransfer(N.colorSpace)!==tt,(h!==N||f!==N.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=N,f=N.version,m=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):N&&N.isTexture&&(c===void 0&&(c=new kt(new ls(2,2),new gn({name:"BackgroundMaterial",uniforms:Ii(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=N,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(N.colorSpace)!==tt,N.matrixAutoUpdate===!0&&N.updateMatrix(),c.material.uniforms.uvTransform.value.copy(N.matrix),(h!==N||f!==N.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=N,f=N.version,m=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,x){v.getRGB(Ns,rc(i)),n.buffers.color.setClear(Ns.r,Ns.g,Ns.b,x,o)}function R(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,x=1){a.set(v),l=x,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:_,addToRenderList:p,dispose:R}}function zp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(M,F,X,Y,te){let ae=!1;const ne=h(Y,X,F);r!==ne&&(r=ne,c(r.object)),ae=m(M,Y,X,te),ae&&g(M,Y,X,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(ae||o)&&(o=!1,x(M,F,X,Y),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,F,X){const Y=X.wireframe===!0;let te=n[M.id];te===void 0&&(te={},n[M.id]=te);let ae=te[F.id];ae===void 0&&(ae={},te[F.id]=ae);let ne=ae[Y];return ne===void 0&&(ne=f(l()),ae[Y]=ne),ne}function f(M){const F=[],X=[],Y=[];for(let te=0;te<t;te++)F[te]=0,X[te]=0,Y[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:X,attributeDivisors:Y,object:M,attributes:{},index:null}}function m(M,F,X,Y){const te=r.attributes,ae=F.attributes;let ne=0;const Q=X.getAttributes();for(const B in Q)if(Q[B].location>=0){const xe=te[B];let Me=ae[B];if(Me===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),xe===void 0||xe.attribute!==Me||Me&&xe.data!==Me.data)return!0;ne++}return r.attributesNum!==ne||r.index!==Y}function g(M,F,X,Y){const te={},ae=F.attributes;let ne=0;const Q=X.getAttributes();for(const B in Q)if(Q[B].location>=0){let xe=ae[B];xe===void 0&&(B==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),B==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor));const Me={};Me.attribute=xe,xe&&xe.data&&(Me.data=xe.data),te[B]=Me,ne++}r.attributes=te,r.attributesNum=ne,r.index=Y}function _(){const M=r.newAttributes;for(let F=0,X=M.length;F<X;F++)M[F]=0}function p(M){d(M,0)}function d(M,F){const X=r.newAttributes,Y=r.enabledAttributes,te=r.attributeDivisors;X[M]=1,Y[M]===0&&(i.enableVertexAttribArray(M),Y[M]=1),te[M]!==F&&(i.vertexAttribDivisor(M,F),te[M]=F)}function R(){const M=r.newAttributes,F=r.enabledAttributes;for(let X=0,Y=F.length;X<Y;X++)F[X]!==M[X]&&(i.disableVertexAttribArray(X),F[X]=0)}function v(M,F,X,Y,te,ae,ne){ne===!0?i.vertexAttribIPointer(M,F,X,te,ae):i.vertexAttribPointer(M,F,X,Y,te,ae)}function x(M,F,X,Y){_();const te=Y.attributes,ae=X.getAttributes(),ne=F.defaultAttributeValues;for(const Q in ae){const B=ae[Q];if(B.location>=0){let _e=te[Q];if(_e===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),_e!==void 0){const xe=_e.normalized,Me=_e.itemSize,Oe=e.get(_e);if(Oe===void 0)continue;const Ye=Oe.buffer,I=Oe.type,L=Oe.bytesPerElement,w=I===i.INT||I===i.UNSIGNED_INT||_e.gpuType===Go;if(_e.isInterleavedBufferAttribute){const E=_e.data,Z=E.stride,fe=_e.offset;if(E.isInstancedInterleavedBuffer){for(let V=0;V<B.locationSize;V++)d(B.location+V,E.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=E.meshPerAttribute*E.count)}else for(let V=0;V<B.locationSize;V++)p(B.location+V);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let V=0;V<B.locationSize;V++)v(B.location+V,Me/B.locationSize,I,xe,Z*L,(fe+Me/B.locationSize*V)*L,w)}else{if(_e.isInstancedBufferAttribute){for(let E=0;E<B.locationSize;E++)d(B.location+E,_e.meshPerAttribute);M.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let E=0;E<B.locationSize;E++)p(B.location+E);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let E=0;E<B.locationSize;E++)v(B.location+E,Me/B.locationSize,I,xe,Me*L,Me/B.locationSize*E*L,w)}}else if(ne!==void 0){const xe=ne[Q];if(xe!==void 0)switch(xe.length){case 2:i.vertexAttrib2fv(B.location,xe);break;case 3:i.vertexAttrib3fv(B.location,xe);break;case 4:i.vertexAttrib4fv(B.location,xe);break;default:i.vertexAttrib1fv(B.location,xe)}}}}R()}function N(){O();for(const M in n){const F=n[M];for(const X in F){const Y=F[X];for(const te in Y)u(Y[te].object),delete Y[te];delete F[X]}delete n[M]}}function D(M){if(n[M.id]===void 0)return;const F=n[M.id];for(const X in F){const Y=F[X];for(const te in Y)u(Y[te].object),delete Y[te];delete F[X]}delete n[M.id]}function P(M){for(const F in n){const X=n[F];if(X[M.id]===void 0)continue;const Y=X[M.id];for(const te in Y)u(Y[te].object),delete Y[te];delete X[M.id]}}function O(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:O,resetDefaultState:T,dispose:N,releaseStatesOfGeometry:D,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:R}}function kp(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function l(c,u,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Hp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Yt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const O=P===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==dn&&!O)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:R,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:N,maxSamples:D}}function Vp(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new bn,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||n!==0||s;return s=f,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const g=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,d=i.get(h);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const R=r?0:n,v=R*4;let x=d.clippingState||null;l.value=x,x=u(g,f,v,m);for(let N=0;N!==v;++N)x[N]=t[N];d.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,m,g){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const d=m+_*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,x=m;v!==_;++v,x+=4)o.copy(h[v]).applyMatrix4(R,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Gp(i){let e=new WeakMap;function t(o,a){return a===Jr?o.mapping=Ci:a===Qr&&(o.mapping=Ri),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Jr||a===Qr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new eh(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Si=4,el=[.125,.215,.35,.446,.526,.582],Gn=20,Nr=new vc,tl=new ke;let Or=null,Fr=0,Br=0,zr=!1;const Hn=(1+Math.sqrt(5))/2,mi=1/Hn,nl=[new z(-Hn,mi,0),new z(Hn,mi,0),new z(-mi,0,Hn),new z(mi,0,Hn),new z(0,Hn,-mi),new z(0,Hn,mi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Or=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Or,Fr,Br),this._renderer.xr.enabled=zr,e.scissorTest=!1,Os(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ci||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Or=this._renderer.getRenderTarget(),Fr=this._renderer.getActiveCubeFace(),Br=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:rs,format:Yt,colorSpace:Di,depthBuffer:!1},s=sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sl(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wp(r)),this._blurMaterial=Xp(r,e,t)}return s}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,n,s){const a=new zt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(tl),u.toneMapping=wn,u.autoClear=!1;const m=new nc({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new kt(new as,m);let _=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,_=!0):(m.color.copy(tl),_=!0);for(let d=0;d<6;d++){const R=d%3;R===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):R===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;Os(s,R*v,d>2?v:0,v,v),u.setRenderTarget(s),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ci||e.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new kt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Os(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Nr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=nl[(s-r-1)%nl.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new kt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Gn-1),_=r/g,p=isFinite(r)?1+Math.floor(u*_):Gn;p>Gn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const d=[];let R=0;for(let P=0;P<Gn;++P){const O=P/_,T=Math.exp(-O*O/2);d.push(T),P===0?R+=T:P<p&&(R+=2*T)}for(let P=0;P<d.length;P++)d[P]=d[P]/R;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const x=this._sizeLods[s],N=3*x*(s>v-Si?s-v+Si:0),D=4*(this._cubeSize-x);Os(t,N,D,3*x,2*x),l.setRenderTarget(t),l.render(h,Nr)}}function Wp(i){const e=[],t=[],n=[];let s=i;const r=i-Si+1+el.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Si?l=el[o-i+Si-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,_=3,p=2,d=1,R=new Float32Array(_*g*m),v=new Float32Array(p*g*m),x=new Float32Array(d*g*m);for(let D=0;D<m;D++){const P=D%3*2/3-1,O=D>2?0:-1,T=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];R.set(T,_*g*D),v.set(f,p*g*D);const M=[D,D,D,D,D,D];x.set(M,d*g*D)}const N=new Nt;N.setAttribute("position",new tn(R,_)),N.setAttribute("uv",new tn(v,p)),N.setAttribute("faceIndex",new tn(x,d)),e.push(N),s>Si&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function sl(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=tr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Os(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xp(i,e,t){const n=new Float32Array(Gn),s=new z(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function rl(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function ol(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:An,depthTest:!1,depthWrite:!1})}function na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qp(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Jr||l===Qr,u=l===Ci||l===Ri;if(c||u){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new il(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(t===null&&(t=new il(i)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&_i("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jp(i,e,t,n){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const R=m.array;_=m.version;for(let v=0,x=R.length;v<x;v+=3){const N=R[v+0],D=R[v+1],P=R[v+2];f.push(N,D,D,P,P,N)}}else if(g!==void 0){const R=g.array;_=g.version;for(let v=0,x=R.length/3-1;v<x;v+=3){const N=v+0,D=v+1,P=v+2;f.push(N,D,D,P,P,N)}}else return;const p=new(Kl(f)?sc:ic)(f,1);p.version=_;const d=r.get(h);d&&e.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Zp(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,m){i.drawElements(n,m,r,f*o),t.update(m,n,1)}function c(f,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,f*o,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,f,0,g);let p=0;for(let d=0;d<g;d++)p+=m[d];t.update(p,n,1)}function h(f,m,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<f.length;d++)c(f[d]/o,m[d],_[d]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,f,0,_,0,g);let d=0;for(let R=0;R<g;R++)d+=m[R]*_[R];t.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function $p(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Kp(i,e,t){const n=new WeakMap,s=new ut;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(a);if(f===void 0||f.count!==h){let M=function(){O.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var m=M;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],R=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),p===!0&&(x=3);let N=a.attributes.position.count*x,D=1;N>e.maxTextureSize&&(D=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const P=new Float32Array(N*D*4*h),O=new Ql(P,N,D,h);O.type=dn,O.needsUpdate=!0;const T=x*4;for(let F=0;F<h;F++){const X=d[F],Y=R[F],te=v[F],ae=N*D*4*F;for(let ne=0;ne<X.count;ne++){const Q=ne*T;g===!0&&(s.fromBufferAttribute(X,ne),P[ae+Q+0]=s.x,P[ae+Q+1]=s.y,P[ae+Q+2]=s.z,P[ae+Q+3]=0),_===!0&&(s.fromBufferAttribute(Y,ne),P[ae+Q+4]=s.x,P[ae+Q+5]=s.y,P[ae+Q+6]=s.z,P[ae+Q+7]=0),p===!0&&(s.fromBufferAttribute(te,ne),P[ae+Q+8]=s.x,P[ae+Q+9]=s.y,P[ae+Q+10]=s.z,P[ae+Q+11]=te.itemSize===4?s.w:1)}}f={count:h,texture:O,size:new ue(N,D)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Jp(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}const yc=new At,al=new cc(1,1),Sc=new Ql,Mc=new Fu,Ec=new ac,ll=[],cl=[],ul=new Float32Array(16),hl=new Float32Array(9),dl=new Float32Array(4);function Ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=ll[s];if(r===void 0&&(r=new Float32Array(s),ll[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function mt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sr(i,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function im(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;dl.set(n),i.uniformMatrix2fv(this.addr,!1,dl),_t(t,n)}}function sm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;hl.set(n),i.uniformMatrix3fv(this.addr,!1,hl),_t(t,n)}}function rm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(mt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(mt(t,n))return;ul.set(n),i.uniformMatrix4fv(this.addr,!1,ul),_t(t,n)}}function om(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function lm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(al.compareFunction=$l,r=al):r=yc,t.setTexture2D(e||r,s)}function mm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Mc,s)}function _m(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ec,s)}function gm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sc,s)}function vm(i){switch(i){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return sm;case 35676:return rm;case 5124:case 35670:return om;case 35667:case 35671:return am;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return um;case 36294:return hm;case 36295:return dm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return gm}}function xm(i,e){i.uniform1fv(this.addr,e)}function ym(i,e){const t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function Sm(i,e){const t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function Mm(i,e){const t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function Em(i,e){const t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function bm(i,e){const t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tm(i,e){const t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Am(i,e){i.uniform1iv(this.addr,e)}function wm(i,e){i.uniform2iv(this.addr,e)}function Cm(i,e){i.uniform3iv(this.addr,e)}function Rm(i,e){i.uniform4iv(this.addr,e)}function Pm(i,e){i.uniform1uiv(this.addr,e)}function Lm(i,e){i.uniform2uiv(this.addr,e)}function Dm(i,e){i.uniform3uiv(this.addr,e)}function Im(i,e){i.uniform4uiv(this.addr,e)}function Um(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||yc,r[o])}function Nm(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Mc,r[o])}function Om(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Ec,r[o])}function Fm(i,e,t){const n=this.cache,s=e.length,r=sr(t,s);mt(n,r)||(i.uniform1iv(this.addr,r),_t(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Sc,r[o])}function Bm(i){switch(i){case 5126:return xm;case 35664:return ym;case 35665:return Sm;case 35666:return Mm;case 35674:return Em;case 35675:return bm;case 35676:return Tm;case 5124:case 35670:return Am;case 35667:case 35671:return wm;case 35668:case 35672:return Cm;case 35669:case 35673:return Rm;case 5125:return Pm;case 36294:return Lm;case 36295:return Dm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Fm}}class zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=vm(t.type)}}class km{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bm(t.type)}}class Hm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function fl(i,e){i.seq.push(e),i.map[e.id]=e}function Vm(i,e,t){const n=i.name,s=n.length;for(kr.lastIndex=0;;){const r=kr.exec(n),o=kr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){fl(t,c===void 0?new zm(a,i,e):new km(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new Hm(a),fl(t,h)),t=h}}}class Ys{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Vm(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function pl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gm=37297;let Wm=0;function Xm(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const ml=new Be;function qm(i){Ke._getMatrix(ml,Ke.workingColorSpace,i);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(i)){case js:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function _l(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Xm(i.getShaderSource(e),o)}else return s}function Ym(i,e){const t=qm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jm(i,e){let t;switch(e){case au:t="Linear";break;case lu:t="Reinhard";break;case cu:t="Cineon";break;case uu:t="ACESFilmic";break;case du:t="AgX";break;case fu:t="Neutral";break;case hu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fs=new z;function Zm(){Ke.getLuminanceCoefficients(Fs);const i=Fs.x.toFixed(4),e=Fs.y.toFixed(4),t=Fs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function Km(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function qi(i){return i!==""}function gl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Io(i){return i.replace(Qm,t_)}const e_=new Map;function t_(i,e){let t=Xe[e];if(t===void 0){const n=e_.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Io(t)}const n_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(i){return i.replace(n_,i_)}function i_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function s_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function r_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ci:case Ri:e="ENVMAP_TYPE_CUBE";break;case tr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o_(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ri:e="ENVMAP_MODE_REFRACTION";break}return e}function a_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bl:e="ENVMAP_BLENDING_MULTIPLY";break;case ru:e="ENVMAP_BLENDING_MIX";break;case ou:e="ENVMAP_BLENDING_ADD";break}return e}function l_(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function c_(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=s_(t),c=r_(t),u=o_(t),h=a_(t),f=l_(t),m=$m(t),g=Km(r),_=s.createProgram();let p,d,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qi).join(`
`),d.length>0&&(d+=`
`)):(p=[yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),d=[yl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==wn?jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Ym("linearToOutputTexel",t.outputColorSpace),Zm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qi).join(`
`)),o=Io(o),o=gl(o,t),o=vl(o,t),a=Io(a),a=gl(a,t),a=vl(a,t),o=xl(o),a=xl(a),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Sa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=R+p+o,x=R+d+a,N=pl(s,s.VERTEX_SHADER,v),D=pl(s,s.FRAGMENT_SHADER,x);s.attachShader(_,N),s.attachShader(_,D),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(F){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(_).trim(),Y=s.getShaderInfoLog(N).trim(),te=s.getShaderInfoLog(D).trim();let ae=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ae=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,N,D);else{const Q=_l(s,N,"vertex"),B=_l(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+Q+`
`+B)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(Y===""||te==="")&&(ne=!1);ne&&(F.diagnostics={runnable:ae,programLog:X,vertexShader:{log:Y,prefix:p},fragmentShader:{log:te,prefix:d}})}s.deleteShader(N),s.deleteShader(D),O=new Ys(s,_),T=Jm(s,_)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,Gm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wm++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=D,this}let u_=0;class h_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new d_(e),t.set(e,n)),n}}class d_{constructor(e){this.id=u_++,this.code=e,this.usedTimes=0}}function f_(i,e,t,n,s,r,o){const a=new ec,l=new h_,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,M,F,X,Y){const te=X.fog,ae=Y.geometry,ne=T.isMeshStandardMaterial?X.environment:null,Q=(T.isMeshStandardMaterial?t:e).get(T.envMap||ne),B=Q&&Q.mapping===tr?Q.image.height:null,_e=g[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const xe=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Me=xe!==void 0?xe.length:0;let Oe=0;ae.morphAttributes.position!==void 0&&(Oe=1),ae.morphAttributes.normal!==void 0&&(Oe=2),ae.morphAttributes.color!==void 0&&(Oe=3);let Ye,I,L,w;if(_e){const et=Jt[_e];Ye=et.vertexShader,I=et.fragmentShader}else Ye=T.vertexShader,I=T.fragmentShader,l.update(T),L=l.getVertexShaderID(T),w=l.getFragmentShaderID(T);const E=i.getRenderTarget(),Z=i.state.buffers.depth.getReversed(),fe=Y.isInstancedMesh===!0,V=Y.isBatchedMesh===!0,me=!!T.map,j=!!T.matcap,q=!!Q,y=!!T.aoMap,ie=!!T.lightMap,$=!!T.bumpMap,le=!!T.normalMap,U=!!T.displacementMap,C=!!T.emissiveMap,re=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,W=T.clearcoat>0,se=T.dispersion>0,he=T.iridescence>0,ce=T.sheen>0,De=T.transmission>0,ye=S&&!!T.anisotropyMap,Te=W&&!!T.clearcoatMap,Ve=W&&!!T.clearcoatNormalMap,ge=W&&!!T.clearcoatRoughnessMap,Ce=he&&!!T.iridescenceMap,Ue=he&&!!T.iridescenceThicknessMap,Fe=ce&&!!T.sheenColorMap,Pe=ce&&!!T.sheenRoughnessMap,je=!!T.specularMap,We=!!T.specularColorMap,it=!!T.specularIntensityMap,k=De&&!!T.transmissionMap,Ee=De&&!!T.thicknessMap,oe=!!T.gradientMap,pe=!!T.alphaMap,we=T.alphaTest>0,Ae=!!T.alphaHash,Ge=!!T.extensions;let lt=wn;T.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(lt=i.toneMapping);const St={shaderID:_e,shaderType:T.type,shaderName:T.name,vertexShader:Ye,fragmentShader:I,defines:T.defines,customVertexShaderID:L,customFragmentShaderID:w,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:V,batchingColor:V&&Y._colorsTexture!==null,instancing:fe,instancingColor:fe&&Y.instanceColor!==null,instancingMorph:fe&&Y.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:E===null?i.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Di,alphaToCoverage:!!T.alphaToCoverage,map:me,matcap:j,envMap:q,envMapMode:q&&Q.mapping,envMapCubeUVHeight:B,aoMap:y,lightMap:ie,bumpMap:$,normalMap:le,displacementMap:f&&U,emissiveMap:C,normalMapObjectSpace:le&&T.normalMapType===vu,normalMapTangentSpace:le&&T.normalMapType===gu,metalnessMap:re,roughnessMap:A,anisotropy:S,anisotropyMap:ye,clearcoat:W,clearcoatMap:Te,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ge,dispersion:se,iridescence:he,iridescenceMap:Ce,iridescenceThicknessMap:Ue,sheen:ce,sheenColorMap:Fe,sheenRoughnessMap:Pe,specularMap:je,specularColorMap:We,specularIntensityMap:it,transmission:De,transmissionMap:k,thicknessMap:Ee,gradientMap:oe,opaque:T.transparent===!1&&T.blending===qn&&T.alphaToCoverage===!1,alphaMap:pe,alphaTest:we,alphaHash:Ae,combine:T.combine,mapUv:me&&_(T.map.channel),aoMapUv:y&&_(T.aoMap.channel),lightMapUv:ie&&_(T.lightMap.channel),bumpMapUv:$&&_(T.bumpMap.channel),normalMapUv:le&&_(T.normalMap.channel),displacementMapUv:U&&_(T.displacementMap.channel),emissiveMapUv:C&&_(T.emissiveMap.channel),metalnessMapUv:re&&_(T.metalnessMap.channel),roughnessMapUv:A&&_(T.roughnessMap.channel),anisotropyMapUv:ye&&_(T.anisotropyMap.channel),clearcoatMapUv:Te&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(T.sheenRoughnessMap.channel),specularMapUv:je&&_(T.specularMap.channel),specularColorMapUv:We&&_(T.specularColorMap.channel),specularIntensityMapUv:it&&_(T.specularIntensityMap.channel),transmissionMapUv:k&&_(T.transmissionMap.channel),thicknessMapUv:Ee&&_(T.thicknessMap.channel),alphaMapUv:pe&&_(T.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(le||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!ae.attributes.uv&&(me||pe),fog:!!te,useFog:T.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Z,skinning:Y.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:lt,decodeVideoTexture:me&&T.map.isVideoTexture===!0&&Ke.getTransfer(T.map.colorSpace)===tt,decodeVideoTextureEmissive:C&&T.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(T.emissiveMap.colorSpace)===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qt,flipSided:T.side===Pt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&T.extensions.multiDraw===!0||V)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return St.vertexUv1s=c.has(1),St.vertexUv2s=c.has(2),St.vertexUv3s=c.has(3),c.clear(),St}function d(T){const M=[];if(T.shaderID?M.push(T.shaderID):(M.push(T.customVertexShaderID),M.push(T.customFragmentShaderID)),T.defines!==void 0)for(const F in T.defines)M.push(F),M.push(T.defines[F]);return T.isRawShaderMaterial===!1&&(R(M,T),v(M,T),M.push(i.outputColorSpace)),M.push(T.customProgramCacheKey),M.join()}function R(T,M){T.push(M.precision),T.push(M.outputColorSpace),T.push(M.envMapMode),T.push(M.envMapCubeUVHeight),T.push(M.mapUv),T.push(M.alphaMapUv),T.push(M.lightMapUv),T.push(M.aoMapUv),T.push(M.bumpMapUv),T.push(M.normalMapUv),T.push(M.displacementMapUv),T.push(M.emissiveMapUv),T.push(M.metalnessMapUv),T.push(M.roughnessMapUv),T.push(M.anisotropyMapUv),T.push(M.clearcoatMapUv),T.push(M.clearcoatNormalMapUv),T.push(M.clearcoatRoughnessMapUv),T.push(M.iridescenceMapUv),T.push(M.iridescenceThicknessMapUv),T.push(M.sheenColorMapUv),T.push(M.sheenRoughnessMapUv),T.push(M.specularMapUv),T.push(M.specularColorMapUv),T.push(M.specularIntensityMapUv),T.push(M.transmissionMapUv),T.push(M.thicknessMapUv),T.push(M.combine),T.push(M.fogExp2),T.push(M.sizeAttenuation),T.push(M.morphTargetsCount),T.push(M.morphAttributeCount),T.push(M.numDirLights),T.push(M.numPointLights),T.push(M.numSpotLights),T.push(M.numSpotLightMaps),T.push(M.numHemiLights),T.push(M.numRectAreaLights),T.push(M.numDirLightShadows),T.push(M.numPointLightShadows),T.push(M.numSpotLightShadows),T.push(M.numSpotLightShadowsWithMaps),T.push(M.numLightProbes),T.push(M.shadowMapType),T.push(M.toneMapping),T.push(M.numClippingPlanes),T.push(M.numClipIntersection),T.push(M.depthPacking)}function v(T,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const M=g[T.type];let F;if(M){const X=Jt[M];F=$u.clone(X.uniforms)}else F=T.uniforms;return F}function N(T,M){let F;for(let X=0,Y=u.length;X<Y;X++){const te=u[X];if(te.cacheKey===M){F=te,++F.usedTimes;break}}return F===void 0&&(F=new c_(i,M,T,r),u.push(F)),F}function D(T){if(--T.usedTimes===0){const M=u.indexOf(T);u[M]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function O(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:x,acquireProgram:N,releaseProgram:D,releaseShaderCache:P,programs:u,dispose:O}}function p_(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function m_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ml(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(h,f,m,g,_,p){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:p},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=_,d.group=p),e++,d}function a(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?n.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(h,f,m,g,_,p){const d=o(h,f,m,g,_,p);m.transmission>0?n.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||m_),n.length>1&&n.sort(f||Sl),s.length>1&&s.sort(f||Sl)}function u(){for(let h=e,f=i.length;h<f;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function __(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Ml,i.set(n,[o])):s>=r.length?(o=new Ml,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function g_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new ke};break;case"SpotLight":t={position:new z,direction:new z,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function v_(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let x_=0;function y_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function S_(i){const e=new g_,t=v_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new ot,o=new ot;function a(c){let u=0,h=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let m=0,g=0,_=0,p=0,d=0,R=0,v=0,x=0,N=0,D=0,P=0;c.sort(y_);for(let T=0,M=c.length;T<M;T++){const F=c[T],X=F.color,Y=F.intensity,te=F.distance,ae=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)u+=X.r*Y,h+=X.g*Y,f+=X.b*Y;else if(F.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(F.sh.coefficients[ne],Y);P++}else if(F.isDirectionalLight){const ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const Q=F.shadow,B=t.get(F);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,n.directionalShadow[m]=B,n.directionalShadowMap[m]=ae,n.directionalShadowMatrix[m]=F.shadow.matrix,R++}n.directional[m]=ne,m++}else if(F.isSpotLight){const ne=e.get(F);ne.position.setFromMatrixPosition(F.matrixWorld),ne.color.copy(X).multiplyScalar(Y),ne.distance=te,ne.coneCos=Math.cos(F.angle),ne.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ne.decay=F.decay,n.spot[_]=ne;const Q=F.shadow;if(F.map&&(n.spotLightMap[N]=F.map,N++,Q.updateMatrices(F),F.castShadow&&D++),n.spotLightMatrix[_]=Q.matrix,F.castShadow){const B=t.get(F);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,n.spotShadow[_]=B,n.spotShadowMap[_]=ae,x++}_++}else if(F.isRectAreaLight){const ne=e.get(F);ne.color.copy(X).multiplyScalar(Y),ne.halfWidth.set(F.width*.5,0,0),ne.halfHeight.set(0,F.height*.5,0),n.rectArea[p]=ne,p++}else if(F.isPointLight){const ne=e.get(F);if(ne.color.copy(F.color).multiplyScalar(F.intensity),ne.distance=F.distance,ne.decay=F.decay,F.castShadow){const Q=F.shadow,B=t.get(F);B.shadowIntensity=Q.intensity,B.shadowBias=Q.bias,B.shadowNormalBias=Q.normalBias,B.shadowRadius=Q.radius,B.shadowMapSize=Q.mapSize,B.shadowCameraNear=Q.camera.near,B.shadowCameraFar=Q.camera.far,n.pointShadow[g]=B,n.pointShadowMap[g]=ae,n.pointShadowMatrix[g]=F.shadow.matrix,v++}n.point[g]=ne,g++}else if(F.isHemisphereLight){const ne=e.get(F);ne.skyColor.copy(F.color).multiplyScalar(Y),ne.groundColor.copy(F.groundColor).multiplyScalar(Y),n.hemi[d]=ne,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const O=n.hash;(O.directionalLength!==m||O.pointLength!==g||O.spotLength!==_||O.rectAreaLength!==p||O.hemiLength!==d||O.numDirectionalShadows!==R||O.numPointShadows!==v||O.numSpotShadows!==x||O.numSpotMaps!==N||O.numLightProbes!==P)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=x+N-D,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=P,O.directionalLength=m,O.pointLength=g,O.spotLength=_,O.rectAreaLength=p,O.hemiLength=d,O.numDirectionalShadows=R,O.numPointShadows=v,O.numSpotShadows=x,O.numSpotMaps=N,O.numLightProbes=P,n.version=x_++)}function l(c,u){let h=0,f=0,m=0,g=0,_=0;const p=u.matrixWorldInverse;for(let d=0,R=c.length;d<R;d++){const v=c[d];if(v.isDirectionalLight){const x=n.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),h++}else if(v.isSpotLight){const x=n.spot[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const x=n.point[f];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:n}}function El(i){const e=new S_(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function M_(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new El(i),e.set(s,[a])):r>=o.length?(a=new El(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const E_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T_(i,e,t){let n=new $o;const s=new ue,r=new ue,o=new ut,a=new Bh({depthPacking:_u}),l=new zh,c={},u=t.maxTextureSize,h={[Cn]:Pt,[Pt]:Cn,[Qt]:Qt},f=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:E_,fragmentShader:b_}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Nt;g.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new kt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fl;let d=this.type;this.render=function(D,P,O){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||D.length===0)return;const T=i.getRenderTarget(),M=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),X=i.state;X.setBlending(An),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const Y=d!==hn&&this.type===hn,te=d===hn&&this.type!==hn;for(let ae=0,ne=D.length;ae<ne;ae++){const Q=D[ae],B=Q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const _e=B.getFrameExtents();if(s.multiply(_e),r.copy(B.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/_e.x),s.x=r.x*_e.x,B.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/_e.y),s.y=r.y*_e.y,B.mapSize.y=r.y)),B.map===null||Y===!0||te===!0){const Me=this.type!==hn?{minFilter:jt,magFilter:jt}:{};B.map!==null&&B.map.dispose(),B.map=new Zn(s.x,s.y,Me),B.map.texture.name=Q.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const xe=B.getViewportCount();for(let Me=0;Me<xe;Me++){const Oe=B.getViewport(Me);o.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),X.viewport(o),B.updateMatrices(Q,Me),n=B.getFrustum(),x(P,O,B.camera,Q,this.type)}B.isPointLightShadow!==!0&&this.type===hn&&R(B,O),B.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(T,M,F)};function R(D,P){const O=e.update(_);f.defines.VSM_SAMPLES!==D.blurSamples&&(f.defines.VSM_SAMPLES=D.blurSamples,m.defines.VSM_SAMPLES=D.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Zn(s.x,s.y)),f.uniforms.shadow_pass.value=D.map.texture,f.uniforms.resolution.value=D.mapSize,f.uniforms.radius.value=D.radius,i.setRenderTarget(D.mapPass),i.clear(),i.renderBufferDirect(P,null,O,f,_,null),m.uniforms.shadow_pass.value=D.mapPass.texture,m.uniforms.resolution.value=D.mapSize,m.uniforms.radius.value=D.radius,i.setRenderTarget(D.map),i.clear(),i.renderBufferDirect(P,null,O,m,_,null)}function v(D,P,O,T){let M=null;const F=O.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(F!==void 0)M=F;else if(M=O.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const X=M.uuid,Y=P.uuid;let te=c[X];te===void 0&&(te={},c[X]=te);let ae=te[Y];ae===void 0&&(ae=M.clone(),te[Y]=ae,P.addEventListener("dispose",N)),M=ae}if(M.visible=P.visible,M.wireframe=P.wireframe,T===hn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:h[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const X=i.properties.get(M);X.light=O}return M}function x(D,P,O,T,M){if(D.visible===!1)return;if(D.layers.test(P.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&M===hn)&&(!D.frustumCulled||n.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,D.matrixWorld);const Y=e.update(D),te=D.material;if(Array.isArray(te)){const ae=Y.groups;for(let ne=0,Q=ae.length;ne<Q;ne++){const B=ae[ne],_e=te[B.materialIndex];if(_e&&_e.visible){const xe=v(D,_e,T,M);D.onBeforeShadow(i,D,P,O,Y,xe,B),i.renderBufferDirect(O,null,Y,xe,D,B),D.onAfterShadow(i,D,P,O,Y,xe,B)}}}else if(te.visible){const ae=v(D,te,T,M);D.onBeforeShadow(i,D,P,O,Y,ae,null),i.renderBufferDirect(O,null,Y,ae,D,null),D.onAfterShadow(i,D,P,O,Y,ae,null)}}const X=D.children;for(let Y=0,te=X.length;Y<te;Y++)x(X[Y],P,O,T,M)}function N(D){D.target.removeEventListener("dispose",N);for(const O in c){const T=c[O],M=D.target.uuid;M in T&&(T[M].dispose(),delete T[M])}}}const A_={[Xr]:qr,[Yr]:$r,[jr]:Kr,[wi]:Zr,[qr]:Xr,[$r]:Yr,[Kr]:jr,[Zr]:wi};function w_(i,e){function t(){let k=!1;const Ee=new ut;let oe=null;const pe=new ut(0,0,0,0);return{setMask:function(we){oe!==we&&!k&&(i.colorMask(we,we,we,we),oe=we)},setLocked:function(we){k=we},setClear:function(we,Ae,Ge,lt,St){St===!0&&(we*=lt,Ae*=lt,Ge*=lt),Ee.set(we,Ae,Ge,lt),pe.equals(Ee)===!1&&(i.clearColor(we,Ae,Ge,lt),pe.copy(Ee))},reset:function(){k=!1,oe=null,pe.set(-1,0,0,0)}}}function n(){let k=!1,Ee=!1,oe=null,pe=null,we=null;return{setReversed:function(Ae){if(Ee!==Ae){const Ge=e.get("EXT_clip_control");Ee?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const lt=we;we=null,this.setClear(lt)}Ee=Ae},getReversed:function(){return Ee},setTest:function(Ae){Ae?E(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(Ae){oe!==Ae&&!k&&(i.depthMask(Ae),oe=Ae)},setFunc:function(Ae){if(Ee&&(Ae=A_[Ae]),pe!==Ae){switch(Ae){case Xr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Yr:i.depthFunc(i.LESS);break;case wi:i.depthFunc(i.LEQUAL);break;case jr:i.depthFunc(i.EQUAL);break;case Zr:i.depthFunc(i.GEQUAL);break;case $r:i.depthFunc(i.GREATER);break;case Kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=Ae}},setLocked:function(Ae){k=Ae},setClear:function(Ae){we!==Ae&&(Ee&&(Ae=1-Ae),i.clearDepth(Ae),we=Ae)},reset:function(){k=!1,oe=null,pe=null,we=null,Ee=!1}}}function s(){let k=!1,Ee=null,oe=null,pe=null,we=null,Ae=null,Ge=null,lt=null,St=null;return{setTest:function(et){k||(et?E(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(et){Ee!==et&&!k&&(i.stencilMask(et),Ee=et)},setFunc:function(et,Ht,sn){(oe!==et||pe!==Ht||we!==sn)&&(i.stencilFunc(et,Ht,sn),oe=et,pe=Ht,we=sn)},setOp:function(et,Ht,sn){(Ae!==et||Ge!==Ht||lt!==sn)&&(i.stencilOp(et,Ht,sn),Ae=et,Ge=Ht,lt=sn)},setLocked:function(et){k=et},setClear:function(et){St!==et&&(i.clearStencil(et),St=et)},reset:function(){k=!1,Ee=null,oe=null,pe=null,we=null,Ae=null,Ge=null,lt=null,St=null}}}const r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,R=null,v=null,x=null,N=null,D=null,P=new ke(0,0,0),O=0,T=!1,M=null,F=null,X=null,Y=null,te=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,Q=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(B)[1]),ne=Q>=1):B.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ne=Q>=2);let _e=null,xe={};const Me=i.getParameter(i.SCISSOR_BOX),Oe=i.getParameter(i.VIEWPORT),Ye=new ut().fromArray(Me),I=new ut().fromArray(Oe);function L(k,Ee,oe,pe){const we=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(k,Ae),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<oe;Ge++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(Ee,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(Ee+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return Ae}const w={};w[i.TEXTURE_2D]=L(i.TEXTURE_2D,i.TEXTURE_2D,1),w[i.TEXTURE_CUBE_MAP]=L(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),w[i.TEXTURE_2D_ARRAY]=L(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),w[i.TEXTURE_3D]=L(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),E(i.DEPTH_TEST),o.setFunc(wi),$(!1),le(ma),E(i.CULL_FACE),y(An);function E(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function Z(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function fe(k,Ee){return h[k]!==Ee?(i.bindFramebuffer(k,Ee),h[k]=Ee,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ee),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ee),!0):!1}function V(k,Ee){let oe=m,pe=!1;if(k){oe=f.get(Ee),oe===void 0&&(oe=[],f.set(Ee,oe));const we=k.textures;if(oe.length!==we.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,Ge=we.length;Ae<Ge;Ae++)oe[Ae]=i.COLOR_ATTACHMENT0+Ae;oe.length=we.length,pe=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,pe=!0);pe&&i.drawBuffers(oe)}function me(k){return g!==k?(i.useProgram(k),g=k,!0):!1}const j={[Vn]:i.FUNC_ADD,[Vc]:i.FUNC_SUBTRACT,[Gc]:i.FUNC_REVERSE_SUBTRACT};j[Wc]=i.MIN,j[Xc]=i.MAX;const q={[qc]:i.ZERO,[Yc]:i.ONE,[jc]:i.SRC_COLOR,[Gr]:i.SRC_ALPHA,[eu]:i.SRC_ALPHA_SATURATE,[Jc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Zc]:i.ONE_MINUS_SRC_COLOR,[Wr]:i.ONE_MINUS_SRC_ALPHA,[Qc]:i.ONE_MINUS_DST_COLOR,[Kc]:i.ONE_MINUS_DST_ALPHA,[tu]:i.CONSTANT_COLOR,[nu]:i.ONE_MINUS_CONSTANT_COLOR,[iu]:i.CONSTANT_ALPHA,[su]:i.ONE_MINUS_CONSTANT_ALPHA};function y(k,Ee,oe,pe,we,Ae,Ge,lt,St,et){if(k===An){_===!0&&(Z(i.BLEND),_=!1);return}if(_===!1&&(E(i.BLEND),_=!0),k!==Hc){if(k!==p||et!==T){if((d!==Vn||x!==Vn)&&(i.blendEquation(i.FUNC_ADD),d=Vn,x=Vn),et)switch(k){case qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.ONE,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _a:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ga:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case va:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}R=null,v=null,N=null,D=null,P.set(0,0,0),O=0,p=k,T=et}return}we=we||Ee,Ae=Ae||oe,Ge=Ge||pe,(Ee!==d||we!==x)&&(i.blendEquationSeparate(j[Ee],j[we]),d=Ee,x=we),(oe!==R||pe!==v||Ae!==N||Ge!==D)&&(i.blendFuncSeparate(q[oe],q[pe],q[Ae],q[Ge]),R=oe,v=pe,N=Ae,D=Ge),(lt.equals(P)===!1||St!==O)&&(i.blendColor(lt.r,lt.g,lt.b,St),P.copy(lt),O=St),p=k,T=!1}function ie(k,Ee){k.side===Qt?Z(i.CULL_FACE):E(i.CULL_FACE);let oe=k.side===Pt;Ee&&(oe=!oe),$(oe),k.blending===qn&&k.transparent===!1?y(An):y(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);const pe=k.stencilWrite;a.setTest(pe),pe&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),C(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?E(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function $(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function le(k){k!==Bc?(E(i.CULL_FACE),k!==F&&(k===ma?i.cullFace(i.BACK):k===zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),F=k}function U(k){k!==X&&(ne&&i.lineWidth(k),X=k)}function C(k,Ee,oe){k?(E(i.POLYGON_OFFSET_FILL),(Y!==Ee||te!==oe)&&(i.polygonOffset(Ee,oe),Y=Ee,te=oe)):Z(i.POLYGON_OFFSET_FILL)}function re(k){k?E(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function A(k){k===void 0&&(k=i.TEXTURE0+ae-1),_e!==k&&(i.activeTexture(k),_e=k)}function S(k,Ee,oe){oe===void 0&&(_e===null?oe=i.TEXTURE0+ae-1:oe=_e);let pe=xe[oe];pe===void 0&&(pe={type:void 0,texture:void 0},xe[oe]=pe),(pe.type!==k||pe.texture!==Ee)&&(_e!==oe&&(i.activeTexture(oe),_e=oe),i.bindTexture(k,Ee||w[k]),pe.type=k,pe.texture=Ee)}function W(){const k=xe[_e];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function se(){try{i.compressedTexImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ce(){try{i.texSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function De(){try{i.texSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ye(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Te(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{i.texStorage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{i.texImage2D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{i.texImage3D.apply(i,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Fe(k){Ye.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Ye.copy(k))}function Pe(k){I.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),I.copy(k))}function je(k,Ee){let oe=c.get(Ee);oe===void 0&&(oe=new WeakMap,c.set(Ee,oe));let pe=oe.get(k);pe===void 0&&(pe=i.getUniformBlockIndex(Ee,k.name),oe.set(k,pe))}function We(k,Ee){const pe=c.get(Ee).get(k);l.get(Ee)!==pe&&(i.uniformBlockBinding(Ee,pe,k.__bindingPointIndex),l.set(Ee,pe))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},_e=null,xe={},h={},f=new WeakMap,m=[],g=null,_=!1,p=null,d=null,R=null,v=null,x=null,N=null,D=null,P=new ke(0,0,0),O=0,T=!1,M=null,F=null,X=null,Y=null,te=null,Ye.set(0,0,i.canvas.width,i.canvas.height),I.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:E,disable:Z,bindFramebuffer:fe,drawBuffers:V,useProgram:me,setBlending:y,setMaterial:ie,setFlipSided:$,setCullFace:le,setLineWidth:U,setPolygonOffset:C,setScissorTest:re,activeTexture:A,bindTexture:S,unbindTexture:W,compressedTexImage2D:se,compressedTexImage3D:he,texImage2D:Ce,texImage3D:Ue,updateUBOMapping:je,uniformBlockBinding:We,texStorage2D:Ve,texStorage3D:ge,texSubImage2D:ce,texSubImage3D:De,compressedTexSubImage2D:ye,compressedTexSubImage3D:Te,scissor:Fe,viewport:Pe,reset:it}}function C_(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):es("canvas")}function _(A,S,W){let se=1;const he=re(A);if((he.width>W||he.height>W)&&(se=W/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ce=Math.floor(se*he.width),De=Math.floor(se*he.height);h===void 0&&(h=g(ce,De));const ye=S?g(ce,De):h;return ye.width=ce,ye.height=De,ye.getContext("2d").drawImage(A,0,0,ce,De),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ce+"x"+De+")."),ye}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),A;return A}function p(A){return A.generateMipmaps}function d(A){i.generateMipmap(A)}function R(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,S,W,se,he=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=S;if(S===i.RED&&(W===i.FLOAT&&(ce=i.R32F),W===i.HALF_FLOAT&&(ce=i.R16F),W===i.UNSIGNED_BYTE&&(ce=i.R8)),S===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(ce=i.R8UI),W===i.UNSIGNED_SHORT&&(ce=i.R16UI),W===i.UNSIGNED_INT&&(ce=i.R32UI),W===i.BYTE&&(ce=i.R8I),W===i.SHORT&&(ce=i.R16I),W===i.INT&&(ce=i.R32I)),S===i.RG&&(W===i.FLOAT&&(ce=i.RG32F),W===i.HALF_FLOAT&&(ce=i.RG16F),W===i.UNSIGNED_BYTE&&(ce=i.RG8)),S===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(ce=i.RG8UI),W===i.UNSIGNED_SHORT&&(ce=i.RG16UI),W===i.UNSIGNED_INT&&(ce=i.RG32UI),W===i.BYTE&&(ce=i.RG8I),W===i.SHORT&&(ce=i.RG16I),W===i.INT&&(ce=i.RG32I)),S===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(ce=i.RGB8UI),W===i.UNSIGNED_SHORT&&(ce=i.RGB16UI),W===i.UNSIGNED_INT&&(ce=i.RGB32UI),W===i.BYTE&&(ce=i.RGB8I),W===i.SHORT&&(ce=i.RGB16I),W===i.INT&&(ce=i.RGB32I)),S===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(ce=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(ce=i.RGBA16UI),W===i.UNSIGNED_INT&&(ce=i.RGBA32UI),W===i.BYTE&&(ce=i.RGBA8I),W===i.SHORT&&(ce=i.RGBA16I),W===i.INT&&(ce=i.RGBA32I)),S===i.RGB&&W===i.UNSIGNED_INT_5_9_9_9_REV&&(ce=i.RGB9_E5),S===i.RGBA){const De=he?js:Ke.getTransfer(se);W===i.FLOAT&&(ce=i.RGBA32F),W===i.HALF_FLOAT&&(ce=i.RGBA16F),W===i.UNSIGNED_BYTE&&(ce=De===tt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT_4_4_4_4&&(ce=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(ce=i.RGB5_A1)}return(ce===i.R16F||ce===i.R32F||ce===i.RG16F||ce===i.RG32F||ce===i.RGBA16F||ce===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(A,S){let W;return A?S===null||S===jn||S===Pi?W=i.DEPTH24_STENCIL8:S===dn?W=i.DEPTH32F_STENCIL8:S===Qi&&(W=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===jn||S===Pi?W=i.DEPTH_COMPONENT24:S===dn?W=i.DEPTH_COMPONENT32F:S===Qi&&(W=i.DEPTH_COMPONENT16),W}function N(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==jt&&A.minFilter!==en?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function D(A){const S=A.target;S.removeEventListener("dispose",D),O(S),S.isVideoTexture&&u.delete(S)}function P(A){const S=A.target;S.removeEventListener("dispose",P),M(S)}function O(A){const S=n.get(A);if(S.__webglInit===void 0)return;const W=A.source,se=f.get(W);if(se){const he=se[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&T(A),Object.keys(se).length===0&&f.delete(W)}n.remove(A)}function T(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const W=A.source,se=f.get(W);delete se[S.__cacheKey],o.memory.textures--}function M(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(S.__webglFramebuffer[se]))for(let he=0;he<S.__webglFramebuffer[se].length;he++)i.deleteFramebuffer(S.__webglFramebuffer[se][he]);else i.deleteFramebuffer(S.__webglFramebuffer[se]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[se])}else{if(Array.isArray(S.__webglFramebuffer))for(let se=0;se<S.__webglFramebuffer.length;se++)i.deleteFramebuffer(S.__webglFramebuffer[se]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let se=0;se<S.__webglColorRenderbuffer.length;se++)S.__webglColorRenderbuffer[se]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[se]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const W=A.textures;for(let se=0,he=W.length;se<he;se++){const ce=n.get(W[se]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),o.memory.textures--),n.remove(W[se])}n.remove(A)}let F=0;function X(){F=0}function Y(){const A=F;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function te(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function ae(A,S){const W=n.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const se=A.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{I(W,A,S);return}}t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+S)}function ne(A,S){const W=n.get(A);if(A.version>0&&W.__version!==A.version){I(W,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+S)}function Q(A,S){const W=n.get(A);if(A.version>0&&W.__version!==A.version){I(W,A,S);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+S)}function B(A,S){const W=n.get(A);if(A.version>0&&W.__version!==A.version){L(W,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+S)}const _e={[eo]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},xe={[jt]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ar]:i.LINEAR_MIPMAP_NEAREST,[Xn]:i.LINEAR_MIPMAP_LINEAR},Me={[xu]:i.NEVER,[Tu]:i.ALWAYS,[yu]:i.LESS,[$l]:i.LEQUAL,[Su]:i.EQUAL,[bu]:i.GEQUAL,[Mu]:i.GREATER,[Eu]:i.NOTEQUAL};function Oe(A,S){if(S.type===dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===en||S.magFilter===ar||S.magFilter===ds||S.magFilter===Xn||S.minFilter===en||S.minFilter===ar||S.minFilter===ds||S.minFilter===Xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,_e[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,_e[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,_e[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,xe[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,xe[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===jt||S.minFilter!==ds&&S.minFilter!==Xn||S.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ye(A,S){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",D));const se=S.source;let he=f.get(se);he===void 0&&(he={},f.set(se,he));const ce=te(S);if(ce!==A.__cacheKey){he[ce]===void 0&&(he[ce]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,W=!0),he[ce].usedTimes++;const De=he[A.__cacheKey];De!==void 0&&(he[A.__cacheKey].usedTimes--,De.usedTimes===0&&T(S)),A.__cacheKey=ce,A.__webglTexture=he[ce].texture}return W}function I(A,S,W){let se=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(se=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(se=i.TEXTURE_3D);const he=Ye(A,S),ce=S.source;t.bindTexture(se,A.__webglTexture,i.TEXTURE0+W);const De=n.get(ce);if(ce.version!==De.__version||he===!0){t.activeTexture(i.TEXTURE0+W);const ye=Ke.getPrimaries(Ke.workingColorSpace),Te=S.colorSpace===Tn?null:Ke.getPrimaries(S.colorSpace),Ve=S.colorSpace===Tn||ye===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ge=_(S.image,!1,s.maxTextureSize);ge=C(S,ge);const Ce=r.convert(S.format,S.colorSpace),Ue=r.convert(S.type);let Fe=v(S.internalFormat,Ce,Ue,S.colorSpace,S.isVideoTexture);Oe(se,S);let Pe;const je=S.mipmaps,We=S.isVideoTexture!==!0,it=De.__version===void 0||he===!0,k=ce.dataReady,Ee=N(S,ge);if(S.isDepthTexture)Fe=x(S.format===Li,S.type),it&&(We?t.texStorage2D(i.TEXTURE_2D,1,Fe,ge.width,ge.height):t.texImage2D(i.TEXTURE_2D,0,Fe,ge.width,ge.height,0,Ce,Ue,null));else if(S.isDataTexture)if(je.length>0){We&&it&&t.texStorage2D(i.TEXTURE_2D,Ee,Fe,je[0].width,je[0].height);for(let oe=0,pe=je.length;oe<pe;oe++)Pe=je[oe],We?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Pe.width,Pe.height,Ce,Ue,Pe.data):t.texImage2D(i.TEXTURE_2D,oe,Fe,Pe.width,Pe.height,0,Ce,Ue,Pe.data);S.generateMipmaps=!1}else We?(it&&t.texStorage2D(i.TEXTURE_2D,Ee,Fe,ge.width,ge.height),k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge.width,ge.height,Ce,Ue,ge.data)):t.texImage2D(i.TEXTURE_2D,0,Fe,ge.width,ge.height,0,Ce,Ue,ge.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Fe,je[0].width,je[0].height,ge.depth);for(let oe=0,pe=je.length;oe<pe;oe++)if(Pe=je[oe],S.format!==Yt)if(Ce!==null)if(We){if(k)if(S.layerUpdates.size>0){const we=Qa(Pe.width,Pe.height,S.format,S.type);for(const Ae of S.layerUpdates){const Ge=Pe.data.subarray(Ae*we/Pe.data.BYTES_PER_ELEMENT,(Ae+1)*we/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Ae,Pe.width,Pe.height,1,Ce,Ge)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Pe.width,Pe.height,ge.depth,Ce,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Fe,Pe.width,Pe.height,ge.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?k&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Pe.width,Pe.height,ge.depth,Ce,Ue,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Fe,Pe.width,Pe.height,ge.depth,0,Ce,Ue,Pe.data)}else{We&&it&&t.texStorage2D(i.TEXTURE_2D,Ee,Fe,je[0].width,je[0].height);for(let oe=0,pe=je.length;oe<pe;oe++)Pe=je[oe],S.format!==Yt?Ce!==null?We?k&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Pe.width,Pe.height,Ce,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Fe,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Pe.width,Pe.height,Ce,Ue,Pe.data):t.texImage2D(i.TEXTURE_2D,oe,Fe,Pe.width,Pe.height,0,Ce,Ue,Pe.data)}else if(S.isDataArrayTexture)if(We){if(it&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Fe,ge.width,ge.height,ge.depth),k)if(S.layerUpdates.size>0){const oe=Qa(ge.width,ge.height,S.format,S.type);for(const pe of S.layerUpdates){const we=ge.data.subarray(pe*oe/ge.data.BYTES_PER_ELEMENT,(pe+1)*oe/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,ge.width,ge.height,1,Ce,Ue,we)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ue,ge.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,ge.width,ge.height,ge.depth,0,Ce,Ue,ge.data);else if(S.isData3DTexture)We?(it&&t.texStorage3D(i.TEXTURE_3D,Ee,Fe,ge.width,ge.height,ge.depth),k&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ce,Ue,ge.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,ge.width,ge.height,ge.depth,0,Ce,Ue,ge.data);else if(S.isFramebufferTexture){if(it)if(We)t.texStorage2D(i.TEXTURE_2D,Ee,Fe,ge.width,ge.height);else{let oe=ge.width,pe=ge.height;for(let we=0;we<Ee;we++)t.texImage2D(i.TEXTURE_2D,we,Fe,oe,pe,0,Ce,Ue,null),oe>>=1,pe>>=1}}else if(je.length>0){if(We&&it){const oe=re(je[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Fe,oe.width,oe.height)}for(let oe=0,pe=je.length;oe<pe;oe++)Pe=je[oe],We?k&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ce,Ue,Pe):t.texImage2D(i.TEXTURE_2D,oe,Fe,Ce,Ue,Pe);S.generateMipmaps=!1}else if(We){if(it){const oe=re(ge);t.texStorage2D(i.TEXTURE_2D,Ee,Fe,oe.width,oe.height)}k&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,Ue,ge)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Ce,Ue,ge);p(S)&&d(se),De.__version=ce.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function L(A,S,W){if(S.image.length!==6)return;const se=Ye(A,S),he=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+W);const ce=n.get(he);if(he.version!==ce.__version||se===!0){t.activeTexture(i.TEXTURE0+W);const De=Ke.getPrimaries(Ke.workingColorSpace),ye=S.colorSpace===Tn?null:Ke.getPrimaries(S.colorSpace),Te=S.colorSpace===Tn||De===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,ge=S.image[0]&&S.image[0].isDataTexture,Ce=[];for(let pe=0;pe<6;pe++)!Ve&&!ge?Ce[pe]=_(S.image[pe],!0,s.maxCubemapSize):Ce[pe]=ge?S.image[pe].image:S.image[pe],Ce[pe]=C(S,Ce[pe]);const Ue=Ce[0],Fe=r.convert(S.format,S.colorSpace),Pe=r.convert(S.type),je=v(S.internalFormat,Fe,Pe,S.colorSpace),We=S.isVideoTexture!==!0,it=ce.__version===void 0||se===!0,k=he.dataReady;let Ee=N(S,Ue);Oe(i.TEXTURE_CUBE_MAP,S);let oe;if(Ve){We&&it&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,je,Ue.width,Ue.height);for(let pe=0;pe<6;pe++){oe=Ce[pe].mipmaps;for(let we=0;we<oe.length;we++){const Ae=oe[we];S.format!==Yt?Fe!==null?We?k&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we,0,0,Ae.width,Ae.height,Fe,Ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we,je,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we,0,0,Ae.width,Ae.height,Fe,Pe,Ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we,je,Ae.width,Ae.height,0,Fe,Pe,Ae.data)}}}else{if(oe=S.mipmaps,We&&it){oe.length>0&&Ee++;const pe=re(Ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,je,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(ge){We?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ce[pe].width,Ce[pe].height,Fe,Pe,Ce[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Ce[pe].width,Ce[pe].height,0,Fe,Pe,Ce[pe].data);for(let we=0;we<oe.length;we++){const Ge=oe[we].image[pe].image;We?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we+1,0,0,Ge.width,Ge.height,Fe,Pe,Ge.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we+1,je,Ge.width,Ge.height,0,Fe,Pe,Ge.data)}}else{We?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Fe,Pe,Ce[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,je,Fe,Pe,Ce[pe]);for(let we=0;we<oe.length;we++){const Ae=oe[we];We?k&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we+1,0,0,Fe,Pe,Ae.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,we+1,je,Fe,Pe,Ae.image[pe])}}}p(S)&&d(i.TEXTURE_CUBE_MAP),ce.__version=he.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function w(A,S,W,se,he,ce){const De=r.convert(W.format,W.colorSpace),ye=r.convert(W.type),Te=v(W.internalFormat,De,ye,W.colorSpace),Ve=n.get(S),ge=n.get(W);if(ge.__renderTarget=S,!Ve.__hasExternalTextures){const Ce=Math.max(1,S.width>>ce),Ue=Math.max(1,S.height>>ce);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ce,Te,Ce,Ue,S.depth,0,De,ye,null):t.texImage2D(he,ce,Te,Ce,Ue,0,De,ye,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),le(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,he,ge.__webglTexture,0,$(S)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,se,he,ge.__webglTexture,ce),t.bindFramebuffer(i.FRAMEBUFFER,null)}function E(A,S,W){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const se=S.depthTexture,he=se&&se.isDepthTexture?se.type:null,ce=x(S.stencilBuffer,he),De=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ye=$(S);le(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,ce,S.width,S.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,ce,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ce,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,A)}else{const se=S.textures;for(let he=0;he<se.length;he++){const ce=se[he],De=r.convert(ce.format,ce.colorSpace),ye=r.convert(ce.type),Te=v(ce.internalFormat,De,ye,ce.colorSpace),Ve=$(S);W&&le(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Te,S.width,S.height):le(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,Te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Te,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=n.get(S.depthTexture);se.__renderTarget=S,(!se.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ae(S.depthTexture,0);const he=se.__webglTexture,ce=$(S);if(S.depthTexture.format===bi)le(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(S.depthTexture.format===Li)le(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,ce):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function fe(A){const S=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const se=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),se){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=se}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Z(S.__webglFramebuffer,A)}else if(W){S.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[se]),S.__webglDepthbuffer[se]===void 0)S.__webglDepthbuffer[se]=i.createRenderbuffer(),E(S.__webglDepthbuffer[se],A,!1);else{const he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=S.__webglDepthbuffer[se];i.bindRenderbuffer(i.RENDERBUFFER,ce),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),E(S.__webglDepthbuffer,A,!1);else{const se=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(A,S,W){const se=n.get(A);S!==void 0&&w(se.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&fe(A)}function me(A){const S=A.texture,W=n.get(A),se=n.get(S);A.addEventListener("dispose",P);const he=A.textures,ce=A.isWebGLCubeRenderTarget===!0,De=he.length>1;if(De||(se.__webglTexture===void 0&&(se.__webglTexture=i.createTexture()),se.__version=S.version,o.memory.textures++),ce){W.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer[ye]=[];for(let Te=0;Te<S.mipmaps.length;Te++)W.__webglFramebuffer[ye][Te]=i.createFramebuffer()}else W.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){W.__webglFramebuffer=[];for(let ye=0;ye<S.mipmaps.length;ye++)W.__webglFramebuffer[ye]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(De)for(let ye=0,Te=he.length;ye<Te;ye++){const Ve=n.get(he[ye]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&le(A)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ye=0;ye<he.length;ye++){const Te=he[ye];W.__webglColorRenderbuffer[ye]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[ye]);const Ve=r.convert(Te.format,Te.colorSpace),ge=r.convert(Te.type),Ce=v(Te.internalFormat,Ve,ge,Te.colorSpace,A.isXRRenderTarget===!0),Ue=$(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Ce,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,W.__webglColorRenderbuffer[ye])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),E(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ce){t.bindTexture(i.TEXTURE_CUBE_MAP,se.__webglTexture),Oe(i.TEXTURE_CUBE_MAP,S);for(let ye=0;ye<6;ye++)if(S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)w(W.__webglFramebuffer[ye][Te],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,Te);else w(W.__webglFramebuffer[ye],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0);p(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ye=0,Te=he.length;ye<Te;ye++){const Ve=he[ye],ge=n.get(Ve);t.bindTexture(i.TEXTURE_2D,ge.__webglTexture),Oe(i.TEXTURE_2D,Ve),w(W.__webglFramebuffer,A,Ve,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,0),p(Ve)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let ye=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ye=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,se.__webglTexture),Oe(ye,S),S.mipmaps&&S.mipmaps.length>0)for(let Te=0;Te<S.mipmaps.length;Te++)w(W.__webglFramebuffer[Te],A,S,i.COLOR_ATTACHMENT0,ye,Te);else w(W.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,ye,0);p(S)&&d(ye),t.unbindTexture()}A.depthBuffer&&fe(A)}function j(A){const S=A.textures;for(let W=0,se=S.length;W<se;W++){const he=S[W];if(p(he)){const ce=R(A),De=n.get(he).__webglTexture;t.bindTexture(ce,De),d(ce),t.unbindTexture()}}}const q=[],y=[];function ie(A){if(A.samples>0){if(le(A)===!1){const S=A.textures,W=A.width,se=A.height;let he=i.COLOR_BUFFER_BIT;const ce=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(A),ye=S.length>1;if(ye)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ye){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const Ve=n.get(S[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,W,se,0,0,W,se,he,i.NEAREST),l===!0&&(q.length=0,y.length=0,q.push(i.COLOR_ATTACHMENT0+Te),A.depthBuffer&&A.resolveDepthBuffer===!1&&(q.push(ce),y.push(ce),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,y)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ye)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,De.__webglColorRenderbuffer[Te]);const Ve=n.get(S[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function $(A){return Math.min(s.maxSamples,A.samples)}function le(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(A){const S=o.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function C(A,S){const W=A.colorSpace,se=A.format,he=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||W!==Di&&W!==Tn&&(Ke.getTransfer(W)===tt?(se!==Yt||he!==mn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),S}function re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.setTexture2D=ae,this.setTexture2DArray=ne,this.setTexture3D=Q,this.setTextureCube=B,this.rebindTextures=V,this.setupRenderTarget=me,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=w,this.useMultisampledRTT=le}function R_(i,e){function t(n,s=Tn){let r;const o=Ke.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kl)return i.BYTE;if(n===Hl)return i.SHORT;if(n===Qi)return i.UNSIGNED_SHORT;if(n===Go)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===rs)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Wl)return i.RGB;if(n===Yt)return i.RGBA;if(n===Xl)return i.LUMINANCE;if(n===ql)return i.LUMINANCE_ALPHA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===Yl)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===jl)return i.RG;if(n===Yo)return i.RG_INTEGER;if(n===jo)return i.RGBA_INTEGER;if(n===Hs||n===Vs||n===Gs||n===Ws)if(o===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===ao||n===lo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===ao)return o===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===uo||n===ho||n===fo||n===po||n===mo||n===_o||n===go||n===vo||n===xo||n===yo||n===So||n===Mo||n===Eo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ho)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return o===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Xs||n===bo||n===To)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Xs)return o===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zl||n===Ao||n===wo||n===Co)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Xs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Pi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const P_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class D_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new At,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gn({vertexShader:P_,fragmentShader:L_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class I_ extends Jn{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,g=null;const _=new D_,p=t.getContextAttributes();let d=null,R=null;const v=[],x=[],N=new ue;let D=null;const P=new zt;P.viewport=new ut;const O=new zt;O.viewport=new ut;const T=[P,O],M=new Zh;let F=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let L=v[I];return L===void 0&&(L=new Cr,v[I]=L),L.getTargetRaySpace()},this.getControllerGrip=function(I){let L=v[I];return L===void 0&&(L=new Cr,v[I]=L),L.getGripSpace()},this.getHand=function(I){let L=v[I];return L===void 0&&(L=new Cr,v[I]=L),L.getHandSpace()};function Y(I){const L=x.indexOf(I.inputSource);if(L===-1)return;const w=v[L];w!==void 0&&(w.update(I.inputSource,I.frame,c||o),w.dispatchEvent({type:I.type,data:I.inputSource}))}function te(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",te),s.removeEventListener("inputsourceschange",ae);for(let I=0;I<v.length;I++){const L=x[I];L!==null&&(x[I]=null,v[I].disconnect(L))}F=null,X=null,_.reset(),e.setRenderTarget(d),m=null,f=null,h=null,s=null,R=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(I){c=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",te),s.addEventListener("inputsourceschange",ae),p.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(N),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let w=null,E=null,Z=null;p.depth&&(Z=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,w=p.stencil?Li:bi,E=p.stencil?Pi:jn);const fe={colorFormat:t.RGBA8,depthFormat:Z,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(fe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),R=new Zn(f.textureWidth,f.textureHeight,{format:Yt,type:mn,depthTexture:new cc(f.textureWidth,f.textureHeight,E,void 0,void 0,void 0,void 0,void 0,void 0,w),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}else{const w={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,w),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),R=new Zn(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(I){for(let L=0;L<I.removed.length;L++){const w=I.removed[L],E=x.indexOf(w);E>=0&&(x[E]=null,v[E].disconnect(w))}for(let L=0;L<I.added.length;L++){const w=I.added[L];let E=x.indexOf(w);if(E===-1){for(let fe=0;fe<v.length;fe++)if(fe>=x.length){x.push(w),E=fe;break}else if(x[fe]===null){x[fe]=w,E=fe;break}if(E===-1)break}const Z=v[E];Z&&Z.connect(w)}}const ne=new z,Q=new z;function B(I,L,w){ne.setFromMatrixPosition(L.matrixWorld),Q.setFromMatrixPosition(w.matrixWorld);const E=ne.distanceTo(Q),Z=L.projectionMatrix.elements,fe=w.projectionMatrix.elements,V=Z[14]/(Z[10]-1),me=Z[14]/(Z[10]+1),j=(Z[9]+1)/Z[5],q=(Z[9]-1)/Z[5],y=(Z[8]-1)/Z[0],ie=(fe[8]+1)/fe[0],$=V*y,le=V*ie,U=E/(-y+ie),C=U*-y;if(L.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(C),I.translateZ(U),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),Z[10]===-1)I.projectionMatrix.copy(L.projectionMatrix),I.projectionMatrixInverse.copy(L.projectionMatrixInverse);else{const re=V+U,A=me+U,S=$-C,W=le+(E-C),se=j*me/A*re,he=q*me/A*re;I.projectionMatrix.makePerspective(S,W,se,he,re,A),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function _e(I,L){L===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(L.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let L=I.near,w=I.far;_.texture!==null&&(_.depthNear>0&&(L=_.depthNear),_.depthFar>0&&(w=_.depthFar)),M.near=O.near=P.near=L,M.far=O.far=P.far=w,(F!==M.near||X!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),F=M.near,X=M.far),P.layers.mask=I.layers.mask|2,O.layers.mask=I.layers.mask|4,M.layers.mask=P.layers.mask|O.layers.mask;const E=I.parent,Z=M.cameras;_e(M,E);for(let fe=0;fe<Z.length;fe++)_e(Z[fe],E);Z.length===2?B(M,P,O):M.projectionMatrix.copy(P.projectionMatrix),xe(I,M,E)};function xe(I,L,w){w===null?I.matrix.copy(L.matrixWorld):(I.matrix.copy(w.matrixWorld),I.matrix.invert(),I.matrix.multiply(L.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(L.projectionMatrix),I.projectionMatrixInverse.copy(L.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=Ro*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let Me=null;function Oe(I,L){if(u=L.getViewerPose(c||o),g=L,u!==null){const w=u.views;m!==null&&(e.setRenderTargetFramebuffer(R,m.framebuffer),e.setRenderTarget(R));let E=!1;w.length!==M.cameras.length&&(M.cameras.length=0,E=!0);for(let V=0;V<w.length;V++){const me=w[V];let j=null;if(m!==null)j=m.getViewport(me);else{const y=h.getViewSubImage(f,me);j=y.viewport,V===0&&(e.setRenderTargetTextures(R,y.colorTexture,f.ignoreDepthValues?void 0:y.depthStencilTexture),e.setRenderTarget(R))}let q=T[V];q===void 0&&(q=new zt,q.layers.enable(V),q.viewport=new ut,T[V]=q),q.matrix.fromArray(me.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(me.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(j.x,j.y,j.width,j.height),V===0&&(M.matrix.copy(q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),E===!0&&M.cameras.push(q)}const Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&h){const V=h.getDepthInformation(w[0]);V&&V.isValid&&V.texture&&_.init(e,V,s.renderState)}}for(let w=0;w<v.length;w++){const E=x[w],Z=v[w];E!==null&&Z!==void 0&&Z.update(E,L,c||o)}Me&&Me(I,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),g=null}const Ye=new xc;Ye.setAnimationLoop(Oe),this.setAnimationLoop=function(I){Me=I},this.dispose=function(){}}}const kn=new _n,U_=new ot;function N_(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,rc(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,R,v,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,x)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),_(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,R,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Pt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Pt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const R=e.get(d),v=R.envMap,x=R.envMapRotation;v&&(p.envMap.value=v,kn.copy(x),kn.x*=-1,kn.y*=-1,kn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),p.envMapRotation.value.setFromMatrix4(U_.makeRotationFromEuler(kn)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,R,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*R,p.scale.value=v*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,R){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function _(p,d){const R=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O_(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,v){const x=v.program;n.uniformBlockBinding(R,x)}function c(R,v){let x=s[R.id];x===void 0&&(g(R),x=u(R),s[R.id]=x,R.addEventListener("dispose",p));const N=v.program;n.updateUBOMapping(R,N);const D=e.render.frame;r[R.id]!==D&&(f(R),r[R.id]=D)}function u(R){const v=h();R.__bindingPointIndex=v;const x=i.createBuffer(),N=R.__size,D=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,N,D),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,x),x}function h(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const v=s[R.id],x=R.uniforms,N=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let D=0,P=x.length;D<P;D++){const O=Array.isArray(x[D])?x[D]:[x[D]];for(let T=0,M=O.length;T<M;T++){const F=O[T];if(m(F,D,T,N)===!0){const X=F.__offset,Y=Array.isArray(F.value)?F.value:[F.value];let te=0;for(let ae=0;ae<Y.length;ae++){const ne=Y[ae],Q=_(ne);typeof ne=="number"||typeof ne=="boolean"?(F.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,X+te,F.__data)):ne.isMatrix3?(F.__data[0]=ne.elements[0],F.__data[1]=ne.elements[1],F.__data[2]=ne.elements[2],F.__data[3]=0,F.__data[4]=ne.elements[3],F.__data[5]=ne.elements[4],F.__data[6]=ne.elements[5],F.__data[7]=0,F.__data[8]=ne.elements[6],F.__data[9]=ne.elements[7],F.__data[10]=ne.elements[8],F.__data[11]=0):(ne.toArray(F.__data,te),te+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,F.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(R,v,x,N){const D=R.value,P=v+"_"+x;if(N[P]===void 0)return typeof D=="number"||typeof D=="boolean"?N[P]=D:N[P]=D.clone(),!0;{const O=N[P];if(typeof D=="number"||typeof D=="boolean"){if(O!==D)return N[P]=D,!0}else if(O.equals(D)===!1)return O.copy(D),!0}return!1}function g(R){const v=R.uniforms;let x=0;const N=16;for(let P=0,O=v.length;P<O;P++){const T=Array.isArray(v[P])?v[P]:[v[P]];for(let M=0,F=T.length;M<F;M++){const X=T[M],Y=Array.isArray(X.value)?X.value:[X.value];for(let te=0,ae=Y.length;te<ae;te++){const ne=Y[te],Q=_(ne),B=x%N,_e=B%Q.boundary,xe=B+_e;x+=_e,xe!==0&&N-xe<Q.storage&&(x+=N-xe),X.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=Q.storage}}}const D=x%N;return D>0&&(x+=N-D),R.__size=x,R.__cache={},this}function _(R){const v={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(v.boundary=4,v.storage=4):R.isVector2?(v.boundary=8,v.storage=8):R.isVector3||R.isColor?(v.boundary=16,v.storage=12):R.isVector4?(v.boundary=16,v.storage=16):R.isMatrix3?(v.boundary=48,v.storage=48):R.isMatrix4?(v.boundary=64,v.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),v}function p(R){const v=R.target;v.removeEventListener("dispose",p);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class F_{constructor(e={}){const{canvas:t=Cu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;const g=new Uint32Array(4),_=new Int32Array(4);let p=null,d=null;const R=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this.toneMapping=wn,this.toneMappingExposure=1;const x=this;let N=!1,D=0,P=0,O=null,T=-1,M=null;const F=new ut,X=new ut;let Y=null;const te=new ke(0);let ae=0,ne=t.width,Q=t.height,B=1,_e=null,xe=null;const Me=new ut(0,0,ne,Q),Oe=new ut(0,0,ne,Q);let Ye=!1;const I=new $o;let L=!1,w=!1;this.transmissionResolutionScale=1;const E=new ot,Z=new ot,fe=new z,V=new ut,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function q(){return O===null?B:1}let y=n;function ie(b,H){return t.getContext(b,H)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vo}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",we,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),y===null){const H="webgl2";if(y=ie(H,b),y===null)throw ie(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let $,le,U,C,re,A,S,W,se,he,ce,De,ye,Te,Ve,ge,Ce,Ue,Fe,Pe,je,We,it,k;function Ee(){$=new Yp(y),$.init(),We=new R_(y,$),le=new Hp(y,$,e,We),U=new w_(y,$),le.reverseDepthBuffer&&f&&U.buffers.depth.setReversed(!0),C=new $p(y),re=new p_,A=new C_(y,$,U,re,le,We,C),S=new Gp(x),W=new qp(x),se=new nd(y),it=new zp(y,se),he=new jp(y,se,C,it),ce=new Jp(y,he,se,C),Fe=new Kp(y,le,A),ge=new Vp(re),De=new f_(x,S,W,$,le,it,ge),ye=new N_(x,re),Te=new __,Ve=new M_($),Ue=new Bp(x,S,W,U,ce,m,l),Ce=new T_(x,ce,le),k=new O_(y,C,le,U),Pe=new kp(y,$,C),je=new Zp(y,$,C),C.programs=De.programs,x.capabilities=le,x.extensions=$,x.properties=re,x.renderLists=Te,x.shadowMap=Ce,x.state=U,x.info=C}Ee();const oe=new I_(x,y);this.xr=oe,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const b=$.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=$.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(b){b!==void 0&&(B=b,this.setSize(ne,Q,!1))},this.getSize=function(b){return b.set(ne,Q)},this.setSize=function(b,H,J=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,Q=H,t.width=Math.floor(b*B),t.height=Math.floor(H*B),J===!0&&(t.style.width=b+"px",t.style.height=H+"px"),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(ne*B,Q*B).floor()},this.setDrawingBufferSize=function(b,H,J){ne=b,Q=H,B=J,t.width=Math.floor(b*J),t.height=Math.floor(H*J),this.setViewport(0,0,b,H)},this.getCurrentViewport=function(b){return b.copy(F)},this.getViewport=function(b){return b.copy(Me)},this.setViewport=function(b,H,J,ee){b.isVector4?Me.set(b.x,b.y,b.z,b.w):Me.set(b,H,J,ee),U.viewport(F.copy(Me).multiplyScalar(B).round())},this.getScissor=function(b){return b.copy(Oe)},this.setScissor=function(b,H,J,ee){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,H,J,ee),U.scissor(X.copy(Oe).multiplyScalar(B).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(b){U.setScissorTest(Ye=b)},this.setOpaqueSort=function(b){_e=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(b=!0,H=!0,J=!0){let ee=0;if(b){let G=!1;if(O!==null){const ve=O.texture.format;G=ve===jo||ve===Yo||ve===qo}if(G){const ve=O.texture.type,be=ve===mn||ve===jn||ve===Qi||ve===Pi||ve===Wo||ve===Xo,Re=Ue.getClearColor(),Le=Ue.getClearAlpha(),ze=Re.r,He=Re.g,Ie=Re.b;be?(g[0]=ze,g[1]=He,g[2]=Ie,g[3]=Le,y.clearBufferuiv(y.COLOR,0,g)):(_[0]=ze,_[1]=He,_[2]=Ie,_[3]=Le,y.clearBufferiv(y.COLOR,0,_))}else ee|=y.COLOR_BUFFER_BIT}H&&(ee|=y.DEPTH_BUFFER_BIT),J&&(ee|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",we,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ue.dispose(),Te.dispose(),Ve.dispose(),re.dispose(),S.dispose(),W.dispose(),ce.dispose(),it.dispose(),k.dispose(),De.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",la),oe.removeEventListener("sessionend",ca),Dn.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),N=!0}function we(){console.log("THREE.WebGLRenderer: Context Restored."),N=!1;const b=C.autoReset,H=Ce.enabled,J=Ce.autoUpdate,ee=Ce.needsUpdate,G=Ce.type;Ee(),C.autoReset=b,Ce.enabled=H,Ce.autoUpdate=J,Ce.needsUpdate=ee,Ce.type=G}function Ae(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ge(b){const H=b.target;H.removeEventListener("dispose",Ge),lt(H)}function lt(b){St(b),re.remove(b)}function St(b){const H=re.get(b).programs;H!==void 0&&(H.forEach(function(J){De.releaseProgram(J)}),b.isShaderMaterial&&De.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,J,ee,G,ve){H===null&&(H=me);const be=G.isMesh&&G.matrixWorld.determinant()<0,Re=Dc(b,H,J,ee,G);U.setMaterial(ee,be);let Le=J.index,ze=1;if(ee.wireframe===!0){if(Le=he.getWireframeAttribute(J),Le===void 0)return;ze=2}const He=J.drawRange,Ie=J.attributes.position;let Ze=He.start*ze,Je=(He.start+He.count)*ze;ve!==null&&(Ze=Math.max(Ze,ve.start*ze),Je=Math.min(Je,(ve.start+ve.count)*ze)),Le!==null?(Ze=Math.max(Ze,0),Je=Math.min(Je,Le.count)):Ie!=null&&(Ze=Math.max(Ze,0),Je=Math.min(Je,Ie.count));const dt=Je-Ze;if(dt<0||dt===1/0)return;it.setup(G,ee,Re,J,Le);let ct,$e=Pe;if(Le!==null&&(ct=se.get(Le),$e=je,$e.setIndex(ct)),G.isMesh)ee.wireframe===!0?(U.setLineWidth(ee.wireframeLinewidth*q()),$e.setMode(y.LINES)):$e.setMode(y.TRIANGLES);else if(G.isLine){let Ne=ee.linewidth;Ne===void 0&&(Ne=1),U.setLineWidth(Ne*q()),G.isLineSegments?$e.setMode(y.LINES):G.isLineLoop?$e.setMode(y.LINE_LOOP):$e.setMode(y.LINE_STRIP)}else G.isPoints?$e.setMode(y.POINTS):G.isSprite&&$e.setMode(y.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)$e.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if($.get("WEBGL_multi_draw"))$e.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ne=G._multiDrawStarts,xt=G._multiDrawCounts,Qe=G._multiDrawCount,Vt=Le?se.get(Le).bytesPerElement:1,ti=re.get(ee).currentProgram.getUniforms();for(let Lt=0;Lt<Qe;Lt++)ti.setValue(y,"_gl_DrawID",Lt),$e.render(Ne[Lt]/Vt,xt[Lt])}else if(G.isInstancedMesh)$e.renderInstances(Ze,dt,G.count);else if(J.isInstancedBufferGeometry){const Ne=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,xt=Math.min(J.instanceCount,Ne);$e.renderInstances(Ze,dt,xt)}else $e.render(Ze,dt)};function et(b,H,J){b.transparent===!0&&b.side===Qt&&b.forceSinglePass===!1?(b.side=Pt,b.needsUpdate=!0,hs(b,H,J),b.side=Cn,b.needsUpdate=!0,hs(b,H,J),b.side=Qt):hs(b,H,J)}this.compile=function(b,H,J=null){J===null&&(J=b),d=Ve.get(J),d.init(H),v.push(d),J.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),b!==J&&b.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const ee=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ve=G.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const Re=ve[be];et(Re,J,G),ee.add(Re)}else et(ve,J,G),ee.add(ve)}),v.pop(),d=null,ee},this.compileAsync=function(b,H,J=null){const ee=this.compile(b,H,J);return new Promise(G=>{function ve(){if(ee.forEach(function(be){re.get(be).currentProgram.isReady()&&ee.delete(be)}),ee.size===0){G(b);return}setTimeout(ve,10)}$.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ht=null;function sn(b){Ht&&Ht(b)}function la(){Dn.stop()}function ca(){Dn.start()}const Dn=new xc;Dn.setAnimationLoop(sn),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(b){Ht=b,oe.setAnimationLoop(b),b===null?Dn.stop():Dn.start()},oe.addEventListener("sessionstart",la),oe.addEventListener("sessionend",ca),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(H),H=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,H,O),d=Ve.get(b,v.length),d.init(H),v.push(d),Z.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),I.setFromProjectionMatrix(Z),w=this.localClippingEnabled,L=ge.init(this.clippingPlanes,w),p=Te.get(b,R.length),p.init(),R.push(p),oe.enabled===!0&&oe.isPresenting===!0){const ve=x.xr.getDepthSensingMesh();ve!==null&&rr(ve,H,-1/0,x.sortObjects)}rr(b,H,0,x.sortObjects),p.finish(),x.sortObjects===!0&&p.sort(_e,xe),j=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,j&&Ue.addToRenderList(p,b),this.info.render.frame++,L===!0&&ge.beginShadows();const J=d.state.shadowsArray;Ce.render(J,b,H),L===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=p.opaque,G=p.transmissive;if(d.setupLights(),H.isArrayCamera){const ve=H.cameras;if(G.length>0)for(let be=0,Re=ve.length;be<Re;be++){const Le=ve[be];ha(ee,G,b,Le)}j&&Ue.render(b);for(let be=0,Re=ve.length;be<Re;be++){const Le=ve[be];ua(p,b,Le,Le.viewport)}}else G.length>0&&ha(ee,G,b,H),j&&Ue.render(b),ua(p,b,H);O!==null&&P===0&&(A.updateMultisampleRenderTarget(O),A.updateRenderTargetMipmap(O)),b.isScene===!0&&b.onAfterRender(x,b,H),it.resetDefaultState(),T=-1,M=null,v.pop(),v.length>0?(d=v[v.length-1],L===!0&&ge.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,R.pop(),R.length>0?p=R[R.length-1]:p=null};function rr(b,H,J,ee){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||I.intersectsSprite(b)){ee&&V.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const be=ce.update(b),Re=b.material;Re.visible&&p.push(b,be,Re,J,V.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||I.intersectsObject(b))){const be=ce.update(b),Re=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),V.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),V.copy(be.boundingSphere.center)),V.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Re)){const Le=be.groups;for(let ze=0,He=Le.length;ze<He;ze++){const Ie=Le[ze],Ze=Re[Ie.materialIndex];Ze&&Ze.visible&&p.push(b,be,Ze,J,V.z,Ie)}}else Re.visible&&p.push(b,be,Re,J,V.z,null)}}const ve=b.children;for(let be=0,Re=ve.length;be<Re;be++)rr(ve[be],H,J,ee)}function ua(b,H,J,ee){const G=b.opaque,ve=b.transmissive,be=b.transparent;d.setupLightsView(J),L===!0&&ge.setGlobalState(x.clippingPlanes,J),ee&&U.viewport(F.copy(ee)),G.length>0&&us(G,H,J),ve.length>0&&us(ve,H,J),be.length>0&&us(be,H,J),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function ha(b,H,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[ee.id]===void 0&&(d.state.transmissionRenderTarget[ee.id]=new Zn(1,1,{generateMipmaps:!0,type:$.has("EXT_color_buffer_half_float")||$.has("EXT_color_buffer_float")?rs:mn,minFilter:Xn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace}));const ve=d.state.transmissionRenderTarget[ee.id],be=ee.viewport||F;ve.setSize(be.z*x.transmissionResolutionScale,be.w*x.transmissionResolutionScale);const Re=x.getRenderTarget();x.setRenderTarget(ve),x.getClearColor(te),ae=x.getClearAlpha(),ae<1&&x.setClearColor(16777215,.5),x.clear(),j&&Ue.render(J);const Le=x.toneMapping;x.toneMapping=wn;const ze=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),d.setupLightsView(ee),L===!0&&ge.setGlobalState(x.clippingPlanes,ee),us(b,J,ee),A.updateMultisampleRenderTarget(ve),A.updateRenderTargetMipmap(ve),$.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ie=0,Ze=H.length;Ie<Ze;Ie++){const Je=H[Ie],dt=Je.object,ct=Je.geometry,$e=Je.material,Ne=Je.group;if($e.side===Qt&&dt.layers.test(ee.layers)){const xt=$e.side;$e.side=Pt,$e.needsUpdate=!0,da(dt,J,ee,ct,$e,Ne),$e.side=xt,$e.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(ve),A.updateRenderTargetMipmap(ve))}x.setRenderTarget(Re),x.setClearColor(te,ae),ze!==void 0&&(ee.viewport=ze),x.toneMapping=Le}function us(b,H,J){const ee=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ve=b.length;G<ve;G++){const be=b[G],Re=be.object,Le=be.geometry,ze=ee===null?be.material:ee,He=be.group;Re.layers.test(J.layers)&&da(Re,H,J,Le,ze,He)}}function da(b,H,J,ee,G,ve){b.onBeforeRender(x,H,J,ee,G,ve),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(x,H,J,ee,b,ve),G.transparent===!0&&G.side===Qt&&G.forceSinglePass===!1?(G.side=Pt,G.needsUpdate=!0,x.renderBufferDirect(J,H,ee,G,b,ve),G.side=Cn,G.needsUpdate=!0,x.renderBufferDirect(J,H,ee,G,b,ve),G.side=Qt):x.renderBufferDirect(J,H,ee,G,b,ve),b.onAfterRender(x,H,J,ee,G,ve)}function hs(b,H,J){H.isScene!==!0&&(H=me);const ee=re.get(b),G=d.state.lights,ve=d.state.shadowsArray,be=G.state.version,Re=De.getParameters(b,G.state,ve,H,J),Le=De.getProgramCacheKey(Re);let ze=ee.programs;ee.environment=b.isMeshStandardMaterial?H.environment:null,ee.fog=H.fog,ee.envMap=(b.isMeshStandardMaterial?W:S).get(b.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,ze===void 0&&(b.addEventListener("dispose",Ge),ze=new Map,ee.programs=ze);let He=ze.get(Le);if(He!==void 0){if(ee.currentProgram===He&&ee.lightsStateVersion===be)return pa(b,Re),He}else Re.uniforms=De.getUniforms(b),b.onBeforeCompile(Re,x),He=De.acquireProgram(Re,Le),ze.set(Le,He),ee.uniforms=Re.uniforms;const Ie=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ie.clippingPlanes=ge.uniform),pa(b,Re),ee.needsLights=Uc(b),ee.lightsStateVersion=be,ee.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.directionalShadowMap.value=G.state.directionalShadowMap,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotShadowMap.value=G.state.spotShadowMap,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMap.value=G.state.pointShadowMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=He,ee.uniformsList=null,He}function fa(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=Ys.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function pa(b,H){const J=re.get(b);J.outputColorSpace=H.outputColorSpace,J.batching=H.batching,J.batchingColor=H.batchingColor,J.instancing=H.instancing,J.instancingColor=H.instancingColor,J.instancingMorph=H.instancingMorph,J.skinning=H.skinning,J.morphTargets=H.morphTargets,J.morphNormals=H.morphNormals,J.morphColors=H.morphColors,J.morphTargetsCount=H.morphTargetsCount,J.numClippingPlanes=H.numClippingPlanes,J.numIntersection=H.numClipIntersection,J.vertexAlphas=H.vertexAlphas,J.vertexTangents=H.vertexTangents,J.toneMapping=H.toneMapping}function Dc(b,H,J,ee,G){H.isScene!==!0&&(H=me),A.resetTextureUnits();const ve=H.fog,be=ee.isMeshStandardMaterial?H.environment:null,Re=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Di,Le=(ee.isMeshStandardMaterial?W:S).get(ee.envMap||be),ze=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,He=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Ie=!!J.morphAttributes.position,Ze=!!J.morphAttributes.normal,Je=!!J.morphAttributes.color;let dt=wn;ee.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(dt=x.toneMapping);const ct=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,$e=ct!==void 0?ct.length:0,Ne=re.get(ee),xt=d.state.lights;if(L===!0&&(w===!0||b!==M)){const bt=b===M&&ee.id===T;ge.setState(ee,b,bt)}let Qe=!1;ee.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==xt.state.version||Ne.outputColorSpace!==Re||G.isBatchedMesh&&Ne.batching===!1||!G.isBatchedMesh&&Ne.batching===!0||G.isBatchedMesh&&Ne.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ne.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ne.instancing===!1||!G.isInstancedMesh&&Ne.instancing===!0||G.isSkinnedMesh&&Ne.skinning===!1||!G.isSkinnedMesh&&Ne.skinning===!0||G.isInstancedMesh&&Ne.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ne.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ne.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ne.instancingMorph===!1&&G.morphTexture!==null||Ne.envMap!==Le||ee.fog===!0&&Ne.fog!==ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ge.numPlanes||Ne.numIntersection!==ge.numIntersection)||Ne.vertexAlphas!==ze||Ne.vertexTangents!==He||Ne.morphTargets!==Ie||Ne.morphNormals!==Ze||Ne.morphColors!==Je||Ne.toneMapping!==dt||Ne.morphTargetsCount!==$e)&&(Qe=!0):(Qe=!0,Ne.__version=ee.version);let Vt=Ne.currentProgram;Qe===!0&&(Vt=hs(ee,H,G));let ti=!1,Lt=!1,Oi=!1;const rt=Vt.getUniforms(),Ot=Ne.uniforms;if(U.useProgram(Vt.program)&&(ti=!0,Lt=!0,Oi=!0),ee.id!==T&&(T=ee.id,Lt=!0),ti||M!==b){U.buffers.depth.getReversed()?(E.copy(b.projectionMatrix),Pu(E),Lu(E),rt.setValue(y,"projectionMatrix",E)):rt.setValue(y,"projectionMatrix",b.projectionMatrix),rt.setValue(y,"viewMatrix",b.matrixWorldInverse);const wt=rt.map.cameraPosition;wt!==void 0&&wt.setValue(y,fe.setFromMatrixPosition(b.matrixWorld)),le.logarithmicDepthBuffer&&rt.setValue(y,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&rt.setValue(y,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Lt=!0,Oi=!0)}if(G.isSkinnedMesh){rt.setOptional(y,G,"bindMatrix"),rt.setOptional(y,G,"bindMatrixInverse");const bt=G.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),rt.setValue(y,"boneTexture",bt.boneTexture,A))}G.isBatchedMesh&&(rt.setOptional(y,G,"batchingTexture"),rt.setValue(y,"batchingTexture",G._matricesTexture,A),rt.setOptional(y,G,"batchingIdTexture"),rt.setValue(y,"batchingIdTexture",G._indirectTexture,A),rt.setOptional(y,G,"batchingColorTexture"),G._colorsTexture!==null&&rt.setValue(y,"batchingColorTexture",G._colorsTexture,A));const Ft=J.morphAttributes;if((Ft.position!==void 0||Ft.normal!==void 0||Ft.color!==void 0)&&Fe.update(G,J,Vt),(Lt||Ne.receiveShadow!==G.receiveShadow)&&(Ne.receiveShadow=G.receiveShadow,rt.setValue(y,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Ot.envMap.value=Le,Ot.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&H.environment!==null&&(Ot.envMapIntensity.value=H.environmentIntensity),Lt&&(rt.setValue(y,"toneMappingExposure",x.toneMappingExposure),Ne.needsLights&&Ic(Ot,Oi),ve&&ee.fog===!0&&ye.refreshFogUniforms(Ot,ve),ye.refreshMaterialUniforms(Ot,ee,B,Q,d.state.transmissionRenderTarget[b.id]),Ys.upload(y,fa(Ne),Ot,A)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ys.upload(y,fa(Ne),Ot,A),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&rt.setValue(y,"center",G.center),rt.setValue(y,"modelViewMatrix",G.modelViewMatrix),rt.setValue(y,"normalMatrix",G.normalMatrix),rt.setValue(y,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const bt=ee.uniformsGroups;for(let wt=0,or=bt.length;wt<or;wt++){const In=bt[wt];k.update(In,Vt),k.bind(In,Vt)}}return Vt}function Ic(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Uc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,H,J){re.get(b.texture).__webglTexture=H,re.get(b.depthTexture).__webglTexture=J;const ee=re.get(b);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||$.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,H){const J=re.get(b);J.__webglFramebuffer=H,J.__useDefaultFramebuffer=H===void 0};const Nc=y.createFramebuffer();this.setRenderTarget=function(b,H=0,J=0){O=b,D=H,P=J;let ee=!0,G=null,ve=!1,be=!1;if(b){const Le=re.get(b);if(Le.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(y.FRAMEBUFFER,null),ee=!1;else if(Le.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Le.__hasExternalTextures)A.rebindTextures(b,re.get(b.texture).__webglTexture,re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ie=b.depthTexture;if(Le.__boundDepthTexture!==Ie){if(Ie!==null&&re.has(Ie)&&(b.width!==Ie.image.width||b.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const ze=b.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);const He=re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(He[H])?G=He[H][J]:G=He[H],ve=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?G=re.get(b).__webglMultisampledFramebuffer:Array.isArray(He)?G=He[J]:G=He,F.copy(b.viewport),X.copy(b.scissor),Y=b.scissorTest}else F.copy(Me).multiplyScalar(B).floor(),X.copy(Oe).multiplyScalar(B).floor(),Y=Ye;if(J!==0&&(G=Nc),U.bindFramebuffer(y.FRAMEBUFFER,G)&&ee&&U.drawBuffers(b,G),U.viewport(F),U.scissor(X),U.setScissorTest(Y),ve){const Le=re.get(b.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+H,Le.__webglTexture,J)}else if(be){const Le=re.get(b.texture),ze=H;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,Le.__webglTexture,J,ze)}else if(b!==null&&J!==0){const Le=re.get(b.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Le.__webglTexture,J)}T=-1},this.readRenderTargetPixels=function(b,H,J,ee,G,ve,be){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){U.bindFramebuffer(y.FRAMEBUFFER,Re);try{const Le=b.texture,ze=Le.format,He=Le.type;if(!le.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-ee&&J>=0&&J<=b.height-G&&y.readPixels(H,J,ee,G,We.convert(ze),We.convert(He),ve)}finally{const Le=O!==null?re.get(O).__webglFramebuffer:null;U.bindFramebuffer(y.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,H,J,ee,G,ve,be){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Re=Re[be]),Re){const Le=b.texture,ze=Le.format,He=Le.type;if(!le.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=b.width-ee&&J>=0&&J<=b.height-G){U.bindFramebuffer(y.FRAMEBUFFER,Re);const Ie=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Ie),y.bufferData(y.PIXEL_PACK_BUFFER,ve.byteLength,y.STREAM_READ),y.readPixels(H,J,ee,G,We.convert(ze),We.convert(He),0);const Ze=O!==null?re.get(O).__webglFramebuffer:null;U.bindFramebuffer(y.FRAMEBUFFER,Ze);const Je=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Ru(y,Je,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Ie),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ve),y.deleteBuffer(Ie),y.deleteSync(Je),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,H=null,J=0){b.isTexture!==!0&&(_i("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1]);const ee=Math.pow(2,-J),G=Math.floor(b.image.width*ee),ve=Math.floor(b.image.height*ee),be=H!==null?H.x:0,Re=H!==null?H.y:0;A.setTexture2D(b,0),y.copyTexSubImage2D(y.TEXTURE_2D,J,0,0,be,Re,G,ve),U.unbindTexture()};const Oc=y.createFramebuffer(),Fc=y.createFramebuffer();this.copyTextureToTexture=function(b,H,J=null,ee=null,G=0,ve=null){b.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,b=arguments[1],H=arguments[2],ve=arguments[3]||0,J=null),ve===null&&(G!==0?(_i("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=G,G=0):ve=0);let be,Re,Le,ze,He,Ie,Ze,Je,dt;const ct=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(J!==null)be=J.max.x-J.min.x,Re=J.max.y-J.min.y,Le=J.isBox3?J.max.z-J.min.z:1,ze=J.min.x,He=J.min.y,Ie=J.isBox3?J.min.z:0;else{const Ft=Math.pow(2,-G);be=Math.floor(ct.width*Ft),Re=Math.floor(ct.height*Ft),b.isDataArrayTexture?Le=ct.depth:b.isData3DTexture?Le=Math.floor(ct.depth*Ft):Le=1,ze=0,He=0,Ie=0}ee!==null?(Ze=ee.x,Je=ee.y,dt=ee.z):(Ze=0,Je=0,dt=0);const $e=We.convert(H.format),Ne=We.convert(H.type);let xt;H.isData3DTexture?(A.setTexture3D(H,0),xt=y.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(A.setTexture2DArray(H,0),xt=y.TEXTURE_2D_ARRAY):(A.setTexture2D(H,0),xt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,H.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,H.unpackAlignment);const Qe=y.getParameter(y.UNPACK_ROW_LENGTH),Vt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),ti=y.getParameter(y.UNPACK_SKIP_PIXELS),Lt=y.getParameter(y.UNPACK_SKIP_ROWS),Oi=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,ct.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,ct.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ze),y.pixelStorei(y.UNPACK_SKIP_ROWS,He),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Ie);const rt=b.isDataArrayTexture||b.isData3DTexture,Ot=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const Ft=re.get(b),bt=re.get(H),wt=re.get(Ft.__renderTarget),or=re.get(bt.__renderTarget);U.bindFramebuffer(y.READ_FRAMEBUFFER,wt.__webglFramebuffer),U.bindFramebuffer(y.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let In=0;In<Le;In++)rt&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,re.get(b).__webglTexture,G,Ie+In),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,re.get(H).__webglTexture,ve,dt+In)),y.blitFramebuffer(ze,He,be,Re,Ze,Je,be,Re,y.DEPTH_BUFFER_BIT,y.NEAREST);U.bindFramebuffer(y.READ_FRAMEBUFFER,null),U.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||re.has(b)){const Ft=re.get(b),bt=re.get(H);U.bindFramebuffer(y.READ_FRAMEBUFFER,Oc),U.bindFramebuffer(y.DRAW_FRAMEBUFFER,Fc);for(let wt=0;wt<Le;wt++)rt?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ft.__webglTexture,G,Ie+wt):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ft.__webglTexture,G),Ot?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,bt.__webglTexture,ve,dt+wt):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,bt.__webglTexture,ve),G!==0?y.blitFramebuffer(ze,He,be,Re,Ze,Je,be,Re,y.COLOR_BUFFER_BIT,y.NEAREST):Ot?y.copyTexSubImage3D(xt,ve,Ze,Je,dt+wt,ze,He,be,Re):y.copyTexSubImage2D(xt,ve,Ze,Je,ze,He,be,Re);U.bindFramebuffer(y.READ_FRAMEBUFFER,null),U.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Ot?b.isDataTexture||b.isData3DTexture?y.texSubImage3D(xt,ve,Ze,Je,dt,be,Re,Le,$e,Ne,ct.data):H.isCompressedArrayTexture?y.compressedTexSubImage3D(xt,ve,Ze,Je,dt,be,Re,Le,$e,ct.data):y.texSubImage3D(xt,ve,Ze,Je,dt,be,Re,Le,$e,Ne,ct):b.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,ve,Ze,Je,be,Re,$e,Ne,ct.data):b.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,ve,Ze,Je,ct.width,ct.height,$e,ct.data):y.texSubImage2D(y.TEXTURE_2D,ve,Ze,Je,be,Re,$e,Ne,ct);y.pixelStorei(y.UNPACK_ROW_LENGTH,Qe),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Vt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,ti),y.pixelStorei(y.UNPACK_SKIP_ROWS,Lt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Oi),ve===0&&H.generateMipmaps&&y.generateMipmap(xt),U.unbindTexture()},this.copyTextureToTexture3D=function(b,H,J=null,ee=null,G=0){return b.isTexture!==!0&&(_i("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,b=arguments[2],H=arguments[3],G=arguments[4]||0),_i('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,H,J,ee,G)},this.initRenderTarget=function(b){re.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),U.unbindTexture()},this.resetState=function(){D=0,P=0,O=null,U.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const bl={type:"change"},ia={type:"start"},bc={type:"end"},Bs=new Zo,Tl=new bn,B_=Math.cos(70*wu.DEG2RAD),pt=new z,Rt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hr=1e-6;class z_ extends ed{constructor(e,t=null){super(e,t),this.state=nt.NONE,this.enabled=!0,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ei.ROTATE,MIDDLE:Ei.DOLLY,RIGHT:Ei.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new $n,this._lastTargetPosition=new z,this._quat=new $n().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ka,this._sphericalDelta=new Ka,this._scale=1,this._panOffset=new z,this._rotateStart=new ue,this._rotateEnd=new ue,this._rotateDelta=new ue,this._panStart=new ue,this._panEnd=new ue,this._panDelta=new ue,this._dollyStart=new ue,this._dollyEnd=new ue,this._dollyDelta=new ue,this._dollyDirection=new z,this._mouse=new ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=H_.bind(this),this._onPointerDown=k_.bind(this),this._onPointerUp=V_.bind(this),this._onContextMenu=Z_.bind(this),this._onMouseWheel=X_.bind(this),this._onKeyDown=q_.bind(this),this._onTouchStart=Y_.bind(this),this._onTouchMove=j_.bind(this),this._onMouseDown=G_.bind(this),this._onMouseMove=W_.bind(this),this._interceptControlDown=$_.bind(this),this._interceptControlUp=K_.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bl),this.update(),this.state=nt.NONE}update(e=null){const t=this.object.position;pt.copy(t).sub(this.target),pt.applyQuaternion(this._quat),this._spherical.setFromVector3(pt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Rt:n>Math.PI&&(n-=Rt),s<-Math.PI?s+=Rt:s>Math.PI&&(s-=Rt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pt.setFromSpherical(this._spherical),pt.applyQuaternion(this._quatInverse),t.copy(this.target).add(pt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=pt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=pt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Bs.origin.copy(this.object.position),Bs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Bs.direction))<B_?this.object.lookAt(this.target):(Tl.setFromNormalAndCoplanarPoint(this.object.up,this.target),Bs.intersectPlane(Tl,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hr||this._lastTargetPosition.distanceToSquared(this.target)>Hr?(this.dispatchEvent(bl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rt/60*this.autoRotateSpeed*e:Rt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pt.setFromMatrixColumn(t,0),pt.multiplyScalar(-e),this._panOffset.add(pt)}_panUp(e,t){this.screenSpacePanning===!0?pt.setFromMatrixColumn(t,1):(pt.setFromMatrixColumn(t,0),pt.crossVectors(this.object.up,pt)),pt.multiplyScalar(e),this._panOffset.add(pt)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;pt.copy(s).sub(this.target);let r=pt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Rt*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function k_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function H_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function V_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(bc),this.state=nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function G_(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ei.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=nt.DOLLY;break;case Ei.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}break;case Ei.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(ia)}function W_(i){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function X_(i){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(i.preventDefault(),this.dispatchEvent(ia),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(bc))}function q_(i){this.enabled!==!1&&this._handleKeyDown(i)}function Y_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=nt.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=nt.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(ia)}function j_(i){switch(this._trackPointer(i),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=nt.NONE}}function Z_(i){this.enabled!==!1&&i.preventDefault()}function $_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function K_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class J_{constructor(e){this.camera=new zt(75,e.clientWidth/e.clientHeight,.1,1e3),this.camera.position.set(0,0,100),this.controls=new z_(this.camera,e),this.controls.enableDamping=!0,this.controls.dampingFactor=.05,this.controls.rotateSpeed=.7,this.autoRotate=!1,this.controls.autoRotate=this.autoRotate,this.controls.autoRotateSpeed=1,window.addEventListener("resize",()=>{this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix()})}update(){this.controls.update()}lookAt(e){this.camera.lookAt(e),this.controls.target.copy(e)}setAutoRotate(e){this.autoRotate=e,this.controls.autoRotate=e}fitToObject(e,t=1.5){if(!e)return;const n=new Qn().setFromObject(e),s=new z;n.getCenter(s);const r=new z;n.getSize(r);const o=Math.max(r.x,r.y,r.z),a=this.camera.fov*(Math.PI/180);let l=o/(2*Math.tan(a/2));l*=t,this.camera.position.set(s.x,s.y,s.z+l),this.controls.target.copy(s),this.camera.lookAt(s),this.controls.update()}}class Q_{constructor(){this.scene=new nh,this.scene.background=new ke(1118481);const e=new jh(16777215,.5);this.scene.add(e);const t=new Za(16777215,.8);t.position.set(0,10,10),this.scene.add(t);const n=new Za(16777215,.3);n.position.set(0,-5,-10),this.scene.add(n)}setBackgroundColor(e){this.scene.background=new ke(e)}addObject(e){this.scene.add(e)}removeObject(e){this.scene.remove(e)}createGridHelper(e=100,t=20,n=4473924,s=8947848){const r=new Jh(e,t,n,s);return r.material.opacity=.2,r.material.transparent=!0,r.position.y=-20,r.visible=!1,this.scene.add(r),r}createAxisHelper(e=20){const t=new Qh(e);return t.visible=!1,this.scene.add(t),t}update(e){}}const eg=`
  // Improved 3D noise for better dispersion
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float improvedNoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod289(i);
    vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  float enhancedFBM(vec3 x) {
    float v = 0.0;
    float a = 0.5;
    vec3 shift = vec3(100);
    for (int i = 0; i < 4; ++i) {
      v += a * improvedNoise(x);
      x = x * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }
`,tg=`
  vec3 disperseColor(vec3 baseColor, float dispersionAmount, float time, vec2 uv) {
    float r = enhancedFBM(vec3(uv * 1.1, time * 0.5));
    float g = enhancedFBM(vec3(uv * 1.2, time * 0.4));
    float b = enhancedFBM(vec3(uv * 1.3, time * 0.3));
    
    return baseColor + vec3(r, g, b) * dispersionAmount;
  }
`,Uo={gold:{baseColor:new ke(16766720),highlightColor:new ke(16777164),metalness:1.2,roughness:.1,flowSpeed:.4},silver:{baseColor:new ke(12632256),highlightColor:new ke(16777215),metalness:1,roughness:.15,flowSpeed:.5},bronze:{baseColor:new ke(13467442),highlightColor:new ke(16767673),metalness:.9,roughness:.25,flowSpeed:.3},chrome:{baseColor:new ke(8952234),highlightColor:new ke(16777215),metalness:1.5,roughness:.05,flowSpeed:.7}},ng=`
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  
  vec4 worldPosition = modelMatrix * vec4(position, 1.0);
  vWorldPosition = worldPosition.xyz;
  vViewPosition = cameraPosition - worldPosition.xyz;
  
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`,ig=`
${eg}
${tg}

precision mediump float;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying vec3 vWorldPosition;

uniform float u_time;
uniform vec2 u_resolution;
uniform float u_effectStrength;
uniform float u_distortionAmount;
uniform float u_metalness;
uniform float u_colorShift;
uniform sampler2D u_texture;
uniform bool u_hasTexture;
uniform bool u_wireframe;
uniform bool u_isSVG;

uniform vec3 u_baseColor;
uniform vec3 u_highlightColor;
uniform float u_roughness;
uniform float u_flowSpeed;

// Simple noise function
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

// Value noise
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);
  
  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Fractional Brownian Motion
float fbm(vec2 st) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 3.0;
  
  for (int i = 0; i < 3; i++) {
    value += amplitude * noise(st * frequency);
    frequency *= 2.0;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  
  // Enhanced lighting setup
  vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
  float diffuse = max(dot(normal, lightDir), 0.0);
  vec3 halfDir = normalize(lightDir + viewDir);
  float specular = pow(max(dot(normal, halfDir), 0.0), 32.0);
  float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 5.0);
  
  // Position-based UVs for consistent mapping
  vec2 worldUV = vUv;
  if (u_isSVG) {
    // Use modified UVs for better dispersion coverage
    worldUV = vec2(
      vWorldPosition.x * 0.02 + vWorldPosition.z * 0.01,
      vWorldPosition.y * 0.02 + vWorldPosition.z * 0.01
    );
  }
  
  // Calculate flow effect
  float t = u_time * u_flowSpeed;
  float flowPattern = enhancedFBM(vec3(worldUV * 5.0, t * 0.2));
  
  // Enhanced distortion
  vec2 distortedUV = worldUV + vec2(
    enhancedFBM(vec3(worldUV * 3.0, t * 0.1)) * 0.03,
    enhancedFBM(vec3(worldUV * 3.0, t * 0.15 + 10.0)) * 0.03
  ) * u_distortionAmount;
  
  // Apply color dispersion and metal effect
  vec3 baseColorWithDispersion = disperseColor(u_baseColor, u_distortionAmount * 0.5, t, distortedUV);
  vec3 metallicColor = mix(baseColorWithDispersion, u_highlightColor, flowPattern * (1.0 - u_roughness));
  
  // Add highlights and reflections
  metallicColor += specular * u_highlightColor * u_metalness * (1.0 + flowPattern * 0.5);
  metallicColor += fresnel * u_highlightColor * u_metalness;
  
  // Add iridescence
  float iridescence = sin(dot(normal, viewDir) * 5.0 + t * 0.2) * 0.5 + 0.5;
  vec3 finalColor = metallicColor * (0.6 + diffuse * 0.4);
  finalColor += u_highlightColor * iridescence * 0.1 * u_metalness;
  
  gl_FragColor = vec4(finalColor, 1.0);
}`,sg=`
// ...existing uniforms and helper functions...

void main() {
  vec4 texColor = texture2D(u_texture, vUv);
  vec3 normal = normalize(vNormal);
  vec3 viewDir = normalize(vViewPosition);
  
  // Enhanced fresnel effect for 2D
  float fresnel = pow(1.0 - abs(dot(normal, viewDir)), 3.0);
  
  // Apply effect only to non-white areas
  float luminance = (texColor.r + texColor.g + texColor.b) / 3.0;
  float effectMask = 1.0 - smoothstep(0.7, 0.9, luminance);
  
  // Flow effect
  float t = u_time * u_flowSpeed;
  vec2 flowUV = vUv + vec2(
    fbm(vUv * 2.0 + t),
    fbm(vUv * 2.0 - t)
  ) * u_effectStrength * effectMask;
  
  // Sample texture with flow distortion
  vec4 distortedColor = texture2D(u_texture, flowUV);
  
  // Create metallic effect
  vec3 metallicColor = mix(
    u_baseColor,
    u_highlightColor,
    fbm(flowUV * 5.0 + t) * (1.0 - u_roughness)
  );
  
  // Mix based on luminance mask
  vec3 finalColor = mix(
    distortedColor.rgb,
    metallicColor,
    effectMask * u_metalness
  );
  
  // Add highlights and fresnel
  finalColor += fresnel * u_highlightColor * effectMask * u_metalness;
  
  gl_FragColor = vec4(finalColor, texColor.a);
}`;function No(i=!1,e=null,t="silver"){const n=Uo[t]||Uo.silver,s=i?sg:ig,r={u_time:{value:0},u_resolution:{value:new ue(window.innerWidth,window.innerHeight)},u_effectStrength:{value:.7},u_distortionAmount:{value:1},u_metalness:{value:1},u_colorShift:{value:1},u_hasTexture:{value:i},u_wireframe:{value:!1},u_baseColor:{value:n.baseColor},u_highlightColor:{value:n.highlightColor},u_roughness:{value:n.roughness},u_flowSpeed:{value:n.flowSpeed},u_isSVG:{value:!1},u_svgScale:{value:new ue(1,1)}};return i&&e&&(r.u_texture={value:e}),new gn({uniforms:r,vertexShader:ng,fragmentShader:s,side:Qt,transparent:!0,blending:qn})}class rg{constructor(){this.params={effectStrength:.7,distortionAmount:1,metalness:1,colorShift:1,backgroundColor:"#111111",showGrid:!1,wireframe:!1,autoRotate:!1,metalPreset:"silver",flowSpeed:.5,roughness:.15,dispersionStrength:1,dispersionScale:1,flowIntensity:1},this.clock=new $h,this.elapsedTime=0,this.scene=null}setScene(e){this.scene=e}update(){return this.elapsedTime=this.clock.getElapsedTime(),this.elapsedTime}getParams(){return this.params}setParam(e,t){e in this.params&&(e==="backgroundColor"?(this.params[e]=t,this.scene&&(this.scene.background=new ke(t))):this.params[e]=t)}setMetalPreset(e){!e||!this.scene||(this.params.metalPreset=e,this.scene.traverse(t=>{if(t.isMesh&&t.material&&t.material.type==="ShaderMaterial"){const n=t.material.uniforms;if(n.u_baseColor&&n.u_highlightColor){const s=Uo[e];s&&(n.u_baseColor.value.copy(s.baseColor),n.u_highlightColor.value.copy(s.highlightColor),n.u_metalness.value=s.metalness,n.u_roughness.value=s.roughness,n.u_flowSpeed.value=s.flowSpeed)}}}))}updateMaterialUniforms(e){!e||!e.uniforms||(e.uniforms.u_time!==void 0&&(e.uniforms.u_time.value=this.elapsedTime),e.uniforms.u_effectStrength!==void 0&&(e.uniforms.u_effectStrength.value=this.params.effectStrength),e.uniforms.u_distortionAmount!==void 0&&(e.uniforms.u_distortionAmount.value=this.params.distortionAmount),e.uniforms.u_metalness!==void 0&&(e.uniforms.u_metalness.value=this.params.metalness),e.uniforms.u_colorShift!==void 0&&(e.uniforms.u_colorShift.value=this.params.colorShift),e.uniforms.u_wireframe!==void 0&&(e.uniforms.u_wireframe.value=this.params.wireframe),e.uniforms.u_flowSpeed!==void 0&&(e.uniforms.u_flowSpeed.value=this.params.flowSpeed),e.uniforms.u_roughness!==void 0&&(e.uniforms.u_roughness.value=this.params.roughness),e.uniforms.u_dispersionStrength!==void 0&&(e.uniforms.u_dispersionStrength.value=this.params.dispersionStrength),e.uniforms.u_dispersionScale!==void 0&&(e.uniforms.u_dispersionScale.value=this.params.dispersionScale),e.uniforms.u_flowIntensity!==void 0&&(e.uniforms.u_flowIntensity.value=this.params.flowIntensity))}}function og(i){if(!(typeof window>"u")){var e=document.createElement("style");return e.setAttribute("type","text/css"),e.innerHTML=i,document.head.appendChild(e),i}}function Mi(i,e){var t=i.__state.conversionName.toString(),n=Math.round(i.r),s=Math.round(i.g),r=Math.round(i.b),o=i.a,a=Math.round(i.h),l=i.s.toFixed(1),c=i.v.toFixed(1);if(e||t==="THREE_CHAR_HEX"||t==="SIX_CHAR_HEX"){for(var u=i.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(t==="CSS_RGB")return"rgb("+n+","+s+","+r+")";if(t==="CSS_RGBA")return"rgba("+n+","+s+","+r+","+o+")";if(t==="HEX")return"0x"+i.hex.toString(16);if(t==="RGB_ARRAY")return"["+n+","+s+","+r+"]";if(t==="RGBA_ARRAY")return"["+n+","+s+","+r+","+o+"]";if(t==="RGB_OBJ")return"{r:"+n+",g:"+s+",b:"+r+"}";if(t==="RGBA_OBJ")return"{r:"+n+",g:"+s+",b:"+r+",a:"+o+"}";if(t==="HSV_OBJ")return"{h:"+a+",s:"+l+",v:"+c+"}";if(t==="HSVA_OBJ")return"{h:"+a+",s:"+l+",v:"+c+",a:"+o+"}"}return"unknown format"}var Al=Array.prototype.forEach,Gi=Array.prototype.slice,de={BREAK:{},extend:function(e){return this.each(Gi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(s){this.isUndefined(t[s])||(e[s]=t[s])}).bind(this))},this),e},defaults:function(e){return this.each(Gi.call(arguments,1),function(t){var n=this.isObject(t)?Object.keys(t):[];n.forEach((function(s){this.isUndefined(e[s])&&(e[s]=t[s])}).bind(this))},this),e},compose:function(){var e=Gi.call(arguments);return function(){for(var t=Gi.call(arguments),n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},each:function(e,t,n){if(e){if(Al&&e.forEach&&e.forEach===Al)e.forEach(t,n);else if(e.length===e.length+0){var s=void 0,r=void 0;for(s=0,r=e.length;s<r;s++)if(s in e&&t.call(n,e[s],s)===this.BREAK)return}else for(var o in e)if(t.call(n,e[o],o)===this.BREAK)return}},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var s=void 0;return function(){var r=this,o=arguments;function a(){s=null,n||e.apply(r,o)}var l=n||!s;clearTimeout(s),s=setTimeout(a,t),l&&e.apply(r,o)}},toArray:function(e){return e.toArray?e.toArray():Gi.call(e)},isUndefined:function(e){return e===void 0},isNull:function(e){return e===null},isNaN:function(i){function e(t){return i.apply(this,arguments)}return e.toString=function(){return i.toString()},e}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(e){return e===Object(e)},isNumber:function(e){return e===e+0},isString:function(e){return e===e+""},isBoolean:function(e){return e===!1||e===!0},isFunction:function(e){return e instanceof Function}},ag=[{litmus:de.isString,conversions:{THREE_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString()+t[1].toString()+t[2].toString()+t[2].toString()+t[3].toString()+t[3].toString(),0)}},write:Mi},SIX_CHAR_HEX:{read:function(e){var t=e.match(/^#([A-F0-9]{6})$/i);return t===null?!1:{space:"HEX",hex:parseInt("0x"+t[1].toString(),0)}},write:Mi},CSS_RGB:{read:function(e){var t=e.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3])}},write:Mi},CSS_RGBA:{read:function(e){var t=e.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return t===null?!1:{space:"RGB",r:parseFloat(t[1]),g:parseFloat(t[2]),b:parseFloat(t[3]),a:parseFloat(t[4])}},write:Mi}}},{litmus:de.isNumber,conversions:{HEX:{read:function(e){return{space:"HEX",hex:e,conversionName:"HEX"}},write:function(e){return e.hex}}}},{litmus:de.isArray,conversions:{RGB_ARRAY:{read:function(e){return e.length!==3?!1:{space:"RGB",r:e[0],g:e[1],b:e[2]}},write:function(e){return[e.r,e.g,e.b]}},RGBA_ARRAY:{read:function(e){return e.length!==4?!1:{space:"RGB",r:e[0],g:e[1],b:e[2],a:e[3]}},write:function(e){return[e.r,e.g,e.b,e.a]}}}},{litmus:de.isObject,conversions:{RGBA_OBJ:{read:function(e){return de.isNumber(e.r)&&de.isNumber(e.g)&&de.isNumber(e.b)&&de.isNumber(e.a)?{space:"RGB",r:e.r,g:e.g,b:e.b,a:e.a}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b,a:e.a}}},RGB_OBJ:{read:function(e){return de.isNumber(e.r)&&de.isNumber(e.g)&&de.isNumber(e.b)?{space:"RGB",r:e.r,g:e.g,b:e.b}:!1},write:function(e){return{r:e.r,g:e.g,b:e.b}}},HSVA_OBJ:{read:function(e){return de.isNumber(e.h)&&de.isNumber(e.s)&&de.isNumber(e.v)&&de.isNumber(e.a)?{space:"HSV",h:e.h,s:e.s,v:e.v,a:e.a}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v,a:e.a}}},HSV_OBJ:{read:function(e){return de.isNumber(e.h)&&de.isNumber(e.s)&&de.isNumber(e.v)?{space:"HSV",h:e.h,s:e.s,v:e.v}:!1},write:function(e){return{h:e.h,s:e.s,v:e.v}}}}}],Wi=void 0,zs=void 0,Oo=function(){zs=!1;var e=arguments.length>1?de.toArray(arguments):arguments[0];return de.each(ag,function(t){if(t.litmus(e))return de.each(t.conversions,function(n,s){if(Wi=n.read(e),zs===!1&&Wi!==!1)return zs=Wi,Wi.conversionName=s,Wi.conversion=n,de.BREAK}),de.BREAK}),zs},wl=void 0,Qs={hsv_to_rgb:function(e,t,n){var s=Math.floor(e/60)%6,r=e/60-Math.floor(e/60),o=n*(1-t),a=n*(1-r*t),l=n*(1-(1-r)*t),c=[[n,l,o],[a,n,o],[o,n,l],[o,a,n],[l,o,n],[n,o,a]][s];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(e,t,n){var s=Math.min(e,t,n),r=Math.max(e,t,n),o=r-s,a=void 0,l=void 0;if(r!==0)l=o/r;else return{h:NaN,s:0,v:0};return e===r?a=(t-n)/o:t===r?a=2+(n-e)/o:a=4+(e-t)/o,a/=6,a<0&&(a+=1),{h:a*360,s:l,v:r/255}},rgb_to_hex:function(e,t,n){var s=this.hex_with_component(0,2,e);return s=this.hex_with_component(s,1,t),s=this.hex_with_component(s,0,n),s},component_from_hex:function(e,t){return e>>t*8&255},hex_with_component:function(e,t,n){return n<<(wl=t*8)|e&~(255<<wl)}},lg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},Zt=function(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")},$t=function(){function i(e,t){for(var n=0;n<t.length;n++){var s=t[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}}(),Rn=function i(e,t,n){e===null&&(e=Function.prototype);var s=Object.getOwnPropertyDescriptor(e,t);if(s===void 0){var r=Object.getPrototypeOf(e);return r===null?void 0:i(r,t,n)}else{if("value"in s)return s.value;var o=s.get;return o===void 0?void 0:o.call(n)}},Pn=function(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);i.prototype=Object.create(e&&e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(i,e):i.__proto__=e)},Ln=function(i,e){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:i},vt=function(){function i(){if(Zt(this,i),this.__state=Oo.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return $t(i,[{key:"toString",value:function(){return Mi(this)}},{key:"toHexString",value:function(){return Mi(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function sa(i,e,t){Object.defineProperty(i,e,{get:function(){return this.__state.space==="RGB"?this.__state[e]:(vt.recalculateRGB(this,e,t),this.__state[e])},set:function(s){this.__state.space!=="RGB"&&(vt.recalculateRGB(this,e,t),this.__state.space="RGB"),this.__state[e]=s}})}function ra(i,e){Object.defineProperty(i,e,{get:function(){return this.__state.space==="HSV"?this.__state[e]:(vt.recalculateHSV(this),this.__state[e])},set:function(n){this.__state.space!=="HSV"&&(vt.recalculateHSV(this),this.__state.space="HSV"),this.__state[e]=n}})}vt.recalculateRGB=function(i,e,t){if(i.__state.space==="HEX")i.__state[e]=Qs.component_from_hex(i.__state.hex,t);else if(i.__state.space==="HSV")de.extend(i.__state,Qs.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};vt.recalculateHSV=function(i){var e=Qs.rgb_to_hsv(i.r,i.g,i.b);de.extend(i.__state,{s:e.s,v:e.v}),de.isNaN(e.h)?de.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=e.h};vt.COMPONENTS=["r","g","b","h","s","v","hex","a"];sa(vt.prototype,"r",2);sa(vt.prototype,"g",1);sa(vt.prototype,"b",0);ra(vt.prototype,"h");ra(vt.prototype,"s");ra(vt.prototype,"v");Object.defineProperty(vt.prototype,"a",{get:function(){return this.__state.a},set:function(e){this.__state.a=e}});Object.defineProperty(vt.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Qs.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(e){this.__state.space="HEX",this.__state.hex=e}});var ei=function(){function i(e,t){Zt(this,i),this.initialValue=e[t],this.domElement=document.createElement("div"),this.object=e,this.property=t,this.__onChange=void 0,this.__onFinishChange=void 0}return $t(i,[{key:"onChange",value:function(t){return this.__onChange=t,this}},{key:"onFinishChange",value:function(t){return this.__onFinishChange=t,this}},{key:"setValue",value:function(t){return this.object[this.property]=t,this.__onChange&&this.__onChange.call(this,t),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),cg={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},Tc={};de.each(cg,function(i,e){de.each(i,function(t){Tc[t]=e})});var ug=/(\d+(\.\d+)?)px/;function Kt(i){if(i==="0"||de.isUndefined(i))return 0;var e=i.match(ug);return de.isNull(e)?0:parseFloat(e[1])}var K={makeSelectable:function(e,t){e===void 0||e.style===void 0||(e.onselectstart=t?function(){return!1}:function(){},e.style.MozUserSelect=t?"auto":"none",e.style.KhtmlUserSelect=t?"auto":"none",e.unselectable=t?"on":"off")},makeFullscreen:function(e,t,n){var s=n,r=t;de.isUndefined(r)&&(r=!0),de.isUndefined(s)&&(s=!0),e.style.position="absolute",r&&(e.style.left=0,e.style.right=0),s&&(e.style.top=0,e.style.bottom=0)},fakeEvent:function(e,t,n,s){var r=n||{},o=Tc[t];if(!o)throw new Error("Event type "+t+" not supported.");var a=document.createEvent(o);switch(o){case"MouseEvents":{var l=r.x||r.clientX||0,c=r.y||r.clientY||0;a.initMouseEvent(t,r.bubbles||!1,r.cancelable||!0,window,r.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=a.initKeyboardEvent||a.initKeyEvent;de.defaults(r,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(t,r.bubbles||!1,r.cancelable,window,r.ctrlKey,r.altKey,r.shiftKey,r.metaKey,r.keyCode,r.charCode);break}default:{a.initEvent(t,r.bubbles||!1,r.cancelable||!0);break}}de.defaults(a,s),e.dispatchEvent(a)},bind:function(e,t,n,s){var r=s||!1;return e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,n),K},unbind:function(e,t,n,s){var r=s||!1;return e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n),K},addClass:function(e,t){if(e.className===void 0)e.className=t;else if(e.className!==t){var n=e.className.split(/ +/);n.indexOf(t)===-1&&(n.push(t),e.className=n.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return K},removeClass:function(e,t){if(t)if(e.className===t)e.removeAttribute("class");else{var n=e.className.split(/ +/),s=n.indexOf(t);s!==-1&&(n.splice(s,1),e.className=n.join(" "))}else e.className=void 0;return K},hasClass:function(e,t){return new RegExp("(?:^|\\s+)"+t+"(?:\\s+|$)").test(e.className)||!1},getWidth:function(e){var t=getComputedStyle(e);return Kt(t["border-left-width"])+Kt(t["border-right-width"])+Kt(t["padding-left"])+Kt(t["padding-right"])+Kt(t.width)},getHeight:function(e){var t=getComputedStyle(e);return Kt(t["border-top-width"])+Kt(t["border-bottom-width"])+Kt(t["padding-top"])+Kt(t["padding-bottom"])+Kt(t.height)},getOffset:function(e){var t=e,n={left:0,top:0};if(t.offsetParent)do n.left+=t.offsetLeft,n.top+=t.offsetTop,t=t.offsetParent;while(t);return n},isActive:function(e){return e===document.activeElement&&(e.type||e.href)}},Ac=function(i){Pn(e,i);function e(t,n){Zt(this,e);var s=Ln(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=s;s.__prev=s.getValue(),s.__checkbox=document.createElement("input"),s.__checkbox.setAttribute("type","checkbox");function o(){r.setValue(!r.__prev)}return K.bind(s.__checkbox,"change",o,!1),s.domElement.appendChild(s.__checkbox),s.updateDisplay(),s}return $t(e,[{key:"setValue",value:function(n){var s=Rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),s}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ei),hg=function(i){Pn(e,i);function e(t,n,s){Zt(this,e);var r=Ln(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s,a=r;if(r.__select=document.createElement("select"),de.isArray(o)){var l={};de.each(o,function(c){l[c]=c}),o=l}return de.each(o,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),a.__select.appendChild(h)}),r.updateDisplay(),K.bind(r.__select,"change",function(){var c=this.options[this.selectedIndex].value;a.setValue(c)}),r.domElement.appendChild(r.__select),r}return $t(e,[{key:"setValue",value:function(n){var s=Rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,n);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),s}},{key:"updateDisplay",value:function(){return K.isActive(this.__select)?this:(this.__select.value=this.getValue(),Rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this))}}]),e}(ei),dg=function(i){Pn(e,i);function e(t,n){Zt(this,e);var s=Ln(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),r=s;function o(){r.setValue(r.__input.value)}function a(){r.__onFinishChange&&r.__onFinishChange.call(r,r.getValue())}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),K.bind(s.__input,"keyup",o),K.bind(s.__input,"change",o),K.bind(s.__input,"blur",a),K.bind(s.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return $t(e,[{key:"updateDisplay",value:function(){return K.isActive(this.__input)||(this.__input.value=this.getValue()),Rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(ei);function Cl(i){var e=i.toString();return e.indexOf(".")>-1?e.length-e.indexOf(".")-1:0}var wc=function(i){Pn(e,i);function e(t,n,s){Zt(this,e);var r=Ln(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=s||{};return r.__min=o.min,r.__max=o.max,r.__step=o.step,de.isUndefined(r.__step)?r.initialValue===0?r.__impliedStep=1:r.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(r.initialValue))/Math.LN10))/10:r.__impliedStep=r.__step,r.__precision=Cl(r.__impliedStep),r}return $t(e,[{key:"setValue",value:function(n){var s=n;return this.__min!==void 0&&s<this.__min?s=this.__min:this.__max!==void 0&&s>this.__max&&(s=this.__max),this.__step!==void 0&&s%this.__step!==0&&(s=Math.round(s/this.__step)*this.__step),Rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"setValue",this).call(this,s)}},{key:"min",value:function(n){return this.__min=n,this}},{key:"max",value:function(n){return this.__max=n,this}},{key:"step",value:function(n){return this.__step=n,this.__impliedStep=n,this.__precision=Cl(n),this}}]),e}(ei);function fg(i,e){var t=Math.pow(10,e);return Math.round(i*t)/t}var er=function(i){Pn(e,i);function e(t,n,s){Zt(this,e);var r=Ln(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,s));r.__truncationSuspended=!1;var o=r,a=void 0;function l(){var g=parseFloat(o.__input.value);de.isNaN(g)||o.setValue(g)}function c(){o.__onFinishChange&&o.__onFinishChange.call(o,o.getValue())}function u(){c()}function h(g){var _=a-g.clientY;o.setValue(o.getValue()+_*o.__impliedStep),a=g.clientY}function f(){K.unbind(window,"mousemove",h),K.unbind(window,"mouseup",f),c()}function m(g){K.bind(window,"mousemove",h),K.bind(window,"mouseup",f),a=g.clientY}return r.__input=document.createElement("input"),r.__input.setAttribute("type","text"),K.bind(r.__input,"change",l),K.bind(r.__input,"blur",u),K.bind(r.__input,"mousedown",m),K.bind(r.__input,"keydown",function(g){g.keyCode===13&&(o.__truncationSuspended=!0,this.blur(),o.__truncationSuspended=!1,c())}),r.updateDisplay(),r.domElement.appendChild(r.__input),r}return $t(e,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():fg(this.getValue(),this.__precision),Rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(wc);function Rl(i,e,t,n,s){return n+(s-n)*((i-e)/(t-e))}var Fo=function(i){Pn(e,i);function e(t,n,s,r,o){Zt(this,e);var a=Ln(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n,{min:s,max:r,step:o})),l=a;a.__background=document.createElement("div"),a.__foreground=document.createElement("div"),K.bind(a.__background,"mousedown",c),K.bind(a.__background,"touchstart",f),K.addClass(a.__background,"slider"),K.addClass(a.__foreground,"slider-fg");function c(_){document.activeElement.blur(),K.bind(window,"mousemove",u),K.bind(window,"mouseup",h),u(_)}function u(_){_.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(Rl(_.clientX,p.left,p.right,l.__min,l.__max)),!1}function h(){K.unbind(window,"mousemove",u),K.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(_){_.touches.length===1&&(K.bind(window,"touchmove",m),K.bind(window,"touchend",g),m(_))}function m(_){var p=_.touches[0].clientX,d=l.__background.getBoundingClientRect();l.setValue(Rl(p,d.left,d.right,l.__min,l.__max))}function g(){K.unbind(window,"touchmove",m),K.unbind(window,"touchend",g),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return a.updateDisplay(),a.__background.appendChild(a.__foreground),a.domElement.appendChild(a.__background),a}return $t(e,[{key:"updateDisplay",value:function(){var n=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=n*100+"%",Rn(e.prototype.__proto__||Object.getPrototypeOf(e.prototype),"updateDisplay",this).call(this)}}]),e}(wc),Cc=function(i){Pn(e,i);function e(t,n,s){Zt(this,e);var r=Ln(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n)),o=r;return r.__button=document.createElement("div"),r.__button.innerHTML=s===void 0?"Fire":s,K.bind(r.__button,"click",function(a){return a.preventDefault(),o.fire(),!1}),K.addClass(r.__button,"button"),r.domElement.appendChild(r.__button),r}return $t(e,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),e}(ei),Bo=function(i){Pn(e,i);function e(t,n){Zt(this,e);var s=Ln(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t,n));s.__color=new vt(s.getValue()),s.__temp=new vt(0);var r=s;s.domElement=document.createElement("div"),K.makeSelectable(s.domElement,!1),s.__selector=document.createElement("div"),s.__selector.className="selector",s.__saturation_field=document.createElement("div"),s.__saturation_field.className="saturation-field",s.__field_knob=document.createElement("div"),s.__field_knob.className="field-knob",s.__field_knob_border="2px solid ",s.__hue_knob=document.createElement("div"),s.__hue_knob.className="hue-knob",s.__hue_field=document.createElement("div"),s.__hue_field.className="hue-field",s.__input=document.createElement("input"),s.__input.type="text",s.__input_textShadow="0 1px 1px ",K.bind(s.__input,"keydown",function(_){_.keyCode===13&&h.call(this)}),K.bind(s.__input,"blur",h),K.bind(s.__selector,"mousedown",function(){K.addClass(this,"drag").bind(window,"mouseup",function(){K.removeClass(r.__selector,"drag")})}),K.bind(s.__selector,"touchstart",function(){K.addClass(this,"drag").bind(window,"touchend",function(){K.removeClass(r.__selector,"drag")})});var o=document.createElement("div");de.extend(s.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),de.extend(s.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:s.__field_knob_border+(s.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),de.extend(s.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),de.extend(s.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),de.extend(o.style,{width:"100%",height:"100%",background:"none"}),Pl(o,"top","rgba(0,0,0,0)","#000"),de.extend(s.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),mg(s.__hue_field),de.extend(s.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:s.__input_textShadow+"rgba(0,0,0,0.7)"}),K.bind(s.__saturation_field,"mousedown",a),K.bind(s.__saturation_field,"touchstart",a),K.bind(s.__field_knob,"mousedown",a),K.bind(s.__field_knob,"touchstart",a),K.bind(s.__hue_field,"mousedown",l),K.bind(s.__hue_field,"touchstart",l);function a(_){m(_),K.bind(window,"mousemove",m),K.bind(window,"touchmove",m),K.bind(window,"mouseup",c),K.bind(window,"touchend",c)}function l(_){g(_),K.bind(window,"mousemove",g),K.bind(window,"touchmove",g),K.bind(window,"mouseup",u),K.bind(window,"touchend",u)}function c(){K.unbind(window,"mousemove",m),K.unbind(window,"touchmove",m),K.unbind(window,"mouseup",c),K.unbind(window,"touchend",c),f()}function u(){K.unbind(window,"mousemove",g),K.unbind(window,"touchmove",g),K.unbind(window,"mouseup",u),K.unbind(window,"touchend",u),f()}function h(){var _=Oo(this.value);_!==!1?(r.__color.__state=_,r.setValue(r.__color.toOriginal())):this.value=r.__color.toString()}function f(){r.__onFinishChange&&r.__onFinishChange.call(r,r.__color.toOriginal())}s.__saturation_field.appendChild(o),s.__selector.appendChild(s.__field_knob),s.__selector.appendChild(s.__saturation_field),s.__selector.appendChild(s.__hue_field),s.__hue_field.appendChild(s.__hue_knob),s.domElement.appendChild(s.__input),s.domElement.appendChild(s.__selector),s.updateDisplay();function m(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=r.__saturation_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,R=d.clientX,v=d.clientY,x=(R-p.left)/(p.right-p.left),N=1-(v-p.top)/(p.bottom-p.top);return N>1?N=1:N<0&&(N=0),x>1?x=1:x<0&&(x=0),r.__color.v=N,r.__color.s=x,r.setValue(r.__color.toOriginal()),!1}function g(_){_.type.indexOf("touch")===-1&&_.preventDefault();var p=r.__hue_field.getBoundingClientRect(),d=_.touches&&_.touches[0]||_,R=d.clientY,v=1-(R-p.top)/(p.bottom-p.top);return v>1?v=1:v<0&&(v=0),r.__color.h=v*360,r.setValue(r.__color.toOriginal()),!1}return s}return $t(e,[{key:"updateDisplay",value:function(){var n=Oo(this.getValue());if(n!==!1){var s=!1;de.each(vt.COMPONENTS,function(a){if(!de.isUndefined(n[a])&&!de.isUndefined(this.__color.__state[a])&&n[a]!==this.__color.__state[a])return s=!0,{}},this),s&&de.extend(this.__color.__state,n)}de.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var r=this.__color.v<.5||this.__color.s>.5?255:0,o=255-r;de.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+r+","+r+","+r+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,Pl(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),de.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+r+","+r+","+r+")",textShadow:this.__input_textShadow+"rgba("+o+","+o+","+o+",.7)"})}}]),e}(ei),pg=["-moz-","-o-","-webkit-","-ms-",""];function Pl(i,e,t,n){i.style.background="",de.each(pg,function(s){i.style.cssText+="background: "+s+"linear-gradient("+e+", "+t+" 0%, "+n+" 100%); "})}function mg(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var _g={load:function(e,t){var n=t||document,s=n.createElement("link");s.type="text/css",s.rel="stylesheet",s.href=e,n.getElementsByTagName("head")[0].appendChild(s)},inject:function(e,t){var n=t||document,s=document.createElement("style");s.type="text/css",s.innerHTML=e;var r=n.getElementsByTagName("head")[0];try{r.appendChild(s)}catch{}}},gg=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,vg=function(e,t){var n=e[t];return de.isArray(arguments[2])||de.isObject(arguments[2])?new hg(e,t,arguments[2]):de.isNumber(n)?de.isNumber(arguments[2])&&de.isNumber(arguments[3])?de.isNumber(arguments[4])?new Fo(e,t,arguments[2],arguments[3],arguments[4]):new Fo(e,t,arguments[2],arguments[3]):de.isNumber(arguments[4])?new er(e,t,{min:arguments[2],max:arguments[3],step:arguments[4]}):new er(e,t,{min:arguments[2],max:arguments[3]}):de.isString(n)?new dg(e,t):de.isFunction(n)?new Cc(e,t,""):de.isBoolean(n)?new Ac(e,t):null};function xg(i){setTimeout(i,1e3/60)}var yg=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||xg,Sg=function(){function i(){Zt(this,i),this.backgroundElement=document.createElement("div"),de.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),K.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),de.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var e=this;K.bind(this.backgroundElement,"click",function(){e.hide()})}return $t(i,[{key:"show",value:function(){var t=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),de.defer(function(){t.backgroundElement.style.opacity=1,t.domElement.style.opacity=1,t.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var t=this,n=function s(){t.domElement.style.display="none",t.backgroundElement.style.display="none",K.unbind(t.domElement,"webkitTransitionEnd",s),K.unbind(t.domElement,"transitionend",s),K.unbind(t.domElement,"oTransitionEnd",s)};K.bind(this.domElement,"webkitTransitionEnd",n),K.bind(this.domElement,"transitionend",n),K.bind(this.domElement,"oTransitionEnd",n),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-K.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-K.getHeight(this.domElement)/2+"px"}}]),i}(),Mg=og(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);_g.inject(Mg);var Ll="dg",Dl=72,Il=20,ss="Default",Yi=function(){try{return!!window.localStorage}catch{return!1}}(),Ki=void 0,Ul=!0,gi=void 0,Vr=!1,Rc=[],st=function i(e){var t=this,n=e||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),K.addClass(this.domElement,Ll),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],n=de.defaults(n,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),n=de.defaults(n,{resizable:n.autoPlace,hideable:n.autoPlace}),de.isUndefined(n.load)?n.load={preset:ss}:n.preset&&(n.load.preset=n.preset),de.isUndefined(n.parent)&&n.hideable&&Rc.push(this),n.resizable=de.isUndefined(n.parent)&&n.resizable,n.autoPlace&&de.isUndefined(n.scrollable)&&(n.scrollable=!0);var s=Yi&&localStorage.getItem(vi(this,"isLocal"))==="true",r=void 0,o=void 0;if(Object.defineProperties(this,{parent:{get:function(){return n.parent}},scrollable:{get:function(){return n.scrollable}},autoPlace:{get:function(){return n.autoPlace}},closeOnTop:{get:function(){return n.closeOnTop}},preset:{get:function(){return t.parent?t.getRoot().preset:n.load.preset},set:function(f){t.parent?t.getRoot().preset=f:n.load.preset=f,Ag(this),t.revert()}},width:{get:function(){return n.width},set:function(f){n.width=f,Ho(t,f)}},name:{get:function(){return n.name},set:function(f){n.name=f,o&&(o.innerHTML=n.name)}},closed:{get:function(){return n.closed},set:function(f){n.closed=f,n.closed?K.addClass(t.__ul,i.CLASS_CLOSED):K.removeClass(t.__ul,i.CLASS_CLOSED),this.onResize(),t.__closeButton&&(t.__closeButton.innerHTML=f?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return n.load}},useLocalStorage:{get:function(){return s},set:function(f){Yi&&(s=f,f?K.bind(window,"unload",r):K.unbind(window,"unload",r),localStorage.setItem(vi(t,"isLocal"),f))}}}),de.isUndefined(n.parent)){if(this.closed=n.closed||!1,K.addClass(this.domElement,i.CLASS_MAIN),K.makeSelectable(this.domElement,!1),Yi&&s){t.useLocalStorage=!0;var a=localStorage.getItem(vi(this,"gui"));a&&(n.load=JSON.parse(a))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,K.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),n.closeOnTop?(K.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(K.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),K.bind(this.__closeButton,"click",function(){t.closed=!t.closed})}else{n.closed===void 0&&(n.closed=!0);var l=document.createTextNode(n.name);K.addClass(l,"controller-name"),o=oa(t,l);var c=function(f){return f.preventDefault(),t.closed=!t.closed,!1};K.addClass(this.__ul,i.CLASS_CLOSED),K.addClass(o,"title"),K.bind(o,"click",c),n.closed||(this.closed=!1)}n.autoPlace&&(de.isUndefined(n.parent)&&(Ul&&(gi=document.createElement("div"),K.addClass(gi,Ll),K.addClass(gi,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(gi),Ul=!1),gi.appendChild(this.domElement),K.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Ho(t,n.width)),this.__resizeHandler=function(){t.onResizeDebounced()},K.bind(window,"resize",this.__resizeHandler),K.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),K.bind(this.__ul,"transitionend",this.__resizeHandler),K.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),n.resizable&&Tg(this),r=function(){Yi&&localStorage.getItem(vi(t,"isLocal"))==="true"&&localStorage.setItem(vi(t,"gui"),JSON.stringify(t.getSaveObject()))},this.saveToLocalStorageIfPossible=r;function u(){var h=t.getRoot();h.width+=1,de.defer(function(){h.width-=1})}n.parent||u()};st.toggleHide=function(){Vr=!Vr,de.each(Rc,function(i){i.domElement.style.display=Vr?"none":""})};st.CLASS_AUTO_PLACE="a";st.CLASS_AUTO_PLACE_CONTAINER="ac";st.CLASS_MAIN="main";st.CLASS_CONTROLLER_ROW="cr";st.CLASS_TOO_TALL="taller-than-window";st.CLASS_CLOSED="closed";st.CLASS_CLOSE_BUTTON="close-button";st.CLASS_CLOSE_TOP="close-top";st.CLASS_CLOSE_BOTTOM="close-bottom";st.CLASS_DRAG="drag";st.DEFAULT_WIDTH=245;st.TEXT_CLOSED="Close Controls";st.TEXT_OPEN="Open Controls";st._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===Dl||i.keyCode===Dl)&&st.toggleHide()};K.bind(window,"keydown",st._keydownHandler,!1);de.extend(st.prototype,{add:function(e,t){return Ji(this,e,t,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(e,t){return Ji(this,e,t,{color:!0})},remove:function(e){this.__ul.removeChild(e.__li),this.__controllers.splice(this.__controllers.indexOf(e),1);var t=this;de.defer(function(){t.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&gi.removeChild(this.domElement);var e=this;de.each(this.__folders,function(t){e.removeFolder(t)}),K.unbind(window,"keydown",st._keydownHandler,!1),Nl(this)},addFolder:function(e){if(this.__folders[e]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+e+'"');var t={name:e,parent:this};t.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[e]&&(t.closed=this.load.folders[e].closed,t.load=this.load.folders[e]);var n=new st(t);this.__folders[e]=n;var s=oa(this,n.domElement);return K.addClass(s,"folder"),n},removeFolder:function(e){this.__ul.removeChild(e.domElement.parentElement),delete this.__folders[e.name],this.load&&this.load.folders&&this.load.folders[e.name]&&delete this.load.folders[e.name],Nl(e);var t=this;de.each(e.__folders,function(n){e.removeFolder(n)}),de.defer(function(){t.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var e=this.getRoot();if(e.scrollable){var t=K.getOffset(e.__ul).top,n=0;de.each(e.__ul.childNodes,function(s){e.autoPlace&&s===e.__save_row||(n+=K.getHeight(s))}),window.innerHeight-t-Il<n?(K.addClass(e.domElement,st.CLASS_TOO_TALL),e.__ul.style.height=window.innerHeight-t-Il+"px"):(K.removeClass(e.domElement,st.CLASS_TOO_TALL),e.__ul.style.height="auto")}e.__resize_handle&&de.defer(function(){e.__resize_handle.style.height=e.__ul.offsetHeight+"px"}),e.__closeButton&&(e.__closeButton.style.width=e.width+"px")},onResizeDebounced:de.debounce(function(){this.onResize()},50),remember:function(){if(de.isUndefined(Ki)&&(Ki=new Sg,Ki.domElement.innerHTML=gg),this.parent)throw new Error("You can only call remember on a top level GUI.");var e=this;de.each(Array.prototype.slice.call(arguments),function(t){e.__rememberedObjects.length===0&&bg(e),e.__rememberedObjects.indexOf(t)===-1&&e.__rememberedObjects.push(t)}),this.autoPlace&&Ho(this,this.width)},getRoot:function(){for(var e=this;e.parent;)e=e.parent;return e},getSaveObject:function(){var e=this.load;return e.closed=this.closed,this.__rememberedObjects.length>0&&(e.preset=this.preset,e.remembered||(e.remembered={}),e.remembered[this.preset]=ks(this)),e.folders={},de.each(this.__folders,function(t,n){e.folders[n]=t.getSaveObject()}),e},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ks(this),zo(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(e){this.load.remembered||(this.load.remembered={},this.load.remembered[ss]=ks(this,!0)),this.load.remembered[e]=ks(this),this.preset=e,ko(this,e,!0),this.saveToLocalStorageIfPossible()},revert:function(e){de.each(this.__controllers,function(t){this.getRoot().load.remembered?Pc(e||this.getRoot(),t):t.setValue(t.initialValue),t.__onFinishChange&&t.__onFinishChange.call(t,t.getValue())},this),de.each(this.__folders,function(t){t.revert(t)}),e||zo(this.getRoot(),!1)},listen:function(e){var t=this.__listening.length===0;this.__listening.push(e),t&&Lc(this.__listening)},updateDisplay:function(){de.each(this.__controllers,function(e){e.updateDisplay()}),de.each(this.__folders,function(e){e.updateDisplay()})}});function oa(i,e,t){var n=document.createElement("li");return e&&n.appendChild(e),t?i.__ul.insertBefore(n,t):i.__ul.appendChild(n),i.onResize(),n}function Nl(i){K.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&K.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function zo(i,e){var t=i.__preset_select[i.__preset_select.selectedIndex];e?t.innerHTML=t.value+"*":t.innerHTML=t.value}function Eg(i,e,t){if(t.__li=e,t.__gui=i,de.extend(t,{options:function(o){if(arguments.length>1){var a=t.__li.nextElementSibling;return t.remove(),Ji(i,t.object,t.property,{before:a,factoryArgs:[de.toArray(arguments)]})}if(de.isArray(o)||de.isObject(o)){var l=t.__li.nextElementSibling;return t.remove(),Ji(i,t.object,t.property,{before:l,factoryArgs:[o]})}},name:function(o){return t.__li.firstElementChild.firstElementChild.innerHTML=o,t},listen:function(){return t.__gui.listen(t),t},remove:function(){return t.__gui.remove(t),t}}),t instanceof Fo){var n=new er(t.object,t.property,{min:t.__min,max:t.__max,step:t.__step});de.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(r){var o=t[r],a=n[r];t[r]=n[r]=function(){var l=Array.prototype.slice.call(arguments);return a.apply(n,l),o.apply(t,l)}}),K.addClass(e,"has-slider"),t.domElement.insertBefore(n.domElement,t.domElement.firstElementChild)}else if(t instanceof er){var s=function(o){if(de.isNumber(t.__min)&&de.isNumber(t.__max)){var a=t.__li.firstElementChild.firstElementChild.innerHTML,l=t.__gui.__listening.indexOf(t)>-1;t.remove();var c=Ji(i,t.object,t.property,{before:t.__li.nextElementSibling,factoryArgs:[t.__min,t.__max,t.__step]});return c.name(a),l&&c.listen(),c}return o};t.min=de.compose(s,t.min),t.max=de.compose(s,t.max)}else t instanceof Ac?(K.bind(e,"click",function(){K.fakeEvent(t.__checkbox,"click")}),K.bind(t.__checkbox,"click",function(r){r.stopPropagation()})):t instanceof Cc?(K.bind(e,"click",function(){K.fakeEvent(t.__button,"click")}),K.bind(e,"mouseover",function(){K.addClass(t.__button,"hover")}),K.bind(e,"mouseout",function(){K.removeClass(t.__button,"hover")})):t instanceof Bo&&(K.addClass(e,"color"),t.updateDisplay=de.compose(function(r){return e.style.borderLeftColor=t.__color.toString(),r},t.updateDisplay),t.updateDisplay());t.setValue=de.compose(function(r){return i.getRoot().__preset_select&&t.isModified()&&zo(i.getRoot(),!0),r},t.setValue)}function Pc(i,e){var t=i.getRoot(),n=t.__rememberedObjects.indexOf(e.object);if(n!==-1){var s=t.__rememberedObjectIndecesToControllers[n];if(s===void 0&&(s={},t.__rememberedObjectIndecesToControllers[n]=s),s[e.property]=e,t.load&&t.load.remembered){var r=t.load.remembered,o=void 0;if(r[i.preset])o=r[i.preset];else if(r[ss])o=r[ss];else return;if(o[n]&&o[n][e.property]!==void 0){var a=o[n][e.property];e.initialValue=a,e.setValue(a)}}}}function Ji(i,e,t,n){if(e[t]===void 0)throw new Error('Object "'+e+'" has no property "'+t+'"');var s=void 0;if(n.color)s=new Bo(e,t);else{var r=[e,t].concat(n.factoryArgs);s=vg.apply(i,r)}n.before instanceof ei&&(n.before=n.before.__li),Pc(i,s),K.addClass(s.domElement,"c");var o=document.createElement("span");K.addClass(o,"property-name"),o.innerHTML=s.property;var a=document.createElement("div");a.appendChild(o),a.appendChild(s.domElement);var l=oa(i,a,n.before);return K.addClass(l,st.CLASS_CONTROLLER_ROW),s instanceof Bo?K.addClass(l,"color"):K.addClass(l,lg(s.getValue())),Eg(i,l,s),i.__controllers.push(s),s}function vi(i,e){return document.location.href+"."+e}function ko(i,e,t){var n=document.createElement("option");n.innerHTML=e,n.value=e,i.__preset_select.appendChild(n),t&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function Ol(i,e){e.style.display=i.useLocalStorage?"block":"none"}function bg(i){var e=i.__save_row=document.createElement("li");K.addClass(i.domElement,"has-save"),i.__ul.insertBefore(e,i.__ul.firstChild),K.addClass(e,"save-row");var t=document.createElement("span");t.innerHTML="&nbsp;",K.addClass(t,"button gears");var n=document.createElement("span");n.innerHTML="Save",K.addClass(n,"button"),K.addClass(n,"save");var s=document.createElement("span");s.innerHTML="New",K.addClass(s,"button"),K.addClass(s,"save-as");var r=document.createElement("span");r.innerHTML="Revert",K.addClass(r,"button"),K.addClass(r,"revert");var o=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?de.each(i.load.remembered,function(h,f){ko(i,f,f===i.preset)}):ko(i,ss,!1),K.bind(o,"change",function(){for(var h=0;h<i.__preset_select.length;h++)i.__preset_select[h].innerHTML=i.__preset_select[h].value;i.preset=this.value}),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(r),Yi){var a=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(vi(i,"isLocal"))==="true"&&l.setAttribute("checked","checked"),Ol(i,a),K.bind(l,"change",function(){i.useLocalStorage=!i.useLocalStorage,Ol(i,a)})}var u=document.getElementById("dg-new-constructor");K.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Ki.hide()}),K.bind(t,"click",function(){u.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Ki.show(),u.focus(),u.select()}),K.bind(n,"click",function(){i.save()}),K.bind(s,"click",function(){var h=prompt("Enter a new preset name.");h&&i.saveAs(h)}),K.bind(r,"click",function(){i.revert()})}function Tg(i){var e=void 0;i.__resize_handle=document.createElement("div"),de.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function t(r){return r.preventDefault(),i.width+=e-r.clientX,i.onResize(),e=r.clientX,!1}function n(){K.removeClass(i.__closeButton,st.CLASS_DRAG),K.unbind(window,"mousemove",t),K.unbind(window,"mouseup",n)}function s(r){return r.preventDefault(),e=r.clientX,K.addClass(i.__closeButton,st.CLASS_DRAG),K.bind(window,"mousemove",t),K.bind(window,"mouseup",n),!1}K.bind(i.__resize_handle,"mousedown",s),K.bind(i.__closeButton,"mousedown",s),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Ho(i,e){i.domElement.style.width=e+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=e+"px"),i.__closeButton&&(i.__closeButton.style.width=e+"px")}function ks(i,e){var t={};return de.each(i.__rememberedObjects,function(n,s){var r={},o=i.__rememberedObjectIndecesToControllers[s];de.each(o,function(a,l){r[l]=e?a.initialValue:a.getValue()}),t[s]=r}),t}function Ag(i){for(var e=0;e<i.__preset_select.length;e++)i.__preset_select[e].value===i.preset&&(i.__preset_select.selectedIndex=e)}function Lc(i){i.length!==0&&yg.call(window,function(){Lc(i)}),de.each(i,function(e){e.updateDisplay()})}var wg=st;function Cg(i,e,t,n,s){const r=i.getParams(),o=new wg,a=o.addFolder("Interface"),l={visible:!0};a.add({toggleUI:function(){l.visible=!l.visible,document.querySelector(".header").classList.toggle("hidden"),document.querySelector(".upload-container").classList.toggle("hidden"),o.domElement.style.display=l.visible?"block":"none"}},"toggleUI").name("Toggle UI (H)");const c=o.addFolder("Metal Settings");c.add(r,"metalPreset",{Silver:"silver",Gold:"gold",Bronze:"bronze",Chrome:"chrome"}).onChange(_=>i.setMetalPreset(_)),c.add(r,"metalness",0,2).name("Metalness"),c.add(r,"roughness",0,1).name("Roughness");const u=o.addFolder("Effect Settings");u.add(r,"effectStrength",0,1).name("Effect Strength"),u.add(r,"distortionAmount",0,3).name("Distortion"),u.add(r,"flowSpeed",0,2).name("Flow Speed"),u.add(r,"colorShift",0,2).name("Color Shift");const h=o.addFolder("Color Settings");h.add(r,"dispersionStrength",0,2).name("Color Separation"),h.add(r,"dispersionScale",.1,2).name("Effect Scale");const f=o.addFolder("Appearance"),m=f.addColor(r,"backgroundColor").name("Background").onChange(_=>{let p=_;typeof _=="string"?p=_:Array.isArray(_)?p=`rgb(${_[0]}, ${_[1]}, ${_[2]})`:typeof _=="object"&&(p=`#${_.r.toString(16).padStart(2,"0")}${_.g.toString(16).padStart(2,"0")}${_.b.toString(16).padStart(2,"0")}`),i.setParam("backgroundColor",p),e.setBackgroundColor(p),m.updateDisplay()});f.add(r,"showGrid").name("Show Grid").onChange(_=>{i.setParam("showGrid",_),n&&(n.visible=_)}),f.add({toggleAxes:function(){s.visible=!s.visible}},"toggleAxes").name("Toggle Axes"),f.open();const g=o.addFolder("Camera");return g.add(r,"autoRotate").name("Auto Rotate").onChange(_=>{i.setParam("autoRotate",_),t.setAutoRotate(_)}),g.add({resetCamera:function(){}},"resetCamera").name("Reset Camera"),g.open(),c.open(),u.open(),h.open(),o.updateControlsForFileType=function(_){[c,u,h].forEach(d=>{d.domElement.style.display=_==="png"?"none":""})},document.addEventListener("keydown",_=>{_.key.toLowerCase()==="h"&&(l.visible=!l.visible,document.querySelector(".header").classList.toggle("hidden"),document.querySelector(".upload-container").classList.toggle("hidden"),o.domElement.style.display=l.visible?"block":"none")}),a.open(),o}const Rg=Ut;class aa extends cs{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,n,s){const r=this,o=new Gh(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(e,function(a){try{t(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},n,s)}parse(e){const t=this;function n(I,L){if(I.nodeType!==1)return;const w=x(I);let E=!1,Z=null;switch(I.nodeName){case"svg":L=g(I,L);break;case"style":r(I);break;case"g":L=g(I,L);break;case"path":L=g(I,L),I.hasAttribute("d")&&(Z=s(I));break;case"rect":L=g(I,L),Z=l(I);break;case"polygon":L=g(I,L),Z=c(I);break;case"polyline":L=g(I,L),Z=u(I);break;case"circle":L=g(I,L),Z=h(I);break;case"ellipse":L=g(I,L),Z=f(I);break;case"line":L=g(I,L),Z=m(I);break;case"defs":E=!0;break;case"use":L=g(I,L);const me=(I.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),j=I.viewportElement.getElementById(me);j?n(j,L):console.warn("SVGLoader: 'use node' references non-existent node id: "+me);break}Z&&(L.fill!==void 0&&L.fill!=="none"&&Z.color.setStyle(L.fill,Rg),D(Z,Me),X.push(Z),Z.userData={node:I,style:L});const fe=I.childNodes;for(let V=0;V<fe.length;V++){const me=fe[V];E&&me.nodeName!=="style"&&me.nodeName!=="defs"||n(me,L)}w&&(te.pop(),te.length>0?Me.copy(te[te.length-1]):Me.identity())}function s(I){const L=new Bn,w=new ue,E=new ue,Z=new ue;let fe=!0,V=!1;const me=I.getAttribute("d");if(me===""||me==="none")return null;const j=me.match(/[a-df-z][^a-df-z]*/ig);for(let q=0,y=j.length;q<y;q++){const ie=j[q],$=ie.charAt(0),le=ie.slice(1).trim();fe===!0&&(V=!0,fe=!1);let U;switch($){case"M":U=p(le);for(let C=0,re=U.length;C<re;C+=2)w.x=U[C+0],w.y=U[C+1],E.x=w.x,E.y=w.y,C===0?L.moveTo(w.x,w.y):L.lineTo(w.x,w.y),C===0&&Z.copy(w);break;case"H":U=p(le);for(let C=0,re=U.length;C<re;C++)w.x=U[C],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),C===0&&V===!0&&Z.copy(w);break;case"V":U=p(le);for(let C=0,re=U.length;C<re;C++)w.y=U[C],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),C===0&&V===!0&&Z.copy(w);break;case"L":U=p(le);for(let C=0,re=U.length;C<re;C+=2)w.x=U[C+0],w.y=U[C+1],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),C===0&&V===!0&&Z.copy(w);break;case"C":U=p(le);for(let C=0,re=U.length;C<re;C+=6)L.bezierCurveTo(U[C+0],U[C+1],U[C+2],U[C+3],U[C+4],U[C+5]),E.x=U[C+2],E.y=U[C+3],w.x=U[C+4],w.y=U[C+5],C===0&&V===!0&&Z.copy(w);break;case"S":U=p(le);for(let C=0,re=U.length;C<re;C+=4)L.bezierCurveTo(_(w.x,E.x),_(w.y,E.y),U[C+0],U[C+1],U[C+2],U[C+3]),E.x=U[C+0],E.y=U[C+1],w.x=U[C+2],w.y=U[C+3],C===0&&V===!0&&Z.copy(w);break;case"Q":U=p(le);for(let C=0,re=U.length;C<re;C+=4)L.quadraticCurveTo(U[C+0],U[C+1],U[C+2],U[C+3]),E.x=U[C+0],E.y=U[C+1],w.x=U[C+2],w.y=U[C+3],C===0&&V===!0&&Z.copy(w);break;case"T":U=p(le);for(let C=0,re=U.length;C<re;C+=2){const A=_(w.x,E.x),S=_(w.y,E.y);L.quadraticCurveTo(A,S,U[C+0],U[C+1]),E.x=A,E.y=S,w.x=U[C+0],w.y=U[C+1],C===0&&V===!0&&Z.copy(w)}break;case"A":U=p(le,[3,4],7);for(let C=0,re=U.length;C<re;C+=7){if(U[C+5]==w.x&&U[C+6]==w.y)continue;const A=w.clone();w.x=U[C+5],w.y=U[C+6],E.x=w.x,E.y=w.y,o(L,U[C],U[C+1],U[C+2],U[C+3],U[C+4],A,w),C===0&&V===!0&&Z.copy(w)}break;case"m":U=p(le);for(let C=0,re=U.length;C<re;C+=2)w.x+=U[C+0],w.y+=U[C+1],E.x=w.x,E.y=w.y,C===0?L.moveTo(w.x,w.y):L.lineTo(w.x,w.y),C===0&&Z.copy(w);break;case"h":U=p(le);for(let C=0,re=U.length;C<re;C++)w.x+=U[C],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),C===0&&V===!0&&Z.copy(w);break;case"v":U=p(le);for(let C=0,re=U.length;C<re;C++)w.y+=U[C],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),C===0&&V===!0&&Z.copy(w);break;case"l":U=p(le);for(let C=0,re=U.length;C<re;C+=2)w.x+=U[C+0],w.y+=U[C+1],E.x=w.x,E.y=w.y,L.lineTo(w.x,w.y),C===0&&V===!0&&Z.copy(w);break;case"c":U=p(le);for(let C=0,re=U.length;C<re;C+=6)L.bezierCurveTo(w.x+U[C+0],w.y+U[C+1],w.x+U[C+2],w.y+U[C+3],w.x+U[C+4],w.y+U[C+5]),E.x=w.x+U[C+2],E.y=w.y+U[C+3],w.x+=U[C+4],w.y+=U[C+5],C===0&&V===!0&&Z.copy(w);break;case"s":U=p(le);for(let C=0,re=U.length;C<re;C+=4)L.bezierCurveTo(_(w.x,E.x),_(w.y,E.y),w.x+U[C+0],w.y+U[C+1],w.x+U[C+2],w.y+U[C+3]),E.x=w.x+U[C+0],E.y=w.y+U[C+1],w.x+=U[C+2],w.y+=U[C+3],C===0&&V===!0&&Z.copy(w);break;case"q":U=p(le);for(let C=0,re=U.length;C<re;C+=4)L.quadraticCurveTo(w.x+U[C+0],w.y+U[C+1],w.x+U[C+2],w.y+U[C+3]),E.x=w.x+U[C+0],E.y=w.y+U[C+1],w.x+=U[C+2],w.y+=U[C+3],C===0&&V===!0&&Z.copy(w);break;case"t":U=p(le);for(let C=0,re=U.length;C<re;C+=2){const A=_(w.x,E.x),S=_(w.y,E.y);L.quadraticCurveTo(A,S,w.x+U[C+0],w.y+U[C+1]),E.x=A,E.y=S,w.x=w.x+U[C+0],w.y=w.y+U[C+1],C===0&&V===!0&&Z.copy(w)}break;case"a":U=p(le,[3,4],7);for(let C=0,re=U.length;C<re;C+=7){if(U[C+5]==0&&U[C+6]==0)continue;const A=w.clone();w.x+=U[C+5],w.y+=U[C+6],E.x=w.x,E.y=w.y,o(L,U[C],U[C+1],U[C+2],U[C+3],U[C+4],A,w),C===0&&V===!0&&Z.copy(w)}break;case"Z":case"z":L.currentPath.autoClose=!0,L.currentPath.curves.length>0&&(w.copy(Z),L.currentPath.currentPoint.copy(w),fe=!0);break;default:console.warn(ie)}V=!1}return L}function r(I){if(!(!I.sheet||!I.sheet.cssRules||!I.sheet.cssRules.length))for(let L=0;L<I.sheet.cssRules.length;L++){const w=I.sheet.cssRules[L];if(w.type!==1)continue;const E=w.selectorText.split(/,/gm).filter(Boolean).map(Z=>Z.trim());for(let Z=0;Z<E.length;Z++){const fe=Object.fromEntries(Object.entries(w.style).filter(([,V])=>V!==""));Y[E[Z]]=Object.assign(Y[E[Z]]||{},fe)}}}function o(I,L,w,E,Z,fe,V,me){if(L==0||w==0){I.lineTo(me.x,me.y);return}E=E*Math.PI/180,L=Math.abs(L),w=Math.abs(w);const j=(V.x-me.x)/2,q=(V.y-me.y)/2,y=Math.cos(E)*j+Math.sin(E)*q,ie=-Math.sin(E)*j+Math.cos(E)*q;let $=L*L,le=w*w;const U=y*y,C=ie*ie,re=U/$+C/le;if(re>1){const Ve=Math.sqrt(re);L=Ve*L,w=Ve*w,$=L*L,le=w*w}const A=$*C+le*U,S=($*le-A)/A;let W=Math.sqrt(Math.max(0,S));Z===fe&&(W=-W);const se=W*L*ie/w,he=-W*w*y/L,ce=Math.cos(E)*se-Math.sin(E)*he+(V.x+me.x)/2,De=Math.sin(E)*se+Math.cos(E)*he+(V.y+me.y)/2,ye=a(1,0,(y-se)/L,(ie-he)/w),Te=a((y-se)/L,(ie-he)/w,(-y-se)/L,(-ie-he)/w)%(Math.PI*2);I.currentPath.absellipse(ce,De,L,w,ye,ye+Te,fe===0,E)}function a(I,L,w,E){const Z=I*w+L*E,fe=Math.sqrt(I*I+L*L)*Math.sqrt(w*w+E*E);let V=Math.acos(Math.max(-1,Math.min(1,Z/fe)));return I*E-L*w<0&&(V=-V),V}function l(I){const L=v(I.getAttribute("x")||0),w=v(I.getAttribute("y")||0),E=v(I.getAttribute("rx")||I.getAttribute("ry")||0),Z=v(I.getAttribute("ry")||I.getAttribute("rx")||0),fe=v(I.getAttribute("width")),V=v(I.getAttribute("height")),me=1-.551915024494,j=new Bn;return j.moveTo(L+E,w),j.lineTo(L+fe-E,w),(E!==0||Z!==0)&&j.bezierCurveTo(L+fe-E*me,w,L+fe,w+Z*me,L+fe,w+Z),j.lineTo(L+fe,w+V-Z),(E!==0||Z!==0)&&j.bezierCurveTo(L+fe,w+V-Z*me,L+fe-E*me,w+V,L+fe-E,w+V),j.lineTo(L+E,w+V),(E!==0||Z!==0)&&j.bezierCurveTo(L+E*me,w+V,L,w+V-Z*me,L,w+V-Z),j.lineTo(L,w+Z),(E!==0||Z!==0)&&j.bezierCurveTo(L,w+Z*me,L+E*me,w,L+E,w),j}function c(I){function L(fe,V,me){const j=v(V),q=v(me);Z===0?E.moveTo(j,q):E.lineTo(j,q),Z++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new Bn;let Z=0;return I.getAttribute("points").replace(w,L),E.currentPath.autoClose=!0,E}function u(I){function L(fe,V,me){const j=v(V),q=v(me);Z===0?E.moveTo(j,q):E.lineTo(j,q),Z++}const w=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,E=new Bn;let Z=0;return I.getAttribute("points").replace(w,L),E.currentPath.autoClose=!1,E}function h(I){const L=v(I.getAttribute("cx")||0),w=v(I.getAttribute("cy")||0),E=v(I.getAttribute("r")||0),Z=new Ai;Z.absarc(L,w,E,0,Math.PI*2);const fe=new Bn;return fe.subPaths.push(Z),fe}function f(I){const L=v(I.getAttribute("cx")||0),w=v(I.getAttribute("cy")||0),E=v(I.getAttribute("rx")||0),Z=v(I.getAttribute("ry")||0),fe=new Ai;fe.absellipse(L,w,E,Z,0,Math.PI*2);const V=new Bn;return V.subPaths.push(fe),V}function m(I){const L=v(I.getAttribute("x1")||0),w=v(I.getAttribute("y1")||0),E=v(I.getAttribute("x2")||0),Z=v(I.getAttribute("y2")||0),fe=new Bn;return fe.moveTo(L,w),fe.lineTo(E,Z),fe.currentPath.autoClose=!1,fe}function g(I,L){L=Object.assign({},L);let w={};if(I.hasAttribute("class")){const V=I.getAttribute("class").split(/\s/).filter(Boolean).map(me=>me.trim());for(let me=0;me<V.length;me++)w=Object.assign(w,Y["."+V[me]])}I.hasAttribute("id")&&(w=Object.assign(w,Y["#"+I.getAttribute("id")]));function E(V,me,j){j===void 0&&(j=function(y){return y.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),y}),I.hasAttribute(V)&&(L[me]=j(I.getAttribute(V))),w[V]&&(L[me]=j(w[V])),I.style&&I.style[V]!==""&&(L[me]=j(I.style[V]))}function Z(V){return Math.max(0,Math.min(1,v(V)))}function fe(V){return Math.max(0,v(V))}return E("fill","fill"),E("fill-opacity","fillOpacity",Z),E("fill-rule","fillRule"),E("opacity","opacity",Z),E("stroke","stroke"),E("stroke-opacity","strokeOpacity",Z),E("stroke-width","strokeWidth",fe),E("stroke-linejoin","strokeLineJoin"),E("stroke-linecap","strokeLineCap"),E("stroke-miterlimit","strokeMiterLimit",fe),E("visibility","visibility"),L}function _(I,L){return I-(L-I)}function p(I,L,w){if(typeof I!="string")throw new TypeError("Invalid input: "+typeof I);const E={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},Z=0,fe=1,V=2,me=3;let j=Z,q=!0,y="",ie="";const $=[];function le(A,S,W){const se=new SyntaxError('Unexpected character "'+A+'" at index '+S+".");throw se.partial=W,se}function U(){y!==""&&(ie===""?$.push(Number(y)):$.push(Number(y)*Math.pow(10,Number(ie)))),y="",ie=""}let C;const re=I.length;for(let A=0;A<re;A++){if(C=I[A],Array.isArray(L)&&L.includes($.length%w)&&E.FLAGS.test(C)){j=fe,y=C,U();continue}if(j===Z){if(E.WHITESPACE.test(C))continue;if(E.DIGIT.test(C)||E.SIGN.test(C)){j=fe,y=C;continue}if(E.POINT.test(C)){j=V,y=C;continue}E.COMMA.test(C)&&(q&&le(C,A,$),q=!0)}if(j===fe){if(E.DIGIT.test(C)){y+=C;continue}if(E.POINT.test(C)){y+=C,j=V;continue}if(E.EXP.test(C)){j=me;continue}E.SIGN.test(C)&&y.length===1&&E.SIGN.test(y[0])&&le(C,A,$)}if(j===V){if(E.DIGIT.test(C)){y+=C;continue}if(E.EXP.test(C)){j=me;continue}E.POINT.test(C)&&y[y.length-1]==="."&&le(C,A,$)}if(j===me){if(E.DIGIT.test(C)){ie+=C;continue}if(E.SIGN.test(C)){if(ie===""){ie+=C;continue}ie.length===1&&E.SIGN.test(ie)&&le(C,A,$)}}E.WHITESPACE.test(C)?(U(),j=Z,q=!1):E.COMMA.test(C)?(U(),j=Z,q=!0):E.SIGN.test(C)?(U(),j=fe,y=C):E.POINT.test(C)?(U(),j=V,y=C):le(C,A,$)}return U(),$}const d=["mm","cm","in","pt","pc","px"],R={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function v(I){let L="px";if(typeof I=="string"||I instanceof String)for(let E=0,Z=d.length;E<Z;E++){const fe=d[E];if(I.endsWith(fe)){L=fe,I=I.substring(0,I.length-fe.length);break}}let w;return L==="px"&&t.defaultUnit!=="px"?w=R.in[t.defaultUnit]/t.defaultDPI:(w=R[L][t.defaultUnit],w<0&&(w=R[L].in*t.defaultDPI)),w*parseFloat(I)}function x(I){if(!(I.hasAttribute("transform")||I.nodeName==="use"&&(I.hasAttribute("x")||I.hasAttribute("y"))))return null;const L=N(I);return te.length>0&&L.premultiply(te[te.length-1]),Me.copy(L),te.push(L),L}function N(I){const L=new Be,w=ae;if(I.nodeName==="use"&&(I.hasAttribute("x")||I.hasAttribute("y"))){const E=v(I.getAttribute("x")),Z=v(I.getAttribute("y"));L.translate(E,Z)}if(I.hasAttribute("transform")){const E=I.getAttribute("transform").split(")");for(let Z=E.length-1;Z>=0;Z--){const fe=E[Z].trim();if(fe==="")continue;const V=fe.indexOf("("),me=fe.length;if(V>0&&V<me){const j=fe.slice(0,V),q=p(fe.slice(V+1));switch(w.identity(),j){case"translate":if(q.length>=1){const y=q[0];let ie=0;q.length>=2&&(ie=q[1]),w.translate(y,ie)}break;case"rotate":if(q.length>=1){let y=0,ie=0,$=0;y=q[0]*Math.PI/180,q.length>=3&&(ie=q[1],$=q[2]),ne.makeTranslation(-ie,-$),Q.makeRotation(y),B.multiplyMatrices(Q,ne),ne.makeTranslation(ie,$),w.multiplyMatrices(ne,B)}break;case"scale":if(q.length>=1){const y=q[0];let ie=y;q.length>=2&&(ie=q[1]),w.scale(y,ie)}break;case"skewX":q.length===1&&w.set(1,Math.tan(q[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":q.length===1&&w.set(1,0,0,Math.tan(q[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":q.length===6&&w.set(q[0],q[2],q[4],q[1],q[3],q[5],0,0,1);break}}L.premultiply(w)}}return L}function D(I,L){function w(V){xe.set(V.x,V.y,1).applyMatrix3(L),V.set(xe.x,xe.y)}function E(V){const me=V.xRadius,j=V.yRadius,q=Math.cos(V.aRotation),y=Math.sin(V.aRotation),ie=new z(me*q,me*y,0),$=new z(-j*y,j*q,0),le=ie.applyMatrix3(L),U=$.applyMatrix3(L),C=ae.set(le.x,U.x,0,le.y,U.y,0,0,0,1),re=ne.copy(C).invert(),W=Q.copy(re).transpose().multiply(re).elements,se=F(W[0],W[1],W[4]),he=Math.sqrt(se.rt1),ce=Math.sqrt(se.rt2);if(V.xRadius=1/he,V.yRadius=1/ce,V.aRotation=Math.atan2(se.sn,se.cs),!((V.aEndAngle-V.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ye=ne.set(he,0,0,0,ce,0,0,0,1),Te=Q.set(se.cs,se.sn,0,-se.sn,se.cs,0,0,0,1),Ve=ye.multiply(Te).multiply(C),ge=Ce=>{const{x:Ue,y:Fe}=new z(Math.cos(Ce),Math.sin(Ce),0).applyMatrix3(Ve);return Math.atan2(Fe,Ue)};V.aStartAngle=ge(V.aStartAngle),V.aEndAngle=ge(V.aEndAngle),P(L)&&(V.aClockwise=!V.aClockwise)}}function Z(V){const me=T(L),j=M(L);V.xRadius*=me,V.yRadius*=j;const q=me>Number.EPSILON?Math.atan2(L.elements[1],L.elements[0]):Math.atan2(-L.elements[3],L.elements[4]);V.aRotation+=q,P(L)&&(V.aStartAngle*=-1,V.aEndAngle*=-1,V.aClockwise=!V.aClockwise)}const fe=I.subPaths;for(let V=0,me=fe.length;V<me;V++){const q=fe[V].curves;for(let y=0;y<q.length;y++){const ie=q[y];ie.isLineCurve?(w(ie.v1),w(ie.v2)):ie.isCubicBezierCurve?(w(ie.v0),w(ie.v1),w(ie.v2),w(ie.v3)):ie.isQuadraticBezierCurve?(w(ie.v0),w(ie.v1),w(ie.v2)):ie.isEllipseCurve&&(_e.set(ie.aX,ie.aY),w(_e),ie.aX=_e.x,ie.aY=_e.y,O(L)?E(ie):Z(ie))}}}function P(I){const L=I.elements;return L[0]*L[4]-L[1]*L[3]<0}function O(I){const L=I.elements,w=L[0]*L[3]+L[1]*L[4];if(w===0)return!1;const E=T(I),Z=M(I);return Math.abs(w/(E*Z))>Number.EPSILON}function T(I){const L=I.elements;return Math.sqrt(L[0]*L[0]+L[1]*L[1])}function M(I){const L=I.elements;return Math.sqrt(L[3]*L[3]+L[4]*L[4])}function F(I,L,w){let E,Z,fe,V,me;const j=I+w,q=I-w,y=Math.sqrt(q*q+4*L*L);return j>0?(E=.5*(j+y),me=1/E,Z=I*me*w-L*me*L):j<0?Z=.5*(j-y):(E=.5*y,Z=-.5*y),q>0?fe=q+y:fe=q-y,Math.abs(fe)>2*Math.abs(L)?(me=-2*L/fe,V=1/Math.sqrt(1+me*me),fe=me*V):Math.abs(L)===0?(fe=1,V=0):(me=-.5*fe/L,fe=1/Math.sqrt(1+me*me),V=me*fe),q>0&&(me=fe,fe=-V,V=me),{rt1:E,rt2:Z,cs:fe,sn:V}}const X=[],Y={},te=[],ae=new Be,ne=new Be,Q=new Be,B=new Be,_e=new ue,xe=new z,Me=new Be,Oe=new DOMParser().parseFromString(e,"image/svg+xml");return n(Oe.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:X,xml:Oe.documentElement}}static createShapes(e){const n={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},s={loc:n.ORIGIN,t:0};function r(_,p,d,R){const v=_.x,x=p.x,N=d.x,D=R.x,P=_.y,O=p.y,T=d.y,M=R.y,F=(D-N)*(P-T)-(M-T)*(v-N),X=(x-v)*(P-T)-(O-P)*(v-N),Y=(M-T)*(x-v)-(D-N)*(O-P),te=F/Y,ae=X/Y;if(Y===0&&F!==0||te<=0||te>=1||ae<0||ae>1)return null;if(F===0&&Y===0){for(let ne=0;ne<2;ne++)if(o(ne===0?d:R,_,p),s.loc==n.ORIGIN){const Q=ne===0?d:R;return{x:Q.x,y:Q.y,t:s.t}}else if(s.loc==n.BETWEEN){const Q=+(v+s.t*(x-v)).toPrecision(10),B=+(P+s.t*(O-P)).toPrecision(10);return{x:Q,y:B,t:s.t}}return null}else{for(let B=0;B<2;B++)if(o(B===0?d:R,_,p),s.loc==n.ORIGIN){const _e=B===0?d:R;return{x:_e.x,y:_e.y,t:s.t}}const ne=+(v+te*(x-v)).toPrecision(10),Q=+(P+te*(O-P)).toPrecision(10);return{x:ne,y:Q,t:te}}}function o(_,p,d){const R=d.x-p.x,v=d.y-p.y,x=_.x-p.x,N=_.y-p.y,D=R*N-x*v;if(_.x===p.x&&_.y===p.y){s.loc=n.ORIGIN,s.t=0;return}if(_.x===d.x&&_.y===d.y){s.loc=n.DESTINATION,s.t=1;return}if(D<-Number.EPSILON){s.loc=n.LEFT;return}if(D>Number.EPSILON){s.loc=n.RIGHT;return}if(R*x<0||v*N<0){s.loc=n.BEHIND;return}if(Math.sqrt(R*R+v*v)<Math.sqrt(x*x+N*N)){s.loc=n.BEYOND;return}let P;R!==0?P=x/R:P=N/v,s.loc=n.BETWEEN,s.t=P}function a(_,p){const d=[],R=[];for(let v=1;v<_.length;v++){const x=_[v-1],N=_[v];for(let D=1;D<p.length;D++){const P=p[D-1],O=p[D],T=r(x,N,P,O);T!==null&&d.find(M=>M.t<=T.t+Number.EPSILON&&M.t>=T.t-Number.EPSILON)===void 0&&(d.push(T),R.push(new ue(T.x,T.y)))}}return R}function l(_,p,d){const R=new ue;p.getCenter(R);const v=[];return d.forEach(x=>{x.boundingBox.containsPoint(R)&&a(_,x.points).forEach(D=>{v.push({identifier:x.identifier,isCW:x.isCW,point:D})})}),v.sort((x,N)=>x.point.x-N.point.x),v}function c(_,p,d,R,v){(v==null||v==="")&&(v="nonzero");const x=new ue;_.boundingBox.getCenter(x);const N=[new ue(d,x.y),new ue(R,x.y)],D=l(N,_.boundingBox,p);D.sort((X,Y)=>X.point.x-Y.point.x);const P=[],O=[];D.forEach(X=>{X.identifier===_.identifier?P.push(X):O.push(X)});const T=P[0].point.x,M=[];let F=0;for(;F<O.length&&O[F].point.x<T;)M.length>0&&M[M.length-1]===O[F].identifier?M.pop():M.push(O[F].identifier),F++;if(M.push(_.identifier),v==="evenodd"){const X=M.length%2===0,Y=M[M.length-2];return{identifier:_.identifier,isHole:X,for:Y}}else if(v==="nonzero"){let X=!0,Y=null,te=null;for(let ae=0;ae<M.length;ae++){const ne=M[ae];X?(te=p[ne].isCW,X=!1,Y=ne):te!==p[ne].isCW&&(te=p[ne].isCW,X=!0)}return{identifier:_.identifier,isHole:X,for:Y}}else console.warn('fill-rule: "'+v+'" is currently not implemented.')}let u=999999999,h=-999999999,f=e.subPaths.map(_=>{const p=_.getPoints();let d=-999999999,R=999999999,v=-999999999,x=999999999;for(let N=0;N<p.length;N++){const D=p[N];D.y>d&&(d=D.y),D.y<R&&(R=D.y),D.x>v&&(v=D.x),D.x<x&&(x=D.x)}return h<=v&&(h=v+1),u>=x&&(u=x-1),{curves:_.curves,points:p,isCW:Yn.isClockWise(p),identifier:-1,boundingBox:new Kh(new ue(x,R),new ue(v,d))}});f=f.filter(_=>_.points.length>1);for(let _=0;_<f.length;_++)f[_].identifier=_;const m=f.map(_=>c(_,f,u,h,e.userData?e.userData.style.fillRule:void 0)),g=[];return f.forEach(_=>{if(!m[_.identifier].isHole){const d=new $i;d.curves=_.curves,m.filter(v=>v.isHole&&v.for===_.identifier).forEach(v=>{const x=f[v.identifier],N=new Ai;N.curves=x.curves,d.holes.push(N)}),g.push(d)}}),g}static getStrokeStyle(e,t,n,s,r){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",n=n!==void 0?n:"miter",s=s!==void 0?s:"butt",r=r!==void 0?r:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:n,strokeLineCap:s,strokeMiterLimit:r}}static pointsToStroke(e,t,n,s){const r=[],o=[],a=[];if(aa.pointsToStrokeWithBuffers(e,t,n,s,r,o,a)===0)return null;const l=new Nt;return l.setAttribute("position",new ht(r,3)),l.setAttribute("normal",new ht(o,3)),l.setAttribute("uv",new ht(a,2)),l}static pointsToStrokeWithBuffers(e,t,n,s,r,o,a,l){const c=new ue,u=new ue,h=new ue,f=new ue,m=new ue,g=new ue,_=new ue,p=new ue,d=new ue,R=new ue,v=new ue,x=new ue,N=new ue,D=new ue,P=new ue,O=new ue,T=new ue;n=n!==void 0?n:12,s=s!==void 0?s:.001,l=l!==void 0?l:0,e=q(e);const M=e.length;if(M<2)return 0;const F=e[0].equals(e[M-1]);let X,Y=e[0],te;const ae=t.strokeWidth/2,ne=1/(M-1);let Q=0,B,_e,xe,Me,Oe=!1,Ye=0,I=l*3,L=l*2;w(e[0],e[1],c).multiplyScalar(ae),p.copy(e[0]).sub(c),d.copy(e[0]).add(c),R.copy(p),v.copy(d);for(let y=1;y<M;y++){X=e[y],y===M-1?F?te=e[1]:te=void 0:te=e[y+1];const ie=c;if(w(Y,X,ie),h.copy(ie).multiplyScalar(ae),x.copy(X).sub(h),N.copy(X).add(h),B=Q+ne,_e=!1,te!==void 0){w(X,te,u),h.copy(u).multiplyScalar(ae),D.copy(X).sub(h),P.copy(X).add(h),xe=!0,h.subVectors(te,Y),ie.dot(h)<0&&(xe=!1),y===1&&(Oe=xe),h.subVectors(te,X),h.normalize();const $=Math.abs(ie.dot(h));if($>Number.EPSILON){const le=ae/$;h.multiplyScalar(-le),f.subVectors(X,Y),m.copy(f).setLength(le).add(h),O.copy(m).negate();const U=m.length(),C=f.length();f.divideScalar(C),g.subVectors(te,X);const re=g.length();switch(g.divideScalar(re),f.dot(O)<C&&g.dot(O)<re&&(_e=!0),T.copy(m).add(X),O.add(X),Me=!1,_e?xe?(P.copy(O),N.copy(O)):(D.copy(O),x.copy(O)):fe(),t.strokeLineJoin){case"bevel":V(xe,_e,B);break;case"round":me(xe,_e),xe?Z(X,x,D,B,0):Z(X,P,N,B,1);break;case"miter":case"miter-clip":default:const A=ae*t.strokeMiterLimit/U;if(A<1)if(t.strokeLineJoin!=="miter-clip"){V(xe,_e,B);break}else me(xe,_e),xe?(g.subVectors(T,x).multiplyScalar(A).add(x),_.subVectors(T,D).multiplyScalar(A).add(D),E(x,B,0),E(g,B,0),E(X,B,.5),E(X,B,.5),E(g,B,0),E(_,B,0),E(X,B,.5),E(_,B,0),E(D,B,0)):(g.subVectors(T,N).multiplyScalar(A).add(N),_.subVectors(T,P).multiplyScalar(A).add(P),E(N,B,1),E(g,B,1),E(X,B,.5),E(X,B,.5),E(g,B,1),E(_,B,1),E(X,B,.5),E(_,B,1),E(P,B,1));else _e?(xe?(E(d,Q,1),E(p,Q,0),E(T,B,0),E(d,Q,1),E(T,B,0),E(O,B,1)):(E(d,Q,1),E(p,Q,0),E(T,B,1),E(p,Q,0),E(O,B,0),E(T,B,1)),xe?D.copy(T):P.copy(T)):xe?(E(x,B,0),E(T,B,0),E(X,B,.5),E(X,B,.5),E(T,B,0),E(D,B,0)):(E(N,B,1),E(T,B,1),E(X,B,.5),E(X,B,.5),E(T,B,1),E(P,B,1)),Me=!0;break}}else fe()}else fe();!F&&y===M-1&&j(e[0],R,v,xe,!0,Q),Q=B,Y=X,p.copy(D),d.copy(P)}if(!F)j(X,x,N,xe,!1,B);else if(_e&&r){let y=T,ie=O;Oe!==xe&&(y=O,ie=T),xe?(Me||Oe)&&(ie.toArray(r,0*3),ie.toArray(r,3*3),Me&&y.toArray(r,1*3)):(Me||!Oe)&&(ie.toArray(r,1*3),ie.toArray(r,3*3),Me&&y.toArray(r,0*3))}return Ye;function w(y,ie,$){return $.subVectors(ie,y),$.set(-$.y,$.x).normalize()}function E(y,ie,$){r&&(r[I]=y.x,r[I+1]=y.y,r[I+2]=0,o&&(o[I]=0,o[I+1]=0,o[I+2]=1),I+=3,a&&(a[L]=ie,a[L+1]=$,L+=2)),Ye+=3}function Z(y,ie,$,le,U){c.copy(ie).sub(y).normalize(),u.copy($).sub(y).normalize();let C=Math.PI;const re=c.dot(u);Math.abs(re)<1&&(C=Math.abs(Math.acos(re))),C/=n,h.copy(ie);for(let A=0,S=n-1;A<S;A++)f.copy(h).rotateAround(y,C),E(h,le,U),E(f,le,U),E(y,le,.5),h.copy(f);E(f,le,U),E($,le,U),E(y,le,.5)}function fe(){E(d,Q,1),E(p,Q,0),E(x,B,0),E(d,Q,1),E(x,B,0),E(N,B,1)}function V(y,ie,$){ie?y?(E(d,Q,1),E(p,Q,0),E(x,B,0),E(d,Q,1),E(x,B,0),E(O,B,1),E(x,$,0),E(D,$,0),E(O,$,.5)):(E(d,Q,1),E(p,Q,0),E(N,B,1),E(p,Q,0),E(O,B,0),E(N,B,1),E(N,$,1),E(O,$,0),E(P,$,1)):y?(E(x,$,0),E(D,$,0),E(X,$,.5)):(E(N,$,1),E(P,$,0),E(X,$,.5))}function me(y,ie){ie&&(y?(E(d,Q,1),E(p,Q,0),E(x,B,0),E(d,Q,1),E(x,B,0),E(O,B,1),E(x,Q,0),E(X,B,.5),E(O,B,1),E(X,B,.5),E(D,Q,0),E(O,B,1)):(E(d,Q,1),E(p,Q,0),E(N,B,1),E(p,Q,0),E(O,B,0),E(N,B,1),E(N,Q,1),E(O,B,0),E(X,B,.5),E(X,B,.5),E(O,B,0),E(P,Q,1)))}function j(y,ie,$,le,U,C){switch(t.strokeLineCap){case"round":U?Z(y,$,ie,C,.5):Z(y,ie,$,C,.5);break;case"square":if(U)c.subVectors(ie,y),u.set(c.y,-c.x),h.addVectors(c,u).add(y),f.subVectors(u,c).add(y),le?(h.toArray(r,1*3),f.toArray(r,0*3),f.toArray(r,3*3)):(h.toArray(r,1*3),a[3*2+1]===1?f.toArray(r,3*3):h.toArray(r,3*3),f.toArray(r,0*3));else{c.subVectors($,y),u.set(c.y,-c.x),h.addVectors(c,u).add(y),f.subVectors(u,c).add(y);const re=r.length;le?(h.toArray(r,re-1*3),f.toArray(r,re-2*3),f.toArray(r,re-4*3)):(f.toArray(r,re-2*3),h.toArray(r,re-1*3),f.toArray(r,re-4*3))}break}}function q(y){let ie=!1;for(let le=1,U=y.length-1;le<U;le++)if(y[le].distanceTo(y[le+1])<s){ie=!0;break}if(!ie)return y;const $=[];$.push(y[0]);for(let le=1,U=y.length-1;le<U;le++)y[le].distanceTo(y[le+1])>=s&&$.push(y[le]);return $.push(y[y.length-1]),$}}}class Pg{constructor(e,t){this.scene=e,this.effectManager=t,this.svgGroup=new Xi,this.scene.add(this.svgGroup),this.currentObject=null,this.currentType=null,this.svgLoader=new aa,this.textureLoader=new Xh}hideAllObjects(){this.scene.traverse(e=>{var t;e.isMesh&&((t=e.userData)!=null&&t.type)&&(e.visible=!1)})}clearCurrentObject(){var e,t;if(this.currentObject){if(((e=this.currentObject.userData)==null?void 0:e.type)==="default"){this.currentObject.visible=!1;return}this.currentType==="svg"?(this.svgGroup.children.forEach(n=>{var s;n.geometry&&n.geometry.dispose(),(s=n.material)!=null&&s.dispose&&n.material.dispose()}),this.svgGroup.clear()):this.currentType==="png"&&(this.scene.remove(this.currentObject),this.currentObject.geometry&&this.currentObject.geometry.dispose(),(t=this.currentObject.material)!=null&&t.dispose&&this.currentObject.material.dispose()),this.currentObject=null}}showDefaultObject(){this.scene.traverse(e=>{var t;((t=e.userData)==null?void 0:t.type)==="default"&&(e.visible=!0)})}async loadFile(e){this.hideAllObjects();const t=e.name.toLowerCase();if(t.endsWith(".svg")){for(;this.svgGroup.children.length>0;){const n=this.svgGroup.children[0];this.svgGroup.remove(n),n.geometry&&n.geometry.dispose(),n.material&&n.material.dispose()}return this.loadSVG(e)}else{if(t.match(/\.(png|jpg|jpeg)$/))return this.loadImage(e);throw new Error("Unsupported file type")}}async loadSVG(e){return new Promise((t,n)=>{const s=new FileReader;s.onload=r=>{try{this.clearCurrentObject();const o=this.svgLoader.parse(r.target.result).paths;if(o.length===0)throw new Error("No paths found in SVG");const a=[];o.forEach(d=>{a.push(...d.toShapes(!0))});const l=new ea(a,{depth:20,bevelEnabled:!0,bevelThickness:2,bevelSize:1,bevelSegments:5,curveSegments:64}),c=No(!1,null,this.effectManager.params.metalPreset||"silver");c.uniforms.u_isSVG={value:!0};const u=new kt(l,c);this.svgGroup.add(u);const h=new Qn().setFromObject(this.svgGroup),f=new z,m=new z;h.getSize(f),h.getCenter(m);const g=30,_=Math.max(f.x,f.y,f.z),p=g/_;this.svgGroup.scale.set(p,-p,p),this.svgGroup.position.set(-m.x*p,-m.y*p,-m.z*p),this.svgGroup.rotation.set(0,0,0),this.scene.traverse(d=>{var R;((R=d.userData)==null?void 0:R.type)==="default"&&(d.visible=!1)}),this.currentObject=this.svgGroup,this.currentType="svg",this.svgGroup.visible=!0,t(this.svgGroup)}catch(o){n(o)}},s.onerror=n,s.readAsText(e)})}async loadImage(e){return new Promise((t,n)=>{const s=new FileReader;s.onload=r=>{this.textureLoader.load(r.target.result,o=>{try{this.clearCurrentObject();const a=o.image.width/o.image.height,l=50,c=l/a,u=new ls(l,c,64,64),h=No(!0,o,this.effectManager.params.metalPreset||"silver"),f=new kt(u,h);this.scene.add(f),this.currentObject=f,this.currentType="png",t(f)}catch(a){n(a)}},void 0,n)},s.onerror=n,s.readAsDataURL(e)})}getCurrentObject(){return{object:this.currentObject,type:this.currentType}}}function Lg(){const i=new ta(15,6,100,32,2,3),e=No(!1,null,"silver"),t=new kt(i,e);return t.userData.type="default",t}class Dg{constructor(){this.canvas=document.getElementById("glCanvas"),this.fileInput=document.getElementById("imageUpload"),this.uploadBtn=document.getElementById("uploadBtn"),this.loadingIndicator=document.getElementById("loadingIndicator"),this.renderer=new F_({canvas:this.canvas,antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.sceneManager=new Q_,this.cameraSystem=new J_(this.canvas),this.grid=this.sceneManager.createGridHelper(),this.axesHelper=this.sceneManager.createAxisHelper(),this.currentObject=null,this.effectManager=new rg,this.effectManager.setScene(this.sceneManager.scene),this.gui=Cg(this.effectManager,this.sceneManager,this.cameraSystem,this.grid,this.axesHelper);const t=this.gui.__folders.Camera.__controllers.find(n=>n.property==="resetCamera");t&&(t.object.resetCamera=()=>{this.currentObject&&this.cameraSystem.fitToObject(this.currentObject)}),this.fileLoader=new Pg(this.sceneManager.scene,this.effectManager),this.setupFileUpload(),this.createDefaultObject(),window.addEventListener("resize",()=>this.onWindowResize()),this.animate()}showLoading(){this.loadingIndicator&&this.loadingIndicator.classList.add("active")}hideLoading(){this.loadingIndicator&&this.loadingIndicator.classList.remove("active")}setupFileUpload(){this.uploadBtn.addEventListener("click",()=>this.fileInput.click()),this.fileInput.addEventListener("change",async e=>{var n;const t=e.target.files[0];if(t){this.showLoading();try{const s=await this.fileLoader.loadFile(t);this.currentObject=s,this.cameraSystem.fitToObject(s),(n=this.gui)!=null&&n.updateControlsForFileType&&this.gui.updateControlsForFileType(this.fileLoader.currentType)}catch(s){console.error("Error loading file:",s),alert("Error loading file: "+s.message),this.scene.traverse(r=>{var o;((o=r.userData)==null?void 0:o.type)==="default"&&(r.visible=!0)})}finally{this.hideLoading(),this.fileInput.value=""}}})}createDefaultObject(){this.currentObject=Lg(),this.currentObject.userData.type="default",this.currentObject.userData.needsUpdate=!0,this.currentObject.classList=["wireframe-toggle"],this.sceneManager.addObject(this.currentObject),this.cameraSystem.fitToObject(this.currentObject)}onWindowResize(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.cameraSystem.camera.aspect=window.innerWidth/window.innerHeight,this.cameraSystem.camera.updateProjectionMatrix(),this.currentObject&&this.currentObject.traverse(e=>{e.isMesh&&e.material&&e.material.uniforms&&e.material.uniforms.u_resolution&&e.material.uniforms.u_resolution.value.set(window.innerWidth,window.innerHeight)})}animate(){requestAnimationFrame(()=>this.animate());const e=this.effectManager.update(),t=this.effectManager.clock.getDelta();this.cameraSystem.update(),this.sceneManager.update(t),this.sceneManager.scene.traverse(n=>{var s;n.isMesh&&((s=n.material)!=null&&s.uniforms)&&(n.material.uniforms.u_time&&(n.material.uniforms.u_time.value=e),this.effectManager.updateMaterialUniforms(n.material))}),this.renderer.render(this.sceneManager.scene,this.cameraSystem.camera)}}document.addEventListener("DOMContentLoaded",()=>{new Dg});
