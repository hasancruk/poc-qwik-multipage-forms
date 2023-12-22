import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <p>Form layout</p>
      <Slot />
    </>
  );
});
