// Product data
const products = {
    cakes: {
        image: 'https://img.freepik.com/premium-photo/cake-tasty-sweets-modern-food-candy-cookie-fruits-strawberry-cranberry-blackberry-pieces_853115-7632.jpg',
        items: [
            { id: 1, name: 'Chocolate Cake', price: 2200, image: 'https://insanelygoodrecipes.com/wp-content/uploads/2021/06/Tasty-Homemade-Chocolate-Cake.jpg', description: 'A rich and moist chocolate cake perfect for chocolate lovers.' },
            { id: 2, name: 'Vanilla Cake', price: 2500, image: 'https://myfoodstory.com/wp-content/uploads/2020/09/Eggless-Vanilla-Cake-2-360x360.jpg', description: 'A classic vanilla cake that is light and fluffy.' },
            { id: 3, name: 'Black Forest', price: 3800, image: 'https://www.hola.ae/wp-content/uploads/2021/03/Black-Forest-Cake-Dubai-Keto-Desserts-UAE-Low-Carb-No-Sugar-Healthy-Delicious.jpg', description: 'A traditional Black Forest cake with layers of chocolate and cherries.' },
            { id: 4, name: 'Red Velvet Cake', price: 3200, image: 'https://img.freepik.com/premium-photo/decadent-red-velvet-cake-black-wood_756535-4971.jpg', description: 'A delicious red velvet cake with a creamy frosting.' },
            { id: 5, name: 'Butterscotch Fudge Cake', price: 3200, image: 'https://assets.winni.in/product/primary/2022/9/73528.jpeg?dpr=1&w=500', description: 'Moist Sponge Cake With Butterscotch, Butter Icing Orders accepted from 9.00 am – 10:30 pm daily.This requires 30 minutes preparation time plus delivery time.' }, 
			{ id: 6, name: 'Oreo Cake', price: 5000, image: 'https://assets.flowersnfruits.com/uploads/product-pics/1687854586_13205.png', description: 'A delicious red velvet cake with a creamy frosting.' },
			{ id: 7, name: 'Mango Mousse Cake', price: 4300, image: 'https://thumbs.dreamstime.com/b/mango-themed-mousse-cake-decorated-fruit-served-elegantly-dark-background-generated-ai-295917844.jpg', description: 'Introducing our Mango Cardamom Mousse Cake – a symphony of flavors that’s sure to tantalize your taste buds! This exquisite dessert features a decadent cardamom-flavored mousse, delicately layered with luscious mango gel, vibrant mango marmalade, and light, fluffy vanilla sponge.' },
			{ id: 8, name: 'Kit Kat Cake', price: 5300, image: 'https://assets.winni.in/product/primary/2022/9/74473.jpeg?dpr=1&w=500', description: 'This cake is a delightful and visually stunning dessert that combines the rich, indulgent flavors of chocolate cake with the playful crunch of Kit Kat candy bars.The defining feature of this cake is the border of Kit Kat bars that surround it. Full-size Kit Kat bars are pressed into the frosting around the entire circumference of the cake, creating a charming picket fence effect.' },
        ],
    },
   
	Donuts: {
        image: 'https://img.freepik.com/premium-photo/colorful-delicious-donuts-dark-background_5095-2454.jpg?w=360',
        items: [
            { id: 31, name: 'Glazed Donuts', price: 450, image: 'https://t4.ftcdn.net/jpg/03/10/24/37/360_F_310243769_VVmOtCVFrjwOhIA1Zb8HB4tlCBmf5BhR.webp', description: 'Classic donuts with a sweet and shiny glaze, perfect for any time of day.Ingredients like Flour, sugar, milk, eggs, butter, yeast, salt, vanilla extract, powdered sugar, water.' },
            { id: 32, name: 'Chocolate Frost Donuts', price: 400, image: 'https://img.freepik.com/premium-photo/chocolate-donut-with-sprinkles-dark-background_987694-500.jpg', description: 'Donuts topped with rich chocolate frosting, a delightful treat for chocolate lovers.Ingredients like Flour, sugar, milk, eggs, butter, yeast, salt, vanilla extract, cocoa powder, powdered sugar, water.' },
            { id: 33, name: 'Boston Cream Donuts', price: 480, image: 'https://t3.ftcdn.net/jpg/05/90/65/78/360_F_590657898_nBDI0eqiYeGfzkdZ6f5KGFTg2p1CpdvL.jpg', description: 'Soft donuts filled with creamy custard and topped with a luscious chocolate glaze.Ingredients like Flour, sugar, milk, eggs, butter, yeast, salt, vanilla extract, custard (milk, egg yolks, sugar, cornstarch, vanilla), chocolate, heavy cream.' },
            { id: 34, name: 'Jelly Donuts', price: 500, image: 'https://img.freepik.com/premium-photo/foot-is-pressing-down-jelly-donut-causing-jelly-leak-from-side_250469-11269.jpg?w=360', description: 'Fluffy donuts filled with sweet fruit jelly, perfect for a fruity twist.Ingredients like Flour, sugar, milk, eggs, butter, yeast, salt, vanilla extract, fruit jelly (strawberry, raspberry, etc.), powdered sugar.' },
            { id: 35, name: 'Cinnamon Sugar Donuts', price: 480, image: 'https://static.wixstatic.com/media/67f2f1_63b8ac61db014921b84ee1bcc19a666a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg', description: 'Donuts coated in a sweet and spicy cinnamon sugar mixture, offering a warm and comforting flavor.Ingredients: Flour, sugar, milk, eggs, butter, yeast, salt, vanilla extract, cinnamon, granulated sugar.' },
            { id: 36, name: 'Maple Bacon Donuts', price: 550, image: 'https://www.iheartnaptime.net/wp-content/uploads/2022/05/I-Heart-Naptime-maple-bacon-donuts-19.jpg', description: 'Sweet and savory donuts topped with maple glaze and crispy bacon pieces.Flour, sugar, milk, eggs, butter, yeast, salt, vanilla extract, maple syrup, powdered sugar, water, bacon.' },
            { id: 37, name: 'Strawberry Frosted Donuts', price: 470, image: 'https://www.simplylakita.com/wp-content/uploads/2017/03/IMG_7647.jpg', description: 'A sweet and delightful Danish pastry with a hint of cinnamon.' },
            { id: 38, name: 'Blueberry Donuts', price: 570, image: 'https://t4.ftcdn.net/jpg/08/40/94/23/360_F_840942386_dpxqu4bTpusZmSA644MHl5Tjx85tO3l7.jpg', description: 'A sweet and delightful Danish pastry with a hint of cinnamon.' },
        ],
    },
	Beverages: {
        image: 'https://t4.ftcdn.net/jpg/04/99/36/57/360_F_499365794_Wl7sPRYTFY6ipOc9CSycbpyilcGRFGQO.jpg',
        items: [
            { id: 41, name: 'Ginger Lime drink', price: 750, image: 'https://img.freepik.com/free-photo/gin-tonic-cocktail-drink-into-glass-black-background_123827-22351.jpg', description: 'Made up with Whiskey, simple syrup, and a dash of bitters . Added ice and top up with  SOZO Salted Ginger and Lime soda. Stired in a rock glass. Garnish with an orange twist . ' },
            { id: 42, name: 'Passionfruit Spritzer', price: 990, image: 'https://img.freepik.com/premium-photo/photo-passion-fruit-iced-tea-brewed-tea-flavored-with-passion-frui-front-view-clean-bg_655090-970563.jpg', description: 'Added Gin, SOZO Passionfruit & Narang and fresh passionfruit pulp into a wine glass. Stired the ingredients.Made up with ice and add SOZO Passionfruit Iced Teasoda. Gave a small twirl with the bar spoon and a spoon of passionfruit pulp for the garnish.' },
			{ id: 43, name: 'Mango Martini', price: 890, image: 'https://www.shutterstock.com/image-photo/passion-fruit-mango-juice-hurricane-600nw-2289869591.jpg', description: 'Added Gin, SOZO Mango & Passionfruit Nectar, SOZO Lime Crush and Simple Syrup into a shaker. Filled with ice, shake  and double strain into a martini glass. Garnish with a slice of mango.' },
			{ id: 44, name: 'Green Goblin', price: 690, image: 'https://i0.wp.com/annikaeats.com/wp-content/uploads/2022/10/DSC_1056.jpg?fit=800%2C1200&ssl=1&w=640', description: 'Added Gin, SOZO Passionfruit & Narang and fresh passionfruit pulp into a wine glass. Stired the ingredients.Made up with ice and add SOZO Passionfruit Iced Teasoda. Gave a small twirl with the bar spoon and a spoon of passionfruit pulp for the garnish.' },
			{ id: 45, name: 'Blueberry Fizz', price: 890, image: 'https://t3.ftcdn.net/jpg/06/91/46/80/360_F_691468035_t6VCC5nJtAmY1yZNKeIAWLLPLkXkR4Is.jpg', description: ' Muddle fresh blueberries into a highball glass, add mint leaves and lemon juice along with gin and  stir. Add ice, and top up with SOZO Blueberry and Lime soda and give it a twirl with a bar spoon.  Garnish with fresh blueberries on a skewer and mint leaf sprig' },
			{ id: 46, name: 'Ginger Citrus Tango', price: 790, image: 'https://img.freepik.com/premium-photo/orange-mocktail-with-orange-fruits-hd-with-black-background_714173-13.jpg', description: 'Added Gin, SOZO Passionfruit & Narang and fresh passionfruit pulp into a wine glass. Stired the ingredients.Made up with ice and add SOZO Passionfruit Iced Teasoda. Gave a small twirl with the bar spoon and a spoon of passionfruit pulp for the garnish.' },
			{ id: 47, name: 'SOZO Roulette', price: 990, image: 'https://cdn.pixabay.com/photo/2022/06/01/08/57/cocktail-7235145_1280.jpg', description: 'Added Gin, SOZO Passionfruit & Narang and fresh passionfruit pulp into a wine glass. Stired the ingredients.Made up with ice and add SOZO Passionfruit Iced Teasoda. Gave a small twirl with the bar spoon and a spoon of passionfruit pulp for the garnish.' },
			{ id: 48, name: 'Strawberry Tea Tower', price: 1200, image: 'https://img.freepik.com/premium-photo/two-glasses-strawberry-mojito-with-strawberries-side_626849-2689.jpg', description: 'Added Gin, SOZO Passionfruit & Narang and fresh passionfruit pulp into a wine glass. Stired the ingredients.Made up with ice and add SOZO Passionfruit Iced Teasoda. Gave a small twirl with the bar spoon and a spoon of passionfruit pulp for the garnish.' },
			
        ],
    },
	Brownies: {
        image: 'https://www.shutterstock.com/image-photo/brownie-brownies-chocolate-syrup-closeup-600nw-2256055975.jpg',
        items: [
            { id: 51, name: 'Choco Chip Brownie', price: 250, image: 'https://blackandbrownbakers.com/wp-content/uploads/2020/06/Chocolate-Syrup-1.jpg', description: 'Our classic Choco Chip Brownie is a gooey chocolate brownie loaded with dark chocolate chips. It is a dense fudgy brownie made with pure couverture chocolate, that will simply melt in your mouth.' },
            { id: 52, name: 'Millionaire Brownie', price: 375, image: 'https://www.iheartkatiecakes.co.uk/wp-content/uploads/2022/07/Millionaires-Flapjacks-1.jpg', description: 'Our Millionaire Brownie is made of soft buttery caramel sandwiched between our chocolate chip brownie and a layer of rich dark chocolate truffle. This layered treat is an adaptation of the English classic millionaire shortbread and is pure indulgence!' },
            { id: 53, name: 'Assorted Brownies', price: 350, image: 'https://www.shutterstock.com/image-photo/homemade-gooey-double-chocolate-brow-600nw-1739297447.jpg', description: 'Brownie features an assortment of signature Theobroma brownies - Walnut brownie (1), Choco Chip brownies (2), Millionaire brownie (1), Cookie brownie (1), Overload Brownie (1).' },
            { id: 54, name: 'Chocolate Brownie', price: 250, image: 'https://c1.wallpaperflare.com/preview/365/656/947/fruits-sweet-bean-gluten.jpg', description: 'Our classic Choco Chip Brownie is a gooey chocolate brownie loaded with dark chocolate chips. It is a dense fudgy brownie made with pure cou' },
            { id: 55, name: 'Walnut Brownie', price: 400, image: 'https://theobroma.in/cdn/shop/files/WalnutBrownie.jpg?v=1711183450', description: 'An old-time classic, our Walnut Brownie is made by folding toasted chopped walnuts into our chocolate brownie batter. The crunchy texture of walnuts contrasts beautifully against the smooth chocolate brownie, make this a decadent delight!' },
            { id: 56, name: 'strawberry Brownie', price: 320, image: 'https://prettysimplesweet.com/wp-content/uploads/2021/03/Chocolate-Covered-Strawberry-Brownies.jpg', description: 'These rich and fudgy strawberry brownies are layered with fresh strawberries and smooth, rich chocolate chip and a layer of rich dark chocolate truffle.' },
            { id: 57, name: 'Caramel Brownies', price: 330, image: 'https://bakingamoment.com/wp-content/uploads/2024/05/IMG_3201-salted-caramel-brownies-500x500.jpg', description: 'This caramel brownie recipe has the best of both worlds - a rich and fudgy chocolate brownie filled with chunks of chewy homemade caramel.' },
        ],
    },
	Macaroons: {
        image: 'https://img.freepik.com/premium-photo/cakes-macaron-macaroon-stack-dark-background-colorful-vibrant-almond-cookies-bright-colors_93314-5322.jpg?w=360',
        items: [
            { id: 61, name: 'Chocolate Macaroons', price: 1100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gr68zjwh4b1f-YlZtom6vqEejewW0c784w&s', description: 'This chocolate macaroon recipe is one of our Christmas favorites for no-fuss, no-bake, coconut-oatmeal-chocolate cookies. You can also freeze these. Enjoy!.' },
            { id: 62, name: 'Vanilla Macroons', price: 950, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbOR81UySTCXVqtghtu9AjWopIFmeXLwzOQhIl2qv8x-N-3kD2zWJmdxoKz_Ix9wGE-o&usqp=CAU', description: 'Easy vanilla macaron recipe made using the Swiss method and using the leftover egg yolks to make the best vanilla bean French buttercream!' },
            { id: 63, name: 'Red Velvet Macroons', price: 1200, image: 'https://saltandbaker.com/wp-content/uploads/2020/01/Red-Velvet-Macarons-18-.jpg', description: 'These red velvet macarons are made with a mildly cocoa flavored cookie base and cream cheese filling (though ermine works too!). Another fun and unique macaron recipe to try!' },
            { id: 64, name: 'Blue Berry Macroons', price: 1200, image: 'https://www.shutterstock.com/image-photo/wooden-cutting-board-showcasing-vibrant-600nw-2439755217.jpg', description: 'These blueberry macarons have a blueberry ganache filling that’s made with real berries! The amount of natural blueberry flavor these macarons have is out of this world and the naturally purple filling makes them look so impressive.' },
            { id: 65, name: 'Mango Macroons', price: 1300, image: 'https://ellasbetterbakes.com/wp-content/uploads/2022/03/top-shot-of-plate-of-mango-macarons.jpg?v=1648293560', description: 'Hello friends! Mango Macarons coming in fresh! These macarons are filled with Mango Jam and Mango Buttercream. They will remind you of of a sunset at a tropical beach!' },
            { id: 66, name: 'Orange Macroons', price: 1300, image: 'https://bsstatic.mrjack.es/wp-content/uploads/2019/03/macarons-naranja-cab.jpg', description: 'Hello friends, today we are making Orange Macarons filled with Orange Marmalade and Dark Chocolate Ganache. The rich and intense Dark Chocolate ganache cuts through the sweet and citrusy Orange Marmalade in a way that will make your tastebuds sing a tune.' },
            { id: 67, name: 'Mint Macroons', price: 900, image: 'https://i.etsystatic.com/22945447/r/il/f222d4/2282196868/il_570xN.2282196868_fo4i.jpg', description: 'Mint Chocolate Macarons are filled with Mint Chocolate Ganache, and they have been a highly requested flavor! .' },
            { id: 68, name: 'Strawberry Macroons', price: 1500, image: 'https://i0.wp.com/thewhitewhisk.com/wp-content/uploads/2022/02/img_0745.jpg?resize=720%2C1080&ssl=1', description: ' Strawberry Macarons are drizzled with white chocolate and graham cracker crumbs, and the shells are bicolor, pink and white, which makes them super pretty!' },
        ],
    },
	
	"Cup cakes": {
        image: 'https://img.freepik.com/premium-photo/chocolate-cupcakes-with-chocolate-frosting-chocolate-chips-wooden-table_646510-938.jpg',
        items: [
			{ id: 71, name: 'Vanilla Cup Cake', price: 490, image: 'https://www.noracooks.com/wp-content/uploads/2022/03/sq-3.jpg', description: 'Classic fluffy yellow cupcake topped with our signature vanilla buttercream or chocolate buttercream and sprinkles.' },
            { id: 72, name: 'Rainbow Cup Cake', price: 560, image: 'https://img.freepik.com/premium-photo/rainbow-cupcake-with-lgbt-pride-theme_875825-20192.jpg', description: 'Funfetti cupcake topped with buttercream frosting and rainbow sprinkles.' },
            { id: 73, name: 'Pink Lemonade', price: 550, image: 'https://cremedelacombe.com/wp-content/uploads/2021/06/Pink-Lemonade-Cupcakes-1-1.jpg', description: 'Delicious and moist lemon cupcake topped with bright and refreshing pink lemonade buttercream, made from fresh strawberries and lemons' },
            { id: 74, name: 'Red Velvet Vixen', price: 550, image: 'https://us.123rf.com/450wm/luzazure/luzazure2308/luzazure230862283/211595492-red-velvet-cupcake-on-black-background-shallow-dof.jpg', description: 'Traditional Southern Red Velvet cupcake made with Belgian cocoa and topped with luscious cream cheese frosting' },
            { id: 75, name: 'Lemon Drop', price: 600, image: 'https://img.freepik.com/premium-photo/photo-delicious-cupcake-with-dark-background_890183-4346.jpg', description: 'Springy vanilla cupcake topped with our lemon buttercream frosting and sprinkles' },
            { id: 76, name: 'Chocolate Cup Cake', price: 650, image: 'https://i0.wp.com/www.wifemamafoodie.com/wp-content/uploads/2015/11/Salted-Chocolate-Mocha-Cupcakes-Up-Close-683x1024.jpg?resize=950%2C1425&ssl=1', description: 'A dark chocolate sponge cake topped with our signature vanilla or chocolate buttercream' },
			{ id: 77, name: 'Mint Cup Cake', price: 650, image: 'https://img.freepik.com/premium-photo/green-cupcake-color-mint-cup-cake-delicious-cupcakes-dark-background-abstract-generative-ai-illustration_162695-9251.jpg', description: 'Mint Chocolate cake are filled with Mint Chocolate Ganache, and they have been a highly requested flavor!' },
            
        ],
    },
    
};

// Define your category details
const categoryDetails = {
    cakes: {
        title: 'Delicious Cakes',
        description: 'Explore our range of delicious cakes, made with the finest ingredients. Perfect for every occasion, our cakes are crafted with care to bring joy to your celebrations. Whether you prefer classic flavors like chocolate and vanilla or adventurous combinations, we have the perfect cake to suit your taste and make your moments special.'
    },
    Donuts: {
        title: 'Tasty Donuts',
        description: 'Indulge in our variety of donuts, each one baked to perfection and filled with flavor. From the classic glazed and chocolate frosted to unique creations topped with sprinkles and cream, our donuts are a delightful treat for any time of the day. Enjoy the soft, fluffy texture and the rich, sweet taste in every bite.'
    },
    Beverages: {
        title: 'Refreshing Beverages',
        description: 'Quench your thirst with our selection of beverages, from classic drinks to unique concoctions. Whether you are looking for a morning pick-me-up with our freshly brewed coffee or a refreshing cool-down with our smoothies and iced teas, we have something for every palate. Discover your new favorite drink in our diverse and flavorful collection.'
    },
    Cookies: {
        title: 'Crispy Cookies',
        description: 'Our cookies are baked to a perfect crisp, offering a delightful treat for any time of day. Enjoy a wide variety of flavors, from classic chocolate chip to innovative combinations like cranberry and white chocolate. Each cookie is made with love, using high-quality ingredients to ensure a satisfying crunch and a burst of flavor in every bite.'
    },
    Macaroons: {
        title: 'Delightful Macaroons',
        description: 'Savor our delicate macaroons, available in a variety of flavors to please your palate. These exquisite treats are crafted with precision, featuring a crisp exterior and a soft, chewy interior. With flavors ranging from traditional vanilla and pistachio to exotic fruit infusions, our macaroons are perfect for indulging yourself or impressing your guests.'
    },
    "Cup cakes": {
        title: 'Delectable Cupcakes',
        description: 'Treat yourself to our delicious cupcakes, each one topped with rich, creamy frosting. Our cupcakes come in an array of flavors, from classic red velvet and chocolate to inventive seasonal specials. Perfectly portioned and beautifully decorated, they are an ideal choice.'
    },
    Brownies: {
        title: 'Decadent Brownies',
        description: 'Experience the rich, fudgy goodness of our brownies. Made with premium chocolate and baked to perfection, each brownie offers a delightful balance of a crispy top and a gooey center. From classic chocolate brownies to exciting variations with nuts, caramel, and more, our brownies are a true indulgence. Perfect as a dessert or a snack, they are sure to satisfy your chocolate cravings.'
    }
};



document.addEventListener('DOMContentLoaded', () => {
    showCategories(); // Display categories on page load
});

// Display categories
function showCategories() {
    const categoriesList = document.getElementById('categories-list');
    categoriesList.innerHTML = '';

    const categoryList = document.createElement('div');
    categoryList.className = 'category-list';

    // Duplicate the categories to create a circular loop
    const categories = Object.keys(products);
    const duplicatedCategories = [...categories, ...categories, ...categories];

    duplicatedCategories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';
        categoryDiv.innerHTML = `
            <a href="#" onclick="showCategory('${category}', this)">
                <img src="${products[category].image}" alt="${category}">
            </a>
            <p><a href="#" onclick="showCategory('${category}', this)">${category.charAt(0).toUpperCase() + category.slice(1)}</a></p>
        `;
        categoryList.appendChild(categoryDiv);
    });

    categoriesList.appendChild(categoryList);
}



// Display products in a category
function showCategory(category, element) {
    // Update active category class
    const categories = document.querySelectorAll('.category');
    categories.forEach(cat => cat.classList.remove('active'));

    if (element) {
        const parentCategoryDiv = element.closest('.category');
        parentCategoryDiv.classList.add('active');
        console.log(`Active category: ${category}`);
    }

    const categoryDetailsDiv = document.getElementById('category-details');
    const productList = document.getElementById('products-list');

    categoryDetailsDiv.innerHTML = '';
    productList.innerHTML = '';

    if (categoryDetails[category]) {
        const details = categoryDetails[category];
        categoryDetailsDiv.innerHTML = `
		<div class="description_card">
			<div class="para">
				<h2>${details.title}</h2>
				<p>${details.description}</p>
			</div>
		</div>
        `;
    }

    if (products[category] && Array.isArray(products[category].items)) {
        products[category].items.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-card';
            productDiv.innerHTML = `
                <div class="product-image-container">
                    <div class="card">
                        <div class="product-img"></div>
                        <a href="CMSPRODUCTDETAILS.html?category=${category}&id=${product.id}">
                            <img src="${product.image}" alt="${product.name}">
                        </a>
                        <i class="fa fa-shopping-cart  add-to-cart-icon" aria-hidden="true" onclick="addToCart('${category}', ${product.id})"></i>
                    </div>
                </div>
                <div class="details">
                    <div class="info">
                        <p><a href="CMSPRODUCTDETAILS.html?category=${category}&id=${product.id}">${product.name}</a></p>
                        <p>Rs${product.price}</p>
                    </div>
                    <button class="favorite" title="Like"><i class="far fa-heart"></i></button>
                </div>
            `;
            productList.appendChild(productDiv);
			
        });
    }
	const favoriteButtons = document.querySelectorAll('.favorite');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active'); // Toggle active class
            // Add additional logic if needed, like updating a counter or sending a request to the server
        });
    });
}




// View product details
function viewProduct(category, productId) {
    window.location.href = `CMSPRODUCTDETAILS.html?category=${category}&id=${productId}`;
}

// Load product details
// Load product details based on URL parameters
// Load product details based on URL parameters
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const productId = parseInt(params.get('id'));

    const product = products[category].items.find(p => p.id === productId);
    if (product) {
        const productDetails = document.getElementById('product-details');
        productDetails.innerHTML = `
            <div class="parent-container">
                <div class="relcontain1"><img src="${product.image}" alt="${product.name}"></div>
                <div class="relcontain2">
                    <h3><a href="CMSPRODUCTDETAILS.html?category=${category}&id=${product.id}">${product.name}</a></h3>
                    <p>Price: Rs${product.price}</p>
                    <p>Description:${product.description}</p>
                    <div class="quantity">
                        <label for="quantity">Quantity:</label>
                        <button onclick="changeQuantity(-1)">-</button>
                        <input type="number" id="quantity" value="1" min="1">
                        <button onclick="changeQuantity(1)">+</button>
                    </div>
                    <p class="line-item-property__field">
                      <label for="notes">Special Notes</label>
                      <textarea id="notes" name="properties[Special Notes]"></textarea>
                    </p>
                    <button id="add-to-cart-${product.id}" onclick="addToCart('${category}', ${productId})">Add to Cart</button>
                </div>
            </div>
            <div class="review-section">
                <h3>Customer Reviews</h3>
                <div class="reviews-display" id="reviews-display">
                    <!-- Display submitted reviews here -->
                </div>

                <div class="review-form">
                    <h4>Submit Your Review</h4>
                    <form id="review-form">
                        <div class="form-group">
                            <label for="reviewer-name">Name:</label>
                            <input type="text" id="reviewer-name" required>
                        </div>
                        <div class="form-group">
                            <label for="review-rating">Rating:</label>
                            <select id="review-rating" required>
                                <option value="5">★★★★★</option>
                                <option value="4">★★★★☆</option>
                                <option value="3">★★★☆☆</option>
                                <option value="2">★★☆☆☆</option>
                                <option value="1">★☆☆☆☆</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="review-text">Review:</label>
                            <textarea id="review-text" rows="4" required></textarea>
                        </div>
                        <button type="submit">Submit Review</button>
                    </form>
                </div>
            </div>
        `;

        const relatedProductsList = document.getElementById('related-products-list');
        relatedProductsList.innerHTML = '';
        const relatedProducts = products[category].items.filter(p => p.id !== productId).slice(0, 4);
        relatedProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product-card';
            productDiv.innerHTML = `
                <div class="product-image-container">
                    <div class="card">
                        <div class="product-img"></div>
                        <a href="CMSPRODUCTDETAILS.html?category=${category}&id=${product.id}">
                            <img src="${product.image}" alt="${product.name}">
                        </a>
                        <i class="fa fa-shopping-cart add-to-cart-icon" aria-hidden="true" onclick="addToCart('${category}', ${product.id})"></i>
                    </div>
                </div>
                <div class="details">
                    <div class="info">
                        <p><a href="CMSPRODUCTDETAILS.html?category=${category}&id=${product.id}">${product.name}</a></p>
                        <p>Rs${product.price}</p>
                    </div>
                    <button class="favorite"><i class="far fa-heart"></i></button>
                </div>
            `;
            relatedProductsList.appendChild(productDiv);
			const favoriteButtons = document.querySelectorAll('.favorite');

			favoriteButtons.forEach(button => {
				button.addEventListener('click', function() {
					this.classList.toggle('active'); // Toggle active class
					// Add additional logic if needed, like updating a counter or sending a request to the server
				});
			});

        });
        
        // Load reviews from localStorage
        loadReviews();
    }
}

// Ensure the cart is updated on product details page load
if (window.location.pathname.endsWith('CMSPRODUCTDETAILS.html')) {
    document.addEventListener('DOMContentLoaded', () => {
        loadProductDetails();
        updateCart();

        // Handle review form submission
        const reviewForm = document.getElementById('review-form');
        if (reviewForm) {
            reviewForm.addEventListener('submit', function(e) {
                e.preventDefault();
                try {
                    const name = document.getElementById('reviewer-name').value;
                    const rating = document.getElementById('review-rating').value;
                    const reviewText = document.getElementById('review-text').value;
                    const date = new Date().toLocaleDateString();

                    const reviewHTML = `
                        <div class="review">
                            <div class="review-header">
                                <div class="reviewer-name">${name}</div>
                                <div class="review-date">${date}</div>
                            </div>
                            <div class="review-rating">
                                ${'&#9733;'.repeat(rating)}${'&#9734;'.repeat(5 - rating)}
                            </div>
                            <div class="review-text">
                                <p>${reviewText}</p>
                            </div>
                        </div>
                    `;

                    const reviewsDisplay = document.getElementById('reviews-display');
                    reviewsDisplay.insertAdjacentHTML('beforeend', reviewHTML);

                    // Save review to localStorage
                    const productId = parseInt(new URLSearchParams(window.location.search).get('id'));
                    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
                    if (!reviews[productId]) {
                        reviews[productId] = [];
                    }
                    reviews[productId].push({ name, rating, reviewText, date });
                    localStorage.setItem('reviews', JSON.stringify(reviews));

                    // Clear the form
                    reviewForm.reset();
                } catch (error) {
                    console.error('Error handling review form submission:', error);
                }
            });
        }
    });
}

// Change product quantity in product details
function changeQuantity(amount) {
    const quantityInput = document.getElementById('quantity');
    let quantity = parseInt(quantityInput.value);
    quantity += amount;
    if (quantity < 1) quantity = 1;
    quantityInput.value = quantity;
}

// Add product to cart
function addToCart(category, productId) {
    const quantity = parseInt(document.getElementById('quantity')?.value || 1); // Get quantity if available, default to 1
    const product = products[category].items.find(p => p.id === productId);
    if (product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartItem = cart.find(item => item.id === productId && item.category === category);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ category, id: productId, quantity, price: product.price, name: product.name, image: product.image });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        
        updateCart();
        toggleCart();
    }
}

// Update the cart display
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    if (!cartItemsDiv) return;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('Cart:', cart); // Debug log
    cartItemsDiv.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        console.log('Item:', item); // Debug log

        if (typeof item.price !== 'number') {
            console.error('Invalid price:', item.price);
            return;
        }

        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
            <a href="CMSPRODUCTDETAILS.html?category=${item.category}&id=${item.id}">
                <img src="${item.image}" alt="${item.name}">
            </a>
            <div>
                <a href="CMSPRODUCTDETAILS.html?category=${item.category}&id=${item.id}">
                    <span>${item.name}</span>
                </a>
                <br>
                <span>${item.quantity} x Rs${item.price.toFixed(2)} = Rs${itemTotal.toFixed(2)}</span>
                <br>
                <button class="sidecart" onclick="removeFromCart('${item.category}', ${item.id})">Remove</button>
            </div>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
    });

    const cartSubtotal = document.getElementById('cart-subtotal');
    if (cartSubtotal) {
        cartSubtotal.textContent = `Rs${total.toFixed(2)}`;
    }
}

// Load reviews from localStorage
function loadReviews() {
    const productId = parseInt(new URLSearchParams(window.location.search).get('id'));
    const reviews = JSON.parse(localStorage.getItem('reviews')) || {};
    const reviewsForProduct = reviews[productId] || [];
    
    const reviewsDisplay = document.getElementById('reviews-display');
    reviewsDisplay.innerHTML = '';


    reviewsForProduct.forEach(review => {
        const reviewHTML = `
            <div class="review">
                <div class="review-header">
                    <div class="reviewer-name">${review.name}</div>
                    <div class="review-date">${review.date}</div>
                </div>
                <div class="review-rating">
                    ${'&#9733;'.repeat(review.rating)}${'&#9734;'.repeat(5 - review.rating)}
                </div>
                <div class="review-text">
                    <p>${review.reviewText}</p>
                </div>
            </div>
        `;
        reviewsDisplay.insertAdjacentHTML('beforeend', reviewHTML);
    });
}


// Toggle cart sidebar
function toggleCart() {
    document.getElementById('cart-sidebar').classList.toggle('active');
    document.getElementById('cart-overlay').classList.toggle('active');
}

// Remove item from cart
function removeFromCart(category, productId, buttonElement) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const initialCartLength = cart.length;

    // Filter out the item to remove
    cart = cart.filter(item => !(item.id === productId && item.category === category));

    // Update localStorage with the modified cart
    localStorage.setItem('cart', JSON.stringify(cart));

    // Check if an item was actually removed
    if (cart.length < initialCartLength) {
        updateCart(); // Update the cart UI
		loadCart();
        if (buttonElement) {
            // Remove the row from the table
            const row = buttonElement.closest('tr');
            if (row) {
                row.remove();
            }
        }
    }
}

// Navigate to cart page
function viewCart() {
    window.location.href = 'CMSCART.html';
}

// Navigate to checkout page
function checkout() {
    window.location.href = 'CMSCHECKOUT.html';
}

// Continue shopping (toggle cart)
function continueShopping() {
    toggleCart();
}

// Ensure cart is updated on page load
document.addEventListener('DOMContentLoaded', updateCart);

// Updated for place order button
document.addEventListener('DOMContentLoaded', () => {
    updateCart(); // Ensure cart is updated on page load
    if (window.location.pathname.endsWith('CMSCART.html')) {
        loadCart();
    }
    if (window.location.pathname.endsWith('CMSCHECKOUT.html')) {
        loadCart();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    loadCart();
    document.getElementById('points').addEventListener('change', loadCart);
});


// Load cart items in table format for CMSCART.html
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('#cart-table tbody');
    const subtotalElement = document.getElementById('subtotal');
    const discountElement = document.getElementById('discount');
    const finalTotalElement = document.getElementById('final-total');
    const pointsElement = document.getElementById('points');

    cartTableBody.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        console.log('Item:', item);
    
        if (typeof item.price !== 'number') {
            console.error('Invalid price:', item.price);
            return;
        }
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <a href="CMSPRODUCTDETAILS.html?category=${item.category}&id=${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                </a>
            </td>
            <td>${item.name}</td>
            <td>Rs${item.price.toFixed(2)}</td>
            <td><input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.category}', 
                                            ${item.id}, this.value)"></td>
            <td>Rs${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeFromCart('${item.category}', ${item.id}, this)">Remove</button></td>
        `;
        cartTableBody.appendChild(row);
    });

    const points = parseInt(document.getElementById('points').value) || 0;
    const discount = (points / 100) * subtotal;
    const finalTotal = subtotal - discount;

    subtotalElement.textContent = `Rs${subtotal.toFixed(2)}`;
    discountElement.textContent = `Rs${discount.toFixed(2)}`;
    finalTotalElement.textContent = `Rs${finalTotal.toFixed(2)}`;
}
// Ensure the cart count is updated on page load
document.addEventListener('DOMContentLoaded', loadCart);

// Handle checkout process
function checkout() {
    window.location.href = 'CMSCHECKOUT.html';
}

// Function to display error messages
function showError(element, message) {
    const errorElement = element.closest('.form-group').querySelector('.error');
    errorElement.textContent = message;
}

// Function to clear a specific error message
function clearError(element) {
    const errorElement = element.closest('.form-group').querySelector('.error');
    errorElement.textContent = '';
}

// Function to clear all error messages
function clearErrors() {
    const errorMessages = document.querySelectorAll('.error');
    errorMessages.forEach(function(error) {
        error.textContent = '';
    });
}

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add input event listeners to clear errors when user types
    document.querySelectorAll('.form-group input').forEach(input => {
        input.addEventListener('input', () => {
            clearError(input);
        });
    });
});


// Function to place the order and show order summary
function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    clearErrors();

    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to your cart before placing an order.');
        return;
    }

    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const addressElement = document.getElementById('address');
    const phoneElement = document.getElementById('phone');
    const pointsInputElement = document.getElementById('points');
    const paymentMethod = document.querySelector('input[name="payment"]:checked');

    const name = nameElement.value.trim();
    const email = emailElement.value.trim();
    const address = addressElement.value.trim();
    const phone = phoneElement.value.trim();
    const pointsInput = pointsInputElement.value.trim();

    // Validate points as an integer or empty
    let points = 0;
    if (pointsInput !== '') {
        points = parseInt(pointsInput);
        if (isNaN(points) || points < 0) {
            alert('Points must be a valid non-negative integer.');
            return;
        }
    }

    let isValid = true;
    if (name === "") {
        showError(nameElement, "Please enter the name!");
        isValid = false;
    }
    if (email === "") {
        showError(emailElement, "Please enter the email!");
        isValid = false;
    }
    if (address === "") {
        showError(addressElement, "Please enter the address!");
        isValid = false;
    }
    if (phone === "") {
        showError(phoneElement, "Please enter the phone number!");
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    let total = 0;
    let orderSummary = `Dear ${name}, you have ordered:\n`;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        orderSummary += `${item.quantity} ${item.name}(s) at Rs${item.price} each\n`;
    });

    const discount = (points / 100) * total;
    total -= discount;

    orderSummary += `Total: Rs${total.toFixed(2)} (Discount applied: Rs${discount.toFixed(2)})\n`;
    orderSummary += `Payment Method: ${paymentMethod.value}`;

    // Populate the popup with the order summary
    document.getElementById('order-summary').textContent = orderSummary;
    document.getElementById('order-summary-text').textContent = orderSummary;

    // Display the popup
    document.getElementById('order-popup').style.display = 'block';
}

// Function to close the popup
function closePopup() {
    document.getElementById('order-popup').style.display = 'none';
}

// Function to confirm the order
function confirmOrder() {
    // Clear the cart after placing the order
    localStorage.removeItem('cart');

    // Close the popup
    closePopup();

    // Reset the form
    document.getElementById('order-form').reset();
}

// Close the popup when the user clicks outside the popup content
window.onclick = function(event) {
    const popup = document.getElementById('order-popup');
    if (event.target === popup) {
        closePopup();
    }
};







//to get the payment Method

document.querySelectorAll('input[name="payment"]').forEach(paymentInput => {
    paymentInput.addEventListener('change', function() {
        const creditCardForm = document.getElementById('credit-card-form');
        if (this.value === 'credit-card') {
            creditCardForm.style.display = 'block';
        } else {
            creditCardForm.style.display = 'none';
        }
    });
});


// Function to update quantity and recalculate totals
function updateQuantity(category, productId, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    newQuantity = parseInt(newQuantity);
    cart = cart.map(item => {
        if (item.id === productId && item.category === category) {
            item.quantity = newQuantity;
        }
        return item;
    });
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCart(); // Reload cart to update UI
}

// Ensure the cart and summary are updated on page load
document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('CMSCHECKOUT.html')) {
        loadCart();
    }
});



//About us page javascript

function showDetails(memberId) {
    let details = '';

    switch(memberId) {
        case 'member1':
            details = '<strong>Chanmini Weerakoon</strong><br>Student 1';
            document.getElementById('member1-details').innerHTML = details;
            break;
        case 'member2':
            details = '<strong>Mathusha Kannathasan</strong><br>Student 2';
            document.getElementById('member2-details').innerHTML = details;
            break;
        case 'member3':
            details = '<strong>Shaithra Vilvarashah</strong><br>Student 3';
            document.getElementById('member3-details').innerHTML = details;
            break;
    }
}

function hideDetails() {
    document.getElementById('member1-details').innerHTML = '';
    document.getElementById('member2-details').innerHTML = '';
    document.getElementById('member3-details').innerHTML = '';
}

function changeFontSize(action) {
    const container = document.querySelector('.main-content');
    const style = window.getComputedStyle(container, null).getPropertyValue('font-size');
    let currentSize = parseFloat(style);

    if (action === 'increase') {
        currentSize += 2;
    } else if (action === 'decrease') {
        currentSize -= 2;
    }

    container.style.fontSize = currentSize + 'px';
}