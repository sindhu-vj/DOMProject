

const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

$.each(storeItems, function(i, item){
    if (item.inStock === true){
    //   $('#ProductList').append(`<p>$${item.price} ${item.name} ${item.details}</p>`);
    $('#ProductList').append(`<tr><td>$${item.price}</td><td>${item.name}</td><td>${item.details}</td></tr></br>`);
  }
  });
  $('button').on('click',function() {
    $('#Product').toggleClass('toggleDarkMode');
    $('h1').toggleClass('h1DarkMode');
    $('hr').toggleClass('hrDarkMode');
    $('#ProductList').toggleClass('ProductListDarkMode');
    $('tr').toggleClass('trDarkMode');
    $('button').toggleClass('buttonDarkMode');
});