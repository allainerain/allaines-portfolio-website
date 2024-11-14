export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["card-photos/abm.mp4","card-photos/abscbn-conf.png","card-photos/abscbn.mp4","card-photos/abscbn.png","card-photos/berdebox-web.mp4","card-photos/berdebox.mp4","card-photos/berdebox.png","card-photos/cycling.png","card-photos/dcs-disease.png","card-photos/eba-conf.png","card-photos/enfa.mp4","card-photos/forent-mobile.png","card-photos/forent-web.png","card-photos/gdsc.png","card-photos/home-buddies.png","card-photos/homebuddies.mp4","card-photos/mask-patrol.png","card-photos/photo-album.png","card-photos/placeholder.jpg","card-photos/suse-conf.png","card-photos/suse.png","card-photos/zmal.png","favicon.png","fonts/SF-Pro/SF-Pro-Display-Black.otf","fonts/SF-Pro/SF-Pro-Display-BlackItalic.otf","fonts/SF-Pro/SF-Pro-Display-Bold.otf","fonts/SF-Pro/SF-Pro-Display-BoldItalic.otf","fonts/SF-Pro/SF-Pro-Display-Heavy.otf","fonts/SF-Pro/SF-Pro-Display-HeavyItalic.otf","fonts/SF-Pro/SF-Pro-Display-Light.otf","fonts/SF-Pro/SF-Pro-Display-LightItalic.otf","fonts/SF-Pro/SF-Pro-Display-Medium.otf","fonts/SF-Pro/SF-Pro-Display-MediumItalic.otf","fonts/SF-Pro/SF-Pro-Display-Regular.otf","fonts/SF-Pro/SF-Pro-Display-RegularItalic.otf","fonts/SF-Pro/SF-Pro-Display-Semibold.otf","fonts/SF-Pro/SF-Pro-Display-SemiboldItalic.otf","fonts/SF-Pro/SF-Pro-Display-Thin.otf","fonts/SF-Pro/SF-Pro-Display-ThinItalic.otf","fonts/SF-Pro/SF-Pro-Display-Ultralight.otf","fonts/SF-Pro/SF-Pro-Display-UltralightItalic.otf","fonts/SF-Pro/SF-Pro-Italic.ttf","fonts/SF-Pro/SF-Pro-Rounded-Black.otf","fonts/SF-Pro/SF-Pro-Rounded-Bold.otf","fonts/SF-Pro/SF-Pro-Rounded-Heavy.otf","fonts/SF-Pro/SF-Pro-Rounded-Light.otf","fonts/SF-Pro/SF-Pro-Rounded-Medium.otf","fonts/SF-Pro/SF-Pro-Rounded-Regular.otf","fonts/SF-Pro/SF-Pro-Rounded-Semibold.otf","fonts/SF-Pro/SF-Pro-Rounded-Thin.otf","fonts/SF-Pro/SF-Pro-Rounded-Ultralight.otf","fonts/SF-Pro/SF-Pro-Text-Black.otf","fonts/SF-Pro/SF-Pro-Text-BlackItalic.otf","fonts/SF-Pro/SF-Pro-Text-Bold.otf","fonts/SF-Pro/SF-Pro-Text-BoldItalic.otf","fonts/SF-Pro/SF-Pro-Text-Heavy.otf","fonts/SF-Pro/SF-Pro-Text-HeavyItalic.otf","fonts/SF-Pro/SF-Pro-Text-Light.otf","fonts/SF-Pro/SF-Pro-Text-LightItalic.otf","fonts/SF-Pro/SF-Pro-Text-Medium.otf","fonts/SF-Pro/SF-Pro-Text-MediumItalic.otf","fonts/SF-Pro/SF-Pro-Text-Regular.otf","fonts/SF-Pro/SF-Pro-Text-RegularItalic.otf","fonts/SF-Pro/SF-Pro-Text-Semibold.otf","fonts/SF-Pro/SF-Pro-Text-SemiboldItalic.otf","fonts/SF-Pro/SF-Pro-Text-Thin.otf","fonts/SF-Pro/SF-Pro-Text-ThinItalic.otf","fonts/SF-Pro/SF-Pro-Text-Ultralight.otf","fonts/SF-Pro/SF-Pro-Text-UltralightItalic.otf","fonts/SF-Pro/SF-Pro.ttf","hobbies/bike.jpg","hobbies/knit.jpg","hobbies/lang.jpg","hobbies/travel.jpg","hobbies/upd.png","icons/arrow-top-right.png","icons/diamond.png","icons/icon-placeholder.png","materials.jpg","profilepic.jpg","works/abm/1.png","works/abscbn/1.png","works/abscbn/2.png","works/abscbn/3.png","works/abscbn/4.png","works/abscbn/5.png","works/abscbn_conf/1.png","works/abscbn_conf/2.png","works/berdebox/1.png","works/berdebox/2.png","works/berdebox/3.png","works/berdebox/4.png","works/berdebox/5.png","works/eba_conf/1.png","works/eba_conf/2.png","works/eba_conf/3.png","works/enfa/1.png","works/enfa/2.png","works/enfa/3.png","works/enfa/4.png","works/enfa/5.png","works/forent-app/1.png","works/forent-app/2.png","works/forent-app/3.png","works/forent-app/4.png","works/forent-web/1.png","works/forent-web/2.png","works/forent-web/3.png","works/forent-web/4.png","works/forent-web/5.png","works/forent-web/6.png","works/forent-web/7.png","works/forent-web/8.png","works/gdsc/gdsc1.png","works/gdsc/gdsc2.png","works/gdsc/gdsc3.png","works/gdsc/gdsc4.png","works/gdsc/gdsc5.png","works/gdsc/gdsc6.png","works/hb/1.png","works/hb/10.png","works/hb/2.png","works/hb/3.png","works/hb/4.png","works/hb/5.png","works/hb/6.png","works/hb/7.png","works/hb/8.png","works/hb/9.png","works/mask-patrol/1.png","works/mask-patrol/2.png","works/suse/1.png","works/suse/2.png","works/suse/3.png","works/suse/4.png","works/suse/5.png","works/suse_conf/1.png","works/suse_conf/2.png","works/suse_conf/3.png"]),
	mimeTypes: {".mp4":"video/mp4",".png":"image/png",".jpg":"image/jpeg",".otf":"font/otf",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.zdVGvoBn.js","app":"_app/immutable/entry/app.C-cNkEuK.js","imports":["_app/immutable/entry/start.zdVGvoBn.js","_app/immutable/chunks/entry.DmK3LuIK.js","_app/immutable/chunks/scheduler.D_nhxABO.js","_app/immutable/chunks/index.BLZgOH5n.js","_app/immutable/entry/app.C-cNkEuK.js","_app/immutable/chunks/scheduler.D_nhxABO.js","_app/immutable/chunks/index.DJPTx4q_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/blog",
				pattern: /^\/blog\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/blog/[slug]",
				pattern: /^\/blog\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
