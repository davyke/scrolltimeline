const box = document.querySelector(".box");
const boxy = document.querySelector(".boxy");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");
const output = document.querySelector(".output");

const timeline = new ScrollTimeline({
  source: document.documentElement,
  axis: "block",
});

box.animate(
    {
      left: ["5%", "100%"],
    },
    {
      timeline,
    }
  );
boxy.animate(
    {
      left: ["0%", "97%"],
    },
    {
      timeline,
    }
  );
text1.animate(
    {
      left: ["0%", "42%"],
    },
    {
      timeline,
    }
  );
text2.animate(
    {
      left: ["100%", "45%"],
    },
    {
      timeline,
    }
  );

// output.textContent = `Timeline source element: ${timeline.source.nodeName}. Timeline scroll axis: ${timeline.axis}`;