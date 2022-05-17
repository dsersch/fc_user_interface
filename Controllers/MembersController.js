const Airtable = require('airtable')
const base = Airtable.base(process.env.BASE_ID);

exports.findAllMembers = (req, res) => {
    base('Members').select({view: 'Grid view'}).all().then((records) => {
        let members = []
        records.forEach((record) => {
            members.push(record.fields)
        })
        res.json(members)
    })
}

exports.findByEmail = (req, res) => {
    base('Members').select({
        filterByFormula: `Email = "${req.body.email}"`
    }).all().then((records) => {
        res.json(records[0]._rawJson)
    })
}

exports.findOneMember = (req, res) => {
        base('Members').find(req.params.id, (err, record) => {
            if (err) { res.json(err); return; }
            res.json(record.fields)
        })
    
}