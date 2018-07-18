import React from 'react';
export const Title = (props) => props.data.map(function(item) {
  return <h1 key={item.id}>{item.title}</h1>;
})