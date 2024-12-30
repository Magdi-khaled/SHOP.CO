import axios from "axios";

export const actions = {
    async fetchProducts({ commit }, page) {
        try {
            // const token = localStorage.getItem('token');
            // console.log(token);

            // const response = await axios.get(`http://localhost:4000/api/courses`, {
            //     headers: {
            //         token: `Brearer ${token}`,
            //     },
            // });

            // const shopProducts = response.data.data.courses;

            // console.log('products:', shopProducts);
            const products = [
                {
                    _id: 1,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 't-shirt with tape details',
                    rate: 4.5,
                    price: 120,
                    sale: 0.0,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 2,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'skinny fit jeans',
                    rate: 3.5,
                    price: 240,
                    sale: 0.2,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 3,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'checkered shirt',
                    rate: 3.0,
                    price: 180,
                    sale: 0.0,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 4,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'sleeve striped t-shirt',
                    rate: 4.0,
                    price: 130,
                    sale: 0.3,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 5,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'skinny fit jeans',
                    rate: 3.5,
                    price: 240,
                    sale: 0.2,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 6,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'checkered shirt',
                    rate: 3.0,
                    price: 180,
                    sale: 0.0,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 7,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'sleeve striped t-shirt',
                    rate: 4.0,
                    price: 130,
                    sale: 0.3,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 8,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'checkered shirt',
                    rate: 3.0,
                    price: 180,
                    sale: 0.0,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 9,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'sleeve striped t-shirt',
                    rate: 4.0,
                    price: 130,
                    sale: 0.3,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 4,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 5,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 6,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 7,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 10,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'sleeve striped t-shirt',
                    rate: 4.0,
                    price: 130,
                    sale: 0.3,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
                {
                    _id: 11,
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'sleeve striped t-shirt',
                    rate: 4.0,
                    price: 130,
                    sale: 0.3,
                    providedColors: [
                        { color: 'green', value: '00C12B', },
                        { color: 'red', value: 'F50606', },
                        { color: 'yellow', value: 'F5DD06', },
                        { color: 'orange', value: 'F57906', }
                    ],
                    providedSizes: ['small', 'medium', 'large', 'x-large'],
                    productDetails:
                        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda quisquam ipsa ullam, 
                        fugit dicta distinctio dolore inventore quod, temporibus ea vel porro illum reiciendis. 
                        Hic quasi voluptatibus necessitatibus culpa Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius assumenda quisquam ipsa ullam, fugit dicta distinctio dolore inventore quod, 
                        temporibus ea vel porro illum reiciendis. Hic quasi voluptatibus necessitatibus culpa?`,
                    highlights: [
                        'Profound RAM assures immense multitasking',
                        'Sleek unibody chassis and design with a special protective finish to guard against wear and tear',
                        '15.6-Inch display delivers bright, crisp visuals to enjoy your movies and music videos',
                        'Decked with an integrated processor core-i7-9750H that gives the system uninterrupted and seamless performance'
                    ],
                    feedbacks: [
                        {
                            id: 1,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            rating: 5,
                            feedback: 'This product is amazing',
                            date: '2022-01-01'
                        },
                    ],
                },
            ];
            // const products = response.data.data;
            console.log(products);
            await commit('Set_Products', products);
            // await commit('Set_Products', shopProducts);
        }
        catch (error) {
            console.error("Fetching Products error: ", error);
        }
    },
    async fetchMainProducts({ commit }) {
        try {
            // const response = await axios.get('https://api.example.com/products');
            const newProducts = [
                {
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 't-shirt with tape details',
                    rate: 4.5,
                    price: 120,
                    sale: 0.0,
                },
                {
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'skinny fit jeans',
                    rate: 3.5,
                    price: 240,
                    sale: 0.2,
                },
                {
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'checkered shirt',
                    rate: 3.0,
                    price: 180,
                    sale: 0.0,
                },
                {
                    src: '/assets/new-arrivals/na-img-1.png',
                    title: 'sleeve striped t-shirt',
                    rate: 4.0,
                    price: 130,
                    sale: 0.3,
                }
            ];
            const bestSellers = [
                {
                    src: '/assets/top-selling/ts-img-1.png',
                    title: 'vertical striped shirt',
                    rate: 3.5,
                    price: 212,
                    sale: 0.2,
                },
                {
                    src: '/assets/top-selling/ts-img-1.png',
                    title: 'courage graphic t-shirt',
                    rate: 4.0,
                    price: 145,
                    sale: 0.0,
                },
                {
                    src: '/assets/top-selling/ts-img-1.png',
                    title: 'loose fit bermuda shorts',
                    rate: 3.0,
                    price: 80,
                    sale: 0.0,
                },
                {
                    src: '/assets/top-selling/ts-img-1.png',
                    title: 'faded skinny jeans',
                    rate: 4.5,
                    price: 210,
                    sale: 0.50,
                }
            ];
            await commit('Set_NewProducts', newProducts);
            await commit('Set_BestSellers', bestSellers);
        }
        catch (error) {
            console.error("Fetching Main Products error: ", error);
        }
    },
}
