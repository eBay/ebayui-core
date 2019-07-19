const assign = require('core-js-pure/features/object/assign');
// mocks for visual debugging
// exports.debugItems = getNItems(6, {
//   style: 'height:200px;width:400px;background:gray'
// });

exports.Discrete_1PerSlide_6Items = {
  itemsPerSlide: 1,
  a11yPreviousText: 'prev',
  a11yNextText: 'next',
  a11yStatusText: '{currentSlide} of {totalSlides}',
  a11yStatusTag: 'h2',
  a11yCurrentText: 'current slide {currentSlide}',
  a11yOtherText: 'go to slide {slide}',
  items: getNItems(6)
}

exports.Discrete_2PerSlide_6Items = assign({}, exports.Discrete_1PerSlide_6Items, {
  itemsPerSlide: 2
});

exports.Discrete_1PerSlide_0Items = assign({}, exports.Discrete_1PerSlide_6Items, {
  items: []
});

exports.Discrete_1PerSlide_6Items_AutoPlay = assign({
  a11yPlayText: 'play',
  a11yPauseText: 'pause',
  autoplay: true
}, exports.Discrete_1PerSlide_6Items);

exports.Continuous_6Items = {
  a11yPreviousText: 'prev',
  a11yNextText: 'next',
  items: getNItems(6, {
    style: 'width:200px'
  })
}

exports.Continuous_0Items = assign({}, exports.Continuous_6Items, {
  items: []
})

function getNItems(n, attrs) {
  return Array.from({ length: n }).map((_, i) => {
    const renderBody = out => out.write(renderBody.text);
    renderBody.text = `carousel item content ${i}`; // used to read text data while testing

    return assign({}, attrs, {
      renderBody
    });
  });
}