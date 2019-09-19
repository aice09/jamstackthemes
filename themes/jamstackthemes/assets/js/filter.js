var mixer = mixitup('.grids', {
  multifilter: {
    enable: true // enable the multifilter extension for the mixer
  },
  animation: {
    enable: true,
    duration: 500,
    nudge: true,
    reverseOut: false,
    effects: "fade scale"
  },
  selectors: {
    target: '.grid'
  },
  callbacks: {
    onMixStart: function(state, futureState) {
      console.log(futureState.activeFilter.selector);
    }
  }
});