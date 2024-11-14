import { c as create_ssr_component, e as escape, d as spread, f as escape_attribute_value, h as escape_object, v as validate_component, i as add_styles, j as each, k as createEventDispatcher, l as add_attribute, o as compute_rest_props, p as is_promise, n as noop } from "../../../../chunks/ssr.js";
import { transformProps } from "@unpic/core";
import styleToCss from "style-object-to-css-string";
const ErrorPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${data?.error ? `<div class="flex min-h-screen min-w-full justify-center items-center"><div class="bg-slate-200 p-10 rounded-md text-gray-700 flex flex-col gap-4"><h3 class="font-bold text-2xl text-gray-700">Error code: ${escape(data.error.code)}</h3> <p class="text-lg text-gray-600">${escape(data.error.message)}</p></div></div>` : ``}`;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { heading } = $$props;
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0) $$bindings.heading(heading);
  return `${heading ? `${heading.type == "heading_1" ? `<h1>${escape(heading.heading_1.rich_text?.[0]?.plain_text)}</h1>` : `${heading.type == "heading_2" ? `<h2>${escape(heading.heading_2.rich_text?.[0]?.plain_text)}</h2>` : `${heading.type == "heading_3" ? `<h3>${escape(heading.heading_3.rich_text?.[0]?.plain_text)}</h3>` : ``}`}`}` : ``}`;
});
let initialText = "";
const Paragraph = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let paraText;
  let { paragraph } = $$props;
  console.log(paragraph.paragraph);
  let color = paragraph.paragraph.color;
  if ($$props.paragraph === void 0 && $$bindings.paragraph && paragraph !== void 0) $$bindings.paragraph(paragraph);
  paraText = paragraph.paragraph?.rich_text?.reduce(
    (accumulator, para) => {
      if (para.href) {
        return accumulator + `<a href="${para.href}" target="_blank" 
          style="
              color: #D9D9D9; 
              text-decoration: none; 
              border-bottom: 3.5px solid #D9D9D9; 
              transition: border-bottom; 
              transition: color; 
              text-decoration-skip-ink: none;" 
          
          onmouseover="
              this.style.borderBottom='3.5px solid #C2C2C2'; 
              this.style.color='#C2C2C2'" 
              
          onmouseout="
              this.style.borderBottom='4px solid #D9D9D9'; 
              this.style.color='#D9D9D9'">
          
          ${para.plain_text}
          
          </a>`;
      } else {
        let text = para.plain_text;
        if (para.annotations.bold) text = `<b>${text}</b>`;
        if (para.annotations.italic) text = `<i>${text}</i>`;
        if (para.annotations.strikethrough) text = `<s>${text}</s>`;
        if (para.annotations.underline) text = `<u>${text}</u>`;
        if (color == "blue") {
          text = `<span style="font-family: 'Roboto Mono', monospace;
        font-size: 16px;
        color: #838481;">${text}</span>`;
        }
        return accumulator + text;
      }
    },
    initialText
  );
  return `${paraText ? `<p><!-- HTML_TAG_START -->${paraText}<!-- HTML_TAG_END --></p>` : ``}`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let parentStyle;
  let props;
  let alt;
  let styleObj;
  let transformedProps;
  let style;
  ({ style: parentStyle, ...props } = $$props);
  ({ alt, style: styleObj, ...transformedProps } = transformProps({ ...props, style: {} }));
  style = [styleToCss(styleObj), parentStyle].filter(Boolean).join(";");
  return `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { style: escape_attribute_value(style) },
      escape_object(transformedProps)
    ],
    {}
  )}>`;
});
const ImageBlock = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { block } = $$props;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  return `${block.image ? `${block.image.type == "file" ? `${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: block.image.file.url,
      layout: "fullWidth",
      aspectRatio: 16 / 9,
      class: "rounded-lg max-w-full"
    },
    {},
    {}
  )} ${block.image.caption?.length > 0 ? `<p class="w-full text-xs text-gray-500 text-center">${escape(block.image.caption?.[0].plain_text)}</p>` : ``}` : `${block.image.type == "external" ? `${validate_component(Image, "Image").$$render(
    $$result,
    {
      src: block.image.external.url,
      layout: "fullWidth",
      aspectRatio: 16 / 9,
      class: "rounded-lg max-w-full"
    },
    {},
    {}
  )} ${block.image.caption?.length > 0 ? `<p class="w-full text-xs text-gray-500 text-center">${escape(block.image.caption?.[0].plain_text)}</p>` : ``}` : ``}`}` : ``}`;
});
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  return `${text ? `<p${add_styles({
    "font-weight": text.annotations.bold ? "bold" : "normal",
    "font-style": text.annotations.italic ? "italic" : "normal"
  })}>${escape(text.plain_text)}</p>` : ``}`;
});
const NumberedList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { block } = $$props;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  return `${block && block.numbered_list_item.rich_text?.length > 0 ? `${each(block.numbered_list_item.rich_text, (item) => {
    return `${validate_component(Text, "Text").$$render($$result, { text: item }, {}, {})}`;
  })}` : ``}`;
});
const BulletList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { block } = $$props;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  return `${block && block.bulleted_list_item?.rich_text.length > 0 ? `${each(block.bulleted_list_item.rich_text, (item) => {
    return `${validate_component(Text, "Text").$$render($$result, { text: item }, {}, {})}`;
  })}` : ``}`;
});
const General_observer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { height = "100" } = $$props;
  let { width = "100" } = $$props;
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `<div>${`<div class="flex justify-center mb-12"${add_attribute("style", `height:${height}px;width: 100%`, 0)}></div>`}</div>`;
});
const Generic_embed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "title", "height", "width"]);
  let { src = "" } = $$props;
  let { title = "" } = $$props;
  let { height = "300" } = $$props;
  let { width = "100%" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0) $$bindings.src(src);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0) $$bindings.height(height);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0) $$bindings.width(width);
  return `${validate_component(General_observer, "GeneralObserver").$$render($$result, { height, width }, {}, {
    default: () => {
      return `<iframe${spread(
        [
          { src: escape_attribute_value(src) },
          { width: escape_attribute_value(width) },
          { height: escape_attribute_value(height) },
          { title: escape_attribute_value(title) },
          escape_object($$restProps)
        ],
        {}
      )}></iframe> ${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Embed = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { block } = $$props;
  const isImage = (url) => {
    return url.indexOf(".jpg") >= 0 || url.indexOf(".png") >= 0 || url.indexOf(".jpeg") >= 0 || url.indexOf(".webp") >= 0 || url.indexOf(".avif") >= 0;
  };
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  return `${block ? `${isImage(block.embed.url) ? `<img${add_attribute("src", block.embed.url, 0)}${add_attribute("alt", block.embed.caption?.join(" "), 0)}>` : `<a${add_attribute("href", block.embed.url, 0)} target="_blank">${validate_component(Generic_embed, "GenericEmbed").$$render($$result, { src: block.embed.url }, {}, {})}</a>`}` : ``}`;
});
const Callout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { block } = $$props;
  let { title = block.rich_text[0].plain_text } = $$props;
  let { emoji = block.icon.emoji } = $$props;
  let { children = block.children } = $$props;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.emoji === void 0 && $$bindings.emoji && emoji !== void 0) $$bindings.emoji(emoji);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0) $$bindings.children(children);
  return `<div class="flex flex-col h-full gap-4 border border-1 p-8 rounded-lg bg-[#FBFBFB] dark:bg-[#161616] dark:border-[#2D2D2D]"><p class="text-light-accent dark:text-dark-accent text-[16px]">${escape(emoji)} ${escape(title)}</p> ${children ? `${each(children, (child) => {
    return `${validate_component(Block, "Block").$$render($$result, { block: child }, {}, {})}`;
  })}` : ``}</div>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { block } = $$props;
  let rows = block.rows;
  let length = rows[0].cells.length;
  let colLength = rows.length;
  console.log(rows);
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  return `<div class="flex p-4 rounded-lg border border-1 dark:bg-[#161616] dark:border-[#2D2D2D]">${each(Array(colLength), (_, colIndex) => {
    return `<table class="text-light-accent rounded-lg border-collapse w-full m-2 dark:text-dark-text"><tbody class="block">${each(Array(length), (_2, rowIndex) => {
      return `${rows[rowIndex].cells[colIndex] !== null ? `<tr><td${add_attribute("class", rowIndex === 0 ? "font-bold mb-2" : "", 0)}>${escape(rows[rowIndex].cells[colIndex])}</td> </tr>` : ``}`;
    })}</tbody> </table>`;
  })}</div>`;
});
const Block = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { block } = $$props;
  if ($$props.block === void 0 && $$bindings.block && block !== void 0) $$bindings.block(block);
  return `${block.type == "heading_1" ? `${validate_component(Heading, "Heading").$$render($$result, { heading: block }, {}, {})}` : `${block.type == "heading_2" ? `${validate_component(Heading, "Heading").$$render($$result, { heading: block }, {}, {})}` : `${block.type == "heading_3" ? `${validate_component(Heading, "Heading").$$render($$result, { heading: block }, {}, {})}` : `${block.type == "paragraph" ? `${validate_component(Paragraph, "Paragraph").$$render($$result, { paragraph: block }, {}, {})}` : `${block.type == "numbered_list_item" ? `${validate_component(NumberedList, "NumberedList").$$render($$result, { block }, {}, {})}` : `${block.type == "bulleted_list_item" ? `${validate_component(BulletList, "BulletList").$$render($$result, { block }, {}, {})}` : `${block.type == "image" ? `${validate_component(ImageBlock, "ImageBlock").$$render($$result, { block }, {}, {})}` : `${block.type == "embed" ? `${validate_component(Embed, "Embed").$$render($$result, { block }, {}, {})}` : `${block.type == "callout" ? `${validate_component(Callout, "Callout").$$render($$result, { block }, {}, {})}` : `${block.type == "table" ? `${validate_component(Table, "Table").$$render($$result, { block }, {}, {})}` : ``}`}`}`}`}`}`}`}`}`}`;
});
const Post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { postBlocks } = $$props;
  let { title } = $$props;
  let { published } = $$props;
  let { category } = $$props;
  postBlocks.length;
  let sampleDate = /* @__PURE__ */ new Date();
  let formattedPublishDate = Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(sampleDate);
  if ($$props.postBlocks === void 0 && $$bindings.postBlocks && postBlocks !== void 0) $$bindings.postBlocks(postBlocks);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.published === void 0 && $$bindings.published && published !== void 0) $$bindings.published(published);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0) $$bindings.category(category);
  return `${postBlocks && postBlocks.length > 0 ? `<article class="mx-auto lg:prose-lg grid gap-8"><div class="grid gap-2">${category ? `<p>${escape(category)}</p>` : ``} ${title ? `<h1>${escape(title)}</h1>` : ``} <div class="flex justify-between items-center">${published ? `<p class="">Published on ${escape(formattedPublishDate)}</p>` : ``}</div></div> ${each(postBlocks, (postBlock) => {
    return `${postBlock.type === "column_list" ? `<div><div class="grid grid-cols-2 gap-4">${each(postBlock.columns, (column) => {
      return `<div class="flex flex-col gap-4">${each(column, (block) => {
        return `${validate_component(Block, "Block").$$render($$result, { block }, {}, {})}`;
      })} </div>`;
    })}</div> </div>` : `<div><div>${validate_component(Block, "Block").$$render($$result, { block: postBlock }, {}, {})}</div> </div>`}`;
  })}</article>` : ``}`;
});
const BlogPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if (Array.isArray(data.postBlocks)) {
    data.postBlocks.map((block) => {
      if (block.type == "heading_1") {
        return {
          text: block.heading_1.rich_text[0].plain_text,
          id: block.id,
          type: "heading_1"
        };
      } else if (block.type == "heading_2") {
        return {
          text: block.heading_2.rich_text[0].plain_text,
          id: block.id,
          type: "heading_2"
        };
      } else if (block.type == "heading_3") {
        return {
          text: block.heading_3.rich_text[0].plain_text,
          id: block.id,
          type: "heading_3"
        };
      } else {
        return void 0;
      }
    });
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${validate_component(ErrorPage, "ErrorPage").$$render($$result, { data }, {}, {})} ${validate_component(Post, "Post").$$render(
    $$result,
    {
      postBlocks: data.postBlocks,
      title: data.title,
      published: data.published,
      category: data.category
    },
    {},
    {}
  )}`;
});
const css = {
  code: ".loader.svelte-7ij2vo{width:100%;height:2.5px;position:relative;background:#EDEDED;overflow:hidden}.loader.svelte-7ij2vo::after{content:'';width:100%;height:100%;background:#808080;position:absolute;top:0;left:-100%;animation:svelte-7ij2vo-animloader 2s linear infinite;box-sizing:border-box}@keyframes svelte-7ij2vo-animloader{0%{left:-100%;transform:translateX(0)}100%{left:100%;transform:translateX(0)}}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">\\r\\n    import { fly } from \\"svelte/transition\\";\\r\\n    import { onMount } from 'svelte';\\r\\n\\r\\n\\timport BlogPost from '$lib/components/blog/BlogPost.svelte';\\r\\n\\r\\n    export let data;    \\r\\n\\r\\n    let ready = false;\\r\\n    onMount(() => {\\r\\n        ready = true\\r\\n    });\\r\\n\\r\\n    $: postDataPromise = data.postData;\\r\\n<\/script>\\r\\n\\r\\n\\r\\n{#await postDataPromise}\\r\\n    {#if ready}\\r\\n        <section transition:fly={{y: -300, duration: 500, opacity: 1}} class=\\"fixed top-0 left-0 w-screen h-screen z-50 flex flex-col gap-8 items-center justify-center bg-light-background dark:bg-dark-background\\">\\r\\n                <p>Fetching blog post!</p>\\r\\n                <span class=\\"loader\\"></span>\\r\\n        </section>\\r\\n    {/if}\\r\\n{:then postData}\\r\\n    <section transition:fly={{y: 300, duration: 500, opacity: 1}} class=\\"grid gap-12 items-center justify-center max-w-[1300px] w-[90%]\\">\\r\\n        <section class=\\"grid gap-4 md:mt-40 mt-10\\">\\r\\n            <BlogPost data={postData} />\\r\\n        </section>\\r\\n    </section>\\r\\n{/await}\\r\\n\\r\\n\\r\\n<style>\\r\\n    .loader {\\r\\n        width: 100%;\\r\\n        height: 2.5px;\\r\\n        position: relative;\\r\\n        background: #EDEDED;\\r\\n        overflow: hidden;\\r\\n    }\\r\\n    \\r\\n    .loader::after {\\r\\n        content: '';\\r\\n        width: 100%; /* Adjust width as needed */\\r\\n        height: 100%;\\r\\n        background: #808080;\\r\\n        position: absolute;\\r\\n        top: 0;\\r\\n        left: -100%; /* Initial position outside the loader */\\r\\n        animation: animloader 2s linear infinite;\\r\\n        box-sizing: border-box;\\r\\n    }\\r\\n    \\r\\n    @keyframes animloader {\\r\\n      0% {\\r\\n        left: -100%; /* Starting position */\\r\\n        transform: translateX(0);\\r\\n      }\\r\\n      100% {\\r\\n        left: 100%; /* Ending position */\\r\\n        transform: translateX(0);\\r\\n      }\\r\\n    }\\r\\n</style>"],"names":[],"mappings":"AAkCI,qBAAQ,CACJ,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,KAAK,CACb,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,OAAO,CACnB,QAAQ,CAAE,MACd,CAEA,qBAAO,OAAQ,CACX,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,KAAK,CACX,SAAS,CAAE,wBAAU,CAAC,EAAE,CAAC,MAAM,CAAC,QAAQ,CACxC,UAAU,CAAE,UAChB,CAEA,WAAW,wBAAW,CACpB,EAAG,CACD,IAAI,CAAE,KAAK,CACX,SAAS,CAAE,WAAW,CAAC,CACzB,CACA,IAAK,CACH,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,WAAW,CAAC,CACzB,CACF"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let postDataPromise;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  $$result.css.add(css);
  postDataPromise = data.postData;
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return ` ${``} `;
    }
    return function(postData) {
      return ` <section class="grid gap-12 items-center justify-center max-w-[1300px] w-[90%]"><section class="grid gap-4 md:mt-40 mt-10">${validate_component(BlogPost, "BlogPost").$$render($$result, { data: postData }, {}, {})}</section></section> `;
    }(__value);
  }(postDataPromise)}`;
});
export {
  Page as default
};
