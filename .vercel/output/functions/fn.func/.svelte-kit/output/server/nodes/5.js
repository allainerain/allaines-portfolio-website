import * as server from '../entries/pages/blog/_slug_/_page.server.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/blog/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/5.BMGYje5e.js","_app/immutable/chunks/scheduler.D_nhxABO.js","_app/immutable/chunks/index.DJPTx4q_.js","_app/immutable/chunks/index.DtilaeOq.js","_app/immutable/chunks/each.Tg9wbnu5.js","_app/immutable/chunks/spread.CN4WR7uZ.js"];
export const stylesheets = ["_app/immutable/assets/5.CM8ZhHtc.css"];
export const fonts = [];
