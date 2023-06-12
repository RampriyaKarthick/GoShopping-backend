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
    filter() {
        const queryStrCopy = { ...this.queryStr };
        const removeFields = ['keyword', 'limit', 'page'];
    
        removeFields.forEach((field) => delete queryStrCopy[field]);
    
        this.query = this.query.find(queryStrCopy);
        return this;
      }
    }

 module.exports = APIFeatures