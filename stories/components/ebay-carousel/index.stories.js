
import { storiesOf } from '@storybook/marko';
import { withKnobs, boolean, text, object, number, array } from '@storybook/addon-knobs';
import Carousel from './../../../src/components/ebay-carousel/';
import CarouselContinuous from './../../../src/components/ebay-carousel/examples/1-continuous/template.marko';
import CarouselStartingIndex from './../../../src/components/ebay-carousel/examples/2-starting-index/template.marko';
import CarouselFewItems from './../../../src/components/ebay-carousel/examples/3-few-items/template.marko';
import CarouselVariableWidthItems from './../../../src/components/ebay-carousel/examples/4-variable-width-items/template.marko';
import CarouselSingleItemPerSlide from './../../../src/components/ebay-carousel/examples/5-single-item-per-slide/template.marko';
import CarouselStartingSlide from './../../../src/components/ebay-carousel/examples/6-starting-slide/template.marko';
import CarouselTwoItemsPerSlide from './../../../src/components/ebay-carousel/examples/7-two-items-per-slide/template.marko';
import CarouselThreeItemsPerSlide from './../../../src/components/ebay-carousel/examples/8-three-items-per-slide/template.marko';
import CarouselAccessibilityText from './../../../src/components/ebay-carousel/examples/9-accessibility-text/template.marko';

storiesOf('ebayui/ebay-carousel', module)
  .addDecorator(withKnobs)
  .add('<dynamic>', () => {
    const type = text('type', 'continuous');
    const accessibilityPrev = text('accessibility-prev', '');
    const accessibilityNext = text('accessibility-next', '');
    const index = text('index', '');
    const slide = text('slide', '');
    const itemsPerSlide = text('items-per-slide', '');
    const accessibilityStatus = text('accessibility-status', '');
    const accessibilityCurrent = text('accessibility-current', '');
    const accessibilityOther = text('accessibility-other', '');
    const items = object('items', [
      { renderBody: 'Card 1', hidden: false },
      { renderBody: 'Card 2', hidden: false },
      { renderBody: 'Card 3', hidden: false }
    ]);

    return Carousel.renderSync({
      type,
      accessibilityPrev,
      accessibilityNext,
      index,
      slide,
      itemsPerSlide,
      accessibilityStatus,
      accessibilityCurrent,
      accessibilityOther,
      items
    });
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('continuous', () => {
    return CarouselContinuous.renderSync({});
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('starting-index', () => {
    return CarouselStartingIndex.renderSync({});
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('few-items', () => {
    return CarouselFewItems.renderSync({});
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('variable-width-items', () => {
    return CarouselVariableWidthItems.renderSync({});
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('single-item-per-slide', () => {
    return CarouselSingleItemPerSlide.renderSync({});
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('starting-slide', () => {
    return CarouselStartingSlide.renderSync({});
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('two-items-per-slide', () => {
    return CarouselTwoItemsPerSlide.renderSync({});
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('three-items-per-slide', () => {
    return CarouselThreeItemsPerSlide.renderSync({});
  });

storiesOf('ebayui/ebay-carousel', module)
  .add('accessibility-text', () => {
    return CarouselAccessibilityText.renderSync({});
  });
