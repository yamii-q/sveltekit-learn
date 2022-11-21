<script lang="ts">
  import type { BookItem } from "../repositories/book";
  export let book: BookItem;

  const formatter = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
  });

  $: src = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : "http://placehold.jp/eeeeee/cccccc/160x120.png?text=No%20Image";

  $: price = book.saleInfo?.listPrice?.amount
    ? formatter.format(book.saleInfo.listPrice.amount)
    : "";
</script>

<div class="grid grid-cols-1 gap-2 md:grid-cols-3">
  <div class="cente">
    <img class="h-72 w-auto mx-auto" {src} alt="thumnail" />
  </div>
  <div class="bg-white shadow overflow-hidden sm:rounded-lg col-span-2">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-black font-bold text-xl mb-2">
        {book.volumeInfo.title}
      </h3>
    </div>
  </div>
</div>
