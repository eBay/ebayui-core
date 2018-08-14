
export default {
	component: `### ebay-button Usage

~~~html
<button>label</button>
~~~

### ebay-button Attributes

|Name|Type|Stateful|Description|
|--- |--- |--- |--- |
|class|String|No|custom class|
|priority|String|No|"primary" / "secondary" (default) / "none"|
|size|String|No|"small" or "large" (default: medium)|
|href|String|No|for link that looks like a button|
|fluid|Boolean|No||
|disabled|Boolean|Yes||
|partially-disabled|Boolean|No||
|variant|String|No|optional, to alter Skin classes: "expand" / "cta"|

### ebay-button Events

|Event|Data|Description|
|--- |--- |--- |
|button-click|{ originalEvent }|click|`,

	primary: `### Primary

~~~html
<ebay-button priority="primary">label</ebay-button>
~~~`,
	
	raw: `### Raw

~~~html
<ebay-button priority="none">label</ebay-button>
~~~`,
	
	small: `### Small

~~~html
<ebay-button size="small">label</ebay-button>
~~~`,

	large: `### Large

~~~html
<ebay-button size="large">label</ebay-button>
~~~`,
	
	fake: `
### Fake

~~~html
<ebay-button href="#">label</ebay-button>
~~~`,
	
	disabled: `
### Disabled

~~~html
<ebay-button disabled>label</ebay-button>
~~~`,
	
	partiallydisabled: `
### Partially disabled

~~~html
<ebay-button partially-disabled>label</ebay-button>
~~~`,
	
	fluid: `
### Fluid

~~~html
<ebay-button fluid>label</ebay-button>
~~~`,
	
	primarylargefluid: `
### Primary large fluid

~~~html
<ebay-button priority="primary" size="large" fluid>label</ebay-button>
~~~`
}