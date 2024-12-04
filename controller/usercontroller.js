const landingpage = async (req,res) => {
    try {
        res.render('landingpage')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    landingpage
}