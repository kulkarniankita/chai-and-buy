"use server";

let cartCount = 0;

export async function addToCart() {
  // Simulate a delay, as if we're writing to a database
  await new Promise((resolve) => setTimeout(resolve, 500));

  // Update the cart count
  cartCount++;

  // revalidatePath("/"); //clear the cache

  return cartCount;
}

export async function getCartCount() {
  // In a real app, you'd fetch this from a database
  return cartCount;
}
