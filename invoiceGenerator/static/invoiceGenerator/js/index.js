document.addEventListener("alpine:init", () => {
  Alpine.data("showShipping", () => ({
    button: true,
    input: false,
    change(shippingValue) {
      this.button = !this.button;
      this.input = !this.input;
    },
  }));
});
function updateItems() {
  return {
    items: [
      {
        name: "",
        quantity: 0,
        rate: 0,
        deleteAble: false,
      },
    ],

    SubTotal: 0,
    discount: 0,
    shippingValue: 0,
    amountPaid: 0,

    addNewItem() {
      console.log(this.items);
      this.items.push({
        name: "",
        quantity: 0,
        rate: 0,

        deleteAble: true,
      });
    },
    removeItem(itemIndex) {
      console.log(itemIndex);
      this.items.splice(itemIndex, 1);
    },
  };
}
