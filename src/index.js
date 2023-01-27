// ITERATION 1

function updateSubtotal(product) {
  let price = Number(product.querySelector('.price > span').textContent)
  let quantity = Number(product.querySelector('.quantity > input').value);

  const subtotal = price * quantity;
  product.querySelector('.subtotal > span').textContent = subtotal;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.querySelectorAll('.product');
  const totalPrice = [...allProducts].reduce((acc, product) => acc + updateSubtotal(product), 0)

  // ITERATION 3
  document.querySelector('#total-value > span').textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('.product').remove();
  calculateAll();
}

// ITERATION 5

function createProduct() {
  const tbody = document.querySelector("tbody");
  const template = document.querySelector('#productrow');

  const inputName = document.querySelector('.create-product input[type="text"')
  const inputPrice = document.querySelector('.create-product input[type="number"')

  const productPrice = inputPrice.value;
  const productName = inputName.value;

  const clone = template.content.cloneNode(true);
  clone.querySelector('.price > span').textContent =  productPrice;
  clone.querySelector('.name > span').textContent =  productName;

  const removeBtn = clone.querySelector('.btn.btn-remove').addEventListener('click', removeProduct);

  tbody.appendChild(clone);
  inputName.value = '';
  inputPrice.value=0
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const createProductBtn = document.getElementById('create');
  createProductBtn.addEventListener('click', createProduct);

  document.querySelectorAll('#cart .btn.btn-remove')
      .forEach(button => button.addEventListener('click', removeProduct))

});
