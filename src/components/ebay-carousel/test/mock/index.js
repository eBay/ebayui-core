const assign = require('core-js-pure/features/object/assign');

exports.Discrete_1PerSlide_0Items = {
  itemsPerSlide: 1,
  a11yPreviousText: 'prev',
  a11yNextText: 'next',
  a11yStatusText: '{currentSlide} of {totalSlides}',
  a11yStatusTag: 'h2',
  a11yCurrentText: 'current slide {currentSlide}',
  a11yOtherText: 'go to slide {slide}',
  items: []
}

exports.Discrete_1PerSlide_1Items = assign({}, exports.Discrete_1PerSlide_0Items, {
  items: getNItems(1)
});

exports.Discrete_1PerSlide_3Items = assign({}, exports.Discrete_1PerSlide_0Items, {
  items: getNItems(3)
});

exports.Discrete_2_1PerSlide_3Items = assign({}, exports.Discrete_1PerSlide_3Items, {
  itemsPerSlide: 2.1
});

exports.Discrete_2PerSlide_6Items = assign({}, exports.Discrete_1PerSlide_0Items, {
  itemsPerSlide: 2,
  items: getNItems(6)
});

exports.Discrete_1PerSlide_3Items_AutoPlay = assign({
  a11yPlayText: 'play',
  a11yPauseText: 'pause',
  autoplay: 200
}, exports.Discrete_1PerSlide_3Items);

exports.Continuous_0Items = {
  a11yPreviousText: 'prev',
  a11yNextText: 'next',
  items: []
};

exports.Continuous_1Item = assign({}, exports.Continuous_0Items, {
  items: getNItems(1, {
    style: 'width:200px'
  })
});

exports.Continuous_6Items = assign({}, exports.Continuous_0Items, {
  items: getNItems(6, {
    style: 'width:200px'
  })
});

exports.Continuous_12Items = assign({}, exports.Continuous_0Items, {
  items: getNItems(12, {
    style: 'width:200px'
  })
});

function getNItems(n, attrs) {
  return Array.from({ length: n }).map((_, i) => {
    const renderBody = out => out.write(renderBody.text);
    renderBody.text = `carousel item content ${i}`; // used to read text data while testing

    return assign({}, attrs, {
      renderBody
    });
  });
}
