import React from 'react';
import Card from './Card';

function SearchList({ filteredRestaurant }) {
  const filtered = filteredRestaurant.map(restaurant =>  <Card key={restaurant.id} restaurant={restaurant} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;