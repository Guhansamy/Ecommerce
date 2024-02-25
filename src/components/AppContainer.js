// AppContainer.js
import React, { useState } from 'react';
import Header from './Header';
import Body from './Body';

    function AppContainer() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (query) => {
        setSearchTerm(query);
        console.log(query+"AppContainer")
    };  
    console.log(searchTerm+" "+"for body pa")
  return (
    <div>
      <Header onSearch={handleSearch} />
      <Body searchThing={searchTerm} />
    </div>
  );
}

export default AppContainer;
