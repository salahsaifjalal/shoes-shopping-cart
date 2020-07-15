import React, { Component} from 'react';


export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "id": "1",
                "title": "Nike Shoes 01",
                "src": "https://images.unsplash.com/photo-1579198413527-1d9d1a80dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                "Description": "Awesome",
                "content": "You are welcomed by salahuddin Muhammad",
                "price": 23,
                "colors": ["red","black","crimson","teal"],
                "count": 1

            },
            {
                "id": "2",
                "title": "Nike Shoes 02",
                "src": "https://images.unsplash.com/photo-1584609226397-de5612afdfea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80",
                "Description": "Awesome",
                "content": "You are welcomed by salahuddin Muhammad",
                "price": 19,
                "colors": ["red","crimson","teal"],
                "count": 1

            },
            {
                "id": "3",
                "title": "Nike Shoes 03",
                "src": "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80",
                "Description": "Awesome",
                "content": "You are welcomed by salahuddin Muhammad",
                "price": 50,
                "colors": ["lightblue","white","crimson","teal"],
                "count": 1

            },
            {
                "id": "4",
                "title": "Nike Shoes 04",
                "src": "https://images.unsplash.com/photo-1575256466337-8349be6e1125?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=444&q=80",
                "Description": "Awesome",
                "content": "You are welcomed by salahuddin Muhammad",
                "price": 16,
                "colors": ["orange","black","crimson","teal"],
                "count": 1

            },
            {
                "id": "5",
                "title": "Nike Shoes 05",
                "src": "https://images.unsplash.com/photo-1581397422720-681cce994fee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=469&q=80",
                "Description": "Awesome",
                "content": "You are welcomed by salahuddin Muhammad",
                "price": 11,
                "colors": ["orange","black","crimson","teal"],
                "count": 1

            },
            {
                "id": "6",
                "title": "Nike Shoes 06",
                "src": "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80",
                "Description": "Awesome",
                "content": "You are welcomed by salahuddin Muhammad",
                "price": 18,
                "colors": ["orange","black","crimson","teal"],
                "count": 1

            }

        ]
    }


    render() {
        const {products} = this.state;
        return (
            <DataContext.Provider value = {{products}}>
                {this.props.children}
            </DataContext.Provider>

        )
    }


}
