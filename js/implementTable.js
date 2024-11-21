var dataSet = [
    ["Rose's Luxury", 'American/Variety', 'Washington DC', '90-120$', '10', 'Incredible tasting menu. One Michilin star'],
    ["Barcelona Wine Bar", 'Tapas', 'Washington DC', '45-50$', '10', 'Really good, but really busy. Parking is also a pain'],
    ["Chima", 'Brazilian', 'Tysons, Virginia', '70$', '7', 'The Cinnamon Pineapple is fire, others like the lamb chops'],
    ["Jikasei Mensho", 'Japanese', 'Tokyo, Japan', '1000¥', '8', 'Best Shio Ramen I had in Japan. Inside a fun area too'],
    ["Canlis", 'American/Variety', 'Seattle, Washington', '180$', '6', 'Food was not up to par with the price. Venue was incredible'],
    ["Ramen Danbo", 'Japanese', 'Seattle, Washington', '20$', '7', 'Best Ramen in Seattle, but a low bar. Get the spicy classic'],
    ["Neighborhood Ramen", 'Japanese', 'Philidelphia, Pennsylvania', '20$', '5', 'Considered the best by a connoisseur in Philadelphia, not for me'],
    ["Hajimaru", 'Japanese', 'Philidelphia, Pennsylvania', '14$', '7', 'My go to Ramen spot in Fishtown, get the signature'],
    ["Yakiniku Korea House", 'Korean', 'Honolulu, Hawaii', '40$', '8', 'Best Korean BBQ I had in Hawaii. Suprisingly good chicken too'],
];


new DataTable('#example', {
    columns: [
        { title: 'Restaurant Name', width:100, height:100, fillspace:true },
        { title: 'Cusisine Type', width:100, height:100, fillspace:true },
        { title: 'Location', width:100, height:100, fillspace:true },
        { title: 'Price', width:100, height:100, fillspace:true },
        { title: 'Rating', width:100, height:100, fillspace:true },
        { title: 'Comments', width:100, height:100, fillspace:true }
    ],
    data: dataSet,
    paging: false,
    scrollCollapse: true,
    scrollY: '65vh',
    order: [[4, 'desc']]
});