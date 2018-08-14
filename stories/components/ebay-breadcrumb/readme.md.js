
export default {
	component: `### ebay-breadcrumb Usage

~~~html
<ebay-breadcrumb heading='Page navigation'>
    <ebay-breadcrumb-item href='https://...'>eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Auto Parts and Vehicles</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href='https://...'>Motors Parts and Accessories</ebay-breadcrumb-item>
</ebay-breadcrumb>
~~~

### ebay-breadcrumb Attributes

|Name|Type|Stateful|Description|
|--- |--- |--- |--- |
|class|String|No|custom class|
|heading-text|String|No|heading for breadcrumb which will be clipped|
|heading-level|String|No|heading level(h1-h4) for breadcrumb and default is h2|
|href|String|No|anchor href|
|hijax|Boolean|No|Prevent link navigation; for use with ajax|

### ebay-breadcrumb Events

|Event|Data|Description|
|--- |--- |--- |
|breadcrumb-select|{ originalEvent, el }|click breadcrumb items|`,

	headinglevel: `### Breadcrumb heading level

~~~html
<ebay-breadcrumb heading-text="Page navigation" heading-level="h3">
	<ebay-breadcrumb-item href="http://www.ebay.com/">eBay</ebay-breadcrumb-item>
	<ebay-breadcrumb-item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</ebay-breadcrumb-item>
	<ebay-breadcrumb-item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</ebay-breadcrumb-item>
	<ebay-breadcrumb-item href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</ebay-breadcrumb-item>
</ebay-breadcrumb>
~~~`,
	
	lastpageascurrent: `### Last page as current

~~~html
<ebay-breadcrumb heading-text="Page navigation">
    <ebay-breadcrumb-item href="http://www.ebay.com/">eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/b/Smart-Watch-Bands/182068/bn_16565906">Smart Watch Bands</ebay-breadcrumb-item>
</ebay-breadcrumb>
~~~`,
	
	lastpageasparent: `### Last page as parent

~~~html
<ebay-breadcrumb heading-text="Page navigation">
    <ebay-breadcrumb-item href="http://www.ebay.com/">eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</ebay-breadcrumb-item>
    <ebay-breadcrumb-item>Smart Watch Bands</ebay-breadcrumb-item>
</ebay-breadcrumb>
~~~`,

	pagewithcustomattributes: `### Page with custom attributes

~~~html
<ebay-breadcrumb heading-text="Page navigation">
    <ebay-breadcrumb-item href="http://www.ebay.com/" navsrc="{}" _sp="p2345.m909.l34">eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/rpp/cell-phone-pda" navsrc="{}" _sp="p2345.m909.l34">Cell Phones, Smart Watches & Accessories</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905" navsrc="{}" _sp="p2345.m909.l34">Smart Watch Accessories</ebay-breadcrumb-item>
    <ebay-breadcrumb-item>Smart Watch Bands</ebay-breadcrumb-item>
</ebay-breadcrumb>
~~~`,
	
	hijax: `
### Hijax

~~~html
<ebay-breadcrumb hijax class="breadcrumb--hijax">
    <ebay-breadcrumb-item href="http://www.ebay.com/">eBay</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/rpp/cell-phone-pda">Cell Phones, Smart Watches & Accessories</ebay-breadcrumb-item>
    <ebay-breadcrumb-item href="https://www.ebay.com/b/Smart-Watch-Accessories/182064/bn_16565905">Smart Watch Accessories</ebay-breadcrumb-item>
    <ebay-breadcrumb-item>Smart Watch Bands</ebay-breadcrumb-item>
</ebay-breadcrumb>
 
<script>(function() {
    var breadcrumb = document.querySelector(".breadcrumb--hijax");
    breadcrumb.addEventListener("breadcrumb-select", e => console.log(e.detail));
})()</script>
~~~`,

}