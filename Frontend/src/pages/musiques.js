
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import SearchBox from '../search-box/search-box'
import CardList from '../card-list/card-list';

import './items.css';

// let musiques = [
//     {
//         id : 1,
//         auteur: "Daft Punk",
//         annee: 2013,
//         titre: "Get lucky",
//         imageUrl: "https://cdn-www.konbini.com/fr/images/files/2013/12/get-lucky-daft-punk.png"
//     },
//     {
//         id : 2,
//         auteur: "David Guetta ft Sia",
//         annee: 2011,
//         titre: "Titanium",
//         imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg"
//     },
//     {
//         id : 3,
//         auteur: "Shaka Ponk",
//         annee: 2019,
//         titre: "Smells like teen spirits",
//         imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg"
//     },
//     {
//         id : 4,
//         auteur: "Imagine Dragon",
//         annee: 2018,
//         titre: "Natural",
//         imageUrl: "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg"
//     }
// ];



const Musiques = (props) => {
    const [searchField, setSearchField] = useState(''); 
    const [musiques, setMusiques] = useState([]);   
    const [error, setError] = useState();

    useEffect(() => {
        fetch(
          `http://localhost:5000/api/musiques`,
          {
            method: "GET",
            headers: {
                'Content-Type' : 'application/json'
            }
          }
        ).then(res => { 
            if (res.status !== 200 && res.status !== 201) {
                throw new Error('Erreur');
            }
            return res.json();
        }).then(res => {
            setMusiques(res.musiques);
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
          });
      }, []);

    const onSearchChange = event => {
        setSearchField(event.target.value);
        // console.log(searchField);
    }

    const filteredMusiques = musiques.filter(musique => 
        musique.titre.toLowerCase().includes(searchField.toLowerCase())
        );

        const itemDeletedHandler = deletedItemId => {
            setMusiques(prevMusiques =>
                prevMusiques.filter(musique => musique.id !== deletedItemId)
            );
          };

    return(
        <div className="root-item">
            <SearchBox onSearchChange={onSearchChange} />
            <button className="root-item__button"><Link to="/musique/new">Ajouter</Link></button>
            {/* <p><h3>{error}</h3></p> */}
            <CardList oeuvres={filteredMusiques} onDeleteItem={itemDeletedHandler} route="musiques" />
        </div>
    );
  }


export default Musiques;
