<script>
    import { JsonLd, MetaTags } from "svelte-meta-tags";
    import ErrorPage from "./ErrorPage.svelte";
    import Post from "./Post.svelte";

    export let data;

    console.log("CALLED", data)
    console.log(data.props.postData)

    let tableOfContent
    if (Array.isArray(data.props.postData.blocks)) {
    tableOfContent = data.props.postData.blocks.map((block) => {
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
            return undefined;
        }
    });
    }

    console.log("table of contents", tableOfContent)
</script>

<MetaTags
  title= {data.title}
  titleTemplate="%sAllaine's Headspace"
  description= {data.description}
  openGraph={{
    url: "https://allainerain.github.io/blog/" + data.slug,
    title:data.title,
    description: data.description,
    images: [
      { url: data.cover ?? "" }
    ],
    site_name: "%sAllaine's Headspace"
  }}
/>

<JsonLd 
    schema={{
        "@context": "https://schema.org", 
        "@type": "BlogPosting",
        "headline": data.title,
        "image": data.cover,
        "author": data.author?.name ?? "Team StoreBud", 
        "publisher": {
            "@type": "Organization",
            "name": "StoreBud",
            "logo": {
            "@type": "ImageObject",
            "url": "https://www.mystorebud.com/android-chrome-192x192.png"
            }
        },
        "url": "http://www.mystorebud.com",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://mystorebud.com/blog"
        },
        "description": data.description,
        "articleBody": data.description,
        "dateCreated": data?.published ? new Date(data?.published).toISOString() : new Date().toISOString(),
        "datePublished": data?.published ? new Date(data.published).toISOString() : new Date().toISOString(),
    }}
/> 

<ErrorPage {data} />

<div class="min-h-screen bg-white py-8 flex flex-col justify-center relative overflow-hidden lg:py-12">
    <div class="relative w-full px-6 py-12 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
        <Post blocks={data.props.postData.blocks} {tableOfContent} title={data.props.postData.title} cover={data.props.postData.cover} faqs={data.props.postData.faqs} author={data.props.postData.author} published={data.props.postData.published} category={data.props.postData.category}/>
    </div>
</div>