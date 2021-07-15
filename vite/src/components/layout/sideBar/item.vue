<!-- <template> </template> -->
<script lang="ts">
import { ref, defineComponent, h } from "vue";
export default defineComponent({
  name: "menuItem",
  props: {
    meta: {
      type: Object,
    },
  },
  render() {
    // const { icon, title } = context.props.meta;
    // const vnodes = [];
    // console.log(props);
    // if (icon) {
    //   vnodes.push(<svg-icon icon-class={icon} />);
    // }

    // if (title) {
    //   vnodes.push(<span slot="title">{title}</span>);
    // }
    // let meta: String | any | undefined = this.$props.meta;
    // console.log(meta);
    console.log(this.$props);
    return h("div", {}, "我是菜单");
  },
  //   setup(props, ctx) {
  //     console.log(ctx);
  //     console.log(props);
  //   },
});
</script>
