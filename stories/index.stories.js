
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, number, array } from '@storybook/addon-knobs';
import Button from './../src/components/ebay-button/';
import Radio from './../src/components/ebay-radio/';
import Select from './../src/components/ebay-select/';
import Breadcrumb from './../src/components/ebay-breadcrumb/';
import Carousel from './../src/components/ebay-carousel/';
import Combobox from './../src/components/ebay-combobox/';
import Pagination from './../src/components/ebay-pagination/';

import './css/reset.css';
import './css/ebayui-bundle.css';

storiesOf('ebayui', module)
  .addDecorator(withKnobs)
  .add('ebay-combobox', () => {
    const type = text('type', 'continuous');
    const accessibilityPrev = text('accessibility-prev', '');
    const accessibilityNext = text('accessibility-next', '');
    return Carousel.renderSync({
      type,
      accessibilityPrev,
      accessibilityNext,
      items: [{
        renderBody: 'Card 1',
      }, {
        renderBody: 'Card 2',
      }, {
        renderBody: 'Card 3',
      }]
    });
  });


storiesOf('ebayui', module)
  .addDecorator(withKnobs)
  .add('ebay-carousel', () => {
    const type = text('type', 'continuous');
    const accessibilityPrev = text('accessibility-prev', '');
    const accessibilityNext = text('accessibility-next', '');
    return Carousel.renderSync({
      type,
      accessibilityPrev,
      accessibilityNext,
      items: [{
        renderBody: 'Card 1',
      }, {
        renderBody: 'Card 2',
      }, {
        renderBody: 'Card 3',
      }]
    });
  });

storiesOf('ebayui', module)
  .addDecorator(withKnobs)
  .add('ebay-breadcrumb', () => {
    const className = text('class', '');
    const headingText = text('heading-text', 'EBAY');
    const headingLevel = text('heading-level', 'h3');
    const hijax = boolean('hijax', false);
    
    return Breadcrumb.renderSync({
      //className,
      headingText,
      headingLevel,
      hijax,
      //options
      items: [{
        href: 'http://www.ebay.com/sch/nikon',
        renderBody: 'Search nikon',
      }, {
        href: 'http://www.ebay.com/sch/nike',
        renderBody: 'Search nike',
      }]
    });
  });

storiesOf('ebayui', module)
  .addDecorator(withKnobs)
  .add('ebay-button', () => {
    const className = text('class', '');
    const priority = text('priority', 'primary');
    const size = text('size', 'medium');
    const href = text('href', '');
    const fluid = boolean('fluid', '');
    const disabled = boolean('disabled', false);
  const partiallyDisabled = boolean('partially-disabled', false);
    const body = text('Body', 'Hello');

    return Button.renderSync({
      className,
      priority,
      size,
      href,
      fluid,
      disabled,
      partiallyDisabled,
      body
    });
  });  


storiesOf('ebayui', module)
  .addDecorator(withKnobs)
  .add('ebay-select', () => {
  	const className = text('class', '');
    const name = text('name', '');
    const selected = number('selected', 1);
    const borderless = boolean('borderless', false);
    /*const options = array('options', [{
  	  value: 'Select 1',
  	  label: 'Select 1',
  	}, {
  	  value: 'Select 2',
  	  label: 'Select 2',
  	}], ',');*/

    return Select.renderSync({
      className,
      name,
      selected,
      borderless,
      //options
      options: [{
  			value: 'Select 1',
  			label: 'Select 1',
		  }, {
  			value: 'Select 2',
  			label: 'Select 2',
		  }, {
  			value: 'Select 3',
  			label: 'Select 3',
		  }]
	  });
  });

storiesOf('ebayui', module)
  .addDecorator(withKnobs)
  .add('ebay-pagination', () => {
    const className = text('class', '');
    const href = text('href', '#');
    const accessibilityPrev = text('accessibility-prev', '');
    const accessibilityNext = text('accessibility-next', '');
	const accessibilityCurrent = text('accessibility-current', '');
	const hijax = boolean('hijax', '');

    return Pagination.renderSync({
      className,
      href,
      accessibilityPrev,
      accessibilityNext,
      accessibilityCurrent,
      hijax,
      items: [{
      	disabled: false,
      	type: "page",
      	renderBody: "1"
      }, {
      	disabled: false,
      	current: true,
      	type: "page",
      	renderBody: "2"
      }, {
      	disabled: false,
      	type: "page",
      	renderBody: "3"
      }]
    });
  });

storiesOf('ebayui', module)
  .addDecorator(withKnobs)
  .add('ebay-radio', () => {
    const disabled = boolean('disabled', false);
    const name = text('name', '');
    const value = text('value', 'yes');

    return Radio.renderSync({
      disabled
    });
  });


