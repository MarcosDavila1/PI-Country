const { Country, Activity } = require('../db');

const postActivity = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const activity = await Activity.create({
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        })
        
        countries.forEach(async (country) => {
            const activityCountry = await Country.findOne({
                where: {
                    name: country
                }
            })
            await activity.addCountry(activityCountry)
        })
        return res.json({message: "Activity succesfully added"})
        
    } catch (error) {
        return res.send(error)
    }
}

module.exports = postActivity;