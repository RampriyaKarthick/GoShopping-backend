class APIFeatures{
    constructor(query, queryString){
        this.query = query;
        this.queryStr = queryString;
    }
    search(){
        let keyword = this.queryStr.keyword ? {
            name: {
                $regex : this.queryStr.keyword,
                $options: 'i'
            }
        }: {};
        this .query.find({...keyword})
        return this
    }
}

 module.exports = APIFeatures