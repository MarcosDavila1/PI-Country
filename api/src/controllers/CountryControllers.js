const { Country, Activity } = require('../db');
const axios = require('axios');
const { Op } = require('sequelize');
var sequelize = require('sequelize');

const getCountriesApi = async () => {
    try {
        const countries = (await axios('https://restcountries.com/v3/all')).data;
        const data = Promise.all(countries)
            .then(async (results) => {
                results.forEach(async (country) => {
                    Country.findOrCreate({
                        where: {
                            id: country.cca3,
                            name: country.name.common,
                            image: country.flags[1],
                            continent: country.continents[0],
                            capital: country.capital ? country.capital[0] : "Not found",
                            subregion: country.subregion ? country.subregion : "Not found",
                            area: country.area,
                            population: country.population
                        }
                    })
                })
            })       

        return data
        
    } catch (error) {
        return error
    }
}

const getAllCountries = async () => {
    const countries = await Country.findAll({
        attributes: [
            "id",
            "name",
            "image",
            "continent",
            "population",
            "capital",
            "subregion",
            "area"
        ]
    })

    return countries;    
}

const getCountryByName = async (name) => {
    const country = await Country.findAll({
        where: {
            name: {
                [Op.iLike]: `%${name}%`,
            },
        },
        attributes: [
            "id",
            "name",
            "image",
            "continent",
            "capital",
            "population",
            "subregion",
            "area"
        ],
        include: Activity,
    });

    return country;
}

const getCountries = async (req, res) => {
    const { name, alph, population } = req.query;    
    try {
        if(alph){
            if(alph === 'desc'){
                var desc = await Country.findAll({
                    order: sequelize.literal('name DESC')
                })
                res.send(desc)
            }
            if(alph === 'asc'){
                var asc = await Country.findAll({
                    order: sequelize.literal('name ASC')
                })
                res.send(asc)
            }
        }
        else if (population) { 
            if (population === 'desc') {
                var desc = await Country.findAll({
                    order: sequelize.literal('population DESC')
                })
                res.send(desc)
            }
            if (population === 'asc'){
                var asc = await Country.findAll({
                    order: sequelize.literal('population ASC')
                })
                res.send(asc)
            }
        }
        else if(name){
            const getByName = await getCountryByName(name)
            if(getByName.length === 0){
                return res.json({message: "No hay nada"})
            }
            return res.json(getByName)
        } 
        else{
            const getAll = await getAllCountries()
            return res.json(getAll)
        }
        
    } catch (error) {
        res.send(error)
    }
}

const getCountryById = async (req, res) => {
    const { id } = req.params;
    try {
        const idCountry = id.toUpperCase();
        let getById = await Country.findByPk(idCountry, {
            attributes: [
              "id",
              "name",
              "image",
              "continent",
              "capital",
              "population",
              "subregion",
              "area",
            ],
            include: Activity,
          });
        if(getById){
            return res.json(getById)
        } else{
            return res.status(404).json({message: "Not Found"})
        }
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    getCountriesApi,
    getAllCountries,
    getCountryByName,
    getCountries,
    getCountryById
}