import _mergeJSXProps from "babel-helper-vue-jsx-merge-props";
export default {
  name: 'KeyboardOffIcon',
  props: {
    size: {
      type: String,
      default: '24'
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", _mergeJSXProps([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        "stroke-width": "2",
        stroke: "currentColor",
        fill: "none",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "icon icon-tabler icon-tabler-keyboard-off"
    }, ctx.data]), ["   ", h("path", {
      attrs: {
        stroke: "none",
        d: "M0 0h24v24H0z",
        fill: "none"
      }
    }), "   ", h("path", {
      attrs: {
        d: "M18 18h-14a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554 -.226 1.056 -.59 1.418"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "10",
        x2: "6",
        y2: "10.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "10",
        x2: "10",
        y2: "10.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "14",
        y1: "10",
        x2: "14",
        y2: "10.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "10",
        x2: "18",
        y2: "10.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "6",
        y1: "14",
        x2: "6",
        y2: "14.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "18",
        y1: "14",
        x2: "18",
        y2: "14.01"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "10",
        y1: "14",
        x2: "14",
        y2: "14"
      }
    }), "   ", h("line", {
      attrs: {
        x1: "3",
        y1: "3",
        x2: "21",
        y2: "21"
      }
    }), " "]);
  }
};