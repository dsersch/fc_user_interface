const Airtable = require('airtable')
const base = Airtable.base(process.env.BASE_ID);

exports.findAllDeals = (req, res) => {
    base('Submitted Deals').select({view: 'Grid view'}).all().then((records) => {
        let deals = []
        records.forEach((record) => {
            deals.push(record.fields)
        })
        res.json(deals)
    })
}

exports.findDealsByPodMemberId = (req, res) => {
    base('Submitted Deals').select({view: 'Grid view'}).all().then((records) => {
        const podDeals = records.filter((record) => {
           return record.fields['Pod Members'].includes(req.params.id)
        })
        res.json(podDeals)
    })
}