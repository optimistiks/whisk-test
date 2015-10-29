import superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const payload = [
        {
            "url": "http://www.mccormick.com/Recipes/Appetizer/Pumpkin-Pie-Spice-Pumpkin-Seeds",
            "title": "Pumpkin Pie Spice Pumpkin Seeds",
            "description": "Save the pumpkin seeds when carving your jack-o'- lantern to make glazed pumpkin seeds. Serve as a snack, sprinkle over salads or use to garnish pumpkin pie.",
            "site": {
                "name": "mccormick.com",
                "displayName": "McCormick",
                "images": {
                    "small": "",
                    "large": ""
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1438807082/recipes/mccormick…ck/Appetizer/1007x545/Pumpkin-Pie-Spice-Pumpkin-Seeds_Recipes_1007x545.jpg"
            ]
        },
        {
            "url": "http://www.mccormick.com/Recipes/Appetizer/Pumpkin-Pie-Spice-Pumpkin-Seeds",
            "title": "Pumpkin Pie Spice Pumpkin Seeds",
            "description": "Save the pumpkin seeds when carving your jack-o'- lantern to make glazed pumpkin seeds. Serve as a snack, sprinkle over salads or use to garnish pumpkin pie.",
            "site": {
                "name": "mccormick.com",
                "displayName": "McCormick",
                "images": {
                    "small": "",
                    "large": ""
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1438807082/recipes/mccormick…ck/Appetizer/1007x545/Pumpkin-Pie-Spice-Pumpkin-Seeds_Recipes_1007x545.jpg"
            ]
        },
        {
            "url": "http://localfoods.about.com/od/piestarts/r/Homemade-Pumpkin-Pie.htm",
            "title": "Taste How Delicious Homemade Pumpkin Pie Made With Fresh Pumpkin Is",
            "description": "This Homemade Pumpkin Pie is made with roasted pumpkin for real live pumpkin flavor.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1429335500/recipes/about.com/f.tqn.com/y/localfoods/1/W/Y/J/-/-/pumpkin-pie-lf.jpg"
            ],
            "serves": 1
        },
        {
            "url": "http://candy.about.com/od/halloweencandyrecipes/r/Pumpkin-Candy-Cups.htm",
            "title": "Pumpkin Candy Cups - Chocolate Cups With Pumpkin Filling",
            "description": "Pumpkin Candy Cups are Halloween-inspired chocolate cups with a filling that tastes like pumpkin pie!",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1427109395/recipes/about.com/f.tqn.com/y/candy/1/W/G/Z/-/-/pumpkin-candy-cups-half-1500.jpg"
            ],
            "serves": 30
        },
        {
            "url": "http://localfoods.about.com/od/piestarts/r/Homemade-Pumpkin-Pie.htm",
            "title": "Taste How Delicious Homemade Pumpkin Pie Made With Fresh Pumpkin Is",
            "description": "This Homemade Pumpkin Pie is made with roasted pumpkin for real live pumpkin flavor.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1429335500/recipes/about.com/f.tqn.com/y/localfoods/1/W/Y/J/-/-/pumpkin-pie-lf.jpg"
            ],
            "serves": 1
        },
        {
            "url": "http://candy.about.com/od/halloweencandyrecipes/r/Pumpkin-Candy-Cups.htm",
            "title": "Pumpkin Candy Cups - Chocolate Cups With Pumpkin Filling",
            "description": "Pumpkin Candy Cups are Halloween-inspired chocolate cups with a filling that tastes like pumpkin pie!",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1427109395/recipes/about.com/f.tqn.com/y/candy/1/W/G/Z/-/-/pumpkin-candy-cups-half-1500.jpg"
            ],
            "serves": 30
        },
        {
            "url": "http://candy.about.com/od/halloweencandyrecipes/r/pumpkin_truffle.htm",
            "title": "Turn Pumpkin Bread Into Pumpkin Bread Truffles!",
            "description": "Pumpkin bread and cream cheese frosting form the base for these delicious pumpkin bread truffles.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426917943/recipes/about.com/f.tqn.com/y/candy/1/W/I/Y/-/-/pumpkin-bread-truffles.jpg"
            ]
        },
        {
            "url": "http://candy.about.com/od/halloweencandyrecipes/r/pumpkin_truffle.htm",
            "title": "Turn Pumpkin Bread Into Pumpkin Bread Truffles!",
            "description": "Pumpkin bread and cream cheese frosting form the base for these delicious pumpkin bread truffles.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426917943/recipes/about.com/f.tqn.com/y/candy/1/W/I/Y/-/-/pumpkin-bread-truffles.jpg"
            ]
        },
        {
            "url": "http://cocktails.about.com/od/vodkadrinkrecipes/r/Spiced-Pumpkin-Cocktail-Recipe.htm",
            "title": "Pumpkin Pie Vodka is at Home in this Spiced Pumpkin",
            "description": "Cocktail recipe for a Spiced Pumpkin, a mixed drink of Pinnacle Pumpkin Pie Vodka, Irish cream liqueur, and half &amp; half.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426959013/recipes/about.com/f.tqn.com/y/cocktails/1/W/v/j/-/-/SpicedPumpkin-135579403.jpg"
            ],
            "serves": 1
        },
        {
            "url": "http://easteuropeanfood.about.com/od/russianvegetables/r/Russian-Pumpkin-Rice-Casserole-Recipe-Tykvy-Ris-Zapekanka.htm",
            "title": "Pumpkin, Rice and Apples Stuffed in a Pumpkin Shell",
            "description": "This Russian pumpkin-rice casserole recipe gets a pretty presentation when baked in a hollowed-out pumpkin shell.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1444067923/recipes/about.com/f.tqn.com/y/easteuropeanfood/1/W/Z/C/0/-/russian-pumpkin-rice-1.jpg"
            ],
            "serves": 6
        },
        {
            "url": "http://turkishfood.about.com/od/DessertsSweets/r/Turkish-Candied-Pumpkin-Dessert.htm",
            "title": "Turkish Candied Pumpkin Dessert Is Like Pumpkin Pie Without The Crust",
            "description": "Candied pumpkin is a sweet and tender classic Turkish dessert. It's made with only a few ingredients so the taste and texture of the pumpkin shine through. Try it when you have fresh pumpkin on hand.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426892942/recipes/about.com/f.tqn.com/y/turkishfood/1/W/w/3/-/-/kabak-tatlisi-2.jpg"
            ]
        },
        {
            "url": "http://turkishfood.about.com/od/DessertsSweets/r/Turkish-Candied-Pumpkin-Dessert.htm",
            "title": "Turkish Candied Pumpkin Dessert Is Like Pumpkin Pie Without The Crust",
            "description": "Candied pumpkin is a sweet and tender classic Turkish dessert. It's made with only a few ingredients so the taste and texture of the pumpkin shine through. Try it when you have fresh pumpkin on hand.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426892942/recipes/about.com/f.tqn.com/y/turkishfood/1/W/w/3/-/-/kabak-tatlisi-2.jpg"
            ]
        },
        {
            "url": "http://cocktails.about.com/od/whiskeyrecipes/r/The-Great-Pumpkin-Cocktail-Recipe.htm",
            "title": "Try Pumpkin Scotch in The Great Pumpkin",
            "description": "The Great Pumpkin is a cocktail that begins with a pumpkin-infused Scotch and builds flavors to create a wonderful autumn cocktail.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426958910/recipes/about.com/f.tqn.com/y/cocktails/1/W/H/k/-/-/GreatPumpkin-135581720.jpg"
            ],
            "serves": 1
        },
        {
            "url": "http://cocktails.about.com/od/whiskeyrecipes/r/The-Great-Pumpkin-Cocktail-Recipe.htm",
            "title": "Try Pumpkin Scotch in The Great Pumpkin",
            "description": "The Great Pumpkin is a cocktail that begins with a pumpkin-infused Scotch and builds flavors to create a wonderful autumn cocktail.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426958910/recipes/about.com/f.tqn.com/y/cocktails/1/W/H/k/-/-/GreatPumpkin-135581720.jpg"
            ],
            "serves": 1
        },
        {
            "url": "http://gonewengland.about.com/od/fallrecipes/r/pumpkin-cocktail-bourbon.htm",
            "title": "Pumpkin Patch Cocktail: Apple Cider and Pumpkin Bourbon Meet in This Fall Drink",
            "description": "Apple cider meets pumpkin bourbon in this Pumpkin Patch cocktail, invented by Hotel Vermont Head Bartender Nick Roy. Try his recipe when you're in the mood to sip autumn in New England from a glass.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1427416942/recipes/about.com/f.tqn.com/y/gonewengland/1/W/m/1/2/pumpkin-patch-cocktail-bourbon.jpg"
            ]
        },
        {
            "url": "http://cocktails.about.com/od/vodkadrinkrecipes/r/Spiced-Pumpkin-Cocktail-Recipe.htm",
            "title": "Pumpkin Pie Vodka is at Home in this Spiced Pumpkin",
            "description": "Cocktail recipe for a Spiced Pumpkin, a mixed drink of Pinnacle Pumpkin Pie Vodka, Irish cream liqueur, and half &amp; half.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426959013/recipes/about.com/f.tqn.com/y/cocktails/1/W/v/j/-/-/SpicedPumpkin-135579403.jpg"
            ],
            "serves": 1
        },
        {
            "url": "http://allrecipes.co.uk/recipe/37503/pumpkin-risotto-in-a-pumpkin.aspx",
            "title": "Pumpkin risotto in a pumpkin",
            "description": "Perfect for a special autumn dinner, this pumpkin risotto can be served right inside the pumpkin if you like. Rich, creamy and beautiful to bring to the table.",
            "site": {
                "name": "allrecipes.co.uk",
                "displayName": "allrecipes.co.uk",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1401879177/content/publisher_logos/allrecipes-favicon.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1401879186/content/publisher_logos/allrecipes-logo.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1441147567/recipes/allrecipe…k/ukcdn.ar-cdn.com/recipes/xlarge/4a1ae989-79db-431b-b7d9-3f9bbd1fc2a1.jpg"
            ],
            "serves": 4
        },
        {
            "url": "http://gonewengland.about.com/od/fallrecipes/r/pumpkin-cocktail-bourbon.htm",
            "title": "Pumpkin Patch Cocktail: Apple Cider and Pumpkin Bourbon Meet in This Fall Drink",
            "description": "Apple cider meets pumpkin bourbon in this Pumpkin Patch cocktail, invented by Hotel Vermont Head Bartender Nick Roy. Try his recipe when you're in the mood to sip autumn in New England from a glass.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1427416942/recipes/about.com/f.tqn.com/y/gonewengland/1/W/m/1/2/pumpkin-patch-cocktail-bourbon.jpg"
            ]
        },
        {
            "url": "http://vegetarian.about.com/od/vegetarianpizzarecipes/r/Vegetarian-Pumpkin-Pizza.htm",
            "title": "Pumpkin pizza! Yes, Pumpkin Pizza!",
            "description": "Pumpkin pizza! Chunks of roasted pumpkin brushed with pesto on top of a creamy white sauce and topped with lots of cheese and crushed cashews. This is a truly gourmet vegetarian pumpkin dish for a fall entree.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426885650/recipes/about.com/f.tqn.com/y/vegetarian/1/I/C/C/-/-/pumpkin-pizza.jpg",
                "https://res.cloudinary.com/whisk/image/upload/v1444276694/recipes/about.com/f.tqn.com/y/vegetarian/1/W/c/Z/-/-/renee-comet-pumpkin-pizza.jpg"
            ]
        },
        {
            "url": "http://candy.about.com/od/specialoccasions/r/pumpkinbites.htm",
            "title": "Spiced Pumpkin Bites Made With Real Pumpkin",
            "description": "Chunks of fresh pumpkin are candied in an aromatic blend of spices to create a sweet fall treat.",
            "site": {
                "name": "about.com",
                "displayName": "About.com Food",
                "images": {
                    "small": "https://res.cloudinary.com/whisk/image/upload/v1431955645/adminsite/recipesites/img/cmv9fn8q2zn5nect1rse.png",
                    "large": "https://res.cloudinary.com/whisk/image/upload/v1431955649/adminsite/recipesites/img/vfjfdnezagz4ntuqqguq.png"
                }
            },
            "images": [
                "https://res.cloudinary.com/whisk/image/upload/v1426901091/recipes/about.com/f.tqn.com/y/candy/1/I/m/-/-/-/pumpkincandy.jpg"
            ]
        }
    ];

const agent = superagentPromise(superagent, Promise);

const URL = 'https://app.whisk.com/api/v2/recipes/_search';

const client = {

    async searchRecipes (term) {

        try {

            let response = await Promise.resolve({body: {recipes: payload}});
            return response.body;

        } catch (exception) {

            throw {status: exception.status, body: exception.response.body};

        }

    }

};

export default client;
