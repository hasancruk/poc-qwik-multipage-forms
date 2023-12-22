import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <p>Thanks layout</p>
      <Slot />
    </>
  );
});
